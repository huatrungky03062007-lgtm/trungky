let products = [];
let categories = [];
let isEditMode = false;
let currentEditCode = "";

const defaultCategories = [
    { categoryCode: "CAT01", name: "Vợt & Dụng Cụ", profitMargin: 20, isHidden: false },
    { categoryCode: "CAT02", name: "Giày Thể Thao", profitMargin: 25, isHidden: false },
    { categoryCode: "CAT03", name: "Áo Thể Thao", profitMargin: 30, isHidden: false },
    { categoryCode: "CAT04", name: "Váy Thể Thao", profitMargin: 30, isHidden: false },
    { categoryCode: "CAT05", name: "Quần Thể Thao", profitMargin: 30, isHidden: false },
    { categoryCode: "CAT06", name: "Balo Thể Thao", profitMargin: 25, isHidden: false },
    { categoryCode: "CAT07", name: "Túi Thể Thao", profitMargin: 25, isHidden: false },
    { categoryCode: "CAT08", name: "Phụ Kiện Thể Thao", profitMargin: 40, isHidden: false }
];

function loadData() {
    let pData = localStorage.getItem("products");
    let cData = localStorage.getItem("categories");

    products = pData ? JSON.parse(pData) : [];
    if (cData) {
        categories = JSON.parse(cData);
    } else {
        categories = [...defaultCategories];
        localStorage.setItem("categories", JSON.stringify(categories));
    }
}

function populateCategorySelect() {
    let select = document.getElementById("proCategoryInput");
    if (!select) return;
    select.innerHTML = "";
    categories.forEach(cat => {
        select.innerHTML += `<option value="${cat.categoryCode}">${cat.name}</option>`;
    });
}

function getCategoryName(code) {
    let cat = categories.find(c => c.categoryCode === code);
    return cat ? cat.name : "Không xác định";
}

