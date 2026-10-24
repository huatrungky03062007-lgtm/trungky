const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const products = JSON.parse(localStorage.getItem("products")) || [];
const categories = JSON.parse(localStorage.getItem("categories")) || [];

const currentProduct = products.find(p => p.productCode === productId);
let currentGalleryImages = [];
let currentGalleryIndex = 0;
const staticGalleries = window.SPORTMAX_GALLERIES || {};

function getProductDisplayPrice(product) {
    return Number(product.salePrice || product.price || product.sellingPrice || product.importPrice || 0);
}

// Thuật toán đảm bảo LUÔN CÓ ĐỦ 4 ẢNH THUMBNAIL CHO MỌI SẢN PHẨM
function buildFourGalleryImages(product) {
    const normalizedImage = (product.image || "").replace(/&text=[^&]*/g, "").trim();
    const staticGallery = Array.isArray(staticGalleries[product.sourceUrl])
        ? staticGalleries[product.sourceUrl]
        : [];
    const storedGallery = Array.isArray(product.images) ? product.images : [];

    let pool = [...storedGallery, ...staticGallery, normalizedImage]
        .map(img => (img || "").replace(/&text=[^&]*/g, "").trim())
        .filter(Boolean);

    let uniqueImages = [...new Set(pool)];

    // Nếu dữ liệu gốc ít hơn 4 ảnh, mượn thêm ảnh từ các sản phẩm cùng danh mục để bù đủ 4 ảnh nhỏ
    if (uniqueImages.length < 4) {
        const sameCategoryProducts = products.filter(p =>
            p.categoryCode === product.categoryCode &&
            p.productCode !== product.productCode &&
            !p.isHidden &&
            p.image
        );
        for (let item of sameCategoryProducts) {
            if (uniqueImages.length >= 4) break;
            if (item.image && !uniqueImages.includes(item.image)) {
                uniqueImages.push(item.image);
            }
        }
    }

    const fallbackImg = uniqueImages[0] || "https://via.placeholder.com/600x600?text=SPORT+MAX";
    while (uniqueImages.length < 4) {
        uniqueImages.push(fallbackImg);
    }

    return uniqueImages.slice(0, 4);
}

if (currentProduct) {
    const fallbackImage = currentProduct.fallbackImage || "https://via.placeholder.com/600x600?text=SPORT+MAX";
    currentGalleryImages = buildFourGalleryImages(currentProduct);

    let cat = categories.find(c => c.categoryCode === currentProduct.categoryCode);
    let catName = cat ? cat.name : "Đồ thể thao";
    let brandName = getBrandName(currentProduct) || "SportMax";

    if (document.getElementById("detailName")) document.getElementById("detailName").innerText = currentProduct.name;
    if (document.getElementById("detailBreadcrumbName")) document.getElementById("detailBreadcrumbName").innerText = ` / ${currentProduct.name}`;
    if (document.getElementById("detailCode")) document.getElementById("detailCode").innerText = currentProduct.productCode;
    if (document.getElementById("detailCategory")) document.getElementById("detailCategory").innerText = catName;
    if (document.getElementById("detailBrand")) document.getElementById("detailBrand").innerText = brandName;

    const stockEl = document.getElementById("detailStock");
    const stockCount = currentProduct.stock ?? 50;
    if (stockEl) {
        if (stockCount > 0) {
            stockEl.innerText = `Còn hàng (${stockCount} SP)`;
            stockEl.style.color = "#2e7d32";
        } else {
            stockEl.innerText = "Tạm hết hàng";
            stockEl.style.color = "#e0685f";
        }
    }

    const salePrice = getProductDisplayPrice(currentProduct);
    const hasDiscount = currentProduct.originalPrice && Number(currentProduct.originalPrice) > salePrice;
    document.getElementById("detailPrice").innerHTML =
        salePrice.toLocaleString('vi-VN') + " ₫" +
        (hasDiscount
            ? `<span class="original-price">Giá niêm yết: ${Number(currentProduct.originalPrice).toLocaleString('vi-VN')} ₫</span>`
            : "");

    document.getElementById("detailDescText").innerText = currentProduct.description || "Sản phẩm thể thao chính hãng phân phối tại SportMax.";
    const specificationBox = document.getElementById("detailSpecifications");
    const specificationItems = String(currentProduct.specifications || "").split("|").map(item => item.trim()).filter(Boolean);

    specificationBox.innerHTML = specificationItems.length
        ? `<h3>Thông số kỹ thuật</h3><ul>${specificationItems.map(item => `<li><i class="fa-solid fa-check" style="color: #3e93d4; margin-right: 8px;"></i>${item}</li>`).join("")}</ul>`
        : "<p>Đang cập nhật thông số...</p>";

    const sourceElement = document.getElementById("detailSource");
    if (sourceElement) {
        sourceElement.innerHTML = currentProduct.sourceUrl
            ? `Nguồn tham khảo sản phẩm chính hãng: <a href="${currentProduct.sourceUrl}" target="_blank" rel="noopener noreferrer">${currentProduct.sourceUrl}</a>`
            : "";
    }

    const detailImage = document.getElementById("detailImage");
    detailImage.src = currentGalleryImages[0] || fallbackImage;
    detailImage.onerror = () => { detailImage.src = fallbackImage; };

    renderGallery();
    updateGalleryIndicator();
    renderProductOptions(currentProduct);
    setupCartButtons(currentProduct);
    renderRelatedProducts(currentProduct);

    document.querySelectorAll("[data-detail-tab]").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll("[data-detail-tab]").forEach(item => item.classList.remove("active"));
            document.querySelectorAll("[data-detail-panel]").forEach(panel => panel.classList.remove("active"));
            tab.classList.add("active");
            document.querySelector(`[data-detail-panel="${tab.dataset.detailTab}"]`).classList.add("active");
        });
    });
} else {
    document.querySelector(".product-detail-wrapper").innerHTML = "<h2 style='text-align:center; width:100%; padding: 40px 0;'>Sản phẩm không tồn tại!</h2>";
}

