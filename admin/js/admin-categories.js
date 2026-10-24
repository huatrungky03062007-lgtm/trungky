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

function loadCategories() {
    let data = localStorage.getItem("categories");
    if (data) {
        categories = JSON.parse(data);
    } else {
        categories = [...defaultCategories];
        localStorage.setItem("categories", JSON.stringify(categories));
    }
}

function renderCategories() {
    let tbody = document.getElementById("categoryTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    categories.forEach(function(cat) {
        let statusText = cat.isHidden ? "Đang ẩn" : "Đang hiện";
        let statusColor = cat.isHidden ? "red" : "green";

        let tr = `
            <tr>
                <td>${cat.categoryCode}</td>
                <td>${cat.name}</td>
                <td>${cat.profitMargin}%</td>
                <td style="color: ${statusColor}; font-weight: bold;">${statusText}</td>
                <td>
                    <button class="btn-action btn-edit" onclick="openEditModal('${cat.categoryCode}')">Sửa</button>
                    <button class="btn-action" style="background-color: #64748b;" onclick="toggleCategoryStatus('${cat.categoryCode}')">${cat.isHidden ? 'Hiện' : 'Ẩn'}</button>
                    <button class="btn-action btn-delete" onclick="deleteCategory('${cat.categoryCode}')">Xóa</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += tr;
    });
}

document.getElementById("btnAddCategory").addEventListener("click", function() {
    isEditMode = false;
    currentEditCode = "";
    document.getElementById("modalTitle").innerText = "Thêm Loại Sản Phẩm Mới";

    document.getElementById("catCodeInput").value = "";
    document.getElementById("catCodeInput").disabled = false;
    document.getElementById("catNameInput").value = "";
    document.getElementById("catProfitInput").value = "";
    document.getElementById("catStatusInput").value = "false";

    document.getElementById("categoryModal").style.display = "flex";
});

document.getElementById("btnCloseModal").addEventListener("click", function() {
    document.getElementById("categoryModal").style.display = "none";
});

document.getElementById("btnSaveCategory").addEventListener("click", function() {
    let code = document.getElementById("catCodeInput").value.trim();
    let name = document.getElementById("catNameInput").value.trim();
    let profit = document.getElementById("catProfitInput").value.trim();
    let isHidden = document.getElementById("catStatusInput").value === "true";

    if (code === "" || name === "" || profit === "") {
        alert("Vui lòng nhập đầy đủ các thông tin!");
        return;
    }

    if (isEditMode) {
        let catIndex = categories.findIndex(c => c.categoryCode === currentEditCode);
        if (catIndex !== -1) {
            categories[catIndex].name = name;
            categories[catIndex].profitMargin = parseInt(profit);
            categories[catIndex].isHidden = isHidden;

            let pData = localStorage.getItem("products");
            if (pData) {
                let products = JSON.parse(pData);
                products.forEach(p => {
                    if (p.categoryCode === currentEditCode && p.importPrice) {
                        p.sellingPrice = Math.round(p.importPrice * (1 + parseInt(profit) / 100) / 1000) * 1000;
                    }
                });
                localStorage.setItem("products", JSON.stringify(products));
            }
        }
    } else {
        let checkExist = categories.find(c => c.categoryCode === code);
        if (checkExist) {
            alert("Mã loại sản phẩm đã tồn tại!");
            return;
        }

        let newCat = {
            categoryCode: code,
            name: name,
            profitMargin: parseInt(profit),
            isHidden: isHidden
        };
        categories.push(newCat);
    }

    localStorage.setItem("categories", JSON.stringify(categories));
    renderCategories();
    document.getElementById("categoryModal").style.display = "none";
});

window.openEditModal = function(code) {
    isEditMode = true;
    currentEditCode = code;
    document.getElementById("modalTitle").innerText = "Sửa Loại Sản Phẩm";

    let cat = categories.find(c => c.categoryCode === code);
    if (cat) {
        document.getElementById("catCodeInput").value = cat.categoryCode;
        document.getElementById("catCodeInput").disabled = true;
        document.getElementById("catNameInput").value = cat.name;
        document.getElementById("catProfitInput").value = cat.profitMargin;
        document.getElementById("catStatusInput").value = cat.isHidden.toString();

        document.getElementById("categoryModal").style.display = "flex";
    }
};

window.deleteCategory = function(code) {
    if (confirm("Bạn có chắc chắn muốn xóa loại sản phẩm này?")) {
        categories = categories.filter(c => c.categoryCode !== code);
        localStorage.setItem("categories", JSON.stringify(categories));
        renderCategories();
    }
};
window.toggleCategoryStatus = function(code) {
    let cat = categories.find(c => c.categoryCode === code);
    if (cat) {
        cat.isHidden = !cat.isHidden;
        localStorage.setItem("categories", JSON.stringify(categories));
        renderCategories();
    }
};

loadCategories();
renderCategories();
