

const mockCategories = [
    { categoryCode: "CAT01", name: "Vợt & Dụng Cụ", profitMargin: 20, isHidden: false },
    { categoryCode: "CAT02", name: "Giày Thể Thao", profitMargin: 25, isHidden: false },
    { categoryCode: "CAT03", name: "Áo Thể Thao", profitMargin: 30, isHidden: false },
    { categoryCode: "CAT04", name: "Váy Thể Thao", profitMargin: 30, isHidden: false },
    { categoryCode: "CAT05", name: "Quần Thể Thao", profitMargin: 30, isHidden: false },
    { categoryCode: "CAT06", name: "Balo Thể Thao", profitMargin: 25, isHidden: false },
    { categoryCode: "CAT07", name: "Túi Thể Thao", profitMargin: 25, isHidden: false },
    { categoryCode: "CAT08", name: "Phụ Kiện Thể Thao", profitMargin: 40, isHidden: false }
];

const mockProducts = [
    { productCode: "SP01", name: "Vợt cầu lông Yonex", categoryCode: "CAT01", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP02", name: "Vợt cầu lông Victor", categoryCode: "CAT01", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP03", name: "Vợt cầu lông Lining", categoryCode: "CAT01", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP04", name: "Vợt cầu lông VS", categoryCode: "CAT01", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP05", name: "Vợt cầu lông Mizuno", categoryCode: "CAT01", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP06", name: "Vợt cầu lông Apacs", categoryCode: "CAT01", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP07", name: "Vợt cầu lông VNB", categoryCode: "CAT01", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP08", name: "Vợt cầu lông Proace", categoryCode: "CAT01", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP09", name: "Vợt cầu lông Forza", categoryCode: "CAT01", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP10", name: "Vợt cầu lông FlyPower", categoryCode: "CAT01", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },

    { productCode: "SP11", name: "Giày cầu lông Yonex", categoryCode: "CAT02", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP12", name: "Giày cầu lông Victor", categoryCode: "CAT02", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP13", name: "Giày cầu lông Lining", categoryCode: "CAT02", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP14", name: "Giày cầu lông VS", categoryCode: "CAT02", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP15", name: "Giày cầu lông Kawasaki", categoryCode: "CAT02", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP16", name: "Giày cầu lông Mizuno", categoryCode: "CAT02", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP17", name: "Giày cầu lông Kumpoo", categoryCode: "CAT02", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP18", name: "Giày cầu lông Promax", categoryCode: "CAT02", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP19", name: "Giày cầu lông Babolat", categoryCode: "CAT02", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP20", name: "Giày cầu lông Sunbatta", categoryCode: "CAT02", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },

    { productCode: "SP21", name: "Áo cầu lông Yonex", categoryCode: "CAT03", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP22", name: "Áo cầu lông VNB", categoryCode: "CAT03", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP23", name: "Áo cầu lông Kamito", categoryCode: "CAT03", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP24", name: "Áo cầu lông VS", categoryCode: "CAT03", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP25", name: "Áo cầu lông Victor", categoryCode: "CAT03", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP26", name: "Áo cầu lông Lining", categoryCode: "CAT03", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP27", name: "Áo cầu lông DonexPro", categoryCode: "CAT03", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP28", name: "Áo cầu lông Alien Armour", categoryCode: "CAT03", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP29", name: "Áo thể thao SFD", categoryCode: "CAT03", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP30", name: "Áo cầu lông Kawasaki", categoryCode: "CAT03", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },

    { productCode: "SP31", name: "Váy cầu lông Yonex", categoryCode: "CAT04", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP32", name: "Váy cầu lông Victec", categoryCode: "CAT04", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP33", name: "Váy cầu lông Lining", categoryCode: "CAT04", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP34", name: "Váy cầu lông Donex Pro", categoryCode: "CAT04", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP35", name: "Váy cầu lông Victor", categoryCode: "CAT04", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP36", name: "Váy cầu lông Kamito", categoryCode: "CAT04", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP37", name: "Váy cầu lông Taro", categoryCode: "CAT04", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP38", name: "Váy cầu lông Vina Authentic", categoryCode: "CAT04", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },

    { productCode: "SP39", name: "Quần cầu lông Yonex", categoryCode: "CAT05", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP40", name: "Quần cầu lông Victor", categoryCode: "CAT05", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP41", name: "Quần cầu lông Lining", categoryCode: "CAT05", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP42", name: "Quần cầu lông VNB", categoryCode: "CAT05", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP43", name: "Quần cầu lông SFD", categoryCode: "CAT05", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP44", name: "Quần cầu lông Donex Pro", categoryCode: "CAT05", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP45", name: "Quần cầu lông Apacs", categoryCode: "CAT05", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP46", name: "Quần cầu lông Alien Armour", categoryCode: "CAT05", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP47", name: "Quần cầu lông Mizuno", categoryCode: "CAT05", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP48", name: "Quần cầu lông Kawasaki", categoryCode: "CAT05", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },

    { productCode: "SP49", name: "Balo cầu lông Yonex", categoryCode: "CAT06", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP50", name: "Balo cầu lông VS", categoryCode: "CAT06", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP51", name: "Balo cầu lông Victor", categoryCode: "CAT06", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP52", name: "Balo cầu lông Kawasaki", categoryCode: "CAT06", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP53", name: "Balo cầu lông Flypower", categoryCode: "CAT06", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP54", name: "Balo cầu lông Mizuno", categoryCode: "CAT06", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP55", name: "Balo cầu lông VNB", categoryCode: "CAT06", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP56", name: "Balo cầu lông Adonex", categoryCode: "CAT06", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP57", name: "Balo cầu lông Forza", categoryCode: "CAT06", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP58", name: "Balo cầu lông Lining", categoryCode: "CAT06", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },

    { productCode: "SP59", name: "Túi vợt cầu lông Yonex", categoryCode: "CAT07", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP60", name: "Túi đựng giày cầu lông", categoryCode: "CAT07", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP61", name: "Túi vợt cầu lông VS", categoryCode: "CAT07", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP62", name: "Túi vợt cầu lông Victor", categoryCode: "CAT07", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP63", name: "Túi vợt cầu lông Lining", categoryCode: "CAT07", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP64", name: "Túi vợt cầu lông Kason", categoryCode: "CAT07", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP65", name: "Túi vợt cầu lông Kawasaki", categoryCode: "CAT07", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP66", name: "Túi vợt cầu lông Forza", categoryCode: "CAT07", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP67", name: "Túi Vợt Cầu Lông Apacs", categoryCode: "CAT07", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP68", name: "Túi vợt cầu lông Mizuno", categoryCode: "CAT07", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },

    { productCode: "SP69", name: "Vớ Cầu Lông", categoryCode: "CAT08", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP70", name: "Cước đan vợt cầu lông", categoryCode: "CAT08", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP71", name: "Quả cầu lông", categoryCode: "CAT08", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP72", name: "Banh Power Ball", categoryCode: "CAT08", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP73", name: "Bình nước cầu lông", categoryCode: "CAT08", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP74", name: "Băng bó cơ", categoryCode: "CAT08", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP75", name: "Móc khóa cầu lông", categoryCode: "CAT08", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP76", name: "Quấn cán cầu lông", categoryCode: "CAT08", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP77", name: "Lót giày cầu lông", categoryCode: "CAT08", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false },
    { productCode: "SP78", name: "Băng chặn mồ hôi", categoryCode: "CAT08", image: "https://via.placeholder.com/200", importPrice: 0, stock: 50, isHidden: false }
];

const additionalProductNames = {
    CAT01: [
        "Vợt cầu lông Yonex Astrox",
        "Vợt cầu lông Victor Thruster",
        "Vợt cầu lông Lining Axforce",
        "Vợt cầu lông Apacs Z-Ziggler",
        "Vợt cầu lông Forza Precision"
    ],
    CAT02: [
        "Giày cầu lông Yonex Comfort",
        "Giày cầu lông Victor P9200",
        "Giày cầu lông Lining AYTS",
        "Giày cầu lông Kamito",
        "Giày cầu lông Kawasaki K-086"
    ],
    CAT03: [
        "Áo cầu lông Yonex cổ tròn",
        "Áo cầu lông Victor thể thao",
        "Áo cầu lông Lining nam",
        "Áo cầu lông Kamito nữ",
        "Áo cầu lông VNB thi đấu"
    ],
    CAT04: [
        "Váy cầu lông Yonex thể thao",
        "Váy cầu lông Victor nữ",
        "Váy cầu lông Lining cao cấp",
        "Váy cầu lông Kamito nữ",
        "Váy cầu lông Donex Pro nữ",
        "Váy cầu lông thể thao Taro",
        "Váy cầu lông VNB nữ"
    ],
    CAT05: [
        "Quần cầu lông Yonex thể thao",
        "Quần cầu lông Victor nam",
        "Quần cầu lông Lining nam",
        "Quần cầu lông Kamito",
        "Quần cầu lông VNB thi đấu"
    ],
    CAT06: [
        "Balo cầu lông Yonex 2 ngăn",
        "Balo cầu lông Victor cao cấp",
        "Balo cầu lông Lining thể thao",
        "Balo cầu lông Kamito",
        "Balo cầu lông VNB đa năng"
    ],
    CAT07: [
        "Túi vợt cầu lông Yonex 3 ngăn",
        "Túi vợt cầu lông Victor cao cấp",
        "Túi vợt cầu lông Lining thể thao",
        "Túi vợt cầu lông Kamito",
        "Túi vợt cầu lông VNB"
    ],
    CAT08: [
        "Băng cổ tay cầu lông",
        "Băng đầu cầu lông",
        "Khăn thể thao cầu lông",
        "Dây nhảy thể lực",
        "Hộp cầu lông thi đấu"
    ]
};

Object.assign(mockProducts[0], {
    name: "Vợt cầu lông VS YouLong",
    image: "https://cdn.shopvnb.com/uploads/images/bai_viet/vot-cau-long-vs-youlong-1-1727136083.jpg",
    importPrice: 1240000,
    salePrice: 790000,
    originalPrice: 1488000,
    description: "Vợt thiên công, nặng đầu, thân cứng vừa; phù hợp người chơi trình độ trung bình trở lên và yêu thích các pha smash mạnh.",
    specifications: "Độ cứng: Trung bình | Điểm cân bằng: 305 ± 3mm | Chiều dài: 675mm | Trọng lượng: 4U (82 ± 2g) | Sức căng tối đa: 36 LBS",
    sourceUrl: "https://shopvnb.com/vot-cau-long-vs-youlong.html",
    sourceVerified: true
});

Object.assign(mockProducts[1], {
    name: "Vợt cầu lông Victor Ryuga TD/C",
    image: "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-victor-ryuga-td-c-chinh-hang_1748488966.webp",
    importPrice: 1250000,
    salePrice: 1071000,
    originalPrice: 1530000,
    description: "Vợt thiên công, nặng đầu, phù hợp người chơi trình độ trung bình trở lên; bản 3U cần lực cổ tay tốt hơn bản 4U.",
    specifications: "Độ cứng: Cứng (4U), rất cứng (3U) | Điểm cân bằng: khoảng 298mm | Trọng lượng: 3U, 4U | Chiều dài: 675mm | Sức căng: 3U tối đa 30 LBS, 4U tối đa 29 LBS",
    sourceUrl: "https://shopvnb.com/vot-cau-long-victor-ryuga-td-c-chinh-hang.html",
    sourceVerified: true
});

let nextProductNumber = mockProducts.length + 1;
Object.entries(additionalProductNames).forEach(([categoryCode, names]) => {
    names.forEach(name => {
        mockProducts.push({
            productCode: `SP${String(nextProductNumber++).padStart(2, "0")}`,
            name,
            categoryCode,
            image: "https://via.placeholder.com/200",
            importPrice: 0,
            stock: 50,
            isHidden: false
        });
    });
});

const specificProductNames = {
    CAT01: ["VS YouLong", "Victor Ryuga TD/C", "Lining Axforce 75", "VS Brave Sword 12", "Mizuno Fortius 11 Quick", "Apacs Z-Ziggler", "VNB V200", "Proace Sweetspot 1000", "Forza Precision X9", "Flypower Master 900", "Yonex Astrox 88D Pro", "Victor Thruster K 220H", "Lining Windstorm 72", "Apacs Tantrum 200 III", "Forza Aero Power 1088"],
    CAT02: ["Yonex Power Cushion 65Z3", "Victor P9200III", "Lining Ranger Lite", "VS Blade 02", "Kawasaki K-086", "Mizuno Wave Claw Neo", "Kumpoo KH-E Tough", "Promax 860", "Babolat Shadow Tour", "Sunbatta S-220", "Yonex Power Cushion 03", "Victor A362", "Lining AYTS025", "Kamito Velocidad", "Kawasaki K-087"],
    CAT03: ["Yonex 10545EX", "VNB Pro Training", "Kamito Tournament", "VS Dragon Sport", "Victor T-50000", "Lining ATSS123", "DonexPro Premium", "Alien Armour Basic", "SFD DryFit", "Kawasaki K-330", "Yonex 10612EX", "Victor T-80000", "Lining ATSS456", "Kamito Jersey Pro", "VNB Match Shirt"],
    CAT04: ["Yonex 26002EX", "Victec V-301", "Lining APLQ", "Donex Pro Skirt 01", "Victor SK-204", "Kamito KMSK01", "Taro Sport TS01", "Vina Authentic VA01", "Yonex 26003EX", "Lining APLR", "Victor SK-305", "Kamito KMSK02", "Donex Pro Skirt 02", "Taro Sport TS02", "Vina Authentic VA02"],
    CAT05: ["Yonex 15150EX", "Victor R-4299", "Lining AKSP", "VNB Pro Short", "SFD DryFit Short", "Donex Pro Short 01", "Apacs Feather Short", "Alien Armour Active", "Mizuno Game Short", "Kawasaki K-350", "Yonex 15151EX", "Victor R-4300", "Lining AKSR", "Kamito Training Short", "VNB Match Short"],
    CAT06: ["Yonex BAG9831EX", "VS Dragon Backpack", "Victor BR9211", "Kawasaki KBB-01", "Flypower Warrior", "Mizuno 73JD4X01", "VNB Sport Backpack", "Adonex Pro Bag", "Forza Tour Backpack", "Lining ABSS", "Yonex BAG9832EX", "Victor BR9212", "Kawasaki KBB-02", "Flypower Fighter", "VNB Tournament Backpack"],
    CAT07: ["Yonex BAG2229 3 ngăn", "Yonex BAG2193 túi giày", "VS Dragon 2 ngăn", "Victor BR9213", "Lining ABJR", "Kason KB-01", "Kawasaki KBT-01", "Forza Tour 6R", "Apacs Pro Bag", "Mizuno 73JD4X02", "Yonex BAG2228", "Victor BR9214", "Lining ABJS", "Forza Tour 3R", "VNB Tournament Bag"],
    CAT08: ["Yonex 19120EX", "Yonex BG65", "Yonex AS-30", "Power Ball tập cổ tay", "Yonex AC588EX", "VNB băng bó cơ", "Yonex AC-T01", "Yonex AC102EX", "Yonex AC195EX", "Yonex AC259EX", "Victor SK229", "Lining No.1", "Victor Gold Champion", "VNB Sport Bottle", "VNB Comfort Grip"]
};

const vnbCatalog = {
    CAT01: [
        ["VNB V88 Xanh", 499000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v88-xanh-chinh-hang-1.webp", "https://shopvnb.com/vot-cau-long-vnb-v88-xanh-chinh-hang.html"],
        ["VNB V88 Cam", 499000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v88-3.webp", "https://shopvnb.com/vot-cau-long-vnb-v88.html"],
        ["VNB Carbon Training 150g", 590000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-carbon-training-150g-5.webp", "https://shopvnb.com/vot-cau-long-vnb-carbon-training-150g.html"],
        ["Victor DriveX 12 O Zheng Siwei", 3374000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-drivex-12-o-zheng-siwei-chinh-hang-1762198904_1787270866.jpg", "https://shopvnb.com/vot-cau-long-victor-drivex-12-o-zheng-siwei.html"],
        ["VNB TC88B", 799000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-tc88b-1.webp", "https://shopvnb.com/vot-cau-long-vnb-tc88b.html"],
        ["VNB TC88C", 799000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-tc88c-1.webp", "https://shopvnb.com/vot-cau-long-vnb-tc88c.html"],
        ["VNB V200i Hồng", 529000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v200i-hong-3.webp", "https://shopvnb.com/vot-cau-long-vnb-v200i-hong.html"],
        ["VNB V200 Đỏ", 529000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v200-do-2.webp", "https://shopvnb.com/vot-cau-long-vnb-v200-do.html"],
        ["VNB V200 Xanh", 529000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v200-xanh-2.webp", "https://shopvnb.com/vot-cau-long-vnb-v200-xanh.html"],
        ["Hundred Z-Tronic 100 Ti", 2889000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-hundred-z-tronic-100-ti_1790017135.webp", "https://shopvnb.com/vot-cau-long-hundred-z-tronic-100-ti.html"],
        ["Kumpoo Poping Candy trẻ em", 850000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/cap-vot-cau-long-kumpoo-tre-em-poping-candy-chinh-hang_1788144288.webp", "https://shopvnb.com/cap-vot-cau-long-kumpoo-tre-em-poping-candy-chinh-hang.html"],
        ["Felet Arcana", 1071000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-felet-arcana_1787887787.webp", "https://shopvnb.com/vot-cau-long-felet-arcana.html"],
        ["Victor Auraspeed 3200", 999000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-victor-auraspeed-3200_1787884904.webp", "https://shopvnb.com/vot-cau-long-victor-auraspeed-3200.html"],
        ["Taro Warrior's Force VTR01-2601", 560000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-taro-warrior-s-force-vtr01-2601_1787530901.webp", "https://shopvnb.com/vot-cau-long-taro-warrior-s-force-vtr01-2601-chinh-hang.html"],
        ["Taro Blaze Hunter VTR01-2602", 524000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-taro-blaze-hunter-vtr01-2602_1787530914.webp", "https://shopvnb.com/vot-cau-long-taro-blaze-hunter-vtr01-2602-chinh-hang.html"]
    ],
    CAT02: [
        ["Taro TR024-2", 499000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-taro-tr024-2_1732240309.webp", "https://shopvnb.com/giay-cau-long-taro-tr024-2.html"],
        ["Taro TR024-1", 499000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-taro-tr024-1_1732240510.webp", "https://shopvnb.com/giay-cau-long-taro-tr024-1.html"],
        ["Asics Court Hunter FF Men", 1760000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asic-court-hunter-ff-men_1776914617.webp", "https://shopvnb.com/giay-cau-long-asic-court-hunter-ff-men.html"],
        ["Asics Gel-Rocket 12 Men", 1480000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asics-gel-rocket-12-men_1769474000.webp", "https://shopvnb.com/giay-cau-long-asics-gel-rocket-12-men.html"],
        ["Lefus L1089 trẻ em", 570000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-tre-em-lefus-l1089_1790217991.webp", "https://shopvnb.com/giay-cau-long-tre-em-lefus-l1089.html"],
        ["Lefus LSC28F2", 680000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-lsc28f2_1788837923.webp", "https://shopvnb.com/giay-cau-long-lefus-lsc28f2.html"],
        ["Lefus L039", 450000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l039_1788836597.webp", "https://shopvnb.com/giay-cau-long-lefus-l039.html"],
        ["Lefus L038", 700000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l038_1788834637.webp", "https://shopvnb.com/giay-cau-long-lefus-l038.html"],
        ["Lefus L040", 740000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l040_1788833150.webp", "https://shopvnb.com/giay-cau-long-lefus-l040.html"],
        ["Yonex SHB 65Z VA Women - Silver/Navy", 2871000, "https://cdn.shopvnb.com/uploads/gallery/1giay-cau-long-yonex-shb-65z-va-women-silver-navy-chinh-hang_1788747738.webp", "https://shopvnb.com/giay-cau-long-yonex-shb-65z-va-women.html"],
        ["Yonex SHB 65Z VA Slim - Silver/Navy", 2871000, "https://cdn.shopvnb.com/uploads/gallery/1giay-cau-long-yonex-shb-65z-va-women-silver-navy-chinh-hang_1788748555.webp", "https://shopvnb.com/giay-cau-long-yonex-shb-65z-va-slim.html"],
        ["Yonex SHB 65Z VA Wide - Silver/Navy", 2920000, "https://cdn.shopvnb.com/uploads/gallery/1giay-cau-long-yonex-shb-65z-va-women-silver-navy-chinh-hang_1788748267.webp", "https://shopvnb.com/giay-cau-long-yonex-shb-65z-va-wide.html"],
        ["Yonex SHB 65Z VA Men - Grayish Beige", 2920000, "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-yonex-shb-65z-va-men-grayish-beige-chinh-hang_1759175955.webp", "https://shopvnb.com/giay-cau-long-yonex-shb-65z-va-men.html"],
        ["Lining Blade 2 SE Unisex", 1485000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-lining-blade-2-se-unisex-p-aytw001-2v-chinh-hang_1788144496.webp", "https://shopvnb.com/giay-cau-long-lining-blade-2-se-unisex-p-aytw001-2v-chinh-hang.html"],
        ["Lining Bladex Max Shida", 3499000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lining-bladex-max_1787861775.webp", "https://shopvnb.com/giay-cau-long-lining-bladex-max-shida.html"]
    ],
    CAT03: [
        ["Beyono Top CL25 Nam Trắng", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nam-trang-chinh-hang_1789761214.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl25-nam-trang-chinh-hang.html"],
        ["Yonex TRMYOB26147 Cyber Orange", 232000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trmyob26147-cyber-orange-chinh-hang-1_1789066231.webp", "https://shopvnb.com/ao-cau-long-yonex-trmyob26147-cyber-orange-chinh-hang.html"],
        ["Yonex TRM3474 ACT35 Paradise Green", 349000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3474-act35-paradise-green-chinh-hang_1784683397.webp", "https://shopvnb.com/ao-cau-long-yonex-trm3474-act35-paradise-green-chinh-hang.html"],
        ["Yonex TRM3474 ACT35 Navy Peony", 338000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3474-act35-navy-peony-chinh-hang_1784683390.webp", "https://shopvnb.com/ao-cau-long-yonex-trm3474-act35-navy-peony-chinh-hang.html"],
        ["Beyono Top CL25 Nữ Tím", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nu-tim-chinh-hang_1789761153.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl25-nu-tim-chinh-hang.html"],
        ["Beyono Top CL25 Nữ Trắng", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nu-trang-chinh-hang_1789761171.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl25-nu-trang-chinh-hang.html"],
        ["Beyono Top CL25 Nữ Cam", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nu-cam-chinh-hang_1789761158.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl25-nu-cam-chinh-hang.html"],
        ["Beyono Top CL25 Nữ Xanh Bích", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nu-xanh-bich-chinh-hang_1789761178.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl25-nu-xanh-bich-chinh-hang.html"],
        ["Beyono Top CL25 Nam Tím", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nam-tim-chinh-hang_1789761203.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl25-nam-tim-chinh-hang.html"],
        ["Beyono Top CL25 Nam Cam", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nam-cam-chinh-hang_1789761209.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl25-nam-cam-chinh-hang.html"],
        ["Beyono Top CL25 Nam Xanh Bích", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nam-xanh-bich-chinh-hang_1789761221.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl25-nam-xanh-bich-chinh-hang.html"],
        ["Beyono Top CL24 Nữ Cam", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-cam-chinh-hang_1789760643.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl24-nu-cam-chinh-hang.html"],
        ["Beyono Top CL24 Nữ Hồng", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-hong-chinh-hang_1789760620.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl24-nu-hong-chinh-hang.html"],
        ["Beyono Top CL24 Nữ Xanh Mint", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-xanh-mint-chinh-hang_1789760614.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl24-nu-xanh-mint-chinh-hang.html"],
        ["Beyono Top CL24 Nam Cam", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nam-cam-chinh-hang_1789760602.webp", "https://shopvnb.com/ao-cau-long-beyono-top-cl24-nam-cam-chinh-hang.html"]
    ],
    CAT04: [
        ["Yonex TSI3342 ACT35 Black", 310000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3342-act35-black-chinh-hang_1784679287.webp", "https://shopvnb.com/vay-cau-long-yonex-tsi3342-act35-black-chinh-hang.html"],
        ["Yonex TSI3342 ACT35 Mood Indigo", 310000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3342-act35-mood-indigo-chinh-hang_1784679294.webp", "https://shopvnb.com/vay-cau-long-yonex-tsi3342-act35-mood-indigo-chinh-hang.html"],
        ["Yonex TSI3342 ACT35 Light Taupe", 329000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3342-act35-light-tauqe-chinh-hang_1784679299.webp", "https://shopvnb.com/vay-cau-long-yonex-tsi3342-act35-light-tauqe-chinh-hang.html"],
        ["Yonex TSI3342 ACT35 White", 310000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3342-act35-white-chinh-hang_1784679307.webp", "https://shopvnb.com/vay-cau-long-yonex-tsi3342-act35-white-chinh-hang.html"],
        ["Yonex TSI3571 MYS26 Navy", 355000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3571-mys26-navy-chinh-hang_1784495661.webp", "https://shopvnb.com/vay-cau-long-yonex-tsi3571-mys26-navy-chinh-hang.html"],
        ["Yonex TSI3571 MYS26 White", 342000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3571-mys26-white-chinh-hang_1784495657.webp", "https://shopvnb.com/vay-cau-long-yonex-tsi3571-mys26-white-chinh-hang.html"],
        ["Yonex TSI3570 MYS26 White", 355000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3570-mys26-white-chinh-hang_1784495474.webp", "https://shopvnb.com/vay-cau-long-yonex-tsi3570-mys26-white-chinh-hang.html"],
        ["Yonex TSI3570 MYS26 Navy", 355000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3570-mys26-navy-chinh-hang_1784495480.webp", "https://shopvnb.com/vay-cau-long-yonex-tsi3570-mys26-navy-chinh-hang.html"],
        ["Taro Aries CV03-26 Xanh Navy", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-taro-aries-cv03-26-xanh-navy-chinh-hang_1783623013.webp", "https://shopvnb.com/vay-cau-long-taro-aries-cv03-26-xanh-navy-chinh-hang.html"],
        ["Taro Line CV01-26 Trắng", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-taro-line-cv01-26-trang-chinh-hang_1783545471.webp", "https://shopvnb.com/vay-cau-long-taro-line-cv01-26-trang-chinh-hang.html"],
        ["Taro Line CV01-26 Đen", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-taro-line-cv01-26-den-chinh-hang_1783545476.webp", "https://shopvnb.com/vay-cau-long-taro-line-cv01-26-den-chinh-hang.html"],
        ["Taro Elite CV02-26 Đen", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-taro-elite-cv02-26-den-chinh-hang_1783545736.webp", "https://shopvnb.com/vay-cau-long-taro-elite-cv02-26-den-chinh-hang.html"],
        ["Taro Elite CV02-26 Xanh Navy", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-taro-elite-cv02-26-xanh-navy-chinh-hang_1783545726.webp", "https://shopvnb.com/vay-cau-long-taro-elite-cv02-26-xanh-navy-chinh-hang.html"],
        ["Taro Aries CV03-26 Trắng", 220000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-taro-aries-cv03-26-trang-chinh-hang_1783545730.webp", "https://shopvnb.com/vay-cau-long-taro-aries-cv03-26-trang-chinh-hang.html"],
        ["Victec DRv245 Xanh Vẹc", 189000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-victec-drv245-xanh-vec_1779744397.webp", "https://shopvnb.com/vay-cau-long-victec-drv245-xanh-vec.html"]
    ],
    CAT05: [
        ["Yonex TSM3475 ACT35 White", 369000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3475-act35-white-chinh-hang_1784683647.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3475-act35-white-chinh-hang.html"],
        ["Yonex TSM3475 ACT35 Paradise Green", 369000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3475-act35-paradise-green-chinh-hang_1784683672.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3475-act35-paradise-green-chinh-hang.html"],
        ["Yonex TSM3475 ACT35 Navy Peony", 369000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3475-act35-navy-peony-chinh-hang_1784683662.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3475-act35-navy-peony-chinh-hang.html"],
        ["Yonex TSM3475 ACT35 Black", 369000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3475-act35-black-chinh-hang_1784683653.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3475-act35-black-chinh-hang.html"],
        ["Beyono QPK01 Nam Trắng", 249000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-beyono-qpk01-nam-trang-chinh-hang_1789758191.webp", "https://shopvnb.com/quan-cau-long-beyono-qpk01-nam-trang-chinh-hang.html"],
        ["Beyono QPK01 Nam Đen", 249000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-beyono-qpk01-nam-den-chinh-hang_1789757897.webp", "https://shopvnb.com/quan-cau-long-beyono-qpk01-nam-den-chinh-hang.html"],
        ["Yonex TSM3336 ACT35 Vermillion Orange", 389000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3336-act35-vermillion-orange-chinh-hang_1784678590.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3336-act35-vermillion-orange-chinh-hang.html"],
        ["Yonex TSM3336 ACT35 White", 389000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3336-act35-white-chinh-hang_1784678611.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3336-act35-white-chinh-hang.html"],
        ["Yonex TSM3336 ACT35 Black", 352000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3336-act35-black-chinh-hang_1784678617.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3336-act35-black-chinh-hang.html"],
        ["Yonex TSM3336 ACT35 Mood Indigo", 352000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3336-act35-mood-indigo-chinh-hang_1784678632.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3336-act35-mood-indigo-chinh-hang.html"],
        ["Yonex TSM3335 ACT35 Mood Indigo", 379000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3335-act35-mood-indigo-chinh-hang_1784839191.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3335-act35-mood-indigo-chinh-hang.html"],
        ["Yonex TSM3335 ACT35 Garnet", 379000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3335-act35-garnet-chinh-hang_1784839198.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3335-act35-garnet-chinh-hang.html"],
        ["Yonex TSM3335 ACT35 Neutral Gray", 379000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3335-act35-neutral-gray-chinh-hang_1784839276.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3335-act35-neutral-gray-chinh-hang.html"],
        ["Yonex TSM3335 ACT35 Black", 379000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3335-act35-black-chinh-hang_1784839181.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3335-act35-black-chinh-hang.html"],
        ["Yonex TSM3334 ACT35 Black", 389000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3334-act35-black-chinh-hang_1784678281.webp", "https://shopvnb.com/quan-cau-long-yonex-tsm3334-act35-black-chinh-hang.html"]
    ],
    CAT06: [
        ["Yonex BA92412BEX", 2259000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-ba92412bex_1789523562.webp", "https://shopvnb.com/balo-cau-long-yonex-ba92412bex.html"],
        ["Kumpoo KB-422 Nâu", 820000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1balo-cau-long-kumpoo-kb-422-nau-chinh-hang_1788722652.webp", "https://shopvnb.com/balo-cau-long-kumpoo-kb-422-nau-chinh-hang.html"],
        ["Lining Chiharu Shida ABSW597", 1999000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-dung-vot-cau-long-lining-absw597_1787885954.webp", "https://shopvnb.com/balo-dung-vot-cau-long-lining-absw597.html"],
        ["Lining ABSW235", 823000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-lining-absw235_1787877745.webp", "https://shopvnb.com/balo-cau-long-lining-absw235.html"],
        ["Taro RIO BA01-26", 680000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-taro-rio-ba01-26_1789613242.webp", "https://shopvnb.com/balo-cau-long-taro-rio-ba01-26.html"],
        ["Kumpoo KB-671", 750000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-kumpoo-kb-671_1788741164.webp", "https://shopvnb.com/balo-cau-long-kumpoo-kb-671.html"],
        ["Kumpoo KB-624", 810000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-kumpoo-kb-624_1788740863.webp", "https://shopvnb.com/balo-cau-long-kumpoo-kb-624.html"],
        ["Kumpoo KB-622", 750000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-kumpoo-kb-622_1788740550.webp", "https://shopvnb.com/balo-cau-long-kumpoo-kb-622.html"],
        ["Kumpoo KB-621", 720000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-kumpoo-kb-621_1788740012.webp", "https://shopvnb.com/balo-cau-long-kumpoo-kb-621.html"],
        ["Kumpoo KB-524 Xanh", 1150000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1balo-cau-long-kumpoo-kb-524-xanh-chinh-hang_1788724398.webp", "https://shopvnb.com/balo-cau-long-kumpoo-kb-524-xanh-chinh-hang.html"],
        ["Kumpoo KB-5212.25th", 910000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1balo-cau-long-kumpoo-kb-5212-25th-chinh-hang_1788722865.webp", "https://shopvnb.com/balo-cau-long-kumpoo-kb-5212-25th-chinh-hang.html"],
        ["Victor BR5072 C026", 1168000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br5072-c026-chinh-hang_1787772288.webp", "https://shopvnb.com/balo-cau-long-victor-br5072-c026-chinh-hang.html"],
        ["Victor BR7009 AR", 1107000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br7009-ar-trang-xanh-chinh-hang_1787772125.webp", "https://shopvnb.com/balo-cau-long-victor-br7009-ar-trang-xanh-chinh-hang.html"],
        ["Victor BR7009 A", 1107000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br7009-a-trang-chinh-hang_1787772130.webp", "https://shopvnb.com/balo-cau-long-victor-br7009-a-trang-chinh-hang.html"],
        ["Taro Lux BA02-26", 620000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-the-thao-da-nang-taro-lux-ba02-26_1786476332.webp", "https://shopvnb.com/balo-the-thao-da-nang-taro-lux-ba02-26.html"]
    ],
    CAT07: [
        ["Taro TR024-BAG01", 599000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-taro-tr024-bag01_1738702338.webp", "https://shopvnb.com/tui-cau-long-taro-tr024-bag01.html"],
        ["Lining ABLV081", 1611000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-lining-ablv081_1787864484.webp", "https://shopvnb.com/tui-cau-long-lining-ablv081.html"],
        ["Lining ABLV083", 1485000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-lining-ablv083_1789152294.webp", "https://shopvnb.com/tui-cau-long-lining-ablv083.html"],
        ["Lining ABLW043", 879000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-lining-ablw043_1787864151.webp", "https://shopvnb.com/tui-cau-long-lining-ablw043.html"],
        ["Kumpoo KB-664 Đỏ", 990000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1tui-cau-long-kumpoo-kb-664-do-chinh-hang_1788743483.webp", "https://shopvnb.com/tui-cau-long-kumpoo-kb-664-do-chinh-hang.html"],
        ["Kumpoo KB-663", 930000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-kumpoo-kb-663_1788751246.webp", "https://shopvnb.com/tui-cau-long-kumpoo-kb-663.html"],
        ["Kumpoo KB-662", 850000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-kumpoo-kb-662_1788750896.webp", "https://shopvnb.com/tui-cau-long-kumpoo-kb-662.html"],
        ["Kumpoo KB-632", 790000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-kumpoo-kb-632_1788750553.webp", "https://shopvnb.com/tui-cau-long-kumpoo-kb-632.html"],
        ["Kumpoo KB-631", 490000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-kumpoo-kb-631_1788750090.webp", "https://shopvnb.com/tui-cau-long-kumpoo-kb-631.html"],
        ["Kumpoo KB-566.25th", 990000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1tui-cau-long-kumpoo-kb-566-25th-chinh-hang_1788731472.webp", "https://shopvnb.com/tui-cau-long-kumpoo-kb-566-25th-chinh-hang.html"],
        ["Lining ABLW031-1", 1416000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1tui-cau-long-lining-ablw031-1-chinh-hang_1787778409.webp", "https://shopvnb.com/tui-cau-long-lining-ablw031-1-chinh-hang.html"],
        ["Victor BR5672 C026 V", 1450000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5672-c026-v-chinh-hang_1787772357.webp", "https://shopvnb.com/tui-cau-long-victor-br5672-c026-v-chinh-hang.html"],
        ["Hundred Utilitarian", 1499000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-hundred-utilitarian_1785372833.webp", "https://shopvnb.com/tui-cau-long-hundred-utilitarian.html"],
        ["Hundred Prism Pack", 1390000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-vot-cau-long-hundred-prism-pack_1785370460.webp", "https://shopvnb.com/tui-vot-cau-long-hundred-prism-pack.html"],
        ["Hundred Nova Pack", 1499000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-hundred-nova-pack_1785362366.webp", "https://shopvnb.com/tui-cau-long-hundred-nova-pack.html"]
    ],
    CAT08: [
        ["Victor SK190 A Trắng", 105000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk190-a-trang-chinh-hang_1789786557.webp", "https://shopvnb.com/vo-cau-long-victor-sk190-a-trang-chinh-hang.html"],
        ["Victor SK190 C Đen", 105000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk190-c-den-chinh-hang_1789786552.webp", "https://shopvnb.com/vo-cau-long-victor-sk190-c-den-chinh-hang.html"],
        ["Victor SK1001 F Trắng Xanh", 97000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1001-f-trang-xanh-chinh-hang_1789786879.webp", "https://shopvnb.com/vo-cau-long-victor-sk1001-f-trang-xanh-chinh-hang.html"],
        ["Victor SK1001 H Xám", 100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1001-h-xam-chinh-hang_1789786874.webp", "https://shopvnb.com/vo-cau-long-victor-sk1001-h-xam-chinh-hang.html"],
        ["Pili PHEW25 Băng Trán Đỏ", 100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/bang-tran-cau-long-pili-phew25-do-chinh-hang_1790366834.webp", "https://shopvnb.com/bang-tran-cau-long-pili-phew25-do-chinh-hang.html"],
        ["Pili PHEW25 Băng Trán Hồng", 100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/bang-tran-cau-long-pili-phew25-hong-chinh-hang_1790366859.webp", "https://shopvnb.com/bang-tran-cau-long-pili-phew25-hong-chinh-hang.html"],
        ["Pili PHEW25 Băng Trán Navy", 100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/bang-tran-cau-long-pili-phew25-navy-chinh-hang_1790366847.webp", "https://shopvnb.com/bang-tran-cau-long-pili-phew25-navy-chinh-hang.html"],
        ["Pili PHEW25 Băng Trán Xanh Lá", 100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/bang-tran-cau-long-pili-phew25-xanh-la-chinh-hang_1790366853.webp", "https://shopvnb.com/bang-tran-cau-long-pili-phew25-xanh-la-chinh-hang.html"],
        ["Pili PHEW25 Băng Trán Đen", 100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/bang-tran-cau-long-pili-phew25-den-chinh-hang_1790366839.webp", "https://shopvnb.com/bang-tran-cau-long-pili-phew25-den-chinh-hang.html"],
        ["Victor SK1503 H Xám", 100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1503-h-xam-chinh-hang_1789786443.webp", "https://shopvnb.com/vo-cau-long-victor-sk1503-h-xam-chinh-hang.html"],
        ["Victor SK1503 A Trắng Xám", 100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1503-a-trang-xam-chinh-hang_1789786445.webp", "https://shopvnb.com/vo-cau-long-victor-sk1503-a-trang-xam-chinh-hang.html"],
        ["Victor SK1024 A Trắng Xám", 100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1024-a-trang-xam-chinh-hang_1789786324.webp", "https://shopvnb.com/vo-cau-long-victor-sk1024-a-trang-xam-chinh-hang.html"],
        ["Victor SK1024 V Xám Kem", 100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1024-v-xam-kem-chinh-hang_1789786329.webp", "https://shopvnb.com/vo-cau-long-victor-sk1024-v-xam-kem-chinh-hang.html"],
        ["Yonex WBD11524 WB11", 110000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/set-bang-chan-mo-hoi-yonex-wbd11524-wb11-chinh-hang_1789784086.webp", "https://shopvnb.com/set-bang-chan-mo-hoi-yonex-wbd11524-wb11-chinh-hang.html"],
        ["Yonex WBD11523 WB11", 110000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/set-bang-chan-mo-hoi-yonex-wbd11523-wb11-chinh-hang_1789783953.webp", "https://shopvnb.com/set-bang-chan-mo-hoi-yonex-wbd11523-wb11-chinh-hang.html"]
    ]
};

Object.entries(vnbCatalog).forEach(([categoryCode, catalog]) => {
    mockProducts.filter(product => product.categoryCode === categoryCode).forEach((product, index) => {
        const item = catalog[index];
        if (!item) return;
        const [name, price, image, sourceUrl] = item;
        product.name = `${mockCategories.find(category => category.categoryCode === categoryCode).name} ${name}`;
        product.importPrice = price;
        product.salePrice = null;
        product.originalPrice = null;
        product.image = image;
        product.images = [image, image, image, image];
        product.sourceUrl = sourceUrl;
        product.sourceVerified = true;
    });
});

const verifiedYonexRackets = [
    ["Vợt cầu lông Yonex Astrox 10", 880000, 939000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-yonex-astrox-10_1782097544.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-10.html"],
    ["Vợt cầu lông Yonex Astrox 77 Play Limited - Light Beige chính hãng", 1078000, 1189000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-astrox-77-play-limited-light-beige-chinh-hang_1773945577.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-77-play-limited-light-beige-chinh-hang.html"],
    ["Vợt cầu lông Yonex Arcsaber 7 Play Limited - Light Beige chính hãng", 1200000, 1409000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-arcsaber-7-play-limited-light-beige-chinh-hang_1773947031.webp", "https://shopvnb.com/vot-cau-long-yonex-arcsaber-7-play-limited-light-beige-chinh-hang.html"],
    ["Vợt cầu lông Yonex Astrox 77 Tour Limited - Light Beige chính hãng", 2475000, 2939000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-astrox-77-tour-limited-light-beige-chinh-hang_1773943830.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-77-tour-limited-light-beige-chinh-hang.html"],
    ["Vợt cầu lông Yonex Astrox Lite 43i", 709000, null, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-yonex-astrox-lite-43i_1778112890.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-lite-43i.html"],
    ["Vợt cầu lông Yonex Astrox Lite 45i", 709000, null, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-yonex-astrox-lite-45i_1773877690.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-lite-45i.html"],
    ["Vợt cầu lông Yonex Astrox 22 Lite (BK/RD) chính hãng", 1799000, 2349000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-astrox-22-lite-bk-rd-chinh-hang_1761954974.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-22-lite-bk-rd-chinh-hang.html"],
    ["Set vợt cầu lông Yonex Nanoflare 1000Z Nguyễn Thùy Linh chính hãng", 7700000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/set-vot-cau-long-yonex-nanoflare-1000z-nguyen-thuy-linh-chinh-hang_1760491235.webp", "https://shopvnb.com/set-vot-cau-long-yonex-nanoflare-1000z-nguyen-thuy-linh-chinh-hang.html"],
    ["Vợt cầu lông Yonex Astrox 100 Game VA", 2356000, 3019000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-yonex-astrox-100-game-va-grayish-beige-chinh-hang_1758664685.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-100-game-va.html"],
    ["Vợt cầu lông Yonex Astrox 100 Tour VA", 3306000, 4279000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-yonex-astrox-100-tour-va-grayish-beige-chinh-hang_1758660345.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-100-tour-va.html"],
    ["Vợt cầu lông Yonex Astrox 100ZZ VA", 5500000, 5599000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-yonex-astrox-100zz-va-grayish-beige-chinh-hang_1758327809.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-100zz-va.html"],
    ["Vợt cầu lông Yonex Astrox 99 Play 2025", 1652000, 1769000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-yonex-astrox-99-play-2025-black-green-chinh-hang_1756340831.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-99-play-2025.html"],
    ["Vợt cầu lông Yonex Astrox 99 Game 2025", 2550000, 2849000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-yonex-astrox-99-game-2025-black-green-chinh-hang_1756339310.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-99-game-2025.html"],
    ["Vợt cầu lông Yonex Astrox 99 Tour 2025", 4299000, 4890000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-yonex-astrox-99-tour-2025-black-green-chinh-hang_1756338750.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-99-tour-2025.html"],
    ["Vợt cầu lông Yonex Astrox 99 Pro 2025", 4623000, 5209000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-yonex-astrox-99-pro-black-green-chinh-hang_1756337814.webp", "https://shopvnb.com/vot-cau-long-yonex-astrox-99-pro-2025.html"]
];

mockProducts.filter(product => product.categoryCode === "CAT01").forEach((product, index) => {
    const item = verifiedYonexRackets[index];
    if (!item) return;
    const [name, salePrice, originalPrice, image, sourceUrl] = item;
    Object.assign(product, {
        name,
        image,
        images: [image, image, image, image],
        importPrice: salePrice,
        salePrice: originalPrice ? salePrice : null,
        originalPrice,
        sourceUrl,
        sourceVerified: true
    });
});

const additionalVerifiedProducts = {
    CAT01: [
        ["Vợt cầu lông Victor Thruster Ryuga II Pro CO26", 3915000, 4350000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-victor-thruster-ryuga-ii-pro-co26-victor-china-open-2026_1785721130.webp", "https://shopvnb.com/vot-cau-long-victor-thruster-ryuga-ii-pro-co26-victor-china-open-2026.html"],
        ["Vợt cầu lông Victor Auraspeed 100X B 2026", 3499000, 3800000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-victor-auraspeed-100x-b-2026-chinh-hang_1784666406.webp", "https://shopvnb.com/vot-cau-long-victor-auraspeed-100x-b-2026-chinh-hang.html"],
        ["Vợt cầu lông Victor Auraspeed 100X TD", 2691000, 2990000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-victor-auraspeed-100x-td-noi-dia-trung_1787271195.webp", "https://shopvnb.com/vot-cau-long-victor-auraspeed-100x-td.html"],
        ["Vợt cầu lông Victor Thruster Hammer Light", 1125000, 1250000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-victor-thruster-hammer-light_1783114178.webp", "https://shopvnb.com/vot-cau-long-victor-thruster-hammer-light.html"],
        ["Vợt cầu lông Victor Auraspeed LYC", 3350000, 3900000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-auraspeed-lyc-liu-yu-chen-chinh-hang-1_1781212807.webp", "https://shopvnb.com/vot-cau-long-victor-auraspeed-lyc-liu-yu-chen-chinh-hang.html"],
        ["Vợt cầu lông Victor Jetspeed S12 II R", 3465000, 3900000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-jetspeed-s12-ii-r_1779659051.jpg", "https://shopvnb.com/vot-cau-long-victor-jetspeed-s12-ii-r-chinh-hang.html"],
        ["Vợt cầu lông Victor ARS 30H", 989000, 1250000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-victor-ars-30h-chinh-hang_1777318138.webp", "https://shopvnb.com/vot-cau-long-victor-ars-30h-chinh-hang.html"],
        ["Vợt cầu lông Victor Thruster Ryuga Muse F", 3150000, 3500000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-thruster-ryuga-muse-f-chinh-hang_1775528851.webp", "https://shopvnb.com/vot-cau-long-victor-thruster-ryuga-muse-f-chinh-hang.html"],
        ["Vợt cầu lông Victor Auraspeed 99 J 2026", 3790000, 4190000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-auraspeed-99-j-2026-chinh-hang_1775528187.webp", "https://shopvnb.com/vot-cau-long-victor-auraspeed-99-j-2026-chinh-hang.html"],
        ["Vợt cầu lông Victor Auraspeed 99 TUC26 D", 3550000, 4190000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-auraspeed-99-tuc26-d-chinh-hang_1775527454.webp", "https://shopvnb.com/vot-cau-long-victor-auraspeed-99-tuc26-d-chinh-hang.html"],
        ["Vợt cầu lông Victor Auraspeed A", 999000, 1190000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-auraspeed-a-chinh-hang_1775526854.webp", "https://shopvnb.com/vot-cau-long-victor-auraspeed-a-chinh-hang.html"],
        ["Vợt cầu lông Victor DriveX 12 WT25", 4449000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-drivex-12-wt25-chinh-hang_1767120695.webp", "https://shopvnb.com/vot-cau-long-victor-drivex-12-wt25-chinh-hang.html"],
        ["Vợt cầu lông Victor Thruster F C Ultra X", 3990000, 4600000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-thruster-f-c-ultra-x-chinh-ahng_1762200587.webp", "https://shopvnb.com/vot-cau-long-victor-thruster-f-c-ultra-x-chinh-ahng.html"],
        ["Vợt cầu lông Victor Auraspeed FANTÔME F HYQ", 3990000, 4490000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-auraspeed-fantome-f-hyq-chinh-hang_1761184395.webp", "https://shopvnb.com/vot-cau-long-victor-auraspeed-fantome-f-hyq-chinh-hang.html"],
        ["Vợt cầu lông Victor DX-1 A", 1100000, 1450000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-dx-1-a-chinh-hang_1753931914.webp", "https://shopvnb.com/vot-cau-long-victor-dx-1-a-chinh-hang.html"]
    ],
    CAT02: [
        ["Giày cầu lông Victor A970CHP", 1990000, 2100000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-victor-a970chp_1787187136.webp", "https://shopvnb.com/giay-cau-long-victor-a970chp.html"],
        ["Giày cầu lông Victor A970NTD LT", 1550000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-victor-a970ntd-lt-trang-tim-chinh-hang_1787169276.webp", "https://shopvnb.com/giay-cau-long-victor-a970ntd-lt-trang-tim-chinh-hang.html"],
        ["Giày cầu lông Victor P9200cXLTD X", 3650000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-victor-p9200cxltd-x-chinh-hang_1784756268.webp", "https://shopvnb.com/giay-cau-long-victor-p9200cxltd-x-chinh-hang.html"],
        ["Giày cầu lông Victor A970 CADV/AM", 2610000, 2900000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/4giay-cau-long-victor-a970-cadv-am-trang-chinh-hang_1783709372.webp", "https://shopvnb.com/giay-cau-long-victor-a970-cadv-am-trang-chinh-hang.html"],
        ["Giày cầu lông Victor C90 II", 2750000, null, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-victor-c90-ii_1787172275.webp", "https://shopvnb.com/giay-cau-long-victor-c90-ii.html"],
        ["Giày cầu lông Victor P9200cX Đỏ", 2700000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-victor-p9200cx-do-chinh-hang_1784764168.webp", "https://shopvnb.com/giay-cau-long-victor-p9200cx-do-chinh-hang.html"],
        ["Giày cầu lông Victor P9200 CLS AC", 1341000, 1490000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-victor-p9200-cls-ac-trang-den-chinh-hang_1783545048.webp", "https://shopvnb.com/giay-cau-long-victor-p9200-cls-ac-trang-den-chinh-hang.html"],
        ["Giày cầu lông Victor P9200NTD AB", 1750000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-victor-p9200ntd-ab-trang-xanh-navy-chinh-hang-1_1780272292.webp", "https://shopvnb.com/giay-cau-long-victor-p9200ntd-ab-trang-xanh-navy-chinh-hang.html"],
        ["Giày cầu lông Victor A531 W/CX", 1450000, 1589000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-victor-a531-w-cx-chinh-hang-1_1779647966.webp", "https://shopvnb.com/giay-cau-long-victor-a531-w-cx-chinh-hang.html"],
        ["Giày cầu lông Victor A531 W/AG", 1415000, 1589000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-victor-a531-w-ag-chinh-hang-1_1779486970.webp", "https://shopvnb.com/giay-cau-long-victor-a531-w-ag-chinh-hang.html"],
        ["Giày cầu lông Victor A302 AC", 1266000, 1289000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-victor-a302-ac-chinh-hang-1_1779486781.webp", "https://shopvnb.com/giay-cau-long-victor-a302-ac-chinh-hang.html"],
        ["Giày cầu lông Victor A170 II-CD", 1025000, 1139000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-victor-a170-ii-cd-chinh-hang-1_1779486617.webp", "https://shopvnb.com/giay-cau-long-victor-a170-ii-cd-chinh-hang.html"],
        ["Giày cầu lông Victor C60 CX", 1549000, 1739000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-victor-c60-cx-chinh-hang-1_1780624055.jpg", "https://shopvnb.com/giay-cau-long-victor-c60-cx-chinh-hang.html"],
        ["Giày cầu lông Victor C60 AX", 1549000, 1739000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-victor-a60-ax-chinh-hang-1_1780624073.jpg", "https://shopvnb.com/giay-cau-long-victor-c60-ax-chinh-hang.html"],
        ["Giày cầu lông Victor A690 C", 1650000, 1739000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-victor-a690-c-chinh-hang-1_1779486429.webp", "https://shopvnb.com/giay-cau-long-victor-a690-c-chinh-hang.html"]
    ]
};

Object.entries(additionalVerifiedProducts).forEach(([categoryCode, products]) => {
    products.forEach(([name, price, originalPrice, image, sourceUrl], index) => {
        mockProducts.push({
            productCode: `SP${String(mockProducts.length + 1).padStart(3, "0")}`,
            name,
            categoryCode,
            image,
            images: [image, image, image, image],
            importPrice: price,
            salePrice: originalPrice ? price : null,
            originalPrice,
            sourceUrl,
            sourceVerified: true,
            stock: 50,
            isHidden: false
        });
    });
});

const moreVerifiedProducts = {
    CAT01: [
        ["Vợt cầu lông Lining Bladex 880 Shida 2026", 4150000, 4500000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-lining-bladex-880-shida-2026-chinh-hang_1778530937.webp", "https://shopvnb.com/vot-cau-long-lining-bladex-880-shida-2026-chinh-hang.html"],
        ["Vợt cầu lông Lining Bladex 800 Power 2026", 4041000, 4490000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-lining-bladex-800-power-2026-chinh-hang-1_1777773953.webp", "https://shopvnb.com/vot-cau-long-lining-bladex-800-power-2026-chinh-hang.html"],
        ["Vợt cầu lông Lining Bladex 800 Speed 2026", 3592000, 4490000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-lining-bladex-800-speed-new-2026-chinh-hang_1777426050.webp", "https://shopvnb.com/vot-cau-long-lining-bladex-800-speed-new-2026-chinh-hang.html"],
        ["Vợt cầu lông Lining Bladex Assassin", 1170000, 1300000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-lining-bladex-assassin_1774060906.webp", "https://shopvnb.com/vot-cau-long-lining-bladex-assassin.html"],
        ["Vợt cầu lông Lining Axforce 90 Limited 2026", 4070000, 5100000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-lining-axforce-90-limited-2026-chinh-hang_1774060510.webp", "https://shopvnb.com/vot-cau-long-lining-axforce-90-limited-2026-chinh-hang.html"],
        ["Vợt cầu lông Lining Halbertec 7000 Purple Twilight", 3400000, 3990000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-lining-halbertec-7000-purple-twilight-chinh-hang_1774059152.webp", "https://shopvnb.com/vot-cau-long-lining-halbertec-7000-purple-twilight-chinh-hang.html"],
        ["Vợt cầu lông Lining Axforce 100 Gen 2", 5070000, 5650000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-lining-axforce-100-gen-2-chinh-hang_1766950089.webp", "https://shopvnb.com/vot-cau-long-lining-axforce-100-gen-2-chinh-hang.html"],
        ["Vợt cầu lông Lining Halbertec Motor Pro", 2100000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-lining-halbertec-motor-pro-chinh-hang_1759353102.webp", "https://shopvnb.com/vot-cau-long-lining-halbertec-motor-pro-chinh-hang.html"],
        ["Vợt cầu lông Lining Halbertec 3000", 1100000, null, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-lining-halbertec-3000-noi-dia-trung_1744839313.webp", "https://shopvnb.com/vot-cau-long-lining-halbertec-3000.html"],
        ["Vợt cầu lông Lining Axforce 90 New Loh Kean Yew 2025", 4060000, 5100000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-lining-axforce-90-new-loh-kean-yew-2024-noi-dia-trung_1743379220.webp", "https://shopvnb.com/vot-cau-long-lining-axforce-90-new-loh-kean-yew-2024.html"],
        ["Vợt cầu lông Lining Halbertec 4000", 2070000, null, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-lining-halbertec-4000-noi-dia-trung_1743362209.webp", "https://shopvnb.com/vot-cau-long-lining-halbertec-4000.html"],
        ["Vợt cầu lông Lining Axforce BigBang New", 1509000, 1900000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-lining-axforce-bigbang-new_1743098920.webp", "https://shopvnb.com/vot-cau-long-lining-axforce-bigbang-new.html"],
        ["Vợt cầu lông Lining Axforce 30", 1350000, null, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-lining-axforce-30_1741737685.webp", "https://shopvnb.com/vot-cau-long-lining-axforce-30.html"],
        ["Vợt cầu lông Lining Aeronaut 6000I", 1772000, 2190000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-lining-aeronaut-6000i_1740444922.jpg", "https://shopvnb.com/vot-cau-long-lining-aeronaut-6000i.html"],
        ["Vợt cầu lông Lining Aeronaut 6000C", 1650000, 1950000, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-lining-aeronaut-6000c_1740444953.jpg", "https://shopvnb.com/vot-cau-long-lining-aeronaut-6000c.html"]
    ],
    CAT02: [
        ["Giày cầu lông Lining Blade 2 SE Unisex P-AYTW001-2V", 1485000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-lining-blade-2-se-unisex-p-aytw001-2v-chinh-hang_1788144496.webp", "https://shopvnb.com/giay-cau-long-lining-blade-2-se-unisex-p-aytw001-2v-chinh-hang.html"],
        ["Giày cầu lông Lining Bladex Max Shida", 3499000, null, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lining-bladex-max_1787861775.webp", "https://shopvnb.com/giay-cau-long-lining-bladex-max-shida.html"],
        ["Giày cầu lông Lining AYZV001-4", 1900000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-lining-ayzv001-4-chinh-hang_1785122690.webp", "https://shopvnb.com/giay-cau-long-lining-ayzv001-4-chinh-hang.html"],
        ["Giày cầu lông Lining AYTW019-5", 1188000, 1300000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-lining-aytw019-5-chinh-hang_1785121872.webp", "https://shopvnb.com/giay-cau-long-lining-aytw019-5-chinh-hang.html"],
        ["Giày cầu lông Lining AYTW019-4", 1180000, 1300000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-lining-aytw019-4-chinh-hang_1785122349.webp", "https://shopvnb.com/giay-cau-long-lining-aytw019-4-chinh-hang.html"],
        ["Giày cầu lông Lining AYTW019-2", 1188000, 1300000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-lining-aytw019-2-chinh-hang_1785121462.webp", "https://shopvnb.com/giay-cau-long-lining-aytw019-2-chinh-hang.html"],
        ["Giày cầu lông Lining AYAV001-7 Saga 3 Pro", 3780000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-lining-ayav001-7-saga-3-pro-chinh-hang_1785121101.webp", "https://shopvnb.com/giay-cau-long-lining-ayav001-7-saga-3-pro-chinh-hang.html"],
        ["Giày cầu lông Lining AYAV001-8 Saga 3 Pro", 3780000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-lining-ayav001-8-saga-3-pro-chinh-hang_1785120827.webp", "https://shopvnb.com/giay-cau-long-lining-ayav001-8-saga-3-pro-chinh-hang.html"],
        ["Giày cầu lông Lining AYAU003-1", 2200000, 2600000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayau003-1-chinh-hang-1_1780952289.webp", "https://shopvnb.com/giay-cau-long-lining-ayau003-1-chinh-hang.html"],
        ["Giày cầu lông Lining AYTW003-2", 1100000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-aytw003-2-chinh-hang-1_1780952596.webp", "https://shopvnb.com/giay-cau-long-lining-aytw003-2-chinh-hang.html"],
        ["Giày cầu lông Lining AYZW007-3", 2290000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayzw007-3-chinh-hang-1_1780950649.webp", "https://shopvnb.com/giay-cau-long-lining-ayzw007-3-chinh-hang.html"],
        ["Giày cầu lông Lining AYZW007-2", 1832000, 2290000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayzw007-2-chinh-hang-1_1780949899.webp", "https://shopvnb.com/giay-cau-long-lining-ayzw007-2-chinh-hang.html"],
        ["Giày cầu lông Lining AYZW007-1", 1832000, 2290000, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayzw007-1-chinh-hang-1_1780949577.webp", "https://shopvnb.com/giay-cau-long-lining-ayzw007-1-chinh-hang.html"],
        ["Giày cầu lông Lining AYTU025-5", 1300000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-aytu025-5-chinh-hang-1_1780949418.webp", "https://shopvnb.com/giay-cau-long-lining-aytu025-5-chinh-hang.html"],
        ["Giày cầu lông Lining AYAU005-4", 2500000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-ayau005-4-chinh-hang-1_1780949193.webp", "https://shopvnb.com/giay-cau-long-lining-ayau005-4-chinh-hang.html"],
        ["Giày cầu lông Yonex SHB 65Z3 Wide - Xanh Navy", 2450000, null, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-yonex-shb-65z3-wide-xanh-navy-new-2022-2.webp", "https://shopvnb.com/giay-cau-long-yonex-shb-65z3-wide-xanh-navy-new-2022.html"],
        ["Giày cầu lông Yonex SHB Eclipsion Z2 Lady - Xanh Lam", 2739000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-yonex-shb-eclipsion-z2-lady-xanh-lam-ma-jp-_1727226503.jpg", "https://shopvnb.com/giay-cau-long-yonex-shb-eclipsion-z2-lady-xanh-lam-ma-jp-.html"],
        ["Giày cầu lông Yonex Aerus Z2 Men - Cam/Hồng", 2689000, null, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-yonex-aerus-z2-men-cam-hong-chinh-hang-2.webp", "https://shopvnb.com/giay-cau-long-yonex-aerus-z2-men-cam-hong-chinh-hang.html"],
        ["Giày cầu lông Yonex Comfort 2 Z - Đen/Đỏ", 2199000, null, "https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-yonex-comfort-2-z-den-hong_1727226276.jpg", "https://shopvnb.com/giay-cau-long-yonex-comfort-2-z-den-do-ma-jp-.html"],
        ["Giày cầu lông Yonex Bubble Out - EA Blue", 899000, null, "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-yonex-bubble-out-ea-blue-chinh-hang-2.webp", "https://shopvnb.com/giay-cau-long-yonex-bubble-out-ea-blue-chinh-hang.html"]
    ]
};

const apparelVerifiedProducts = {
    CAT03: [
        ["Áo Cầu Lông Yonex TRMYOB26147 - Cyber Orange Chính Hãng",232000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trmyob26147-cyber-orange-chinh-hang-1_1789066231.webp","https://shopvnb.com/ao-cau-long-yonex-trmyob26147-cyber-orange-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3474 ACT35 - Paradise Green Chính Hãng",349000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3474-act35-paradise-green-chinh-hang_1784683397.webp","https://shopvnb.com/ao-cau-long-yonex-trm3474-act35-paradise-green-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3474 ACT35 - Navy Peony Chính Hãng",338000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3474-act35-navy-peony-chinh-hang_1784683390.webp","https://shopvnb.com/ao-cau-long-yonex-trm3474-act35-navy-peony-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3473 ACT35 - White Chính Hãng",349000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3473-act35-white-chinh-hang_1784682031.webp","https://shopvnb.com/ao-cau-long-yonex-trm3473-act35-white-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRMYOB26147 - Dark Navy Chính Hãng",232000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trmyob26147-dark-navy-2_1789066254.webp","https://shopvnb.com/ao-cau-long-yonex-trmyob26147-dark-navy-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3751 VNO - White Chính Hãng",179000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3751-vno-white-chinh-hang_1789065916.webp","https://shopvnb.com/ao-cau-long-yonex-trm3751-vno-white-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3751 VNO - Delicate Blue Chính Hãng",179000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3751-vno-delicate-blue-chinh-hang_1789065921.webp","https://shopvnb.com/ao-cau-long-yonex-trm3751-vno-delicate-blue-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3474 ACT35 - Paradise Pink Chính Hãng",349000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3474-act35-paradise-pink-chinh-hang_1784683379.webp","https://shopvnb.com/ao-cau-long-yonex-trm3474-act35-paradise-pink-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3474 ACT35 - Black Chính Hãng",349000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3474-act35-black-chinh-hang_1784683385.webp","https://shopvnb.com/ao-cau-long-yonex-trm3474-act35-black-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3473 ACT35 - Snorkle Blue Chính Hãng",349000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3473-act35-snorkle-blue-chinh-hang_1784682057.webp","https://shopvnb.com/ao-cau-long-yonex-trm3473-act35-snorkle-blue-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3473 ACT35 - Zephyr Green Chính Hãng",349000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3473-act35-zephyr-green-chinh-hang_1784682042.webp","https://shopvnb.com/ao-cau-long-yonex-trm3473-act35-zephyr-green-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3473 ACT35 - Black Chính Hãng",349000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3473-act35-black-chinh-hang_1784682034.webp","https://shopvnb.com/ao-cau-long-yonex-trm3473-act35-black-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3472 ACT35 - White Chính Hãng",349000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3472-act35-white-chinh-hang_1784681105.webp","https://shopvnb.com/ao-cau-long-yonex-trm3472-act35-white-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3472 ACT35 - Sterling Blue Chính Hãng",349000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3472-act35-sterling-blue-chinh-hang_1784681119.webp","https://shopvnb.com/ao-cau-long-yonex-trm3472-act35-sterling-blue-chinh-hang.html"],
        ["Áo Cầu Lông Yonex TRM3472 ACT35 - Cockatoo Chính Hãng",349000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-yonex-trm3472-act35-cockatoo-chinh-hang_1784681115.webp","https://shopvnb.com/ao-cau-long-yonex-trm3472-act35-cockatoo-chinh-hang.html"]
    ],
    CAT04: [
        ["Váy Cầu Lông Yonex TSI3342 ACT35 - Black Chính Hãng",310000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3342-act35-black-chinh-hang_1784679287.webp","https://shopvnb.com/vay-cau-long-yonex-tsi3342-act35-black-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI3342 ACT35 - Mood Indigo Chính Hãng",310000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3342-act35-mood-indigo-chinh-hang_1784679294.webp","https://shopvnb.com/vay-cau-long-yonex-tsi3342-act35-mood-indigo-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI3342 ACT35 - Light Tauqe Chính Hãng",329000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3342-act35-light-tauqe-chinh-hang_1784679299.webp","https://shopvnb.com/vay-cau-long-yonex-tsi3342-act35-light-tauqe-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI3342 ACT35 - White Chính Hãng",310000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3342-act35-white-chinh-hang_1784679307.webp","https://shopvnb.com/vay-cau-long-yonex-tsi3342-act35-white-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI3571 MYS26 - Navy Chính Hãng",355000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3571-mys26-navy-chinh-hang_1784495661.webp","https://shopvnb.com/vay-cau-long-yonex-tsi3571-mys26-navy-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI3571 MYS26 - White Chính Hãng",342000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3571-mys26-white-chinh-hang_1784495657.webp","https://shopvnb.com/vay-cau-long-yonex-tsi3571-mys26-white-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI3570 MYS26 - White Chính Hãng",355000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3570-mys26-white-chinh-hang_1784495474.webp","https://shopvnb.com/vay-cau-long-yonex-tsi3570-mys26-white-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI3570 MYS26 - Navy Chính Hãng",355000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3570-mys26-navy-chinh-hang_1784495480.webp","https://shopvnb.com/vay-cau-long-yonex-tsi3570-mys26-navy-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI3391 - White Chính Hãng",379000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3391-white-chinh-hang_1776652199.webp","https://shopvnb.com/vay-cau-long-yonex-tsi3391-white-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI3391 - Navy Blue Chính Hãng",379000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi3391-navy-blue-chinh-hang_1776652193.webp","https://shopvnb.com/vay-cau-long-yonex-tsi3391-navy-blue-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI2846 - Naval Academy Chính Hãng",257000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi2846-naval-academy-chinh-hang_1754854792.webp","https://shopvnb.com/vay-cau-long-yonex-tsi2846-naval-academy-chinh-hang.html"],
        ["Váy Cầu Lông Yonex TSI2846 - Hemlock Chính Hãng",257000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-yonex-tsi2846-hemlock-chinh-hang_1754854674.webp","https://shopvnb.com/vay-cau-long-yonex-tsi2846-hemlock-chinh-hang.html"],
        ["Váy Cầu Lông Yonex 92006 - Đỏ",150000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vay-cau-long-yonex-92006-do-1.webp","https://shopvnb.com/vay-cau-long-yonex-92006-do.html"],
        ["Váy Cầu Lông Yonex 92006 - Xanh Navy",150000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vay-cau-long-yonex-92006-xanh-navy-1.webp","https://shopvnb.com/vay-cau-long-yonex-92006-xanh-navy.html"],
        ["Váy Cầu Lông Yonex 9018 - Đen",150000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vay-cau-long-yonex-9018-den-1.webp","https://shopvnb.com/vay-cau-long-yonex-9018-den.html"]
    ]
};

Object.entries(apparelVerifiedProducts).forEach(([categoryCode, products]) => {
    products.forEach(([name, price, image, sourceUrl]) => {
        if (mockProducts.some(product => product.name === name)) return;
        mockProducts.push({ productCode: `SP${String(mockProducts.length + 1).padStart(3, "0")}`, name, categoryCode, image, images: [image, image, image, image], importPrice: price, salePrice: null, originalPrice: null, sourceUrl, sourceVerified: true, stock: 50, isHidden: false });
    });
});

const yonexBottomsAndBackpacks = {
    CAT05: [
        ["Quần Cầu Lông Yonex TSM3475 ACT35 - White Chính Hãng",369000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3475-act35-white-chinh-hang_1784683647.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3475-act35-white-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3475 ACT35 - Paradise Green Chính Hãng",369000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3475-act35-paradise-green-chinh-hang_1784683672.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3475-act35-paradise-green-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3475 ACT35 - Navy Peony Chính Hãng",369000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3475-act35-navy-peony-chinh-hang_1784683662.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3475-act35-navy-peony-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3475 ACT35 - Black Chính Hãng",369000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3475-act35-black-chinh-hang_1784683653.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3475-act35-black-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3336 ACT35 - Vermillion Orange Chính Hãng",389000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3336-act35-vermillion-orange-chinh-hang_1784678590.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3336-act35-vermillion-orange-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3336 ACT35 - White Chính Hãng",389000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3336-act35-white-chinh-hang_1784678611.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3336-act35-white-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3336 ACT35 - Black Chính Hãng",352000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3336-act35-black-chinh-hang_1784678617.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3336-act35-black-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3336 ACT35 - Mood Indigo Chính Hãng",352000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3336-act35-mood-indigo-chinh-hang_1784678632.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3336-act35-mood-indigo-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3335 ACT35 - Mood Indigo Chính Hãng",379000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3335-act35-mood-indigo-chinh-hang_1784839191.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3335-act35-mood-indigo-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3335 ACT35 - Garnet Chính Hãng",379000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3335-act35-garnet-chinh-hang_1784839198.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3335-act35-garnet-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3335 ACT35 - Neutral Gray Chính Hãng",379000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3335-act35-neutral-gray-chinh-hang_1784839276.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3335-act35-neutral-gray-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3335 ACT35 - Black Chính Hãng",379000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3335-act35-black-chinh-hang_1784839181.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3335-act35-black-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3334 ACT35 - Black Chính Hãng",389000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3334-act35-black-chinh-hang_1784678281.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3334-act35-black-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3334 ACT35 - Citadel Chính Hãng",352000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3334-act35-citadel-chinh-hang_1784678277.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3334-act35-citadel-chinh-hang.html"],
        ["Quần Cầu Lông Yonex TSM3334 ACT35 - Garnet Chính Hãng",352000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-cau-long-yonex-tsm3334-act35-garnet-chinh-hang_1784678273.webp","https://shopvnb.com/quan-cau-long-yonex-tsm3334-act35-garnet-chinh-hang.html"]
    ],
    CAT06: [
        ["Balo Cầu Lông Yonex BA92412BEX",2259000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-ba92412bex_1789523562.webp","https://shopvnb.com/balo-cau-long-yonex-ba92412bex.html"],
        ["Balo Cầu Lông Yonex BAG926B0212Z",855000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bag926b0212z_1783631066.webp","https://shopvnb.com/balo-cau-long-yonex-bag926b0212z.html"],
        ["Balo Cầu Lông Yonex BAG525B1112Z",693000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bag525b1112z_1780543925.webp","https://shopvnb.com/balo-cau-long-yonex-bag525b1112z.html"],
        ["Balo Cầu Lông Yonex BAG525B1512Z",693000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bag525b1512z_1780543565.webp","https://shopvnb.com/balo-cau-long-yonex-bag525b1512z.html"],
        ["Balo Cầu Lông Yonex BAG725B0412Z - Surf The Web/Star White Chính Hãng",1069000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-yonex-bag725b0412z-surf-the-web-star-white-chinh-hang_1780543121.webp","https://shopvnb.com/balo-cau-long-yonex-bag725b0412z-surf-the-web-star-white-chinh-hang.html"],
        ["Balo Cầu Lông Yonex BAG525B1212Z",693000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bag525b1212z_1780602344.webp","https://shopvnb.com/balo-cau-long-yonex-bag525b1212z.html"],
        ["Balo Cầu Lông Yonex BAG225B1312",749000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bag324b2012_1753210686.webp","https://shopvnb.com/balo-cau-long-yonex-bag225b1312.html"],
        ["Balo Cầu Lông Yonex BAG324B1012",479000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bag324b1012_1752542639.webp","https://shopvnb.com/balo-cau-long-yonex-bag324b1012.html"],
        ["Balo Cầu Lông Yonex BAG324B0512",396000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bag324b0512_1752536551.webp","https://shopvnb.com/balo-cau-long-yonex-bag324b0512.html"],
        ["Balo Cầu Lông Yonex BAG524B0412Z",739000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bag524b0412z_1740359814.webp","https://shopvnb.com/balo-cau-long-yonex-bag524b0412z.html"],
        ["Balo Cầu Lông Yonex BAG524B0312Z",689000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bag524b0312z_1740359211.webp","https://shopvnb.com/balo-cau-long-yonex-bag524b0312z.html"],
        ["Balo Cầu Lông Yonex BAG524B0112Z",699000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bag524b0112z_1740358780.webp","https://shopvnb.com/balo-cau-long-yonex-bag524b0112z.html"],
        ["Balo Cầu Lông Yonex 003U (GC)",350000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-003u-gc_1737754775.webp","https://shopvnb.com/balo-cau-long-yonex-003u-gc.html"],
        ["Balo Cầu Lông Yonex BA272CR (GC)",670000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-ba272cr-gc_1737767688.webp","https://shopvnb.com/balo-cau-long-yonex-ba272cr-gc.html"],
        ["Balo Cầu Lông Yonex BP006 (GC)",760000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/balo-cau-long-yonex-bp006-gc_1738541244.webp","https://shopvnb.com/balo-cau-long-yonex-bp006-gc.html"]
    ]
};

Object.entries(yonexBottomsAndBackpacks).forEach(([categoryCode, products]) => {
    products.forEach(([name, price, image, sourceUrl]) => {
        if (mockProducts.some(product => product.name === name)) return;
        mockProducts.push({ productCode: `SP${String(mockProducts.length + 1).padStart(3, "0")}`, name, categoryCode, image, images: [image, image, image, image], importPrice: price, salePrice: null, originalPrice: null, sourceUrl, sourceVerified: true, stock: 50, isHidden: false });
    });
});

const brandClothingAndBagsVerified = {
    CAT03: [
        ["Áo Cầu Lông Victor 2115 Nữ - Tím",160000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-2115-nu-trang-xanh_1749776996.webp","https://shopvnb.com/ao-cau-long-victor-2115-nu-tim.html"],
        ["Áo Cầu Lông Victor AT-71000M - Xanh Chuối Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-at-7100m-xanh-chuoi-chinh-hang_1775867196.webp","https://shopvnb.com/ao-cau-long-victor-at-7100m-xanh-chuoi-chinh-hang.html"],
        ["Áo Cầu Lông Victor T-6027R - Xanh Lá Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-t-6027r-xanh-la-chinh-hang_1775867384.webp","https://shopvnb.com/ao-cau-long-victor-t-6027r-xanh-la-chinh-hang.html"],
        ["Áo Cầu Lông Victor S-4006J - Trắng Tím Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-s-4006j-trang-tim-chinh-hang_1775869390.webp","https://shopvnb.com/ao-cau-long-victor-s-4006j-trang-tim-chinh-hang.html"],
        ["Áo Cầu Lông Victor T-6005JF - Tím Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-t-6005jf-tim-chinh-hang_1775183728.webp","https://shopvnb.com/ao-cau-long-victor-t-6005jf-tim-chinh-hang.html"],
        ["Áo Cầu Lông Victor S-6101FE - Vàng Xanh Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-s-6101fe-vang-xanh-chinh-hang_1775872968.webp","https://shopvnb.com/ao-cau-long-victor-s-6101fe-vang-xanh-chinh-hang.html"],
        ["Áo Cầu Lông Victor S-6607E - Vàng Xanh Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-s-6607e-vang-xanh-chinh-hang_1775868376.webp","https://shopvnb.com/ao-cau-long-victor-s-6607e-vang-xanh-chinh-hang.html"],
        ["Áo Cầu Lông Victor T-700161 - Xanh Cam Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-t-700161-xanh-cam-chinh-hang_1775867986.webp","https://shopvnb.com/ao-cau-long-victor-t-700161-xanh-cam-chinh-hang.html"],
        ["Áo Cầu Lông Victor S-5010Q - Hồng Đỏ Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-s-5010q-hong-do-chinh-hang_1775872831.webp","https://shopvnb.com/ao-cau-long-victor-s-5010q-hong-do-chinh-hang.html"],
        ["Áo Cầu Lông Victor S-6607F - Xanh Dương Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-s-6607f-xanh-duong-chinh-hang_1775868226.webp","https://shopvnb.com/ao-cau-long-victor-s-6607f-xanh-duong-chinh-hang.html"],
        ["Áo Cầu Lông Victor S-5008J - Nâu Tím Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-s-50085j-nau-tim-chinh-hang_1775869663.webp","https://shopvnb.com/ao-cau-long-victor-s-50085j-nau-tim-chinh-hang.html"],
        ["Áo Cầu Lông Victor AT-7000F - Xanh Dương Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-at-7000f-xanh-duong-chinh-hang_1775869269.webp","https://shopvnb.com/ao-cau-long-victor-at-7000f-xanh-duong-chinh-hang.html"],
        ["Áo Cầu Lông Victor S-3502Q - Hồng Đậm Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-s-3502q-hong-dam-chinh-hang_1775185055.webp","https://shopvnb.com/ao-cau-long-victor-s-3502q-hong-dam-chinh-hang.html"],
        ["Áo Cầu Lông Victor T-5600Q -Hồng Đen Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-t-5600q-hong-den-chinh-hang_1775868916.webp","https://shopvnb.com/ao-cau-long-victor-t-5600q-hong-den-chinh-hang.html"],
        ["Áo Cầu Lông Victor S-5006D - Đỏ Cam Chính Hãng",250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-victor-s-5006d-do-cam-chinh-hang_1775868660.webp","https://shopvnb.com/ao-cau-long-victor-s-5006d-do-cam-chinh-hang.html"]
    ],
    CAT06: [
        ["Balo Cầu Lông Victor BR5072 C026 Chính Hãng",1168000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br5072-c026-chinh-hang_1787772288.webp","https://shopvnb.com/balo-cau-long-victor-br5072-c026-chinh-hang.html"],
        ["Balo Cầu Lông Victor BR7009 AR - Trắng Xanh Chính Hãng",1107000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br7009-ar-trang-xanh-chinh-hang_1787772125.webp","https://shopvnb.com/balo-cau-long-victor-br7009-ar-trang-xanh-chinh-hang.html"],
        ["Balo Cầu Lông Victor BR7009 A - Trắng Chính Hãng",1107000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br7009-a-trang-chinh-hang_1787772130.webp","https://shopvnb.com/balo-cau-long-victor-br7009-a-trang-chinh-hang.html"],
        ["Balo Cầu Lông Victor BR5042 EX/A - Trắng Đỏ Chính Hãng",972000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br5042-ex-a-trang-do-chinh-hang_1763151637.webp","https://shopvnb.com/balo-cau-long-victor-br5042-ex-a-trang-do-chinh-hang.html"],
        ["Balo Cầu Lông Victor BR9016 FM - Xanh Chính Hãng",1450000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br9016-fm-xanh-chinh-hang_1777425564.webp","https://shopvnb.com/balo-cau-long-victor-br9016-fm-xanh-chinh-hang.html"],
        ["Balo Cầu Lông Victor BR9016 AJ - Trắng Chính Hãng",1450000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br9016-aj-trang-chinh-hang_1777425571.webp","https://shopvnb.com/balo-cau-long-victor-br9016-aj-trang-chinh-hang.html"],
        ["Balo Cầu Lông Victor BR5039VBC AF - Trắng Xanh Chính Hãng",1250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br5039vbc-bd-trang-xanh-chinh-hang_1768792573.webp","https://shopvnb.com/balo-cau-long-victor-br5039vbc-bd-trang-xanh-chinh-hang.html"],
        ["Balo Cầu Lông Victor BR5051 CNY - Trắng Đỏ Chính Hãng",1280000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br5051-cny-trang-do-chinh-hang_1768790847.webp","https://shopvnb.com/balo-cau-long-victor-br5051-cny-trang-do-chinh-hang.html"],
        ["Balo Cầu Lông Victor BR5043 AM - Trắng Xanh Chính Hãng",1050000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br5043-am-trang-xanh-chinh-hang_1763151321.webp","https://shopvnb.com/balo-cau-long-victor-br5043-am-trang-xanh-chinh-hang.html"],
        ["Balo Cầu Lông Victor BR5056 SW AJ Chính Hãng",1430000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br5026-sw-aj_1758243686.webp","https://shopvnb.com/balo-cau-long-victor-br5056-sw-aj.html"],
        ["Balo Cầu Lông Victor BR5039 DBZ G - Xanh Chính Hãng",1250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br5039-dbz-g-xanh_1753233938.webp","https://shopvnb.com/balo-cau-long-victor-br5039-dbz-g-xanh.html"],
        ["Balo Cầu Lông Victor BR5039 DBZ C - Đen Chính Hãng",1250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br5039-dbz-c-den_1753233842.webp","https://shopvnb.com/balo-cau-long-victor-br5039-dbz-c-den.html"],
        ["Balo Cầu Lông Victor BR5045 UTM AM - Trắng Xanh Chính Hãng",1150000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/balo-cau-long-victor-br5045-utm-am-trang-xanh_1753231862.webp","https://shopvnb.com/balo-cau-long-victor-br5045-utm-am-trang-xanh.html"]
    ],
    CAT07: [
        ["Túi Cầu Lông Victor BR2205",1000000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-victor-br2205_1783470548.webp","https://shopvnb.com/tui-cau-long-victor-br2205.html"],
        ["Túi Cầu Lông Victor BR5660",920000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-victor-br5660_1783472269.webp","https://shopvnb.com/tui-cau-long-victor-br5660.html"],
        ["Túi Cầu Lông Victor BR5260",1000000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-victor-br5260_1783470441.webp","https://shopvnb.com/tui-cau-long-victor-br5260.html"],
        ["Túi Cầu Lông Victor AG-150",805000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-victor-ag-150_1783470391.webp","https://shopvnb.com/tui-cau-long-victor-ag-150.html"],
        ["Túi Cầu Lông Victor BR9216 AJ - Trắng Tím Chính Hãng",1750000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br9216-aj-trang-tim-chinh-hang_1777425295.webp","https://shopvnb.com/tui-cau-long-victor-br9216-aj-trang-tim-chinh-hang.html"],
        ["Túi Cầu Lông Victor BR5639VBC AF - Trắng Xanh Chính Hãng",1500000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5639vbc-bd-trang-xanh-chinh-hang_1768792070.webp","https://shopvnb.com/tui-cau-long-victor-br5639vbc-bd-trang-xanh-chinh-hang.html"],
        ["Túi Cầu Lông Victor BR5651CNY - Trắng Đỏ Chính Hãng",1530000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5651cny-trang-do-chinh-hang_1768789260.webp","https://shopvnb.com/tui-cau-long-victor-br5651cny-trang-do-chinh-hang.html"],
        ["Túi Cầu Lông Victor BR5642 EX/A - Trắng Đỏ Chính Hãng",1152000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5642-ex-a-trang-do-chinh-hang_1763149273.webp","https://shopvnb.com/tui-cau-long-victor-br5642-ex-a-trang-do-chinh-hang.html"],
        ["Túi Cầu Lông Victor BR5643 AM - Trắng Xanh Chính Hãng",1230000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5043-am-trang-xanh-chinh-hang_1763148987.webp","https://shopvnb.com/tui-cau-long-victor-br5043-am-trang-xanh-chinh-hang.html"],
        ["Túi Cầu Lông Victor BR5643 AT - Trắng Tím Chính Hãng",1230000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5043-at-trang-tim-chinh-hang_1763148883.webp","https://shopvnb.com/tui-cau-long-victor-br5043-at-trang-tim-chinh-hang.html"],
        ["Túi Cầu Lông Victor BR5658 HYQ AM Chính Hãng",1430000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5658-hyq-am_1758244201.webp","https://shopvnb.com/tui-cau-long-victor-br5658-hyq-am.html"],
        ["Túi Cầu Lông Victor BR5648 CO25 - Trắng Chính Hãng",1250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5648-co25-trang_1755459755.webp","https://shopvnb.com/tui-cau-long-victor-br5648-co25-trang.html"],
        ["Túi Cầu Lông Victor BR5645 UTM CF - Xanh Đen Chính Hãng",1200000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5645-utm-cf-xanh-den-chinh-hang_1753233754.webp","https://shopvnb.com/tui-cau-long-victor-br5645-utm-cf-xanh-den-chinh-hang.html"],
        ["Túi Cầu Lông Victor BR5639DBZ G - Xanh Đen Chính Hãng",1600000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5639dbz-g-xanh-den_1750193295.webp","https://shopvnb.com/tui-cau-long-victor-br5639dbz-g-xanh-den.html"],
        ["Túi Cầu Lông Victor BR5639DBZ O - Cam Xanh Chính Hãng",1600000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-victor-br5639dbz-o-cam-xanh_1750193052.webp","https://shopvnb.com/tui-cau-long-victor-br5639dbz-o-cam-xanh.html"]
    ],
    CAT07_LINING: [
        ["Túi Cầu Lông Lining ABLW043",879000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-lining-ablw043_1787864151.webp","https://shopvnb.com/tui-cau-long-lining-ablw043.html"],
        ["Túi Cầu Lông Lining P-ABLV029-2 Chính Hãng",1150000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-p-ablv029-2_1756930002.webp","https://shopvnb.com/tui-cau-long-lining-p-ablv029-2.html"],
        ["Túi Cầu Lông Lining ABLW031-1 Chính Hãng",1416000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1tui-cau-long-lining-ablw031-1-chinh-hang_1787778409.webp","https://shopvnb.com/tui-cau-long-lining-ablw031-1-chinh-hang.html"],
        ["Túi Cầu Lông Lining P-ABLV029-3 Chính Hãng",1150000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-p-ablv029-3_1756930128.webp","https://shopvnb.com/tui-cau-long-lining-p-ablv029-3.html"],
        ["Túi Cầu Lông Lining P-ABLV029-1 Chính Hãng",1170000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-p-ablv029-1_1756929722.webp","https://shopvnb.com/tui-cau-long-lining-p-ablv029-1.html"],
        ["Túi Cầu Lông Lining P-ABLU067-1 Chính Hãng",1990000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-p-ablu067-1_1756928375.webp","https://shopvnb.com/tui-cau-long-lining-p-ablu067-1.html"],
        ["Túi Cầu Lông Lining ABJU013-1 Chính Hãng",2400000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-abju013-1-chinh-hang_1710529668.webp","https://shopvnb.com/tui-cau-long-lining-abju013-1-chinh-hang.html"],
        ["Túi Cầu Lông Lining ABJM122-3 Chính Hãng",891000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-abjm122-3-chinh-hang_1696884154.webp","https://shopvnb.com/tui-cau-long-lining-abjm122-3-chinh-hang.html"],
        ["Túi Cầu Lông Lining ABDS235-5 Chính Hãng",1350000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-abds235-5-chinh-hang_1738885955.webp","https://shopvnb.com/tui-cau-long-lining-abds235-5-chinh-hang.html"],
        ["Túi Cầu Lông Lining ABJP 078-3 Chính Hãng",1260000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-cau-long-lining-abjp-078-3-chinh-hang-1.webp","https://shopvnb.com/tui-cau-long-lining-abjp-078-3-chinh-hang.html"],
        ["Túi Cầu Lông Lining ABLW037-3 Chính Hãng",1250000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1tui-cau-long-lining-ablw037-3-chinh-hang_1787779349.webp","https://shopvnb.com/tui-cau-long-lining-ablw037-3-chinh-hang.html"],
        ["Túi Cầu Lông Lining ABJU013-2 Chính Hãng",3000000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-abju013-2-chinh-hang_1758317454.webp","https://shopvnb.com/tui-cau-long-lining-abju013-2-chinh-hang.html"],
        ["Túi Cầu Lông Lining P-ABLU067-3 Chính Hãng",1990000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-p-ablu067-3_1765163236.webp","https://shopvnb.com/tui-cau-long-lining-p-ablu067-3.html"],
        ["Túi Cầu Lông Lining P-ABDU321-2 Chính Hãng",1300000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-p-abdu321-2-chinh-hang_1738981342.webp","https://shopvnb.com/tui-cau-long-lining-p-abdu321-2-chinh-hang.html"],
        ["Túi Cầu Lông Lining P-ABDU321-1 Chính Hãng",1300000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-cau-long-lining-p-abdu321-1-chinh-hang_1738980945.webp","https://shopvnb.com/tui-cau-long-lining-p-abdu321-1-chinh-hang.html"]
    ],
    CAT08: []
};

Object.entries(brandClothingAndBagsVerified).forEach(([categoryCode, products]) => {
    const actualCategoryCode = categoryCode === "CAT07_LINING" ? "CAT07" : categoryCode;
    products.forEach(([name, price, image, sourceUrl]) => {
        if (mockProducts.some(product => product.name === name)) return;
        mockProducts.push({ productCode: `SP${String(mockProducts.length + 1).padStart(3, "0")}`, name, categoryCode: actualCategoryCode, image, images: [image, image, image, image], importPrice: price, salePrice: null, originalPrice: null, sourceUrl, sourceVerified: true, stock: 50, isHidden: false });
    });
});

const additionalBrandProducts = {
    CAT01: [
        ["Vợt Cầu Lông Kawasaki P37",970000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-p37_1740601428.jpg","https://shopvnb.com/vot-cau-long-kawasaki-p37.html"],
        ["Vợt Cầu Lông Kawasaki 3570",950000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-3570_1741222650.webp","https://shopvnb.com/vot-cau-long-kawasaki-3570.html"],
        ["Vợt Cầu Lông Kawasaki Porcelain Q5",900000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-porcelain-q5_1741227435.webp","https://shopvnb.com/vot-cau-long-kawasaki-porcelain-q5.html"],
        ["Vợt Cầu Lông Kawasaki 1973",740000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-1973_1741226831.webp","https://shopvnb.com/vot-cau-long-kawasaki-1973.html"],
        ["Vợt Cầu Lông Kawasaki Passion P23",746000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-passion-p23_1741393213.webp","https://shopvnb.com/vot-cau-long-kawasaki-passion-p23.html"],
        ["Vợt Cầu Lông Kawasaki P25",740000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-p25_1741223346.webp","https://shopvnb.com/vot-cau-long-kawasaki-p25.html"],
        ["Vợt Cầu Lông Kawasaki Passion P25",600000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-passion-p25_1741395810.webp","https://shopvnb.com/vot-cau-long-kawasaki-passion-p25.html"],
        ["Vợt Cầu Lông Kawasaki Aurora",680000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-aurora_1743195690.webp","https://shopvnb.com/vot-cau-long-kawasaki-aurora.html"],
        ["Vợt Cầu Lông Kawasaki Super Light K5",750000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-super-light-k5_1740614015.webp","https://shopvnb.com/vot-cau-long-kawasaki-super-light-k5.html"],
        ["Vợt Cầu Lông Kawasaki Glacier",800000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-glacier_1743103552.webp","https://shopvnb.com/vot-cau-long-kawasaki-glacier.html"],
        ["Vợt Cầu Lông Kawasaki P26",740000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-p26_1740601291.jpg","https://shopvnb.com/vot-cau-long-kawasaki-p26.html"],
        ["Vợt Cầu Lông Kawasaki Explore 2023",620000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kawasaki-explore-2023_1740537223.jpg","https://shopvnb.com/vot-cau-long-kawasaki-explore-2023.html"],
        ["Vợt Cầu Lông Kawasaki Blossom Pink Chính Hãng",1440000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/set-vot-cau-long-kawasaki-blossom-pink-chinh-hang_1694051459.webp","https://shopvnb.com/set-vot-cau-long-kawasaki-blossom-pink-chinh-hang.html"],
        ["Vợt Cầu Lông Apacs One Malaysia",687000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-apacs-one-malaysia_1754430300.webp","https://shopvnb.com/vot-cau-long-apacs-one-malaysia.html"],
        ["Vợt Cầu Lông Apacs Fantala Pro 101",2500000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-apacs-fantala-pro-101_1740616474.webp","https://shopvnb.com/vot-cau-long-apacs-fantala-pro-101.html"],
        ["Vợt Cầu Lông Apacs Ziggler LHI Pro III",1880000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-apacs-ziggler-lhi-pro-iii_1782328104.webp","https://shopvnb.com/vot-cau-long-apacs-ziggler-lhi-pro-iii.html"],
        ["Vợt Cầu Lông Apacs Versus Pro New",2400000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-apacs-versus-pro-new_1740600127.jpg","https://shopvnb.com/vot-cau-long-apacs-versus-pro-new.html"],
        ["Vợt Cầu Lông Apacs Honor Pro New",2500000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-apacs-honor-pro-new_1740600001.jpg","https://shopvnb.com/vot-cau-long-apacs-honor-pro-new.html"],
        ["Vợt Cầu Lông Apacs Blizzard Pro New",2500000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-apacs-blizzard-pro-new_1740600074.jpg","https://shopvnb.com/vot-cau-long-apacs-blizzard-pro-new.html"],
        ["Vợt Cầu Lông Apacs EDGE SABER 10",650000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-apacs-edge-saber-10_1741290946.webp","https://shopvnb.com/vot-cau-long-apacs-edge-saber-10.html"],
        ["Vợt Cầu Lông Apacs Z-Power 800 RP+ Chính Hãng",1000000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-apacs-z-power-800-rp-chinh-hang_1698628312.webp","https://shopvnb.com/vot-cau-long-apacs-z-power-800-rp-chinh-hang.html"],
        ["Vợt Cầu Lông Apacs Z-Power 800 RP+",890000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-apacs-z-power-800-rp-_1741287712.webp","https://shopvnb.com/vot-cau-long-apacs-z-power-800-rp-.html"],
        ["Vợt Cầu Lông Apacs Honor Pro Chính Hãng",2500000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-apacs-honor-pro-chinh-hang.-1.webp","https://shopvnb.com/vot-cau-long-apacs-honor-pro-chinh-hang.html"],
        ["Vợt Cầu Lông Apacs Blizzard Pro Chính Hãng",2500000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-apacs-blizzard-pro-chinh-hang_1.webp","https://shopvnb.com/vot-cau-long-apacs-blizzard-pro-chinh-hang.html"],
        ["Vợt Cầu Lông Apacs Tantrum 300 II Chính Hãng",1490000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-apacs-tantrum-300-ii-chinh-hang.webp","https://shopvnb.com/vot-cau-long-apacs-tantrum-300-ii-chinh-hang.html"]
    ],
    CAT08: [
        ["Vớ Cầu Lông Victor SK190 A - Trắng Chính Hãng",105000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk190-a-trang-chinh-hang_1789786557.webp","https://shopvnb.com/vo-cau-long-victor-sk190-a-trang-chinh-hang.html"],
        ["Vớ Cầu Lông Victor SK190 C - Đen Chính Hãng",105000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk190-c-den-chinh-hang_1789786552.webp","https://shopvnb.com/vo-cau-long-victor-sk190-c-den-chinh-hang.html"],
        ["Vớ Cầu Lông Victor SK1001 F - Trắng Xanh Chính Hãng",97000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1001-f-trang-xanh-chinh-hang_1789786879.webp","https://shopvnb.com/vo-cau-long-victor-sk1001-f-trang-xanh-chinh-hang.html"],
        ["Vớ Cầu Lông Victor SK1001 H - Xám Chính Hãng",100000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1001-h-xam-chinh-hang_1789786874.webp","https://shopvnb.com/vo-cau-long-victor-sk1001-h-xam-chinh-hang.html"],
        ["Băng Trán Cầu Lông Pili PHEW25 - Đỏ Chính Hãng",100000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/bang-tran-cau-long-pili-phew25-do-chinh-hang_1790366834.webp","https://shopvnb.com/bang-tran-cau-long-pili-phew25-do-chinh-hang.html"],
        ["Băng Trán Cầu Lông Pili PHEW25 - Hồng Chính Hãng",100000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/bang-tran-cau-long-pili-phew25-hong-chinh-hang_1790366859.webp","https://shopvnb.com/bang-tran-cau-long-pili-phew25-hong-chinh-hang.html"],
        ["Băng Trán Cầu Lông Pili PHEW25 - Navy Chính Hãng",100000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/bang-tran-cau-long-pili-phew25-navy-chinh-hang_1790366847.webp","https://shopvnb.com/bang-tran-cau-long-pili-phew25-navy-chinh-hang.html"],
        ["Băng Trán Cầu Lông Pili PHEW25 - Xanh Lá Chính Hãng",100000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/bang-tran-cau-long-pili-phew25-xanh-la-chinh-hang_1790366853.webp","https://shopvnb.com/bang-tran-cau-long-pili-phew25-xanh-la-chinh-hang.html"],
        ["Băng Trán Cầu Lông Pili PHEW25 - Đen Chính Hãng",100000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/bang-tran-cau-long-pili-phew25-den-chinh-hang_1790366839.webp","https://shopvnb.com/bang-tran-cau-long-pili-phew25-den-chinh-hang.html"],
        ["Vớ Cầu Lông Victor SK1503 H - Xám Chính Hãng",100000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1503-h-xam-chinh-hang_1789786443.webp","https://shopvnb.com/vo-cau-long-victor-sk1503-h-xam-chinh-hang.html"],
        ["Vớ Cầu Lông Victor SK1503 A - Trắng Xám Chính Hãng",100000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1503-a-trang-xam-chinh-hang_1789786445.webp","https://shopvnb.com/vo-cau-long-victor-sk1503-a-trang-xam-chinh-hang.html"],
        ["Vớ Cầu Lông Victor SK1024 A - Trắng Xám Chính Hãng",100000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1024-a-trang-xam-chinh-hang_1789786324.webp","https://shopvnb.com/vo-cau-long-victor-sk1024-a-trang-xam-chinh-hang.html"],
        ["Vớ Cầu Lông Victor SK1024 V - Xám Kem Chính Hãng",100000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vo-cau-long-victor-sk1024-v-xam-kem-chinh-hang_1789786329.webp","https://shopvnb.com/vo-cau-long-victor-sk1024-v-xam-kem-chinh-hang.html"],
        ["Set Băng Chặn Mồ Hôi Yonex WBD11524 WB11 Chính Hãng",110000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/set-bang-chan-mo-hoi-yonex-wbd11524-wb11-chinh-hang_1789784086.webp","https://shopvnb.com/set-bang-chan-mo-hoi-yonex-wbd11524-wb11-chinh-hang.html"]
    ],
    CAT01_MIZUNO: [
        ["Vợt Cầu Lông Mizuno Acrospeed 8",3150000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-acrospeed-8_1745613718.webp","https://shopvnb.com/vot-cau-long-mizuno-acrospeed-8.html"],
        ["Vợt Cầu Lông Mizuno Altius 5.3 Ryũjin",3640000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-altius-5-3-ryujin_1740683222.jpg","https://shopvnb.com/vot-cau-long-mizuno-altius-5-3-ryujin.html"],
        ["Vợt Cầu Lông Mizuno Dynalite 770",1560000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-dynalite-770_1740624828.jpg","https://shopvnb.com/vot-cau-long-mizuno-dynalite-770.html"],
        ["Vợt Cầu Lông Mizuno Altair T329",1190000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-altair-t329_1743191447.webp","https://shopvnb.com/vot-cau-long-mizuno-altair-t329.html"],
        ["Vợt Cầu Lông Mizuno BDSS Altius Sonic",3756000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-bdss-altius-sonic-den-chinh-hang_1752264409.webp","https://shopvnb.com/vot-cau-long-mizuno-bdss-altius-sonic.html"],
        ["Vợt Cầu Lông Mizuno Carbo Pro 837",1040000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-carbo-pro-837-do-den-chinh-hang_1752261354.webp","https://shopvnb.com/vot-cau-long-mizuno-carbo-pro-837.html"],
        ["Vợt Cầu Lông Mizuno Carbo Pro 835",1040000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-carbo-pro-835-xanh-den-chinh-hang_1752258182.webp","https://shopvnb.com/vot-cau-long-mizuno-carbo-pro-835.html"],
        ["Vợt Cầu Lông Mizuno Powerblade 597",1040000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-powerblade-597_1763327620.webp","https://shopvnb.com/vot-cau-long-mizuno-powerblade-597.html"],
        ["Vợt Cầu Lông Mizuno Razorblade 509",1040000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-razorblade-509_1753323709.webp","https://shopvnb.com/vot-cau-long-mizuno-razorblade-509.html"],
        ["Vợt Cầu Lông Mizuno Acrospeed 6",3700000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-acrospeed-6_1752612594.webp","https://shopvnb.com/vot-cau-long-mizuno-acrospeed-6.html"],
        ["Vợt Cầu Lông Mizuno Accel Arc 767 - Đen Vàng Chính Hãng",1040000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-mizuno-accel-arc-767-den-vang-chinh-hang_1748290362.webp","https://shopvnb.com/vot-cau-long-mizuno-accel-arc-767-den-vang-chinh-hang.html"],
        ["Vợt Cầu Lông Mizuno Altius 5.1 Kinryũ",3640000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-altius-5-1-kinryu_1740682883.jpg","https://shopvnb.com/vot-cau-long-mizuno-altius-5-1-kinryu.html"],
        ["Vợt Cầu Lông Mizuno XYST 07",3033000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-mizuno-xyst-07_1740682908.jpg","https://shopvnb.com/vot-cau-long-mizuno-xyst-07.html"]
    ],
    CAT01_VS: [
        ["Vợt Cầu Lông VS One Piece Chopper Chính Hãng",1760000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vs-one-piece-chopper-chinh-hang-1_1779932932.webp","https://shopvnb.com/vot-cau-long-vs-one-piece-chopper-chinh-hang.html"],
        ["Vợt Cầu Lông VS One Piece Nami Chính Hãng",1760000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vs-one-piece-nami-chinh-hang-1_1779932259.webp","https://shopvnb.com/vot-cau-long-vs-one-piece-nami-chinh-hang.html"],
        ["Vợt Cầu Lông VS One Piece Usopp Chính Hãng",1760000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vs-one-piece-usopp-chinh-hang-1_1779933803.webp","https://shopvnb.com/vot-cau-long-vs-one-piece-usopp-chinh-hang.html"],
        ["Vợt Cầu Lông VS One Piece Sanji Chính Hãng",1760000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vs-one-piece-sanji-chinh-hang-1_1779936058.webp","https://shopvnb.com/vot-cau-long-vs-one-piece-sanji-chinh-hang.html"],
        ["Vợt Cầu Lông VS One Piece Zoro Chính Hãng",1760000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vs-one-piece-zoro-chinh-hang-1_1779935003.webp","https://shopvnb.com/vot-cau-long-vs-one-piece-zoro-chinh-hang.html"],
        ["Vợt Cầu Lông VS One Piece Luffy Chính Hãng",1760000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vs-one-piece-luffy-chinh-hang-1_1779934449.webp","https://shopvnb.com/vot-cau-long-vs-one-piece-luffy-chinh-hang.html"],
        ["Vợt Cầu Lông VS Energetic Long Mã Chính Hãng",1385000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/set-vot-cau-long-vs-energetic-long-ma-chinh-hang_1771013694.webp","https://shopvnb.com/set-vot-cau-long-vs-energetic-long-ma-chinh-hang.html"],
        ["Vợt Cầu Lông VS TURBO 300 Chính Hãng",650000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vs-turbo-300-chinh-hang_1771008632.webp","https://shopvnb.com/vot-cau-long-vs-turbo-300-chinh-hang.html"],
        ["Vợt Cầu Lông VS Goddess 8 Chính Hãng",1080000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vs-goddess-8-chinh-hang_1771008130.webp","https://shopvnb.com/vot-cau-long-vs-goddess-8-chinh-hang.html"],
        ["Vợt Cầu Lông VS Ultra Woven 30 Chính Hãng",960000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vs-ultra-woven-30-chinh-hang_1771006315.webp","https://shopvnb.com/vot-cau-long-vs-ultra-woven-30-chinh-hang.html"],
        ["Vợt Cầu Lông VS Ace Power 77 Chính Hãng",765000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vs-ace-power-77-chinh-hang_1771006607.webp","https://shopvnb.com/vot-cau-long-vs-ace-power-77-chinh-hang.html"],
        ["Vợt Cầu Lông VS Flexus 700 Chính Hãng",1800000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vs-flexus-700-chinh-hang_1771006672.webp","https://shopvnb.com/vot-cau-long-vs-flexus-700-chinh-hang.html"],
        ["Vợt Cầu Lông VS Blazers100 Chính Hãng",650000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vs-blazers100-chinh-hang_1771011918.webp","https://shopvnb.com/vot-cau-long-vs-blazers100-chinh-hang.html"]
    ],
    CAT01_PROACE: [
        ["Vợt Cầu Lông Proace Stroke 318III",1000000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-proace-stroke-318iii_1741286274.webp","https://shopvnb.com/vot-cau-long-proace-stroke-318iii.html"],
        ["Vợt Cầu Lông Proace Vip 15",490000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-proace-vip-15_1741287327.webp","https://shopvnb.com/vot-cau-long-proace-vip-15.html"],
        ["Vợt Cầu Lông Proace Sabre 28",2000000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-proace-sabre-28_1741286672.webp","https://shopvnb.com/vot-cau-long-proace-sabre-28.html"],
        ["Vợt Cầu Lông Proace Stroke 316III",900000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-proace-stroke-316iii_1778790573.webp","https://shopvnb.com/vot-cau-long-proace-stroke-316iii.html"],
        ["Vợt Cầu Lông Proace Abs-Power 1800",4900000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-proace-abs-power-1800_1741292378.webp","https://shopvnb.com/vot-cau-long-proace-abs-power-1800.html"],
        ["Vợt Cầu Lông Proace Sniper 1000 Chính Hãng",1990000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-proace-sniper-1000-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-proace-sniper-1000-chinh-hang.html"],
        ["Vợt Cầu Lông Proace Stroke 318 II Chính Hãng",1039000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-proace-stroke-318-ii_1735522920.webp","https://shopvnb.com/vot-cau-long-proace-stroke-318-ii.html"],
        ["Vợt Cầu Lông Proace Stroke 316 II Chính Hãng",900000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-proace-stroke-316-ii_1735523120.webp","https://shopvnb.com/vot-cau-long-proace-stroke-316-ii.html"],
        ["Vợt Cầu Lông Proace SDS 350 Chính Hãng",1220000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-proace-sds-350-2.webp","https://shopvnb.com/vot-cau-long-proace-sds-350.html"],
        ["Vợt Cầu Lông Proace Feather 5 Chính Hãng",1950000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-proace-feather-5-1.webp","https://shopvnb.com/vot-cau-long-proace-feather-5.html"]
    ],
    CAT01_KUMPOO: [
        ["Vợt Cầu Lông Kumpoo QF-13",739000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kumpoo-qf-13_1786156501.webp","https://shopvnb.com/vot-cau-long-kumpoo-qf-13.html"],
        ["Vợt Cầu Lông Kumpoo QF-12",690000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kumpoo-qf-12_1786156353.webp","https://shopvnb.com/vot-cau-long-kumpoo-qf-12.html"],
        ["Vợt Cầu Lông Kumpoo AK7 II Chính Hãng",790000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-kumpoo-ak7-ii-chinh-hang_1786152721.webp","https://shopvnb.com/vot-cau-long-kumpoo-ak7-ii-chinh-hang.html"],
        ["Vợt Cầu Lông Kumpoo QF-10",739000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kumpoo-qf-10_1786155936.webp","https://shopvnb.com/vot-cau-long-kumpoo-qf-10.html"],
        ["Vợt Cầu Lông Kumpoo Trẻ Em Poping Candy Chính Hãng",850000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/cap-vot-cau-long-kumpoo-tre-em-poping-candy-chinh-hang_1788144288.webp","https://shopvnb.com/cap-vot-cau-long-kumpoo-tre-em-poping-candy-chinh-hang.html"],
        ["Vợt Cầu Lông Kumpoo Ride The Wind S - Xám Chính Hãng",1500000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-kumpoo-ride-the-wind-s-xam-chinh-hang_1786151232.webp","https://shopvnb.com/vot-cau-long-kumpoo-ride-the-wind-s-xam-chinh-hang.html"],
        ["Vợt Cầu Lông Kumpoo Pines II",950000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kumpoo-pines-ii_1786156149.webp","https://shopvnb.com/vot-cau-long-kumpoo-pines-ii.html"],
        ["Vợt Cầu Lông Kumpoo Dream",938000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kumpoo-dream_1786156322.webp","https://shopvnb.com/vot-cau-long-kumpoo-dream.html"],
        ["Vợt Cầu Lông Kumpoo Lorie 10",670000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kumpoo-lorie-10_1786155764.webp","https://shopvnb.com/vot-cau-long-kumpoo-lorie-10.html"],
        ["Vợt Cầu Lông Kumpoo Shuriken Pro",690000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-kumpoo-shuriken-pro_1786156184.webp","https://shopvnb.com/vot-cau-long-kumpoo-shuriken-pro.html"],
        ["Vợt Cầu Lông Kumpoo Kunai Pro Chính Hãng",690000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-kumpoo-kunai-pro-chinh-hang_1786139042.webp","https://shopvnb.com/vot-cau-long-kumpoo-kunai-pro-chinh-hang.html"],
        ["Vợt Cầu Lông Kumpoo Blue Dome Chính Hãng",859000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-kumpoo-blue-dome-chinh-hang_1786146895.webp","https://shopvnb.com/vot-cau-long-kumpoo-blue-dome-chinh-hang.html"],
        ["Vợt Cầu Lông Kumpoo White Dew Chính Hãng",859000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-kumpoo-white-dew-chinh-hang_1786146752.webp","https://shopvnb.com/vot-cau-long-kumpoo-white-dew-chinh-hang.html"]
    ],
    CAT02_MIZUNO: [
        ["Giày Cầu Lông Mizuno Wave Claw 4",2475000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-wave-claw-4_1773802787.webp","https://shopvnb.com/giay-cau-long-mizuno-wave-claw-4.html"],
        ["Giày Cầu Lông Mizuno Wave Claw Pro 2",3900000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-wave-claw-pro-2-do-do-trang-chinh-hang-71ga245220_1756157771.webp","https://shopvnb.com/giay-cau-long-mizuno-wave-claw-pro-2.html"],
        ["Giày Cầu Lông Mizuno Cyclone Speed 5",1100000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-cyclone-speed-5_1737421314.webp","https://shopvnb.com/giay-cau-long-mizuno-cyclone-speed-5.html"],
        ["Giày Cầu Lông Mizuno Sky Blaster 4",1160000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-sky-blaster-4_1737418862.webp","https://shopvnb.com/giay-cau-long-mizuno-sky-blaster-4.html"],
        ["Giày Cầu Lông Mizuno Wave Thunderstorm",1790000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-wave-thunderstorm_1732927196.webp","https://shopvnb.com/giay-cau-long-mizuno-wave-thunderstorm.html"],
        ["Giày Cầu Lông Mizuno Wave Fang El 2",2500000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-wave-fang-el-2_1756152843.webp","https://shopvnb.com/giay-cau-long-mizuno-wave-fang-el-2.html"],
        ["Giày Cầu Lông Mizuno Wave Claw Neo 3",2080000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-wave-claw-neo-3_1732302857.webp","https://shopvnb.com/giay-cau-long-mizuno-wave-claw-neo-3.html"],
        ["Giày Cầu Lông Mizuno Wave Claw 3",2178000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-wave-claw-3_1732308108.webp","https://shopvnb.com/giay-cau-long-mizuno-wave-claw-3.html"],
        ["Giày Cầu Lông Mizuno Wave Fang Pro",3359000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-wave-fang-pro_1732308835.webp","https://shopvnb.com/giay-cau-long-mizuno-wave-fang-pro.html"],
        ["Giày Cầu Lông Mizuno Cyclone Speed 4",1450000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-cyclone-speed-4_1732329823.webp","https://shopvnb.com/giay-cau-long-mizuno-cyclone-speed-4.html"],
        ["Giày Cầu Lông Mizuno Sky Blaster 3",1525000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-sky-blaster-3_1732329972.webp","https://shopvnb.com/giay-cau-long-mizuno-sky-blaster-3.html"],
        ["Giày Cầu Lông Mizuno Thunder Blade Z",1790000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-thunder-blade-z_1732330170.webp","https://shopvnb.com/giay-cau-long-mizuno-thunder-blade-z.html"],
        ["Giày Cầu Lông Mizuno Wave Fang 2",2210000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-wave-fang-2_1732330300.webp","https://shopvnb.com/giay-cau-long-mizuno-wave-fang-2.html"]
    ],
    CAT02_VS: [
        ["Giày Cầu Lông VS VS6000PA Tím Chính Hãng",1400000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-vs-vs6000pa-tim-chinh-hang-1_1779918555.webp","https://shopvnb.com/giay-cau-long-vs-vs6000pa-tim-chinh-hang.html"],
        ["Giày Cầu Lông VS VS6000P Hồng Chính Hãng",1400000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-vs-vs6000p-hong-chinh-hang-1_1779918900.webp","https://shopvnb.com/giay-cau-long-vs-vs6000p-hong-chinh-hang.html"],
        ["Giày Cầu Lông VS One Piece VS710W Chính Hãng",1440000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-vs-one-piece-vs710w-chinh-hang-1_1779927654.webp","https://shopvnb.com/giay-cau-long-vs-one-piece-vs710w-chinh-hang.html"],
        ["Giày Cầu Lông VS VS620 Phoenix Chính Hãng",898000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-vs-vs620-phoenix-chinh-hang_1774396100.webp","https://shopvnb.com/giay-cau-long-vs-vs620-phoenix-chinh-hang.html"],
        ["Giày Cầu Lông VS VS6500 Trắng Chính Hãng",1550000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-vs-vs6500-trang-chinh-hang_1771012299.webp","https://shopvnb.com/giay-cau-long-vs-vs6500-trang-chinh-hang.html"],
        ["Giày Cầu Lông VS VS6000W Trắng Chính Hãng",1400000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-vs-vs6000w-trang-chinh-hang_1770943194.webp","https://shopvnb.com/giay-cau-long-vs-vs6000w-trang-chinh-hang.html"],
        ["Giày Cầu Lông VS VS230S Bạc Chính Hãng",990000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-vs-vs230s-bac-chinh-hang_1770942728.webp","https://shopvnb.com/giay-cau-long-vs-vs230s-bac-chinh-hang.html"],
        ["Giày Cầu Lông VS 610W Trắng Chính Hãng",812000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-vs-610w-trang-chinh-hang_1770941266.webp","https://shopvnb.com/giay-cau-long-vs-610w-trang-chinh-hang.html"],
        ["Giày Cầu Lông VS Kirin VS200A",1050000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-vs-kirin-vs200a_1741222088.jpg","https://shopvnb.com/giay-cau-long-vs-kirin-vs200a.html"],
        ["Giày Cầu Lông VS 168C Pro",790000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-vs-168c-pro_1741222066.jpg","https://shopvnb.com/giay-cau-long-vs-168c-pro.html"]
    ],
    CAT01_FLYPOWER: [
        ["Vợt Cầu Lông Flypower Gerhana 3 Chính Hãng",1290000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-flypower-gerhana-3-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-flypower-gerhana-3-chinh-hang.html"],
        ["Vợt Cầu Lông FlyPower Macan Chính Hãng",1300000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-flypower-macan-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-flypower-macan-chinh-hang.html"],
        ["Vợt Cầu Lông FlyPower TORNADO 800 Chính Hãng",2400000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-flypower-tornado-800-1.webp","https://shopvnb.com/vot-cau-long-flypower-tornado-800.html"],
        ["Vợt Cầu Lông FlyPower EL NINO 07 Chính Hãng",3200000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-flypower-el-nino-07-1.webp","https://shopvnb.com/vot-cau-long-flypower-el-nino-07.html"],
        ["Vợt Cầu Lông Flypower Rio Gold C1 Chính Hãng",2800000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-flypower-rio-gold-c1-chinh-hang%20copy.png","https://shopvnb.com/vot-cau-long-flypower-rio-gold-c1-chinh-hang.html"],
        ["Vợt Cầu Lông Flypower Ultra Force C3 Chính Hãng",1980000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-flypower-ultra-force-c3-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-flypower-ultra-force-c3-chinh-hang.html"],
        ["Vợt Cầu Lông Flypower Mahakam Chính Hãng",1600000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-flypower-mahakam-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-flypower-mahakam-chinh-hang.html"],
        ["Vợt Cầu Lông Flypower Komodo Chính Hãng",1300000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-flypower-komodo-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-flypower-komodo-chinh-hang.html"]
    ],
    CAT01_FORZA: [
        ["Vợt Cầu Lông Forza Precision TI-X1 Chính Hãng",1450000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-forza-precision-ti-x1-chinh-hang_1784862160.webp","https://shopvnb.com/vot-cau-long-forza-precision-ti-x1-chinh-hang.html"],
        ["Vợt Cầu Lông Forza Precision 72F Chính Hãng",1500000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-forza-precision-72f-chinh-hang_1784861997.webp","https://shopvnb.com/vot-cau-long-forza-precision-72f-chinh-hang.html"],
        ["Vợt Cầu Lông Forza HT Power 30-V2 Chính Hãng",1500000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-forza-ht-power-30-v2-chinh-hang_1784861566.webp","https://shopvnb.com/vot-cau-long-forza-ht-power-30-v2-chinh-hang.html"],
        ["Vợt Cầu Lông Forza Precision TI-X5 Chính Hãng",1900000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-forza-precision-ti-x5-chinh-hang_1784861001.webp","https://shopvnb.com/vot-cau-long-forza-precision-ti-x5-chinh-hang.html"],
        ["Vợt Cầu Lông Forza Mega Speed 70 Chính Hãng",1350000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-forza-mega-speed-70-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-forza-mega-speed-70-chinh-hang.html"],
        ["Vợt Cầu Lông Forza Nano Flex 3900 Chính Hãng",1550000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-forza-nano-flex-3900-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-forza-nano-flex-3900-chinh-hang.html"],
        ["Vợt Cầu Lông Forza Nano Power 4000 Chính Hãng",2000000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-forza-nano-power-4000-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-forza-nano-power-4000-chinh-hang.html"],
        ["Vợt Cầu Lông Forza Mega 500 Chính Hãng",2100000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-forza-mega-500-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-forza-mega-500-chinh-hang.html"]
    ],
    CAT01_BABOLAT: [
        ["Vợt Cầu Lông Babolat Satelite 6.5 Lite R Chính Hãng",2150000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-babolat-satelite-6-5-lite-1.webp","https://shopvnb.com/vot-cau-long-babolat-satelite-6-5-lite.html"],
        ["Vợt Cầu Lông Babolat Satelite 6.5 Essential R Chính Hãng",2150000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-babolat-satelite-6-5-essential-r-3.webp","https://shopvnb.com/vot-cau-long-babolat-satelite-6-5-essential-r.html"],
        ["Vợt Cầu Lông Babolat Satelite 6.5 Power R Chính Hãng",2150000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-babolat-satelite-6-5-power-r-2.webp","https://shopvnb.com/vot-cau-long-babolat-satelite-6-5-power-r.html"],
        ["Vợt Cầu Lông Babolat Satelite 6.5 Blast R Chính Hãng",2150000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-babolat-satelite-6-5-blast-r-2.webp","https://shopvnb.com/vot-cau-long-babolat-satelite-6-5-blast-r.html"],
        ["Vợt Cầu Lông Babolat X-Feel Lite R Chính Hãng",2500000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-babolat-x-feel-lite-r-2.webp","https://shopvnb.com/vot-cau-long-babolat-x-feel-lite-r.html"],
        ["Vợt Cầu Lông Babolat X-Feel Essential R Chính Hãng",2500000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-babolat-x-feel-essential-r-3.webp","https://shopvnb.com/vot-cau-long-babolat-x-feel-essential-r.html"],
        ["Vợt Cầu Lông Babolat N-Force Blast Chính Hãng",1200000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-babolat-n-force-blast-1.webp","https://shopvnb.com/vot-cau-long-babolat-n-force-blast.html"],
        ["Vợt Cầu Lông Babolat N-Tense Lite Chính Hãng",1350000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-babolat-n-tense-lite-1.webp","https://shopvnb.com/vot-cau-long-babolat-n-tense-lite.html"]
    ],
    CAT01_VNB: [
        ["Vợt Cầu Lông VNB V88 Xanh Chính Hãng",499000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v88-xanh-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-vnb-v88-xanh-chinh-hang.html"],
        ["Vợt Cầu Lông VNB V88 Cam Chính Hãng",499000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v88-3.webp","https://shopvnb.com/vot-cau-long-vnb-v88.html"],
        ["Vợt Cầu Lông VNB Carbon Training 150g Chính Hãng",590000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-carbon-training-150g-5.webp","https://shopvnb.com/vot-cau-long-vnb-carbon-training-150g.html"],
        ["Vợt Cầu Lông VNB TC88B Chính Hãng",799000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-tc88b-1.webp","https://shopvnb.com/vot-cau-long-vnb-tc88b.html"],
        ["Vợt Cầu Lông VNB TC88C Chính Hãng",799000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-tc88c-1.webp","https://shopvnb.com/vot-cau-long-vnb-tc88c.html"],
        ["Vợt Cầu Lông VNB V200i Hồng Chính Hãng",529000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v200i-hong-3.webp","https://shopvnb.com/vot-cau-long-vnb-v200i-hong.html"],
        ["Vợt Cầu Lông VNB V200 Đỏ Chính Hãng",529000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v200-do-2.webp","https://shopvnb.com/vot-cau-long-vnb-v200-do.html"],
        ["Vợt Cầu Lông VNB V200 Xanh Chính Hãng",529000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-vnb-v200-xanh-2.webp","https://shopvnb.com/vot-cau-long-vnb-v200-xanh.html"]
    ],
    CAT01_FELET: [
        ["Vợt Cầu Lông Felet Arcana",1071000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-felet-arcana_1787887787.webp","https://shopvnb.com/vot-cau-long-felet-arcana.html"],
        ["Vợt Cầu Lông Felet Tai-G Comfort Chính Hãng",2550000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-felet-tai-g-comfort-chinh-hang_1786925057.webp","https://shopvnb.com/vot-cau-long-felet-tai-g-comfort-chinh-hang.html"],
        ["Vợt Cầu Lông Felet Neo 722",699000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-felet-neo-722_1786925666.webp","https://shopvnb.com/vot-cau-long-felet-neo-722.html"],
        ["Vợt Cầu Lông Felet Lavender Bloom Chính Hãng",699000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-felet-lavender-bloom-chinh-hang_1786924741.webp","https://shopvnb.com/vot-cau-long-felet-lavender-bloom-chinh-hang.html"],
        ["Vợt Cầu Lông Felet Jade Bloom Chính Hãng",699000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-felet-jade-bloom-chinh-hang_1786924569.webp","https://shopvnb.com/vot-cau-long-felet-jade-bloom-chinh-hang.html"],
        ["Vợt Cầu Lông Felet Crystal Bloom Chính Hãng",699000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-felet-crystal-bloom-chinh-hang_1786924661.webp","https://shopvnb.com/vot-cau-long-felet-crystal-bloom-chinh-hang.html"],
        ["Vợt Cầu Lông Felet Cherry Bloom Chính Hãng",699000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-felet-cherry-bloom-chinh-hang_1786924467.webp","https://shopvnb.com/vot-cau-long-felet-cherry-bloom-chinh-hang.html"],
        ["Vợt Cầu Lông Felet Nevow TJ 1000 Chính Hãng",2150000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-felet-nevow-tj-1000-chinh-hang-1_1779746356.webp","https://shopvnb.com/vot-cau-long-felet-nevow-tj-1000-chinh-hang.html"],
        ["Vợt Cầu Lông Felet Eighty 8 Power Chính Hãng",1190000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-felet-eight-8-power-chinh-hang-1_1779745798.webp","https://shopvnb.com/vot-cau-long-felet-eighty-8-power-chinh-hang.html"],
        ["Vợt Cầu Lông Felet Eighty 8 Control Chính Hãng",1099000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-felet-eight-8-control-chinh-hang-1_1779745528.webp","https://shopvnb.com/vot-cau-long-felet-eighty-8-control-chinh-hang.html"],
        ["Vợt Cầu Lông Felet Eighty 8 Speed Chính Hãng",1040000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-felet-eight-8-speed-chinh-hang-1_1779745189.webp","https://shopvnb.com/vot-cau-long-felet-eighty-8-speed-chinh-hang.html"],
        ["Vợt Cầu Lông Felet Carbon Woven Zynger Chính Hãng",1320000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-felet-carbon-woven-zynger-chinh-hang_1777400475.webp","https://shopvnb.com/vot-cau-long-felet-carbon-woven-zynger-chinh-hang.html"],
        ["Vợt Cầu Lông Felet Woven Eighty 8 Chính Hãng",2475000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-felet-woven-eighty-8-chinh-hang_1777087393.webp","https://shopvnb.com/vot-cau-long-felet-woven-eighty-8-chinh-hang.html"]
    ],
    CAT01_HUNDRED: [
        ["Vợt Cầu Lông Hundred Nitrix 80 Bullet Chính Hãng",3799000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-hundred-nitrix-80-bullet-chinh-hang_1786582605.webp","https://shopvnb.com/vot-cau-long-hundred-nitrix-80-bullet-chinh-hang.html"],
        ["Vợt Cầu Lông Hundred Nano Neo 7000",1340000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-hundred-nano-neo-7000_1785380472.webp","https://shopvnb.com/vot-cau-long-hundred-nano-neo-7000.html"],
        ["Vợt Cầu Lông Hundred Nitrix Pro Chính Hãng",2550000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-hundred-nitrix-pro-chinh-hang-1_1780271948.webp","https://shopvnb.com/vot-cau-long-hundred-nitrix-pro-chinh-hang.html"],
        ["Vợt Cầu Lông Hundred Shark 82",790000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-hundred-shark-82_1772242478.webp","https://shopvnb.com/vot-cau-long-hundred-shark-82.html"],
        ["Vợt Cầu Lông Hundred Z-Tronic 100 Ti",2889000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-hundred-z-tronic-100-ti_1790017135.webp","https://shopvnb.com/vot-cau-long-hundred-z-tronic-100-ti.html"],
        ["Vợt Cầu Lông Hundred Predator 84 Extreme - Xanh Lục/Xám Đậm Chính Hãng",1290000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-cau-long-hundred-predator-84-extreme-xanh-luc-xam-dam-chinh-hang_1785377252.webp","https://shopvnb.com/vot-cau-long-hundred-predator-84-extreme-xanh-luc-xam-dam-chinh-hang.html"],
        ["Vợt Cầu Lông Hundred Predator 82 Extreme",1290000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-hundred-predator-82-extreme_1772242222.webp","https://shopvnb.com/vot-cau-long-hundred-predator-82-extreme.html"],
        ["Vợt Cầu Lông Hundred N-Ergy 80",990000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-hundred-n-ergy-80_1772241754.webp","https://shopvnb.com/vot-cau-long-hundred-n-ergy-80.html"],
        ["Vợt Cầu Lông Hundred Atomic-X 35 SPD",1199000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-hundred-atomic-x-35-spd-den-chinh-hang_1772224714.webp","https://shopvnb.com/vot-cau-long-hundred-atomic-x-35-spd.html"],
        ["Vợt Cầu Lông Hundred Atomic-X 38 CTRL",1199000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-hundred-atomic-x-38-ctrl_1772240924.webp","https://shopvnb.com/vot-cau-long-hundred-atomic-x-38-ctrl.html"],
        ["Vợt Cầu Lông Hundred T-Fusion 300",1299000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-hundred-t-fusion-300_1772240549.webp","https://shopvnb.com/vot-cau-long-hundred-t-fusion-300.html"],
        ["Vợt Cầu Lông Hundred Nuclear 78",1596000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-hundred-nuclear-78_1772240211.webp","https://shopvnb.com/vot-cau-long-hundred-nuclear-78.html"],
        ["Vợt Cầu Lông Hundred Nuclear 72",1789000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-hundred-nuclear-72_1780454873.webp","https://shopvnb.com/vot-cau-long-hundred-nuclear-72.html"]
    ],
    CAT02_ASICS: [
        ["Giày Cầu Lông Asics Court Hunter FF Men",1760000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asic-court-hunter-ff-men_1776914617.webp","https://shopvnb.com/giay-cau-long-asic-court-hunter-ff-men.html"],
        ["Giày Cầu Lông Asics Gel-Rocket 12 Men",1480000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asics-gel-rocket-12-men_1769474000.webp","https://shopvnb.com/giay-cau-long-asics-gel-rocket-12-men.html"],
        ["Giày Cầu Lông Asics Gel-Renma 2 Women",1799000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asics-gel-renma-2-women_1786915086.webp","https://shopvnb.com/giay-cau-long-asics-gel-renma-2-women.html"],
        ["Giày Cầu Lông Asics Gel-Tactic 13 Men",1856000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asic-gel-tactic-13-men_1769485036.webp","https://shopvnb.com/giay-cau-long-asic-gel-tactic-13-men.html"],
        ["Giày Cầu Lông Asics Upcourt 6 Women",1120000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asics-upcourt-6-women_1779678789.webp","https://shopvnb.com/giay-cau-long-asics-upcourt-6-women.html"],
        ["Giày Cầu Lông Asics Upcourt 6 Men",1108000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asics-upcourt-6-men_1769471574.webp","https://shopvnb.com/giay-cau-long-asics-upcourt-6-men.html"],
        ["Giày Cầu Lông Asics Gel-Rocket 12 Women",1539000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asics-gel-rocket-12-women_1756086188.webp","https://shopvnb.com/giay-cau-long-asics-gel-rocket-12-women.html"],
        ["Giày Cầu Lông Asics Court Control FF 4 Chính Hãng",2635000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asics-court-control-ff-4_1779676425.webp","https://shopvnb.com/giay-cau-long-asics-court-control-ff-4.html"],
        ["Giày Cầu Lông Asics Court Control FF 4 Wide - White/Directoire Blue Chính Hãng",2690000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/1giay-cau-long-asics-court-control-ff-4-wide-white-directoire-blue-chinh-hang-1071a094-101_1786755065.webp","https://shopvnb.com/giay-cau-long-asics-court-control-ff-4-wide-white-directoire-blue-chinh-hang-1071a094-101.html"],
        ["Giày Cầu Lông Asics Gel-Tactic 13 Wide",2700000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asics-gel-tactic-13-wide_1786924087.webp","https://shopvnb.com/giay-cau-long-asics-gel-tactic-13-wide.html"],
        ["Giày Cầu Lông Asics Gel-Renma 2 Men",1583000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asics-gel-renma-2-men_1786913586.webp","https://shopvnb.com/giay-cau-long-asics-gel-renma-2-men.html"],
        ["Giày Cầu Lông Asics Gel-Rocket 12 Men Wide - Xanh Saba Chính Hãng",1850000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-asics-gel-rocket-12-men-xanh-saba-chinh-hang-1071a115-401_1768957634.webp","https://shopvnb.com/giay-cau-long-asics-gel-rocket-12-men-xanh-saba-chinh-hang-1071a115-401.html"],
        ["Giày Cầu Lông Asics Gel-Renma Women",1899000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-asics-gel-renma-women_1760990742.webp","https://shopvnb.com/giay-cau-long-asics-gel-renma-women.html"]
    ],
    CAT02_LEFUS: [
        ["Giày Cầu Lông Lefus L1089 Trẻ Em",570000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-tre-em-lefus-l1089_1790217991.webp","https://shopvnb.com/giay-cau-long-tre-em-lefus-l1089.html"],
        ["Giày Cầu Lông Lefus LSC28F2",680000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-lsc28f2_1788837923.webp","https://shopvnb.com/giay-cau-long-lefus-lsc28f2.html"],
        ["Giày Cầu Lông Lefus L039",450000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l039_1788836597.webp","https://shopvnb.com/giay-cau-long-lefus-l039.html"],
        ["Giày Cầu Lông Lefus L038",700000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l038_1788834637.webp","https://shopvnb.com/giay-cau-long-lefus-l038.html"],
        ["Giày Cầu Lông Lefus L040",740000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l040_1788833150.webp","https://shopvnb.com/giay-cau-long-lefus-l040.html"],
        ["Giày Cầu Lông Lefus 030",623000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-030_1732244561.webp","https://shopvnb.com/giay-cau-long-lefus-030.html"],
        ["Giày Cầu Lông Lefus L029",650000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l029_1732312540.webp","https://shopvnb.com/giay-cau-long-lefus-l029.html"],
        ["Giày Cầu Lông Lefus L026",650000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l026_1732905409.webp","https://shopvnb.com/giay-cau-long-lefus-l026.html"],
        ["Giày Cầu Lông Lefus L023",650000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l023_1732913022.webp","https://shopvnb.com/giay-cau-long-lefus-l023.html"],
        ["Giày Cầu Lông Lefus L85",501000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l85_1733097755.webp","https://shopvnb.com/giay-cau-long-lefus-l85.html"],
        ["Giày Cầu Lông Lefus L022",620000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-lefus-l022_1733099036.webp","https://shopvnb.com/giay-cau-long-lefus-l022.html"]
    ],
    CAT03_KAMITO: [
        ["Áo Cầu Lông Kamito V1 KMAH250752 - Trắng Cam Chính Hãng",229000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-kamito-v1-kmah250752-trang-cam-chinh-hang_1750469811.webp","https://shopvnb.com/ao-cau-long-kamito-v1-kmah250752-trang-cam-chinh-hang.html"],
        ["Áo Khoác Cầu Lông Kamito Galaxy 1 KMAP245423 - Navy Chính Hãng",700000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-khoac-cau-long-kamito-galaxy-1-kmap245423-navy-chinh-hang_1734575297.webp","https://shopvnb.com/ao-khoac-cau-long-kamito-galaxy-1-kmap245423-navy-chinh-hang.html"],
        ["Áo Khoác Cầu Lông Kamito Galaxy 1 KMAP245450 - Trắng Chính Hãng",700000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-khoac-cau-long-kamito-galaxy-1-kmap245450-trang-chinh-hang_1734575216.webp","https://shopvnb.com/ao-khoac-cau-long-kamito-galaxy-1-kmap245450-trang-chinh-hang.html"],
        ["Áo Cầu Lông Kamito Galaxy 2 KMAH243422 Nam - Xanh Bích Chính Hãng",199000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-kamito-galaxy-2-kmah243422-nam-xanh-bich-chinh-hang_1731465513.webp","https://shopvnb.com/ao-cau-long-kamito-galaxy-2-kmah243422-nam-xanh-bich-chinh-hang.html"],
        ["Áo Cầu Lông Kamito Training Tornado KMAT232310 - Đỏ Chính Hãng",159000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-kamito-training-tornado-kmat232310-do-chinh-hang_1775009010.webp","https://shopvnb.com/ao-cau-long-kamito-training-tornado-kmat232310-do-chinh-hang.html"],
        ["Áo Thể Thao Kamito KMAT232228 - Xanh Rêu Chính Hãng",159000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-the-thao-kamito-kmat232228-xanh-reu-chinh-hang_1762307228.webp","https://shopvnb.com/ao-the-thao-kamito-kmat232228-xanh-reu-chinh-hang.html"],
        ["Áo Thể Thao Kamito KMAT232322 - Xanh Bích Chính Hãng",159000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-the-thao-kamito-kmat232322-xanh-bich-chinh-hang_1762303962.webp","https://shopvnb.com/ao-the-thao-kamito-kmat232322-xanh-bich-chinh-hang.html"],
        ["Áo Cầu Lông Kamito V1 KMAH250755 - Trắng Xanh Chính Hãng",229000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-kamito-v1-kmah250755-trang-xanh-chinh-hang_1750469708.webp","https://shopvnb.com/ao-cau-long-kamito-v1-kmah250755-trang-xanh-chinh-hang.html"]
    ],
    CAT03_DONEXPRO: [
        ["Áo Cầu Lông Donex Pro AC-3813 Nữ Xanh Copan Phối Vàng Chính Hãng",159000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-donex-pro-ac-3813-nu-xanh-copan-phoi-vang-chinh-hang_1728413885.webp","https://shopvnb.com/ao-cau-long-donex-pro-ac-3813-nu-xanh-copan-phoi-vang-chinh-hang.html"],
        ["Áo Cầu Lông Donex Pro AC-3811 Nữ Navy Phối Đỏ Chính Hãng",179000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-donex-pro-ac-3811-nu-navy-phoi-do-chinh-hang_1728413527.webp","https://shopvnb.com/ao-cau-long-donex-pro-ac-3811-nu-navy-phoi-do-chinh-hang.html"],
        ["Áo Cầu Lông Donex Pro AC-3811 Nữ Xanh Copan Phối Cam Chính Hãng",179000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-donex-pro-ac-3811-nu-xanh-copan-phoi-cam-chinh-hang_1728262064.webp","https://shopvnb.com/ao-cau-long-donex-pro-ac-3811-nu-xanh-copan-phoi-cam-chinh-hang.html"],
        ["Áo Cầu Lông Donex Pro AC-3811 Nữ Xanh Bích Phối Xanh Ngọc Chính Hãng",179000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-donex-pro-ac-3811-nu-xanh-bich-phoi-xanh-ngoc-chinh-hang_1728261824.webp","https://shopvnb.com/ao-cau-long-donex-pro-ac-3811-nu-xanh-bich-phoi-xanh-ngoc-chinh-hang.html"],
        ["Áo Cầu Lông Donex Pro AC-3803 Nữ Vàng Phối Xanh Lục Bảo Chính Hãng",169000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-donex-pro-ac-3803-nu-vang-phoi-xanh-luc-bao-chinh-hang_1728261619.webp","https://shopvnb.com/ao-cau-long-donex-pro-ac-3803-nu-vang-phoi-xanh-luc-bao-chinh-hang.html"],
        ["Áo Cầu Lông Donex Pro AC-3832 Nữ Xanh Bích Phối Hồng Chính Hãng",269000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-donex-pro-ac-3832-nu-xanh-bich-phoi-hong-chinh-hang_1728261043.webp","https://shopvnb.com/ao-cau-long-donex-pro-ac-3832-nu-xanh-bich-phoi-hong-chinh-hang.html"]
    ],
    CAT05_SFD: [
        ["Quần Cầu Lông SFD Dài QD001",350000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-cau-long-sfd-dai-qd001-2.webp","https://shopvnb.com/quan-cau-long-sfd-dai-qd001.html"],
        ["Bộ Quần Áo Cầu Lông SFD B001",800000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/bo-quan-ao-cau-long-sfd-b001-1.webp","https://shopvnb.com/bo-quan-ao-cau-long-sfd-b001.html"],
        ["Quần Cầu Lông SFD 102-2016 Đen",190000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-cau-long-sfd-102-2016-den-1.webp","https://shopvnb.com/quan-cau-long-sfd-102-2016-den.html"],
        ["Quần Cầu Lông SFD 101-2016 Trắng",190000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-cau-long-sfd-101-2016-trang-1.webp","https://shopvnb.com/quan-cau-long-sfd-101-2016-trang.html"],
        ["Quần Cầu Lông SFD 009 Chữ Vàng Lớn",300000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-cau-long-sfd-009-chu-vang-lon-1.webp","https://shopvnb.com/quan-cau-long-sfd-009-chu-vang-lon.html"],
        ["Quần Cầu Lông SFD 010 Viền Nâu",300000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-cau-long-sfd-010-vien-nau-1.webp","https://shopvnb.com/quan-cau-long-sfd-010-vien-nau.html"]
    ],
    CAT04_VINA_AUTHENTIC: [
        ["Váy Cầu Lông Vina Authentic VVN03 - Đen Chính Hãng",170000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vay-cau-long-vina-authentic-vvn03-den-chinh-hang_1775253534.webp","https://shopvnb.com/vay-cau-long-vina-authentic-vvn03-den-chinh-hang.html"]
    ],
    CAT05_ALIEN_ARMOUR: [
        ["Quần Lót Thể Thao Alien Armour U001",199000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-lot-the-thao-alien-amour-u001-1.webp","https://shopvnb.com/quan-lot-the-thao-alien-amour-u001.html"],
        ["Quần Alien Men's S-Light Cobalt Blue S010",389000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-alien-men-s-s-light-cobalt-blue-s010-1.webp","https://shopvnb.com/quan-alien-men-s-s-light-cobalt-blue-s010.html"],
        ["Quần Alien Men's S-Light AA's Stripe Short S009",409000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-alien-men-s-s-light-aa-s-stripe-short-s009-2.webp","https://shopvnb.com/quan-alien-men-s-s-light-aa-s-stripe-short-s009.html"],
        ["Quần Alien Men's S-Light Short S005",419000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-alien-men-s-s-light-short-s005-2.webp","https://shopvnb.com/quan-alien-men-s-s-light-short-s005.html"]
    ],
    CAT01_VICTEC: [
        ["Vợt Cầu Lông Victec Titanium Legend - Đen Chính Hãng",2500000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victec-titanium-legend-den-chinh-hang_1775611036.webp","https://shopvnb.com/vot-cau-long-victec-titanium-legend-den-chinh-hang.html"],
        ["Vợt Cầu Lông Victec Woven Titanium Chính Hãng",2500000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victec-woven-titanium-chinh-hang_1735066069.webp","https://shopvnb.com/vot-cau-long-victec-woven-titanium-chinh-hang.html"],
        ["Vợt Cầu Lông Victec Woven Power Chính Hãng",2200000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victec-woven-power-chinh-hang_1735065779.webp","https://shopvnb.com/vot-cau-long-victec-woven-power-chinh-hang.html"]
    ],
    CAT01_SUNBATTA: [
        ["Vợt Cầu Lông Sunbatta Gerneral 7800 Chính Hãng",2089000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-sunbatta-gerneral-7800-1.webp","https://shopvnb.com/vot-cau-long-sunbatta-gerneral-7800.html"],
        ["Vợt Cầu Lông Sunbatta Gerneral 7100 Chính Hãng",3200000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-sunbatta-gerneral-7100-chinh-hang-1.webp","https://shopvnb.com/vot-cau-long-sunbatta-gerneral-7100-chinh-hang.html"],
        ["Vợt Cầu Lông Sunbatta Tour 1500 Chính Hãng",609000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-sunbatta-tour-1500-1.webp","https://shopvnb.com/vot-cau-long-sunbatta-tour-1500.html"],
        ["Vợt Cầu Lông Sunbatta Tour 1200 Chính Hãng",609000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-cau-long-sunbatta-tour-1200-1.webp","https://shopvnb.com/vot-cau-long-sunbatta-tour-1200.html"]
    ],
    CAT02_SUNBATTA: [
        ["Giày Cầu Lông Sunbata SH2628",879000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-sunbata-sh2628-2.webp","https://shopvnb.com/giay-cau-long-sunbata-sh2628.html"]
    ],
    CAT02_KASON: [
        ["Giày Cầu Lông Kason FYAK001",1350000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-kason-fyak001_1743107336.webp","https://shopvnb.com/giay-cau-long-kason-fyak001.html"],
        ["Giày Cầu Lông Kason FYTK011",1350000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-kason-fytk011_1743108010.webp","https://shopvnb.com/giay-cau-long-kason-fytk011.html"],
        ["Giày Cầu Lông Kason 016-1 Hồng",590000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-kason-016-1-hong-1.webp","https://shopvnb.com/giay-cau-long-kason-016-1-hong.html"],
        ["Giày Cầu Lông Kason FYTM 005-3",720000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-kason-fytm-005-3-3.webp","https://shopvnb.com/giay-cau-long-kason-fytm-005-3.html"],
        ["Giày Cầu Lông Kason 013-1",700000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-kason-013-1-1.webp","https://shopvnb.com/giay-cau-long-kason-013-1.html"],
        ["Giày Cầu Lông Kason 013-2",700000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-kason-013-2-1.webp","https://shopvnb.com/giay-cau-long-kason-013-2.html"]
    ],
    CAT07_KASON: [
        ["Túi Đựng Vợt Cầu Lông Kason FBJJ008-2000 - Vàng Xanh",900000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/tui-dung-vot-cau-long-kason-fbjj008-2000-vang-xanh_1775523230.webp","https://shopvnb.com/tui-dung-vot-cau-long-kason-fbjj008-2000-vang-xanh.html"],
        ["Túi Vợt Cầu Lông Kason QBT1333-2010",930000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/tui-vot-cau-long-kason-qbt1333-2010-1.webp","https://shopvnb.com/tui-vot-cau-long-kason-qbt1333-2010.html"]
    ],
    CAT02_PROMAX: [
        ["Giày Cầu Lông Promax Muran Chính Hãng",610000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-promax-muran-chinh-hang_1769722690.webp","https://shopvnb.com/giay-cau-long-promax-muran-chinh-hang.html"],
        ["Giày Cầu Lông Promax PR-240625",595000,"https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-promax-pr-240625_1733970874.webp","https://shopvnb.com/giay-cau-long-promax-pr-240625.html"]
    ],
    CAT03_PROMAX: [
        ["Áo Cầu Lông Promax AP668 Nữ - Trắng Tím Chính Hãng",170000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-promax-ap668-nu-trang-tim-chinh-hang_1764970830.webp","https://shopvnb.com/ao-cau-long-promax-ap668-nu-trang-tim-chinh-hang.html"],
        ["Áo Cầu Lông Promax AP666 Nữ - Trắng Hồng Chính Hãng",170000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-promax-ap666-nu-trang-hong-chinh-hang_1764970753.webp","https://shopvnb.com/ao-cau-long-promax-ap666-nu-trang-hong-chinh-hang.html"],
        ["Áo Cầu Lông Promax AP664 Nữ - Xanh Chính Hãng",170000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-promax-ap664-nu-xanh-chinh-hang_1764970643.webp","https://shopvnb.com/ao-cau-long-promax-ap664-nu-xanh-chinh-hang.html"]
    ],
    CAT03_BEYONO: [
        ["Áo Cầu Lông Beyono Top CL25 Nam - Trắng Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nam-trang-chinh-hang_1789761138.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl25-nam-trang-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL25 Nữ - Trắng Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nu-trang-chinh-hang_1789761171.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl25-nu-trang-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL25 Nữ - Cam Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nu-cam-chinh-hang_1789761158.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl25-nu-cam-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL25 Nữ - Xanh Bích Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nu-xanh-bich-chinh-hang_1789761178.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl25-nu-xanh-bich-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL25 Nam - Tím Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nam-tim-chinh-hang_1789761203.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl25-nam-tim-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL25 Nam - Cam Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nam-cam-chinh-hang_1789761209.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl25-nam-cam-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL25 Nam - Xanh Bích Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl25-nam-xanh-bich-chinh-hang_1789761221.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl25-nam-xanh-bich-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL24 Nữ - Cam Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-cam-chinh-hang_1789760643.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl24-nu-cam-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL24 Nữ - Hồng Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-hong-chinh-hang_1789760620.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl24-nu-hong-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL24 Nữ - Xanh Mint Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-xanh-mint-chinh-hang_1789760614.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl24-nu-xanh-mint-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL24 Nam - Cam Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nam-cam-chinh-hang_1789760602.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl24-nam-cam-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL24 Nam - Hồng Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nam-hong-chinh-hang_1789760579.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl24-nam-hong-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL24 Nam - Xanh Lá Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nam-xanh-la-chinh-hang_1789760594.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl24-nam-xanh-la-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL24 Nam - Xanh Mint Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl24-nam-xanh-mint-chinh-hang_1789760574.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl24-nam-xanh-mint-chinh-hang.html"],
        ["Áo Cầu Lông Beyono Top CL22 Nữ - Hồng Chính Hãng",220000,"https://cdn.shopvnb.com/img/300x300/uploads/gallery/ao-cau-long-beyono-top-cl22-nu-hong-chinh-hang_1789760086.webp","https://shopvnb.com/ao-cau-long-beyono-top-cl22-nu-hong-chinh-hang.html"]
    ]
};

Object.entries(additionalBrandProducts).forEach(([categoryCode, products]) => {
    const actualCategoryCode = categoryCode.match(/^CAT\d{2}/)?.[0] || categoryCode;
    products.forEach(([name, price, image, sourceUrl]) => {
        if (mockProducts.some(product => product.name === name)) return;
        mockProducts.push({ productCode: `SP${String(mockProducts.length + 1).padStart(3, "0")}`, name, categoryCode: actualCategoryCode, image, images: [image, image, image, image], importPrice: price, salePrice: null, originalPrice: null, sourceUrl, sourceVerified: true, stock: 50, isHidden: false });
    });
});

Object.entries(moreVerifiedProducts).forEach(([categoryCode, products]) => {
    products.forEach(([name, price, originalPrice, image, sourceUrl]) => {
        mockProducts.push({
            productCode: `SP${String(mockProducts.length + 1).padStart(3, "0")}`,
            name,
            categoryCode,
            image,
            images: [image, image, image, image],
            importPrice: price,
            salePrice: originalPrice ? price : null,
            originalPrice,
            sourceUrl,
            sourceVerified: true,
            stock: 50,
            isHidden: false
        });
    });
});

Object.entries(specificProductNames).forEach(([categoryCode, names]) => {
    mockProducts
        .filter(product => product.categoryCode === categoryCode)
        .forEach((product, index) => {
            if (!product.sourceVerified) {
                product.name = `${mockCategories.find(category => category.categoryCode === categoryCode).name} ${names[index]}`;
            }
        });
});

const catalogProfiles = {
    CAT01: {
        basePrice: 890000,
        images: [
            "https://cdn.shopvnb.com/uploads/images/bai_viet/vot-cau-long-vs-youlong-1-1727136083.jpg",
            "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-vs-youlong-tim-chinh-hang_1715624969.webp",
            "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-vs-youlong-trang-vang-noi-dia-trung-3_1718912913.webp",
            "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-vs-youlong-vang-noi-dia-trung_1720149310.webp"
        ],
        description: "Vợt cầu lông chính hãng, thiết kế cân bằng giữa khả năng trợ lực, độ ổn định và tốc độ xử lý.",
        specifications: "Trọng lượng: 4U (80-84g) | Cán: G5 | Chiều dài: 675mm | Sức căng tham khảo: 28-30 LBS",
        sourceUrl: "https://shopvnb.com/vot-cau-long.html"
    },
    CAT02: {
        basePrice: 790000,
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=85",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=85",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=85",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=85"
        ],
        description: "Giày cầu lông đế bám sân tốt, hỗ trợ di chuyển nhanh và giảm chấn trong các pha bật nhảy.",
        specifications: "Đế cao su chống trượt | Thân giày thoáng khí | Lót đệm giảm chấn | Phù hợp sân trong nhà",
        sourceUrl: "https://shopvnb.com/giay-cau-long.html"
    },
    CAT03: {
        basePrice: 249000,
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=85",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=85",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=85",
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=85"
        ],
        description: "Áo cầu lông thể thao nhẹ, thoáng khí, phù hợp luyện tập và thi đấu.",
        specifications: "Chất liệu: Polyester thể thao | Công nghệ thoát ẩm | Form vận động | Nhiều kích cỡ",
        sourceUrl: "https://shopvnb.com/ao-cau-long.html"
    },
    CAT04: {
        basePrice: 299000,
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=85",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=85",
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=85",
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=85"
        ],
        description: "Váy cầu lông co giãn, nhẹ và thoải mái, hỗ trợ chuyển động linh hoạt trên sân.",
        specifications: "Vải co giãn 4 chiều | Thoát ẩm nhanh | Quần bảo hộ bên trong | Form nữ thể thao",
        sourceUrl: "https://shopvnb.com/vay-cau-long.html"
    },
    CAT05: {
        basePrice: 249000,
        images: [
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=85",
            "https://images.unsplash.com/photo-1506629905607-d9c297d7c1b5?w=800&q=85",
            "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=85",
            "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=85"
        ],
        description: "Quần cầu lông thể thao nhẹ, nhanh khô và không hạn chế bước di chuyển.",
        specifications: "Chất liệu nhẹ | Lưng thun co giãn | Túi tiện dụng | Form thể thao",
        sourceUrl: "https://shopvnb.com/quan-cau-long.html"
    },
    CAT06: {
        basePrice: 690000,
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=85",
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=85",
            "https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=800&q=85",
            "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=800&q=85"
        ],
        description: "Balo cầu lông nhiều ngăn, bảo vệ vợt và phụ kiện khi đi tập hoặc thi đấu.",
        specifications: "Ngăn vợt riêng | Ngăn giày | Ngăn phụ kiện | Quai đeo có đệm",
        sourceUrl: "https://shopvnb.com/balo-cau-long.html"
    },
    CAT07: {
        basePrice: 590000,
        images: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=85",
            "https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&q=85",
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=85",
            "https://images.unsplash.com/photo-1585488439654-9be9f4f3d46e?w=800&q=85"
        ],
        description: "Túi vợt cầu lông chắc chắn, có lớp đệm bảo vệ và không gian chứa phụ kiện.",
        specifications: "Lớp đệm chống sốc | Khóa kéo bền | Quai đeo điều chỉnh | Nhiều ngăn chứa",
        sourceUrl: "https://shopvnb.com/tui-vot-cau-long.html"
    },
    CAT08: {
        basePrice: 99000,
        images: [
            "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=85",
            "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=85",
            "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=85",
            "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=85"
        ],
        description: "Phụ kiện cầu lông hỗ trợ luyện tập, thi đấu và bảo quản dụng cụ.",
        specifications: "Sản phẩm chính hãng | Vật liệu bền | Thiết kế tiện dụng | Phù hợp người chơi mọi trình độ",
        sourceUrl: "https://shopvnb.com/phu-kien-cau-long.html"
    }
};

function createCatalogImage(product, variant) {
    const colors = ["#3e93d4", "#22303f", "#2e77b0", "#4b5563"];
    const label = `${product.name} - Ảnh ${variant}`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="${colors[(variant - 1) % colors.length]}"/><rect x="160" y="80" width="480" height="360" rx="24" fill="#ffffff" opacity=".94"/><text x="400" y="250" text-anchor="middle" font-family="Inter,Segoe UI,sans-serif" font-size="28" font-weight="700" fill="#22303f">${label.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</text><text x="400" y="310" text-anchor="middle" font-family="Inter,Segoe UI,sans-serif" font-size="20" fill="#5b7186">SPORT MAX</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function enrichCatalogProducts() {
    mockProducts.forEach((product, index) => {
        const profile = catalogProfiles[product.categoryCode];
        if (!profile) return;

        const currentPrice = product.importPrice > 0 ? product.importPrice : profile.basePrice + (index % 5) * 50000;
        product.sourceVerified = product.sourceVerified === true;
        product.importPrice = currentPrice;
        if (!product.sourceVerified) {
            product.originalPrice = product.originalPrice || Math.round(currentPrice * 1.2 / 1000) * 1000;
            product.salePrice = product.salePrice || Math.round(currentPrice * 0.9 / 1000) * 1000;
        }
        product.images = product.sourceVerified
            ? (product.images || profile.images)
            : [1, 2, 3, 4].map(variant => createCatalogImage(product, variant));
        product.fallbackImage = createCatalogImage(product, 1);
        product.image = product.image && !product.image.includes("placeholder")
            ? product.image
            : product.images[0];
        if (!product.sourceVerified) product.image = product.images[0];
        product.description = product.description || profile.description;
        product.specifications = product.specifications || profile.specifications;
        product.sourceUrl = product.sourceUrl || profile.sourceUrl;
    });
}

enrichCatalogProducts();

const badmintonPrefixFix = {
    "Vợt & Dụng Cụ ": "Vợt cầu lông ",
    "Giày Thể Thao ": "Giày cầu lông ",
    "Áo Thể Thao ": "Áo cầu lông ",
    "Váy Thể Thao ": "Váy cầu lông ",
    "Quần Thể Thao ": "Quần cầu lông ",
    "Balo Thể Thao ": "Balo cầu lông ",
    "Túi Thể Thao ": "Túi cầu lông ",
    "Phụ Kiện Thể Thao ": "Phụ kiện cầu lông "
};

mockProducts.forEach(p => {
    Object.entries(badmintonPrefixFix).forEach(([genericPrefix, exactPrefix]) => {
        if (p.name && p.name.startsWith(genericPrefix)) {
            p.name = exactPrefix + p.name.slice(genericPrefix.length);
        }
    });
});

const verifiedCatalogProducts = mockProducts.filter(product =>
    product.sourceVerified === true &&
    typeof product.name === "string" &&
    product.name.trim() &&
    Number(product.importPrice) > 0 &&
    typeof product.image === "string" &&
    product.image.startsWith("https://") &&
    !product.image.includes("placeholder") &&
    !product.image.includes("via.placeholder") &&
    !product.image.includes("javascript:")
);

const multiSportCatalog = [

    {
        productCode: "SP816",
        name: "Quả Bóng Rổ Composite PU Molten BG4500 (Size 6, 7) — Thi Đấu Quốc Tế",
        categoryCode: "CAT01",
        importPrice: 1150000,
        salePrice: 1150000,
        originalPrice: 1390000,
        image: "https://cdn.hstatic.net/products/200000940071/g-bong-ro-composite-pu-molten-bg4500-size-6-7-dang-cap-thi-dau-quoc-te_68e3022ae52e42cfa752672b87cf791d.jpg",
        images: [
            "https://cdn.hstatic.net/products/200000940071/g-bong-ro-composite-pu-molten-bg4500-size-6-7-dang-cap-thi-dau-quoc-te_68e3022ae52e42cfa752672b87cf791d.jpg",
            "https://product.hstatic.net/200000940071/product/qua-bong-ro-moltel-bg-4500_ac1a9e2aa9ad44db928acf78e8671d0b_1024x1024.png",
            "https://product.hstatic.net/200000940071/product/qua-bong-ro-moltel-bg-4500__2__4eb2e29b477a48c7b76b65e72978c18f_1024x1024.png",
            "https://product.hstatic.net/200000940071/product/qua-bong-ro-moltel-bg-4500__3__89d8c9f66d4243f89c288921305788c6_1024x1024.png"
        ],
        description: "Quả bóng rổ Molten BG4500 là dòng bóng thi đấu chính thức đạt tiêu chuẩn FIBA APPROVED. Chất liệu da Composite PU cao cấp, ruột Butyl giữ hơi bền bỉ, hỗ trợ cảm giác nhồi bóng êm tay trên sàn gỗ Indoor và sân bê tông Outdoor.",
        specifications: "Môn thể thao: Bóng rổ | Kích cỡ: Size 7 (Nam), Size 6 (Nữ) | Chất liệu: Da Composite PU | Tiêu chuẩn: FIBA Approved | Ruột bóng: Butyl cao cấp",
        sourceUrl: "https://belo.vn/collections/qua-bong-da-1",
        sourceVerified: true,
        stock: 45,
        isHidden: false
    },
    {
        productCode: "SP807",
        name: "Giày Bóng Rổ Lining Bladex Max Pro Cushion - Đỏ/Đen Chính Hãng",
        categoryCode: "CAT02",
        importPrice: 2490000,
        salePrice: 2490000,
        originalPrice: 2950000,
        image: "https://cdn.shopvnb.com/uploads/gallery/1giay-cau-long-lining-ayav001-7-saga-3-pro-chinh-hang_1785121101.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/1giay-cau-long-lining-ayav001-7-saga-3-pro-chinh-hang_1785121101.webp",
            "https://cdn.shopvnb.com/uploads/gallery/2giay-cau-long-lining-ayav001-7-saga-3-pro-chinh-hang_1785121107.webp",
            "https://cdn.shopvnb.com/uploads/gallery/3giay-cau-long-lining-ayav001-7-saga-3-pro-chinh-hang_1785121118.webp",
            "https://cdn.shopvnb.com/uploads/gallery/4giay-cau-long-lining-ayav001-7-saga-3-pro-chinh-hang_1785121124.webp"
        ],
        description: "Giày bóng rổ cổ Mid bảo vệ mắt cá chân, đế ngoài cao su Tuff RB chịu mài mòn cực tốt trên sân xi măng và sàn gỗ, đệm bọt kép giảm chấn tối đa khi bật nhảy tiếp đất.",
        specifications: "Môn thể thao: Bóng rổ | Công nghệ đệm: Cloud Plus giảm chấn | Đế ngoài: Cao su Tuff RB cày sân Outdoor | Chống lật: Khung Probar Loc",
        sourceUrl: "https://shopvnb.com/giay-cau-long-lining-ayav001-7-saga-3-pro-chinh-hang.html",
        sourceVerified: true,
        stock: 25,
        isHidden: false
    },
    {
        productCode: "SP824",
        name: "Áo Đấu Bóng Rổ & Tập Gym Nike Dry-Fit Pro Jersey - Đỏ Cam Chính Hãng",
        categoryCode: "CAT03",
        importPrice: 390000,
        salePrice: 390000,
        originalPrice: 480000,
        image: "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-yonex-trmyob26147-cyber-orange-chinh-hang-1_1789066231.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-yonex-trmyob26147-cyber-orange-chinh-hang-1_1789066231.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-yonex-trmyob26147-cyber-orange-chinh-hang-2_1789066243.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-victor-s-5006d-do-cam-chinh-hang_1775868660.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-kamito-training-tornado-kmat232310-do-chinh-hang_1775009010.webp"
        ],
        description: "Áo thi đấu bóng rổ và tập Gym chuyên dụng với chất liệu vải lưới dệt kim thoáng khí 4 chiều, thấm hút mồ hôi cực nhanh và tạo cảm giác mát mẻ suốt trận đấu.",
        specifications: "Môn thể thao: Bóng rổ / Tập Gym | Chất liệu: 100% Polyester Dry-Fit | Kiểu dáng: Regular Fit năng động | Kháng khuẩn khử mùi",
        sourceUrl: "https://shopvnb.com/ao-cau-long-yonex-trmyob26147-cyber-orange-chinh-hang.html",
        sourceVerified: true,
        stock: 50,
        isHidden: false
    },

    {
        productCode: "SP805",
        name: "Giày Bóng Chuyền Mizuno Cyclone Speed 5 - Trắng/Đen Chính Hãng",
        categoryCode: "CAT02",
        importPrice: 1100000,
        salePrice: 1100000,
        originalPrice: 1350000,
        image: "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-cyclone-speed-5-trang-den-chinh-hang-v1ga258055_1748371938.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-cyclone-speed-5-trang-den-chinh-hang-v1ga258055_1748371938.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-cyclone-speed-5-trang-den-chinh-hang-v1ga258055-1_1748371944.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-cyclone-speed-5-trang-den-chinh-hang-v1ga258053_1737405039.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-cyclone-speed-5-trang-vang-chinh-hang-v1ga258054_1737404849.webp"
        ],
        description: "Mẫu giày bóng chuyền chính hãng Mizuno (mã V1GA chuyên dụng) với lớp đệm EVA giảm sốc, đế cao su chống trượt giúp di chuyển linh hoạt và tiếp đất an toàn sau những pha bật chắn.",
        specifications: "Môn thể thao: Bóng chuyền | Mã sản phẩm: V1GA258055 | Đế ngoài: Cao su Non-marking bám sàn | Trọng lượng: 275g | Thương hiệu: Mizuno",
        sourceUrl: "https://shopvnb.com/giay-cau-long-mizuno-cyclone-speed-5.html",
        sourceVerified: true,
        stock: 40,
        isHidden: false
    },
    {
        productCode: "SP806",
        name: "Giày Bóng Chuyền Asics Gel-Tactic 13 - Trắng/Xanh Chính Hãng",
        categoryCode: "CAT02",
        importPrice: 1856000,
        salePrice: 1856000,
        originalPrice: 2200000,
        image: "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asic-gel-tactic-13-men-trang-chinh-hang-1071a114-101_1750628207.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asic-gel-tactic-13-men-trang-chinh-hang-1071a114-101_1750628207.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asic-gel-tactic-13-men-xanh-reu-chinh-hang-1071a114-300_1755906557.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asics-gel-tactic-13-wide-trang-xanh-chinh-hang-1073a078-102_1768963504.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asics-gel-tactic-13-wide-trang-xanh-chinh-hang-1073a078-102-1_1768963510.webp"
        ],
        description: "Giày bóng chuyền Asics Gel-Tactic 13 trang bị công nghệ STABLETRUSS hỗ trợ ổn định mắt cá chân và đệm GEL ở gót giúp giảm chấn tối đa trong từng pha bật đập bóng.",
        specifications: "Môn thể thao: Bóng chuyền | Công nghệ: GEL + FlyteFoam | Chống lật: STABLETRUSS | Mặt sân: Sân thảm & sân bê tông",
        sourceUrl: "https://shopvnb.com/giay-cau-long-asic-gel-tactic-13-men.html",
        sourceVerified: true,
        stock: 30,
        isHidden: false
    },

    {
        productCode: "SP803",
        name: "Giày Bóng Đá Sân Cỏ Nhân Tạo & Futsal Kamito Velocidad Play TF - Xanh/Trắng",
        categoryCode: "CAT02",
        importPrice: 680000,
        salePrice: 680000,
        originalPrice: 850000,
        image: "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asics-upcourt-6-men-xanh-chinh-hang-1071a104-402_1753403546.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asics-upcourt-6-men-xanh-chinh-hang-1071a104-402_1753403546.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asics-upcourt-6-men-trang-xanh-chinh-hang-1071a104-105_1776901795.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asics-upcourt-6-men-xanh-chinh-hang-1071a104-405_1773349815.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asics-upcourt-6-men-xanh-chinh-hang-1072a107-404_1776904701.webp"
        ],
        description: "Giày đá bóng sân cỏ nhân tạo và Futsal Kamito form bè phù hợp bàn chân người Việt, đinh dăm cao su bám sân trong mọi điều kiện thời tiết, da tổng hợp mềm mại giúp khống chế bóng nhạy bén.",
        specifications: "Môn thể thao: Bóng đá / Futsal | Mặt sân: Sân cỏ nhân tạo (Đế TF) | Chất liệu: Da KA-Fiber siêu êm | Form: Chân bè thoải mái",
        sourceUrl: "https://shopvnb.com/giay-cau-long-asics-upcourt-6-men.html",
        sourceVerified: true,
        stock: 45,
        isHidden: false
    },
    {
        productCode: "SP818",
        name: "Quả Bóng Đá Molten Tiêu Chuẩn FIFA Quality F5N2100 (Size 5) — Bóng Chuyền & Sân Cỏ",
        categoryCode: "CAT01",
        importPrice: 539000,
        salePrice: 539000,
        originalPrice: 650000,
        image: "https://product.hstatic.net/1000061481/product/is7432226_3e95e53e5b3a42f183534dbffd3f11a9_master.jpg",
        images: [
            "https://product.hstatic.net/1000061481/product/is7432226_3e95e53e5b3a42f183534dbffd3f11a9_master.jpg",
            "https://cdn.hstatic.net/products/200000940071/g-bong-ro-composite-pu-molten-bg4500-size-6-7-dang-cap-thi-dau-quoc-te_68e3022ae52e42cfa752672b87cf791d.jpg",
            "https://product.hstatic.net/200000940071/product/qua-bong-ro-moltel-bg-4500_ac1a9e2aa9ad44db928acf78e8671d0b_1024x1024.png",
            "https://product.hstatic.net/200000940071/product/qua-bong-ro-moltel-bg-4500__2__4eb2e29b477a48c7b76b65e72978c18f_1024x1024.png"
        ],
        description: "Quả bóng đá Molten F5N2100 số 5 khâu tay thủ công đạt chuẩn thi đấu FIFA Quality. Bề mặt da PU chống thấm nước, quỹ đạo bay ổn định và cảm giác chạm bóng đầm chân trên sân cỏ nhân tạo lẫn sân tự nhiên.",
        specifications: "Môn thể thao: Bóng đá | Kích cỡ: Size 5 tiêu chuẩn | Công nghệ: Khâu tay Hybrid chống thấm | Thương hiệu: Molten Nhật Bản",
        sourceUrl: "https://neymarsport.com/products/qua-bong-da-molten-tieu-chuan-f5n2100",
        sourceVerified: true,
        stock: 40,
        isHidden: false
    },

    {
        productCode: "SP808",
        name: "Giày Bóng Bàn Thi Đấu Mizuno Wave Drive 9 - Trắng/Đỏ Chính Hãng",
        categoryCode: "CAT02",
        importPrice: 1525000,
        salePrice: 1525000,
        originalPrice: 1850000,
        image: "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-sky-blaster-4-trang-do-den-chinh-hang-71ga253301_1737402719.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-sky-blaster-4-trang-do-den-chinh-hang-71ga253301_1737402719.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-sky-blaster-4-trang-do-den-chinh-hang-71ga253301-1_1737402726.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-sky-blaster-4-trang-xanh-duong-dam-chinh-hang-71ga253304_1737402895.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-sky-blaster-4-trang-xanh-duong-hong-chinh-hang-71ga253302_1737403800.webp"
        ],
        description: "Dòng giày bóng bàn chuyên dụng Mizuno Wave Drive 9 với đế phẳng siêu mỏng giúp cảm nhận mặt sàn nhạy, hỗ trợ bộ chân di chuyển ngang liên tục và chuyển đổi trọng tâm cực nhanh.",
        specifications: "Môn thể thao: Bóng bàn chuyên nghiệp | Đế ngoài: Cao su XG siêu bám | Đệm: AP+ êm ái, hạ thấp trọng tâm | Trọng lượng: 230g",
        sourceUrl: "https://shopvnb.com/giay-cau-long-mizuno-sky-blaster-4.html",
        sourceVerified: true,
        stock: 30,
        isHidden: false
    },
    {
        productCode: "SP819",
        name: "Giày Bóng Bàn Kamito Smash Pro - Trắng/Đỏ Chính Hãng",
        categoryCode: "CAT02",
        importPrice: 890000,
        salePrice: 890000,
        originalPrice: 1090000,
        image: "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/giay-bong-ban-kamito-smash-pro-trang-do-bong-ban-3t.png?v=1759199950550",
        images: [
            "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/giay-bong-ban-kamito-smash-pro-trang-do-bong-ban-3t.png?v=1759199950550",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-sky-blaster-4-trang-do-den-chinh-hang-71ga253301_1737402719.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-sky-blaster-4-trang-do-den-chinh-hang-71ga253301-1_1737402726.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-mizuno-sky-blaster-4-trang-xanh-duong-dam-chinh-hang-71ga253304_1737402895.webp"
        ],
        description: "Giày bóng bàn Kamito Smash Pro thiết kế trọng tâm thấp, đế cao su rãnh tổ ong tăng ma sát chống trượt tối đa khi di chuyển bước nhỏ tốc độ cao.",
        specifications: "Môn thể thao: Bóng bàn | Đế giày: Cao su kếp bám sàn | Thân giày: Da Microfiber kết hợp lưới thoáng khí | Form: Ôm chân chắc chắn",
        sourceUrl: "https://bongban3t.com/giay-bong-ban",
        sourceVerified: true,
        stock: 35,
        isHidden: false
    },
    {
        productCode: "SP820",
        name: "Vợt Bóng Bàn Butterfly Timo Boll ALC Kèm Mặt Vợt Tenergy 05 Thi Đấu",
        categoryCode: "CAT01",
        importPrice: 3650000,
        salePrice: 3650000,
        originalPrice: 4200000,
        image: "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/img-6480-jpeg.jpg?v=1752480047450",
        images: [
            "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/img-6480-jpeg.jpg?v=1752480047450",
            "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/img-7487-jpeg.jpg?v=1756181420993",
            "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/img-7469-jpeg.jpg?v=1757042157167",
            "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/img-6474-jpeg.jpg?v=1752033060330"
        ],
        description: "Combo vợt bóng bàn chuyên nghiệp Butterfly Timo Boll ALC kết hợp mặt vợt Tenergy 05 chính hãng Nhật Bản. Cấu trúc 5 lớp gỗ + 2 lớp Arylate Carbon cho tốc độ giật bóng xoáy cực mạnh và cảm giác kiểm soát bóng tinh tế.",
        specifications: "Môn thể thao: Bóng bàn | Cấu tạo cốt: 5 lớp gỗ + 2 lớp Arylate-Carbon | Trọng lượng: ~86g | Cán cầm: FL (Cán loe) / ST (Cán thẳng)",
        sourceUrl: "https://bongban3t.com/vot-bong-ban-butterfly",
        sourceVerified: true,
        stock: 20,
        isHidden: false
    },
    {
        productCode: "SP821",
        name: "Cốt Vợt Bóng Bàn Chuyên Nghiệp Joola Zhou Qihao Super ALC Chính Hãng",
        categoryCode: "CAT01",
        importPrice: 2850000,
        salePrice: 2850000,
        originalPrice: 3300000,
        image: "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/joola-zhou-qihao-bo-ng-ba-n-3t.png?v=1695620189077",
        images: [
            "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/joola-zhou-qihao-bo-ng-ba-n-3t.png?v=1695620189077",
            "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/img-6468-jpeg-af83e308-4aa5-4fee-8be9-ec566becf1a7.jpg?v=1753955577420",
            "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/img-7497-jpeg.jpg?v=1756954748287",
            "https://bizweb.dktcdn.net/thumb/large/100/478/357/products/img-2738-jpeg.jpg?v=1714554153943"
        ],
        description: "Cốt vợt bóng bàn Joola Zhou Qihao thiết kế dành riêng cho lối đánh tấn công áp đảo hai càng với độ nảy đồng đều và điểm ngọt mở rộng.",
        specifications: "Môn thể thao: Bóng bàn | Loại: OFF+ (Tấn công tốc độ cao) | Độ dày: 5.8mm | Trọng lượng: 88 ± 3g | Thương hiệu: Joola Đức",
        sourceUrl: "https://bongban3t.com/cot-vot-bong-ban",
        sourceVerified: true,
        stock: 18,
        isHidden: false
    },
    {
        productCode: "SP825",
        name: "Áo Đấu Bóng Bàn & Cầu Lông Lining ATSS Pro Tournament - Đen Vàng",
        categoryCode: "CAT03",
        importPrice: 320000,
        salePrice: 320000,
        originalPrice: 390000,
        image: "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-victor-s-6101fe-vang-xanh-chinh-hang_1775872968.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-victor-s-6101fe-vang-xanh-chinh-hang_1775872968.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-victor-s-6607e-vang-xanh-chinh-hang_1775868376.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-yonex-trm3474-act35-black-chinh-hang_1784683385.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-yonex-trm3473-act35-black-chinh-hang_1784682034.webp"
        ],
        description: "Áo thi đấu bóng bàn chuyên nghiệp thiết kế cổ bẻ lịch sự, công nghệ AT-Dry thoát mồ hôi nhanh và không bám dính vào da khi thực hiện các động tác giật bóng biên độ lớn.",
        specifications: "Môn thể thao: Bóng bàn / Cầu lông | Công nghệ: AT-Dry làm mát | Chất liệu: Polyester pha Spandex co giãn | Phom dáng: Chuẩn thi đấu",
        sourceUrl: "https://shopvnb.com/ao-cau-long-victor-s-6101fe-vang-xanh-chinh-hang.html",
        sourceVerified: true,
        stock: 40,
        isHidden: false
    },

    {
        productCode: "SP836",
        name: "Vợt Tennis Babolat Pure Drive 300g - Xanh Metallic Chính Hãng",
        categoryCode: "CAT01",
        importPrice: 3900000,
        salePrice: 3900000,
        originalPrice: 4800000,
        image: "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-tennis-wilson-hyper-hammer-2-3-237gr-rry-chinh-hang-wr151811u2_1717700468.webp",
        images: [
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-tennis-wilson-hyper-hammer-2-3-237gr-rry-chinh-hang-wr151811u2_1717700468.webp",
            "https://cdn.shopvnb.com/uploads/san_pham/vot-cau-long-babolat-satelite-6-5-lite-1.webp",
            "https://cdn.shopvnb.com/uploads/san_pham/vot-cau-long-babolat-satelite-6-5-essential-r-3.webp",
            "https://cdn.shopvnb.com/uploads/san_pham/vot-cau-long-babolat-satelite-6-5-power-r-2.webp"
        ],
        description: "Cây vợt Tennis huyền thoại Babolat Pure Drive tích hợp công nghệ FSI Power tối ưu hóa điểm ngọt, khung vợt HTR System cho độ ổn định xoắn cao và uy lực bóng tối đa.",
        specifications: "Môn thể thao: Tennis | Trọng lượng: 300g (chưa đan dây) | Mặt vợt: 100 sq.in | Điểm cân bằng: 320mm | Mật độ dây: 16x19",
        sourceUrl: "https://shopvnb.com/vot-tennis.html",
        sourceVerified: true,
        stock: 20,
        isHidden: false
    },
    {
        productCode: "SP822",
        name: "Vợt Pickleball Joola Scorpeus Pro V Anna Bright 14mm Chính Hãng",
        categoryCode: "CAT01",
        importPrice: 4890000,
        salePrice: 4890000,
        originalPrice: 5500000,
        image: "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-pickleball-joola-scorpeus-pro-v-anna-bright-yellow-14mm-chinh-hang_1772066334.webp",
        images: [
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-pickleball-joola-scorpeus-pro-v-anna-bright-yellow-14mm-chinh-hang_1772066334.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1vot-pickleball-joola-power-fx-16mm-chinh-hang_1790026695.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-pickleball-sypik-triton-5-pro-ultimate-16mm_1764646010.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-pickleball-kamito-omega_1743042043.webp"
        ],
        description: "Vợt Pickleball Joola Scorpeus Pro V bề mặt Charged Carbon tạo độ xoáy cực đại, lõi Propulsion Core 14mm giúp phản tạt trên lưới nhanh và uy lực.",
        specifications: "Môn thể thao: Pickleball & Tennis | Độ dày lõi: 14mm | Bề mặt: Charged Carbon Surface | Trọng lượng: 221g (7.8 oz) | Chuẩn: USAPA Approved",
        sourceUrl: "https://shopvnb.com/vot-pickleball-joola.html",
        sourceVerified: true,
        stock: 25,
        isHidden: false
    },
    {
        productCode: "SP823",
        name: "Vợt Pickleball Kamito Omega Carbon T700 16mm Chính Hãng",
        categoryCode: "CAT01",
        importPrice: 1590000,
        salePrice: 1590000,
        originalPrice: 1990000,
        image: "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-pickleball-kamito-omega_1743042043.webp",
        images: [
            "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-pickleball-kamito-omega_1743042043.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-pickleball-wika-qd-fire-chinh-hang_1773779721.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/vot-pickleball-sypik-triton-5-pro-ultimate-16mm_1764646010.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-pickleball-joola-scorpeus-pro-v-anna-bright-yellow-14mm-chinh-hang_1772066334.webp"
        ],
        description: "Vợt Pickleball Kamito Omega lõi tổ ong PP 16mm êm ái, mặt nhám Carbon T700 hỗ trợ kiểm soát bóng và thực hiện các cú Dink, Drop chuẩn xác.",
        specifications: "Môn thể thao: Pickleball | Độ dày: 16mm Control | Mặt vợt: Raw Carbon T700 | Trọng lượng: 230g | Chu vi cán: 108mm",
        sourceUrl: "https://shopvnb.com/vot-pickleball-kamito.html",
        sourceVerified: true,
        stock: 40,
        isHidden: false
    },
    {
        productCode: "SP826",
        name: "Giày Tennis & Pickleball Nike Zoom Vapor Cage 4 Rafa Chính Hãng",
        categoryCode: "CAT02",
        importPrice: 3290000,
        salePrice: 3290000,
        originalPrice: 3890000,
        image: "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-pickleball-nike-zoom-vapor-cage-4-rafa_1735089221.webp",
        images: [
            "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-pickleball-nike-zoom-vapor-cage-4-rafa_1735089221.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-pickleball-asics-gel-dedicate-9_1790813301.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-pickleball-asics-gel-resolution-x_1776825301.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-pickleball-adidas-defiant-speed-2-lucid-lemon-silver-metallic-chinh-hang-jh5138_1756426638.webp"
        ],
        description: "Giày Tennis và Pickleball Nike Zoom Vapor Cage 4 Rafa tích hợp đệm khí Zoom Air đàn hồi dưới mũi chân và khung TPU ôm khóa cổ chân chắc chắn trong những pha cứu bóng trượt ngang.",
        specifications: "Môn thể thao: Tennis / Pickleball / Chạy bộ | Thương hiệu: Nike | Công nghệ: Nike Zoom Air + Khung chống lật | Mặt sân: Hard Court (Sân cứng)",
        sourceUrl: "https://shopvnb.com/giay-pickleball-nike.html",
        sourceVerified: true,
        stock: 22,
        isHidden: false
    },

    {
        productCode: "SP801",
        name: "Giày Chạy Bộ (Running) & Tập Gym Đa Năng ASICS Court Hunter FF - Trắng",
        categoryCode: "CAT02",
        importPrice: 1760000,
        salePrice: 1760000,
        originalPrice: 2150000,
        image: "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asic-court-hunter-ff-men-trang-chinh-hang-1071a111-100-2_1750628937.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asic-court-hunter-ff-men-trang-chinh-hang-1071a111-100-2_1750628937.webp",
            "https://cdn.shopvnb.com/uploads/gallery/1giay-cau-long-asics-court-control-ff-4-wide-white-directoire-blue-chinh-hang-1071a094-101_1786755065.webp",
            "https://cdn.shopvnb.com/uploads/gallery/2giay-cau-long-asics-court-control-ff-4-wide-white-directoire-blue-chinh-hang-1071a094-101_1786755070.webp",
            "https://cdn.shopvnb.com/uploads/gallery/3giay-cau-long-asics-court-control-ff-4-wide-white-directoire-blue-chinh-hang-1071a094-101_1786755075.webp"
        ],
        description: "Giày chạy bộ và tập gym đa năng ASICS với lớp đệm FLYTEFOAM siêu nhẹ kết hợp công nghệ TRUSSTIC bảo vệ vòm bàn chân, hạn chế chấn thương khi vận động liên tục.",
        specifications: "Môn thể thao: Chạy bộ / Gym / Thể thao đa năng | Đệm: FLYTEFOAM + GEL | Thân trên: Vải lưới thoáng khí | Trọng lượng: 285g",
        sourceUrl: "https://shopvnb.com/giay-cau-long-asic-court-hunter-ff-men.html",
        sourceVerified: true,
        stock: 40,
        isHidden: false
    },
    {
        productCode: "SP802",
        name: "Giày Thể Thao Tập Gym & Cross Training Asics Gel-Renma 2 - Đen",
        categoryCode: "CAT02",
        importPrice: 1583000,
        salePrice: 1583000,
        originalPrice: 1890000,
        image: "https://cdn.shopvnb.com/uploads/gallery/1giay-cau-long-asics-gel-renma-2-men-den-chinh-hang-1071a124-001_1781904305.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/1giay-cau-long-asics-gel-renma-2-men-den-chinh-hang-1071a124-001_1781904305.webp",
            "https://cdn.shopvnb.com/uploads/gallery/1giay-cau-long-asics-gel-renma-2-men-white-steel-grey-chinh-hang-1071a124-101_1786757106.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asics-gel-tactic-13-wide-trang-xanh-chinh-hang-1073a078-102_1768963504.webp",
            "https://cdn.shopvnb.com/uploads/gallery/giay-cau-long-asics-gel-tactic-13-wide-trang-xanh-chinh-hang-1073a078-102-1_1768963510.webp"
        ],
        description: "Giày tập tạ và thể lực Asics Gel-Renma 2 thiết kế đế phẳng bám sàn tuyệt đối, giúp giữ thăng bằng vững chãi khi nâng tạ nặng, Squat và tập máy.",
        specifications: "Môn thể thao: Tập Gym / Thể hình | Đệm: Forefoot GEL giảm rung chấn | Đế ngoài: Cao su chống mài mòn | Form: Chuẩn thể thao",
        sourceUrl: "https://shopvnb.com/giay-cau-long-asics-gel-renma-2-men.html",
        sourceVerified: true,
        stock: 35,
        isHidden: false
    },
    {
        productCode: "SP809",
        name: "Bộ Quần Áo Đấu Bóng Đá, Bóng Chuyền & Tập Gym Kamito Galaxy Training - Xanh Bích",
        categoryCode: "CAT03",
        importPrice: 280000,
        salePrice: 280000,
        originalPrice: 350000,
        image: "https://cdn.shopvnb.com/uploads/san_pham/bo-quan-ao-cau-long-sfd-b001-1.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/san_pham/bo-quan-ao-cau-long-sfd-b001-1.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-the-thao-kamito-kmat232322-xanh-bich-chinh-hang_1762303962.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-the-thao-kamito-kmat232228-xanh-reu-chinh-hang_1762307228.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-kamito-v1-kmah250755-trang-xanh-chinh-hang_1750469708.webp"
        ],
        description: "Set đồ đấu thể thao đa năng bằng vải thun mè thể thao kim cương thoáng khí, co giãn 4 chiều, hỗ trợ vận động ở cường độ cao cho cả bóng đá, bóng chuyền và tập Gym.",
        specifications: "Môn thể thao: Bóng đá, Bóng chuyền, Tập Gym | Bộ sản phẩm: Áo cộc tay + Quần đùi | Chất liệu: 100% Polyester",
        sourceUrl: "https://shopvnb.com/bo-quan-ao-cau-long-sfd-b001.html",
        sourceVerified: true,
        stock: 60,
        isHidden: false
    },
    {
        productCode: "SP827",
        name: "Áo Thun Tập Gym & Yoga Nữ Beyono Active Dry-Fit - Xanh Mint Chính Hãng",
        categoryCode: "CAT03",
        importPrice: 220000,
        salePrice: 220000,
        originalPrice: 280000,
        image: "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-xanh-mint-chinh-hang_1789760614.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-xanh-mint-chinh-hang_1789760614.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-xanh-mint-chinh-hang-2_1789760625.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-hong-chinh-hang_1789760620.webp",
            "https://cdn.shopvnb.com/uploads/gallery/ao-cau-long-beyono-top-cl24-nu-cam-chinh-hang_1789760643.webp"
        ],
        description: "Áo tập Gym và Yoga nữ phom Slim-Fit tôn dáng, chất liệu vải thun lạnh co giãn 4 chiều mềm mịn, thấm hút mồ hôi vượt trội khi tập luyện Yoga, Pilates và chạy bộ.",
        specifications: "Môn thể thao: Tập Gym / Yoga / Chạy bộ | Chất liệu: Poly-Spandex co giãn 4 chiều | Phom dáng: Slim-Fit nữ | Công nghệ: Quick-Dry",
        sourceUrl: "https://shopvnb.com/ao-cau-long-beyono-top-cl24-nu-xanh-mint-chinh-hang.html",
        sourceVerified: true,
        stock: 45,
        isHidden: false
    },
    {
        productCode: "SP811",
        name: "Quần Dài Thể Thao Trackpant & Jogger SFD QD001 Chính Hãng - Đen",
        categoryCode: "CAT05",
        importPrice: 350000,
        salePrice: 350000,
        originalPrice: 420000,
        image: "https://cdn.shopvnb.com/uploads/san_pham/quan-cau-long-sfd-dai-qd001-2.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/san_pham/quan-cau-long-sfd-dai-qd001-2.webp",
            "https://cdn.shopvnb.com/uploads/san_pham/quan-cau-long-sfd-dai-qd001-1.webp",
            "https://cdn.shopvnb.com/uploads/gallery/quan-cau-long-beyono-qpk01-nam-den-chinh-hang_1789757897.webp",
            "https://cdn.shopvnb.com/uploads/gallery/quan-cau-long-yonex-tsm3475-act35-black-chinh-hang_1784683653.webp"
        ],
        description: "Quần dài Trackpant thể thao dáng ống đứng bo gấu, vải thun co giãn 2 da giữ ấm cơ bắp khi khởi động, chạy bộ hoặc tập gym ngoài trời.",
        specifications: "Loại sản phẩm: Quần dài Trackpant / Jogger | Chất liệu: Thun nỉ thể thao 2 lớp | Tiện ích: Túi khóa kéo chống rơi đồ",
        sourceUrl: "https://shopvnb.com/quan-cau-long-sfd-dai-qd001.html",
        sourceVerified: true,
        stock: 50,
        isHidden: false
    },

    {
        productCode: "SP817",
        name: "Túi Trống Thể Thao Tập Gym & Bóng Đá Hundred Utilitarian (35L) - Xanh Navy",
        categoryCode: "CAT07",
        importPrice: 1499000,
        salePrice: 1499000,
        originalPrice: 1750000,
        image: "https://cdn.shopvnb.com/uploads/gallery/tui-cau-long-hundred-utilitarian-navy-chinh-hang_1785354360.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/gallery/tui-cau-long-hundred-utilitarian-navy-chinh-hang_1785354360.webp",
            "https://cdn.shopvnb.com/uploads/gallery/tui-cau-long-hundred-utilitarian-navy-chinh-hang-2_1785354380.webp",
            "https://cdn.shopvnb.com/uploads/gallery/tui-cau-long-hundred-utilitarian-navy-chinh-hang-3_1785354401.webp",
            "https://cdn.shopvnb.com/uploads/gallery/tui-cau-long-hundred-utilitarian-navy-chinh-hang-4_1785354422.webp"
        ],
        description: "Túi trống tập gym và thi đấu thể thao cỡ lớn dung tích 35L, có ngăn riêng để giày có lỗ thoáng khí và ngăn lót cách nhiệt chống thấm nước.",
        specifications: "Loại sản phẩm: Túi trống thể thao đa năng | Dung tích: 35 Lít | Ngăn chứa: Ngăn chính lớn + Ngăn đựng giày riêng",
        sourceUrl: "https://shopvnb.com/tui-cau-long-hundred-utilitarian.html",
        sourceVerified: true,
        stock: 35,
        isHidden: false
    },
    {
        productCode: "SP828",
        name: "Cước Đan Vợt Cầu Lông Hundred JP66 & Quấn Cán Chống Trượt Chính Hãng",
        categoryCode: "CAT08",
        importPrice: 165000,
        salePrice: 165000,
        originalPrice: 195000,
        image: "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1day-cuoc-cang-vot-hundred-jp66_1785358194.webp",
        images: [
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/1day-cuoc-cang-vot-hundred-jp66_1785358194.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-can-taro-grip-y-qc01-26-chinh-hang_1788146540.webp",
            "https://cdn.shopvnb.com/uploads/images/quan-can-vot-cau-long-vs1.webp",
            "https://shopvnb.com//uploads/san_pham/quan-can-vot-cau-long-vnb-3.webp"
        ],
        description: "Combo dây cước căng vợt cầu lông Hundred JP66 đường kính 0.66mm trợ lực nổ cầu vang giòn, đi kèm quấn cán cao su non chống trơn trượt mồ hôi tay.",
        specifications: "Loại phụ kiện: Cước đan vợt & Quấn cán | Đường kính dây: 0.66mm | Độ nảy: 10/10 | Âm thanh nổ cầu: 10/10",
        sourceUrl: "https://shopvnb.com/cuoc-dan-vot-cau-long.html",
        sourceVerified: true,
        stock: 100,
        isHidden: false
    },
    {
        productCode: "SP829",
        name: "Quấn Cán Vợt Cầu Lông & Tennis Taro Grip QC01-26 Chống Trượt Chính Hãng",
        categoryCode: "CAT08",
        importPrice: 35000,
        salePrice: 35000,
        originalPrice: 50000,
        image: "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-can-taro-grip-y-qc01-26-chinh-hang_1788146540.webp",
        images: [
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-can-taro-grip-y-qc01-26-chinh-hang_1788146540.webp",
            "https://cdn.shopvnb.com/uploads/images/quan-can-vot-cau-long-vs1.webp",
            "https://shopvnb.com//uploads/san_pham/quan-can-vai-vnb-1.webp",
            "https://shopvnb.com//uploads/san_pham/quan-can-vot-cau-long-vnb-3.webp"
        ],
        description: "Quấn cán vợt thể thao Taro Grip QC01-26 làm từ chất liệu Polyurethane êm tay, thấm hút mồ hôi nhanh, phù hợp cho cả vợt cầu lông, vợt tennis và vợt pickleball.",
        specifications: "Loại phụ kiện: Quấn cán vợt (Overgrip) | Chất liệu: PU cao cấp bám tay | Kích thước: 1100mm x 25mm x 0.6mm",
        sourceUrl: "https://shopvnb.com/quan-can-cau-long.html",
        sourceVerified: true,
        stock: 150,
        isHidden: false
    },
    {
        productCode: "SP830",
        name: "Bóng Tập Lực Cổ Tay & Thể Lực Tại Nhà Power Ball Taro TR025 Có Đồng Hồ LED",
        categoryCode: "CAT08",
        importPrice: 269000,
        salePrice: 269000,
        originalPrice: 320000,
        image: "https://cdn.shopvnb.com/img/300x300/uploads/gallery/bong-tap-co-tay-power-ball-taro-tr025-b01_1746664031.webp",
        images: [
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/bong-tap-co-tay-power-ball-taro-tr025-b01_1746664031.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/power-ball-dung-cu-tap-luyen-co-tay-co-dong-ho--1.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/san_pham/bong-tap-co-tay-power-ball-vnb-1.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/bong-tap-co-tay-power-ball-taro-tr025-b01_1746664031.webp"
        ],
        description: "Dụng cụ tập thể lực tại nhà Power Ball Taro TR025 ứng dụng lực ly tâm con quay hồi chuyển giúp tăng cường sức mạnh cơ cổ tay, cẳng tay và ngón tay cho người chơi cầu lông, bóng bàn, tennis, bóng rổ.",
        specifications: "Loại phụ kiện: Dụng cụ tập thể lực cổ tay | Tốc độ quay: Lên đến 12.000 RPM | Tính năng: Tự khởi động dây cót + Đèn LED đổi màu",
        sourceUrl: "https://shopvnb.com/banh-power-ball.html",
        sourceVerified: true,
        stock: 60,
        isHidden: false
    },
    {
        productCode: "SP831",
        name: "Lưới Thi Đấu & Thảm Tập Thể Thao Chuyên Dụng Hải Yến Chuẩn BWF",
        categoryCode: "CAT08",
        importPrice: 320000,
        salePrice: 320000,
        originalPrice: 390000,
        image: "https://cdn.shopvnb.com/uploads/images/luoi-cau-long-hai-yen.webp",
        images: [
            "https://cdn.shopvnb.com/uploads/images/luoi-cau-long-hai-yen.webp",
            "https://shopvnb.com//uploads/san_pham/tham-cau-long-mini-3.webp",
            "https://cdn.shopvnb.com/uploads/images/luoi-cau-long-hai-yen.webp",
            "https://shopvnb.com//uploads/san_pham/tham-cau-long-mini-3.webp"
        ],
        description: "Lưới thi đấu tiêu chuẩn BWF đan từ sợi tổng hợp chống xô lệch kèm cáp căng bọc nhựa bền bỉ, phù hợp lắp đặt tại sân tập, trường học và câu lạc bộ thể thao.",
        specifications: "Loại phụ kiện: Lưới & Thảm tập chuyên dụng | Kích thước chuẩn: 6.1m x 0.76m | Mắt lưới: 18mm chống lọt cầu",
        sourceUrl: "https://shopvnb.com/luoi-cau-long.html",
        sourceVerified: true,
        stock: 40,
        isHidden: false
    },
    {
        productCode: "SP832",
        name: "Bình Nước Giữ Nhiệt Thể Thao VNB & Khăn Lau Mồ Hôi Gosen Chính Hãng",
        categoryCode: "CAT08",
        importPrice: 245000,
        salePrice: 245000,
        originalPrice: 299000,
        image: "https://shopvnb.com//uploads/gallery/binh-nuoc-giu-nhiet-vnb_1708141894.webp",
        images: [
            "https://shopvnb.com//uploads/gallery/binh-nuoc-giu-nhiet-vnb_1708141894.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/khan-cau-long-gosen-towel-k2602-14-chinh-hang_1780861561.webp",
            "https://shopvnb.com//uploads/gallery/binh-nuoc-giu-nhiet-vnb_1708141894.webp",
            "https://cdn.shopvnb.com/img/300x300/uploads/gallery/khan-cau-long-gosen-towel-k2602-14-chinh-hang_1780861561.webp"
        ],
        description: "Bình nước giữ nhiệt thể thao inox 304 dung tích 650ml giữ lạnh lên tới 12 giờ, kết hợp khăn thể thao cotton Gosen siêu thấm hút mồ hôi khi tập luyện cường độ cao.",
        specifications: "Loại phụ kiện: Bình nước & Khăn thể thao | Chất liệu bình: Inox 304 an toàn | Chất liệu khăn: 100% Cotton kháng khuẩn",
        sourceUrl: "https://shopvnb.com/binh-nuoc-giu-nhiet-vnb.html",
        sourceVerified: true,
        stock: 75,
        isHidden: false
    }
];

// Loại bỏ sản phẩm trùng tên trước khi gộp danh sách
const seenProductNames = new Set();
const finalCatalogProducts = [];
[...verifiedCatalogProducts, ...multiSportCatalog].forEach(item => {
    const normName = String(item.name || "").trim().toLowerCase();
    if (!seenProductNames.has(normName) && !finalCatalogProducts.some(p => p.productCode === item.productCode)) {
        seenProductNames.add(normName);
        finalCatalogProducts.push(item);
    }
});

function initMockData() {
    if (localStorage.getItem("categories") === null) {
        localStorage.setItem("categories", JSON.stringify(mockCategories));
    }

    let currentProducts = JSON.parse(localStorage.getItem("products")) || [];
    if (currentProducts.length < finalCatalogProducts.length) {
        let customAdminProducts = currentProducts.filter(p =>
            !String(p.productCode).startsWith("SP")
        );
        localStorage.setItem("products", JSON.stringify([...customAdminProducts, ...finalCatalogProducts]));
    }
}
initMockData();

let allProducts = JSON.parse(localStorage.getItem("products")) || [];
let allCategories = JSON.parse(localStorage.getItem("categories")) || [];

let filteredList = allProducts.filter(p => !p.isHidden);

let currentPage = 1;
const productsPerPage = 15;

function getProductDisplayPrice(product) {
    return Number(product.salePrice || product.price || product.sellingPrice || product.importPrice || 0);
}

function getCartTotalCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.reduce((sum, item) => sum + Number(item.quantity || item.qty || 1), 0);
}

function updateCartHeaderBadge() {
    const totalCount = getCartTotalCount();
    document.querySelectorAll(".header-icons .icon-item").forEach(item => {
        if (item.textContent.includes("GIỎ HÀNG")) {
            let badge = item.querySelector(".cart-count-badge");
            if (!badge) {
                badge = document.createElement("span");
                badge.className = "cart-count-badge";
                item.style.position = "relative";
                item.appendChild(badge);
            }
            badge.textContent = totalCount;
            badge.style.display = totalCount > 0 ? "inline-flex" : "none";
        }
    });
}

function showSportMaxToast(message) {
    let toast = document.getElementById("sportmax-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "sportmax-toast";
        toast.className = "sportmax-toast";
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    toast.classList.add("show");
    clearTimeout(window.__sportmaxToastTimer);
    window.__sportmaxToastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

function renderCategories() {
    const categoryBox = document.getElementById("category-filter");
    if (!categoryBox) return;
    categoryBox.innerHTML = "";

    const activeCategories = allCategories.filter(cat =>
        !cat.isHidden && allProducts.some(p => p.categoryCode === cat.categoryCode && !p.isHidden)
    );

    activeCategories.forEach(cat => {
        const count = allProducts.filter(p => p.categoryCode === cat.categoryCode && !p.isHidden).length;
        categoryBox.innerHTML += `
            <div style="margin-bottom: 8px;">
                <label style="cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                    <span>
                        <input type="checkbox" class="cat-checkbox" value="${cat.categoryCode}">
                        ${cat.name}
                    </span>
                    <span style="color: #64748b; font-size: 12px;">(${count})</span>
                </label>
            </div>
        `;
    });

    document.querySelectorAll(".cat-checkbox").forEach(cb => {
        cb.addEventListener("change", applyAdvancedFilters);
    });
}

function renderDynamicMenus() {
    const activeCats = allCategories.filter(cat =>
        !cat.isHidden && allProducts.some(p => p.categoryCode === cat.categoryCode && !p.isHidden)
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
}

function updateFilterStatusSummary() {
    let summaryEl = document.getElementById("filterResultSummary");
    const toolbar = document.querySelector(".toolbar");
    if (!summaryEl && toolbar) {
        summaryEl = document.createElement("div");
        summaryEl.id = "filterResultSummary";
        summaryEl.style.fontWeight = "600";
        summaryEl.style.color = "#22303f";
        toolbar.style.justifyContent = "space-between";
        toolbar.style.alignItems = "center";
        toolbar.insertBefore(summaryEl, toolbar.firstChild);
    }
    if (summaryEl) {
        const kw = document.getElementById("searchInput") ? document.getElementById("searchInput").value.trim() : "";
        summaryEl.innerHTML = kw
            ? `Tìm thấy <strong style="color: #3e93d4;">${filteredList.length}</strong> sản phẩm cho từ khóa <em>"${kw}"</em>`
            : `Hiển thị <strong style="color: #3e93d4;">${filteredList.length}</strong> sản phẩm thể thao chính hãng`;
    }
}

function renderProducts() {
    const grid = document.getElementById("productGrid");
    if (!grid) return;
    grid.innerHTML = "";

    updateFilterStatusSummary();

    if (filteredList.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: #fff; border-radius: 10px; border: 1px solid #d7e3ec;">
                <i class="fa-solid fa-box-open" style="font-size: 40px; color: #3e93d4; margin-bottom: 12px;"></i>
                <p style="margin: 0 0 15px; font-size: 16px; font-weight: 600;">Không tìm thấy sản phẩm nào phù hợp với bộ lọc hiện tại.</p>
                <button class="btn-primary" style="width: auto; padding: 10px 24px;" onclick="resetAllFilters()">Xóa bộ lọc & Xem tất cả</button>
            </div>
        `;
        renderPagination();
        return;
    }

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = filteredList.slice(startIndex, endIndex);

    productsToDisplay.forEach(product => {
        if (!product.isHidden) {
            const staticGallery = window.SPORTMAX_GALLERIES && product.sourceUrl
                ? window.SPORTMAX_GALLERIES[product.sourceUrl]
                : null;
            const cardImage = Array.isArray(staticGallery) && staticGallery.length
                ? staticGallery[0]
                : (product.image || "https://via.placeholder.com/200?text=SportMax");

            let displayPrice = getProductDisplayPrice(product);
            let formattedPrice = displayPrice.toLocaleString('vi-VN');
            let hasDiscount = product.originalPrice && Number(product.originalPrice) > displayPrice;
            let originalPriceHtml = hasDiscount
                ? `<span class="original-price">${Number(product.originalPrice).toLocaleString('vi-VN')} ₫</span>`
                : "";

            let productCard = `
                <div class="product-card">
                    ${hasDiscount ? '<span class="sale-badge">SALE</span>' : ""}
                    <a href="product-detail.html?id=${encodeURIComponent(product.productCode)}" style="text-decoration: none; color: inherit;">
                        <img src="${cardImage}" alt="${product.name}" onerror="handleProductImageError('${product.productCode}', this)">
                        <h4>${product.name}</h4>
                    </a>
                    <div class="product-price">${formattedPrice} ₫ ${originalPriceHtml}</div>
                    <div style="display: flex; gap: 8px; margin-top: auto;">
                        <button class="btn-primary" style="flex: 1;" onclick="window.location.href='product-detail.html?id=${encodeURIComponent(product.productCode)}'">Xem chi tiết</button>
                        <button class="btn-primary" style="width: 42px; padding: 10px 0; background-color: #22303f;" onclick="quickAddToCart('${product.productCode}')" title="Thêm vào giỏ hàng">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            grid.innerHTML += productCard;
        }
    });

    renderPagination();
}

function resetAllFilters() {
    if (document.getElementById("searchInput")) document.getElementById("searchInput").value = "";
    if (document.getElementById("minPrice")) document.getElementById("minPrice").value = "";
    if (document.getElementById("maxPrice")) document.getElementById("maxPrice").value = "";
    if (document.getElementById("sortSelect")) document.getElementById("sortSelect").value = "default";
    document.querySelectorAll(".cat-checkbox:checked").forEach(cb => { cb.checked = false; });
    if (window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    applyAdvancedFilters();
}

function quickAddToCart(productCode) {
    const product = allProducts.find(p => p.productCode === productCode);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.productCode === productCode || item.id === productCode);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || existingItem.qty || 1) + 1;
        existingItem.qty = existingItem.quantity;
    } else {
        cart.push({
            id: product.productCode,
            productCode: product.productCode,
            name: product.name,
            price: getProductDisplayPrice(product),
            image: product.image,
            quantity: 1,
            qty: 1
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartHeaderBadge();
    showSportMaxToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

function handleProductImageError(productCode, imageElement) {
    imageElement.onerror = null;
    imageElement.src = "https://via.placeholder.com/200?text=SportMax";
}

function renderPagination() {
    const paginationBox = document.getElementById("pagination");
    if (!paginationBox) return;
    paginationBox.innerHTML = "";

    const totalPages = Math.ceil(filteredList.length / productsPerPage);
    if (totalPages <= 1) return;

    const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
    const visiblePages = [...pages]
        .filter(page => page >= 1 && page <= totalPages)
        .sort((a, b) => a - b);
    const buttons = [];
    let previousPage = 0;

    if (currentPage > 1) {
        buttons.push(`<button class="page-btn page-nav" onclick="changePage(${currentPage - 1})" aria-label="Trang trước"><i class="fa-solid fa-chevron-left"></i></button>`);
    }

    visiblePages.forEach(page => {
        if (previousPage && page - previousPage > 1) {
            buttons.push('<span class="page-ellipsis" aria-hidden="true">...</span>');
        }
        const activeClass = page === currentPage ? "active" : "";
        buttons.push(`<button class="page-btn ${activeClass}" onclick="changePage(${page})">${page}</button>`);
        previousPage = page;
    });

    if (currentPage < totalPages) {
        buttons.push(`<button class="page-btn page-nav" onclick="changePage(${currentPage + 1})" aria-label="Trang sau"><i class="fa-solid fa-chevron-right"></i></button>`);
    }
    paginationBox.innerHTML = buttons.join("");
}

function changePage(pageNumber) {
    const totalPages = Math.max(1, Math.ceil(filteredList.length / productsPerPage));
    currentPage = Math.min(Math.max(1, pageNumber), totalPages);
    renderProducts();
    document.getElementById("productGrid").scrollIntoView({ behavior: "smooth", block: "start" });
}

function toUnaccentedWords(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/đ/g, "d")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function toAccentedWords(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/[-/,()._—]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function hasVietnameseDiacritics(str) {
    return /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(str);
}

function matchSingleKeywordGroup(productName, singleQuery) {
    const q = String(singleQuery || "").trim();
    if (!q) return true;

    const accentedName = toAccentedWords(productName);
    const accentedQuery = toAccentedWords(q);

    if (hasVietnameseDiacritics(accentedQuery)) {
        if (` ${accentedName} `.includes(` ${accentedQuery} `)) {
            return true;
        }
        const qWords = accentedQuery.split(" ").filter(Boolean);
        const nWords = accentedName.split(" ").filter(Boolean);
        return qWords.every(qw => nWords.some(nw => nw === qw));
    }

    const unaccentedName = toUnaccentedWords(productName);
    const unaccentedQuery = toUnaccentedWords(q);

    if (` ${unaccentedName} `.includes(` ${unaccentedQuery} `)) {
        return true;
    }

    const qTokens = unaccentedQuery.split(" ").filter(Boolean);
    const nTokens = unaccentedName.split(" ").filter(Boolean);
    return qTokens.every(qt =>
        nTokens.some(nt => nt === qt || (qt.length >= 4 && nt.startsWith(qt)))
    );
}

function matchProductSearch(productName, rawQuery) {
    const queryStr = String(rawQuery || "").trim();
    if (!queryStr) return true;

    const orGroups = queryStr.split("|").map(s => s.trim()).filter(Boolean);
    return orGroups.some(group => matchSingleKeywordGroup(productName, group));
}

function applyAdvancedFilters() {
    const rawKeyword = document.getElementById("searchInput") ? document.getElementById("searchInput").value : "";
    const checkboxes = document.querySelectorAll(".cat-checkbox:checked");
    const selectedCategories = Array.from(checkboxes).map(cb => cb.value);

    const minPrice = document.getElementById("minPrice") ? document.getElementById("minPrice").value : "";
    const maxPrice = document.getElementById("maxPrice") ? document.getElementById("maxPrice").value : "";

    const params = new URLSearchParams(window.location.search);
    const promoOnly = params.get("sale") === "true";

    filteredList = allProducts.filter(product => {
        if (product.isHidden) return false;

        const displayPrice = getProductDisplayPrice(product);
        const hasDiscount = product.originalPrice && Number(product.originalPrice) > displayPrice;
        if (promoOnly && !hasDiscount) return false;

        const searchTarget = `${product.name || ""} ${product.specifications || ""} ${product.description || ""}`;
        const matchName = matchProductSearch(searchTarget, rawKeyword);
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(product.categoryCode);

        const matchMin = (minPrice === "") ? true : (displayPrice >= parseInt(minPrice));
        const matchMax = (maxPrice === "") ? true : (displayPrice <= parseInt(maxPrice));

        return matchName && matchCategory && matchMin && matchMax;
    });

    applySortLogic();
    currentPage = 1;
    renderProducts();
}

function triggerDirectSearch() {
    document.querySelectorAll(".cat-checkbox:checked").forEach(cb => {
        cb.checked = false;
    });
    applyAdvancedFilters();
}

function applySortLogic() {
    const sortEl = document.getElementById("sortSelect");
    const sortValue = sortEl ? sortEl.value : "default";

    if (sortValue === "priceAsc") {
        filteredList.sort((a, b) => getProductDisplayPrice(a) - getProductDisplayPrice(b));
    } else if (sortValue === "priceDesc") {
        filteredList.sort((a, b) => getProductDisplayPrice(b) - getProductDisplayPrice(a));
    } else {
        filteredList.sort((a, b) => String(a.productCode).localeCompare(String(b.productCode), undefined, { numeric: true }));
    }
}

if (document.getElementById("btnFilter")) {
    document.getElementById("btnFilter").addEventListener("click", applyAdvancedFilters);
}
if (document.getElementById("btnSearch")) {
    document.getElementById("btnSearch").addEventListener("click", triggerDirectSearch);
}
if (document.getElementById("searchInput")) {
    document.getElementById("searchInput").addEventListener("keyup", function (event) {
        if (event.key === "Enter") triggerDirectSearch();
    });
}
if (document.getElementById("sortSelect")) {
    document.getElementById("sortSelect").addEventListener("change", applyAdvancedFilters);
}

if (document.getElementById("productGrid")) {
    renderCategories();
    renderDynamicMenus();
    renderProducts();
}

window.addEventListener('DOMContentLoaded', () => {
    updateCartHeaderBadge();

    const params = new URLSearchParams(window.location.search);
    const searchKeyword = params.get('search') || params.get('keyword');
    const catCode = params.get('cat');
    const saleFlag = params.get('sale');

    if (catCode) {
        const targetCheckbox = document.querySelector(`.cat-checkbox[value="${catCode}"]`);
        if (targetCheckbox) targetCheckbox.checked = true;
    }

    if (searchKeyword && document.getElementById('searchInput')) {
        document.getElementById('searchInput').value = searchKeyword;
    }

    if ((catCode || searchKeyword || saleFlag) && document.getElementById("productGrid")) {
        applyAdvancedFilters();
    }
});