function renderGallery() {
    const detailImage = document.getElementById("detailImage");
    const thumbnailList = document.getElementById("thumbnailList");
    const fallbackImage = (currentProduct && currentProduct.fallbackImage) || "https://via.placeholder.com/600x600?text=SPORT+MAX";

    detailImage.src = currentGalleryImages[currentGalleryIndex] || fallbackImage;
    thumbnailList.innerHTML = currentGalleryImages.map((image, index) => `
        <img class="thumb${index === currentGalleryIndex ? " active" : ""}" src="${image}" alt="${currentProduct.name} - ảnh ${index + 1}" onerror="this.src='${fallbackImage}'" onclick="changeImage(${index})">
    `).join("");
}

function renderProductOptions(product) {
    const options = document.getElementById("productOptions");
    if (!options) return;

    const lowerName = String(product.name || "").toLowerCase();
    const isBall = /bóng rổ|bóng đá|bóng chuyền|quả bóng/.test(lowerName) && !lowerName.includes("giày") && !lowerName.includes("áo") && !lowerName.includes("vợt") && !lowerName.includes("túi");
    const isShoes = product.categoryCode === "CAT02" || lowerName.includes("giày");
    const isApparel = ["CAT03", "CAT04", "CAT05"].includes(product.categoryCode) || /áo|quần|váy/.test(lowerName);
    const isTableTennisRacket = lowerName.includes("vợt bóng bàn") || lowerName.includes("cốt vợt");
    const isPickleballRacket = lowerName.includes("pickleball") && lowerName.includes("vợt");
    const isTennisRacket = lowerName.includes("vợt tennis");
    const isBadmintonRacket = (product.categoryCode === "CAT01" && !isBall && !isTableTennisRacket && !isPickleballRacket && !isTennisRacket) || lowerName.includes("vợt cầu lông");

    const colorMatch = product.name.match(/(?:-|–)\s*([^|-]+?)(?:\s+Chính Hãng)?$/i);
    const color = colorMatch && /trắng|đen|đỏ|xanh|tím|hồng|cam|navy|bích|mint|vàng|xám|bạc/i.test(colorMatch[1]) ? colorMatch[1].trim() : "";

    const productVariants = findProductVariants(product);
    let html = `
        <div class="option-group">
            <label>Màu sắc / Phiên bản</label>
            <select style="background: #ffffff; color: #22303f;" id="productVariantSelect">
                ${productVariants.length > 1
                    ? productVariants.map(variant => `<option value="${variant.productCode}" ${variant.productCode === product.productCode ? "selected" : ""}>${getVariantLabel(variant)}</option>`).join("")
                    : `<option selected>${color || "Tiêu chuẩn chính hãng"}</option>`
                }
            </select>
        </div>
    `;

    // 1. Phân loại BÓNG (Bóng rổ, bóng đá, bóng chuyền)
    if (isBall) {
        const isBasketball = lowerName.includes("bóng rổ");
        html += `
            <div class="option-group">
                <label>Kích cỡ bóng (Size)</label>
                <select id="selectSize" style="background: #ffffff; color: #22303f;">
                    ${isBasketball
                        ? `<option value="Size 7 (Nam tiêu chuẩn)" selected>Size 7 (Tiêu chuẩn Nam)</option>
                           <option value="Size 6 (Nữ / Thiếu niên)">Size 6 (Tiêu chuẩn Nữ)</option>`
                        : `<option value="Size 5 (Tiêu chuẩn thi đấu)" selected>Size 5 (Tiêu chuẩn thi đấu)</option>
                           <option value="Size 4 (Tập luyện / Sân nhỏ)">Size 4 (Tập luyện / Sân nhỏ)</option>`
                    }
                </select>
            </div>
            <div class="option-group">
                <label>Mặt sân phù hợp</label>
                <select id="selectSpec" style="background: #ffffff; color: #22303f;">
                    <option value="Indoor & Outdoor (Đa năng)" selected>Indoor & Outdoor (Đa năng)</option>
                    <option value="Chuyên sàn thi đấu (Indoor)">Chuyên sàn thi đấu (Indoor)</option>
                </select>
            </div>
        `;
    }
    // 2. Phân loại VỢT BÓNG BÀN / CỐT VỢT
    else if (isTableTennisRacket) {
        html += `
            <div class="option-group">
                <label>Kiểu cán cầm (Handle)</label>
                <select id="selectSize" style="background: #ffffff; color: #22303f;">
                    <option value="Cán FL (Cán loe phổ biến)" selected>Cán FL (Cán loe phổ biến)</option>
                    <option value="Cán ST (Cán thẳng)">Cán ST (Cán thẳng)</option>
                </select>
            </div>
            <div class="option-group">
                <label>Tùy chọn dán mặt vợt</label>
                <select id="selectSpec" style="background: #ffffff; color: #22303f;">
                    <option value="Tiêu chuẩn nhà sản xuất" selected>Tiêu chuẩn nhà sản xuất</option>
                    <option value="Cắt dán sẵn viền bảo vệ">Cắt dán sẵn kèm viền bảo vệ</option>
                </select>
            </div>
        `;
    }
    // 3. Phân loại VỢT PICKLEBALL
    else if (isPickleballRacket) {
        html += `
            <div class="option-group">
                <label>Độ dày lõi vợt (Core)</label>
                <select id="selectSize" style="background: #ffffff; color: #22303f;">
                    <option value="16mm (Control - Kiểm soát)" selected>16mm (Control - Kiểm soát)</option>
                    <option value="14mm (Power - Tấn công)">14mm (Power - Tấn công)</option>
                </select>
            </div>
            <div class="option-group">
                <label>Phụ kiện tặng kèm</label>
                <select id="selectSpec" style="background: #ffffff; color: #22303f;">
                    <option value="Tặng quấn cán + Dán viền" selected>Tặng quấn cán + Dán viền</option>
                    <option value="Nguyên bản chính hãng">Nguyên bản chính hãng</option>
                </select>
            </div>
        `;
    }
    // 4. Phân loại VỢT TENNIS
    else if (isTennisRacket) {
        html += `
            <div class="option-group">
                <label>Kích cỡ cán vợt (Grip Size)</label>
                <select id="selectSize" style="background: #ffffff; color: #22303f;">
                    <option value="Grip L2 (4 1/4 inch)" selected>Grip L2 (4 1/4 inch - Chuẩn Châu Á)</option>
                    <option value="Grip L3 (4 3/8 inch)">Grip L3 (4 3/8 inch)</option>
                </select>
            </div>
            <div class="option-group">
                <label>Mức căng dây (LBS)</label>
                <select id="selectSpec" style="background: #ffffff; color: #22303f;">
                    <option value="Căng 50 LBS (22.5kg)" selected>Căng 50 LBS (22.5kg)</option>
                    <option value="Căng 52 LBS (23.5kg)">Căng 52 LBS (23.5kg)</option>
                    <option value="Khung chưa đan dây">Khung chưa đan dây</option>
                </select>
            </div>
        `;
    }
    // 5. Phân loại GIÀY THỂ THAO
    else if (isShoes) {
        html += `
            <div class="option-group">
                <label>Kích cỡ giày (Size)</label>
                <select id="selectSize" style="background: #ffffff; color: #22303f;">
                    <option value="Size 38">Size 38</option>
                    <option value="Size 39">Size 39</option>
                    <option value="Size 40" selected>Size 40</option>
                    <option value="Size 41">Size 41</option>
                    <option value="Size 42">Size 42</option>
                    <option value="Size 43">Size 43</option>
                    <option value="Size 44">Size 44</option>
                </select>
            </div>
            <div class="option-group">
                <label>Form giày</label>
                <select id="selectSpec" style="background: #ffffff; color: #22303f;">
                    <option value="Tiêu chuẩn (Standard)" selected>Tiêu chuẩn (Standard)</option>
                    <option value="Form Wide (Chân bè)">Form Wide (Chân bè)</option>
                </select>
            </div>
        `;
    }
    // 6. Phân loại QUẦN ÁO THỂ THAO
    else if (isApparel) {
        html += `
            <div class="option-group">
                <label>Kích cỡ quần áo (Size)</label>
                <select id="selectSize" style="background: #ffffff; color: #22303f;">
                    <option value="Size S">Size S (45 - 53kg)</option>
                    <option value="Size M" selected>Size M (54 - 62kg)</option>
                    <option value="Size L">Size L (63 - 70kg)</option>
                    <option value="Size XL">Size XL (71 - 78kg)</option>
                    <option value="Size XXL">Size XXL (79 - 86kg)</option>
                </select>
            </div>
            <div class="option-group">
                <label>Kiểu dáng</label>
                <select id="selectSpec" style="background: #ffffff; color: #22303f;">
                    <option value="Regular Fit (Tiêu chuẩn)" selected>Regular Fit (Tiêu chuẩn)</option>
                    <option value="Slim-Fit (Ôm nhẹ)">Slim-Fit (Ôm nhẹ)</option>
                </select>
            </div>
        `;
    }
    // 7. Phân loại VỢT CẦU LÔNG
    else if (isBadmintonRacket) {
        html += `
            <div class="option-group">
                <label>Trọng lượng (U)</label>
                <select id="selectSize" style="background: #ffffff; color: #22303f;">
                    <option value="3U (85-89g)">3U (85 - 89g)</option>
                    <option value="4U (80-84g)" selected>4U (80 - 84g)</option>
                    <option value="5U (<80g)">5U (Siêu nhẹ)</option>
                </select>
            </div>
            <div class="option-group">
                <label>Chu vi cán & Mức căng</label>
                <select id="selectSpec" style="background: #ffffff; color: #22303f;">
                    <option value="Cán G5 - Căng 10.5kg" selected>Cán G5 - Căng 10.5kg</option>
                    <option value="Cán G5 - Căng 11kg">Cán G5 - Căng 11kg</option>
                    <option value="Cán G6 - Khung chưa đan">Cán G6 - Khung chưa đan</option>
                </select>
            </div>
        `;
    }
    // 8. CÁC PHỤ KIỆN & BALO / TÚI
    else {
        html += `
            <div class="option-group">
                <label>Quy cách đóng gói</label>
                <select id="selectSize" style="background: #ffffff; color: #22303f;">
                    <option value="Tiêu chuẩn chính hãng" selected>Tiêu chuẩn chính hãng</option>
                </select>
            </div>
        `;
    }

    options.innerHTML = html;

    const variantSelect = document.getElementById("productVariantSelect");
    if (variantSelect && productVariants.length > 1) {
        variantSelect.addEventListener("change", event => {
            window.location.href = `product-detail.html?id=${encodeURIComponent(event.target.value)}`;
        });
    }
}

