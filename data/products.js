// Dữ liệu sản phẩm mỹ phẩm Cỏ Mềm
const products = [
  // ===== CHĂM SÓC DA MẶT - TẨY TRANG =====
  {
    id: 1,
    name: "Dầu Tẩy Trang Cỏ Mềm",
    category: "cham-soc-da-mat",
    categoryName: "Chăm Sóc Da Mặt",
    subcategory: "tay-trang",
    subcategoryName: "Tẩy Trang",
    price: 220000,
    oldPrice: 280000,
    image: "IMG/sp-nuoc-tay-trang-1.png",
    badge: "Giảm 21%",
    rating: 4.7,
    sold: 2100,
    description: "Dầu tẩy trang chiết xuất từ dầu dừa và dầu jojoba, nhũ hóa nhanh, làm sạch sâu lớp trang điểm và bụi bẩn mà không làm khô da.",
    ingredients: "Dầu dừa hữu cơ, Dầu Jojoba, Vitamin E, Chiết xuất trà xanh",
    usage: "Lấy một lượng dầu tẩy trang vào lòng bàn tay khô, massage nhẹ nhàng lên mặt khô. Thêm nước để nhũ hóa, massage tiếp rồi rửa sạch.",
    volume: "150ml"
  },
  // ===== CHĂM SÓC DA MẶT - RỬA MẶT =====
  {
    id: 3,
    name: "Sữa Rửa Mặt Cỏ Mềm",
    category: "cham-soc-da-mat",
    categoryName: "Chăm Sóc Da Mặt",
    subcategory: "rua-mat",
    subcategoryName: "Rửa Mặt",
    price: 150000,
    oldPrice: 0,
    image: "IMG/sp-sua-rua-mat-1.png",
    badge: "Mới",
    rating: 4.5,
    sold: 4523,
    description: "Sữa rửa mặt dịu nhẹ làm sạch bụi bẩn và dầu thừa mà không làm khô da. Chiết xuất từ trà xanh và lô hội thiên nhiên.",
    ingredients: "Trà xanh, Lô hội, Salicylic Acid 0.5%, Glycerin",
    usage: "Làm ướt mặt, lấy một lượng nhỏ sữa rửa mặt tạo bọt, massage nhẹ nhàng rồi rửa sạch với nước. Sử dụng 2 lần/ngày.",
    volume: "100ml"
  },
  // ===== TRANG ĐIỂM - SON MÀU =====
  {
    id: 5,
    name: "Son Lì Cỏ Mềm",
    category: "trang-diem",
    categoryName: "Trang Điểm",
    subcategory: "son-mau",
    subcategoryName: "Son Màu",
    price: 180000,
    oldPrice: 0,
    image: "IMG/son-lua.png",
    badge: "Bán chạy",
    rating: 4.8,
    sold: 5678,
    description: "Son lì nhẹ môi, lên màu chuẩn, bền màu suốt ngày dài. Công thức dưỡng ẩm không làm khô môi với dầu jojoba và vitamin E.",
    ingredients: "Dầu Jojoba, Vitamin E, Sáp ong, Màu tự nhiên",
    usage: "Thoa trực tiếp lên môi hoặc dùng cọ tán đều. Có thể dùng làm má hồng.",
    volume: "4ml"
  },
  // ===== TRANG ĐIỂM - SON DƯỠNG =====
  {
    id: 7,
    name: "Son Dưỡng Cỏ Mềm",
    category: "trang-diem",
    categoryName: "Trang Điểm",
    subcategory: "son-duong",
    subcategoryName: "Son Dưỡng",
    price: 120000,
    oldPrice: 0,
    image: "IMG/son-duong.png",
    badge: "Mới",
    rating: 4.9,
    sold: 4300,
    description: "Son dưỡng môi từ thiên nhiên với dầu dừa, bơ hạt mỡ và sáp ong, cấp ẩm tức thì và phục hồi môi khô nứt nẻ.",
    ingredients: "Dầu dừa hữu cơ, Bơ hạt mỡ, Sáp ong, Vitamin E, Tinh dầu bạc hà",
    usage: "Thoa lên môi bất cứ khi nào cần dưỡng ẩm. Có thể dùng làm lớp lót trước son màu.",
    volume: "4g"
  },
  // ===== CHĂM SÓC TÓC - DẦU GỘI =====
  {
    id: 9,
    name: "Dầu Gội Thảo Dược Cỏ Mềm",
    category: "cham-soc-toc",
    categoryName: "Chăm Sóc Tóc",
    subcategory: "dau-goi",
    subcategoryName: "Dầu Gội",
    price: 190000,
    oldPrice: 0,
    image: "IMG/dau-goi.png",
    badge: "Bán chạy",
    rating: 4.7,
    sold: 6789,
    description: "Dầu gội thảo dược với chiết xuất bồ kết, hương nhu và sả chanh giúp làm sạch nhẹ nhàng, ngăn rụng tóc và kích thích mọc tóc.",
    ingredients: "Bồ kết, Hương nhu, Sả chanh, Vitamin B5, Keratin",
    usage: "Làm ướt tóc, lấy một lượng dầu gội vừa đủ massage nhẹ nhàng lên da đầu. Xả sạch và có thể gội lại nếu cần.",
    volume: "250ml"
  },
  // ===== CHĂM SÓC TÓC - DẦU XẢ =====
  {
    id: 11,
    name: "Dầu Xả Mềm Mượt Cỏ Mềm",
    category: "cham-soc-toc",
    categoryName: "Chăm Sóc Tóc",
    subcategory: "dau-xa",
    subcategoryName: "Dầu Xả",
    price: 170000,
    oldPrice: 0,
    image: "IMG/dau-xa.png",
    badge: "Bán chạy",
    rating: 4.6,
    sold: 4532,
    description: "Dầu xả giúp tóc mềm mượt, dễ chải và giảm xơ rối. Chiết xuất dầu argan và tinh dầu bưởi nguyên chất.",
    ingredients: "Dầu Argan, Tinh dầu bưởi, Keratin, Vitamin B5, Biotin",
    usage: "Sau khi gội đầu, thoa dầu xả lên thân tóc và ngọn tóc. Để trong 2-3 phút rồi xả sạch với nước.",
    volume: "200ml"
  },
];

// Danh mục cha
const categories = [
  { id: "cham-soc-da-mat", name: "Chăm Sóc Da Mặt", icon: "fas fa-spa" },
  { id: "trang-diem", name: "Trang Điểm", icon: "fas fa-paint-brush" },
  { id: "cham-soc-toc", name: "Chăm Sóc Tóc", icon: "fas fa-leaf" }
];

// Danh mục con
const subcategories = [
  { id: "tay-trang", name: "Tẩy Trang", parent: "cham-soc-da-mat" },
  { id: "rua-mat", name: "Rửa Mặt", parent: "cham-soc-da-mat" },
  { id: "son-mau", name: "Son Màu", parent: "trang-diem" },
  { id: "son-duong", name: "Son Dưỡng", parent: "trang-diem" },
  { id: "dau-goi", name: "Dầu Gội", parent: "cham-soc-toc" },
  { id: "dau-xa", name: "Dầu Xả", parent: "cham-soc-toc" }
];