function renderProducts(filterKeyword = "") {
    let tbody = document.getElementById("productTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const kw = String(filterKeyword || "").trim().toLowerCase();
    const list = kw
        ? products.filter(p =>
            String(p.productCode || "").toLowerCase().includes(kw) ||
            String(p.name || "").toLowerCase().includes(kw) ||
            getCategoryName(p.categoryCode).toLowerCase().includes(kw)
        )
        : products;

    list.forEach(p => {
        let statusText = p.isHidden ? "Đang ẩn" : "Đang hiện";
        let statusColor = p.isHidden ? "#e0685f" : "#2e7d32";
        let displayPrice = Number(p.salePrice || p.price || p.sellingPrice || p.importPrice || 0);
        let formattedPrice = displayPrice.toLocaleString('vi-VN');
        let thumbUrl = p.image || "https://via.placeholder.com/50?text=SP";

        let tr = `
            <tr>
                <td><img src="${thumbUrl}" alt="img" style="width: 50px; height: 50px; object-fit: contain; border-radius: 4px;" onerror="this.src='https://via.placeholder.com/50?text=SP'"></td>
                <td><strong>${p.productCode}</strong></td>
                <td>${p.name}</td>
                <td>${getCategoryName(p.categoryCode)}</td>
                <td style="color: #e0685f; font-weight: 600;">${formattedPrice} đ</td>
                <td>${p.stock ?? 50}</td>
                <td style="color: ${statusColor}; font-weight: bold;">${statusText}</td>
                <td style="white-space: nowrap;">
                    <button class="btn-action btn-edit" onclick="openEditModal('${p.productCode}')">Sửa</button>
                    <button class="btn-action" style="background-color: #64748b;" onclick="toggleProductStatus('${p.productCode}')">${p.isHidden ? 'Hiện' : 'Ẩn'}</button>
                    <button class="btn-action btn-delete" onclick="deleteProduct('${p.productCode}')">Xóa</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += tr;
    });
}

if (document.getElementById("btnAddProduct")) {
    document.getElementById("btnAddProduct").addEventListener("click", function() {
        isEditMode = false;
        currentEditCode = "";
        document.getElementById("modalTitle").innerText = "Thêm Sản Phẩm Mới";

        document.getElementById("proCodeInput").value = "";
        document.getElementById("proCodeInput").disabled = false;
        document.getElementById("proNameInput").value = "";
        document.getElementById("proImageInput").value = "";
        document.getElementById("proPriceInput").value = "";
        document.getElementById("proStockInput").value = "50";
        document.getElementById("proDescInput").value = "";
        document.getElementById("proStatusInput").value = "false";

        document.getElementById("productModal").style.display = "flex";
    });
}

if (document.getElementById("btnCloseModal")) {
    document.getElementById("btnCloseModal").addEventListener("click", function() {
        document.getElementById("productModal").style.display = "none";
    });
}

if (document.getElementById("btnSaveProduct")) {
    document.getElementById("btnSaveProduct").addEventListener("click", function() {
        let code = document.getElementById("proCodeInput").value.trim();
        let name = document.getElementById("proNameInput").value.trim();
        let catCode = document.getElementById("proCategoryInput").value;
        let image = document.getElementById("proImageInput").value.trim();
        let price = document.getElementById("proPriceInput").value;
        let stock = document.getElementById("proStockInput").value;
        let desc = document.getElementById("proDescInput").value.trim();
        let isHidden = document.getElementById("proStatusInput").value === "true";

        if (!code || !name || !price || !stock) {
            alert("Vui lòng điền đầy đủ các thông tin bắt buộc!");
            return;
        }

        let priceNum = parseInt(price);
        let stockNum = parseInt(stock);
        let catObj = categories.find(c => c.categoryCode === catCode);
        let margin = catObj ? catObj.profitMargin : 0;
        let computedSellingPrice = Math.round(priceNum * (1 + margin / 100) / 1000) * 1000;

        let imgArray = image ? image.split(',').map(s => s.trim()).filter(s => s) : [];
        let firstImage = imgArray.length > 0 ? imgArray[0] : "https://via.placeholder.com/200?text=SportMax";

        if (isEditMode) {
            let pIndex = products.findIndex(p => p.productCode === currentEditCode);
            if (pIndex !== -1) {
                products[pIndex].name = name;
                products[pIndex].categoryCode = catCode;
                products[pIndex].image = firstImage;
                products[pIndex].images = imgArray.length > 0 ? imgArray : [firstImage];
                products[pIndex].importPrice = priceNum;
                products[pIndex].salePrice = priceNum;
                products[pIndex].sellingPrice = computedSellingPrice;
                products[pIndex].stock = stockNum;
                products[pIndex].description = desc;
                products[pIndex].isHidden = isHidden;
            }
        } else {
            let checkExist = products.find(p => p.productCode === code);
            if (checkExist) {
                alert("Mã sản phẩm đã tồn tại trong hệ thống!");
                return;
            }

            let newPro = {
                productCode: code,
                name: name,
                categoryCode: catCode,
                image: firstImage,
                images: imgArray.length > 0 ? imgArray : [firstImage],
                importPrice: priceNum,
                sellingPrice: computedSellingPrice,
                salePrice: priceNum,
                originalPrice: null,
                stock: stockNum,
                description: desc,
                profitMarginOverride: 0,
                isHidden: isHidden
            };
            products.unshift(newPro);
        }

        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
        document.getElementById("productModal").style.display = "none";
    });
}

window.openEditModal = function(code) {
    isEditMode = true;
    currentEditCode = code;
    document.getElementById("modalTitle").innerText = "Sửa Thông Tin Sản Phẩm";

    let p = products.find(p => p.productCode === code);
    if (p) {
        document.getElementById("proCodeInput").value = p.productCode;
        document.getElementById("proCodeInput").disabled = true;
        document.getElementById("proNameInput").value = p.name || "";
        document.getElementById("proCategoryInput").value = p.categoryCode;
        document.getElementById("proImageInput").value = p.images && p.images.length > 0 ? p.images.join(', ') : (p.image || "");
        document.getElementById("proPriceInput").value = p.salePrice || p.importPrice || 0;
        document.getElementById("proStockInput").value = p.stock ?? 50;
        document.getElementById("proDescInput").value = p.description || "";
        document.getElementById("proStatusInput").value = Boolean(p.isHidden).toString();

        document.getElementById("productModal").style.display = "flex";
    }
};

window.toggleProductStatus = function(code) {
    let p = products.find(item => item.productCode === code);
    if (p) {
        p.isHidden = !p.isHidden;
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
    }
};

window.deleteProduct = function(code) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        products = products.filter(p => p.productCode !== code);
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
    }
};

loadData();
populateCategorySelect();
renderProducts();