function renderRelatedProducts(product) {
    const detailPage = document.querySelector(".product-detail-page");
    if (!detailPage) return;

    const related = products
        .filter(p => !p.isHidden && p.categoryCode === product.categoryCode && p.productCode !== product.productCode)
        .slice(0, 4);

    if (related.length === 0) return;

    const section = document.createElement("section");
    section.className = "detail-content-card";
    section.style.marginTop = "24px";
    section.innerHTML = `
        <h3 style="margin-top: 0; margin-bottom: 18px; color: #22303f; border-bottom: 2px solid #3e93d4; display: inline-block; padding-bottom: 6px;">
            SẢN PHẨM CÙNG DANH MỤC
        </h3>
        <div class="product-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));">
            ${related.map(item => {
                const price = getProductDisplayPrice(item).toLocaleString("vi-VN");
                return `
                    <div class="product-card">
                        <a href="product-detail.html?id=${encodeURIComponent(item.productCode)}" style="text-decoration: none; color: inherit;">
                            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/200?text=SportMax'">
                            <h4>${item.name}</h4>
                        </a>
                        <div class="product-price">${price} ₫</div>
                        <button class="btn-primary" onclick="window.location.href='product-detail.html?id=${encodeURIComponent(item.productCode)}'">Xem chi tiết</button>
                    </div>
                `;
            }).join("")}
        </div>
    `;
    detailPage.appendChild(section);
}

function getBrandName(product) {
    const knownBrands = ["Yonex", "Victor", "Lining", "VS", "VNB", "Kawasaki", "Apacs", "Mizuno", "Forza", "Kason", "Donex", "Taro", "SFD", "Alien Armour", "Asics", "Kumpoo", "Kamito", "Beyono", "Felet", "Hundred", "Molten", "Mikasa", "Spalding", "Babolat", "Nike", "Butterfly", "Joola", "Gosen", "Pili", "Lefus", "Promax", "Victec", "Sunbatta"];
    return knownBrands.find(brand => String(product.name).toLowerCase().includes(brand.toLowerCase())) || "";
}

function getProductGroupKey(product) {
    return String(product.name)
        .toLowerCase()
        .replace(/giày cầu lông|vợt cầu lông|áo cầu lông|váy cầu lông|quần cầu lông|balo cầu lông|túi vợt cầu lông|phụ kiện cầu lông|giày thể thao|áo thể thao|quần thể thao|bóng rổ|bóng đá|bóng chuyền/gi, "")
        .replace(/chính hãng|women|slim|wide|men|unisex|nam|nữ|trẻ em/gi, "")
        .replace(/[-/,().]/g, " ")
        .replace(/\b(trắng|đen|đỏ|xanh|navy|tím|hồng|cam|vàng|bạc|silver|blue|gray|grey|grayish|beige|green|white|black)\b/gi, "")
        .replace(/\s+/g, " ")
        .trim();
}

function findProductVariants(product) {
    const key = getProductGroupKey(product);
    const brand = getBrandName(product);
    if (!key) return [product];
    return products.filter(candidate =>
        !candidate.isHidden &&
        candidate.categoryCode === product.categoryCode &&
        getBrandName(candidate) === brand &&
        getProductGroupKey(candidate) === key
    );
}

function getVariantLabel(product) {
    return String(product.name)
        .replace(/^.*?\s(?:Yonex|Victor|Lining|VS|VNB|Kawasaki|Apacs|Mizuno|Forza|Kason|Donex|Taro|SFD|Alien Armour|Asics|Kumpoo|Kamito|Beyono|Felet|Hundred|Molten|Mikasa|Spalding|Babolat|Nike|Butterfly|Joola)\s*/i, "")
        .replace(/\s+Chính Hãng$/i, "")
        .trim() || product.name;
}

function changeImage(index) {
    if (index >= 0 && index < currentGalleryImages.length) {
        currentGalleryIndex = index;
        renderCurrentGalleryImage();
    }
}

function navigateGallery(direction) {
    if (currentGalleryImages.length < 2) return;
    currentGalleryIndex = (currentGalleryIndex + direction + currentGalleryImages.length) % currentGalleryImages.length;
    renderCurrentGalleryImage();
}

function renderCurrentGalleryImage() {
    renderGallery();
    document.querySelectorAll(".thumb").forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentGalleryIndex);
    });
    updateGalleryIndicator();
}

function updateGalleryIndicator() {
    const total = currentGalleryImages.length || 1;
    const counter = document.getElementById("galleryCounter");
    if (counter) counter.textContent = `${currentGalleryIndex + 1} / ${total}`;
    document.querySelectorAll(".gallery-arrow").forEach(btn => btn.hidden = total < 2);
}

function increaseQty() {
    let input = document.getElementById("qtyInput");
    input.value = parseInt(input.value) + 1;
}

function decreaseQty() {
    let input = document.getElementById("qtyInput");
    if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
}

function setupCartButtons(product) {
    const buyNowBtn = document.querySelector(".btn-buy-now-vnb");
    const addCartBtn = document.querySelector(".btn-add-cart-vnb");

    function addToLocalStorageCart(redirect) {
        const qty = Math.max(1, parseInt(document.getElementById("qtyInput").value) || 1);
        const sizeVal = document.getElementById("selectSize") ? document.getElementById("selectSize").value : "";
        const specVal = document.getElementById("selectSpec") ? document.getElementById("selectSpec").value : "";
        const selectedOptionText = [sizeVal, specVal].filter(Boolean).join(" - ");

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find(item =>
            (item.productCode === product.productCode || item.id === product.productCode) &&
            item.selectedOption === selectedOptionText
        );

        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || existingItem.qty || 1) + qty;
            existingItem.qty = existingItem.quantity;
        } else {
            cart.push({
                id: product.productCode,
                productCode: product.productCode,
                name: selectedOptionText ? `${product.name} (${selectedOptionText})` : product.name,
                price: getProductDisplayPrice(product),
                image: currentGalleryImages[0] || product.image,
                selectedOption: selectedOptionText,
                quantity: qty,
                qty: qty
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        if (typeof updateCartHeaderBadge === "function") updateCartHeaderBadge();

        if (redirect) {
            window.location.href = "cart.html";
        } else if (typeof showSportMaxToast === "function") {
            showSportMaxToast(`Đã thêm ${qty} "${product.name}"${selectedOptionText ? ` [${selectedOptionText}]` : ""} vào giỏ hàng!`);
        } else {
            alert(`Đã thêm ${qty} sản phẩm "${product.name}"${selectedOptionText ? ` [${selectedOptionText}]` : ""} vào giỏ hàng!`);
        }
    }

    if (buyNowBtn) buyNowBtn.addEventListener("click", () => addToLocalStorageCart(true));
    if (addCartBtn) addCartBtn.addEventListener("click", () => addToLocalStorageCart(false));
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof updateCartHeaderBadge === "function") updateCartHeaderBadge();

    const activeCats = categories.filter(cat =>
        !cat.isHidden && products.some(p => p.categoryCode === cat.categoryCode && !p.isHidden)
    );

    const megaMenu = document.getElementById("dynamicMegaMenu");
    if (megaMenu && activeCats.length > 0) {
        megaMenu.innerHTML = activeCats.map(cat => `
            <div class="mega-column">
                <h4>${cat.name}</h4>
                <ul>
                    <li><a href="products.html?cat=${encodeURIComponent(cat.categoryCode)}">Tất cả ${cat.name}</a></li>
                </ul>
            </div>
        `).join("");
    }

    const sidebarList = document.getElementById("sidebarCategoryList");
    if (sidebarList && activeCats.length > 0) {
        sidebarList.innerHTML = activeCats.map(cat => `
            <li>
                <a href="products.html?cat=${encodeURIComponent(cat.categoryCode)}">
                    <span>${cat.name}</span>
                    <i class="fa-solid fa-angle-right plus-icon"></i>
                </a>
            </li>
        `).join("");
    }

    const searchInput = document.getElementById("searchInput");
    const btnSearch = document.getElementById("btnSearch");
    function triggerDetailSearch() {
        const kw = searchInput ? searchInput.value.trim() : "";
        window.location.href = `products.html?search=${encodeURIComponent(kw)}`;
    }
    if (btnSearch) btnSearch.addEventListener("click", triggerDetailSearch);
    if (searchInput) {
        searchInput.addEventListener("keyup", e => {
            if (e.key === "Enter") triggerDetailSearch();
        });
    }
});
