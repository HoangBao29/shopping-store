var currentLocation = window.location.href;
var param = currentLocation.slice(-1);

// fake data id = 1

const data = [
    {
        id: 1,
        image: "./images/item1.jpg",
        name: "Jumpsuit Trễ Vai Tay Bèo",
        price: 2100000,
        description: "Sản phẩm được làm từ chất liệu vải thô hai lớp, tạo cảm giác mềm mại và thoáng khí cho da. Chất liệu này cũng mang đến độ bền cao và giúp duy trì hình dáng của jumpsuit theo thời gian."
    },
    {
        id: 2,
        image: "./images/item2.jpg",
        name: "Đầm chữ A dạo phố",
        price: 1900000,
        description: "Thiết kế đầm dáng chữ A dài qua gối giúp tôn lên nét đẹp của vóc dáng và mang đến sự thoải mái khi diện. Chi tiết không tay cùng phần hai bên vai khâu viền tạo điểm nhấn và thêm phần hiện đại cho thiết kế."
    },
    {
        id: 3,
        image: "./images/item3.jpg",
        name: "Đầm Chiffon cổ V",
        price: 1320000,
        description: "Rosie Set là một bộ trang phục đầy nữ tính và quyến rũ, gồm một thiết kế áo và chân váy đồng bộ, được làm từ chất liệu vải ren cao cấp với họa tiết hoa in nổi tinh tế."
    },
    {
        id: 4,
        image: "./images/item4.jpg",
        name: "Đầm lụa xòe phối khuy",
        price: 3620000,
        description: "Rosie Set là một bộ trang phục đầy nữ tính và quyến rũ, gồm một thiết kế áo và chân váy đồng bộ, được làm từ chất liệu vải ren cao cấp với họa tiết hoa in nổi tinh tế."
    },
    {
        id: 5,
        image: "./images/item5.jpg",
        name: "Quần sooc viền ren",
        price: 9820000,
        description: "Rosie Set là một bộ trang phục đầy nữ tính và quyến rũ, gồm một thiết kế áo và chân váy đồng bộ, được làm từ chất liệu vải ren cao cấp với họa tiết hoa in nổi tinh tế."
    },
    {
        id: 6,
        image: "./images/item6.jpg",
        name: "Áo tencel phối viền bèo",
        price: 6231000,
        description: "Rosie Set là một bộ trang phục đầy nữ tính và quyến rũ, gồm một thiết kế áo và chân váy đồng bộ, được làm từ chất liệu vải ren cao cấp với họa tiết hoa in nổi tinh tế."
    },
    {
        id: 7,
        image: "./images/item7.jpg",
        name: "Áo dài Tay Bèo",
        price: 3265000,
        description: "Rosie Set là một bộ trang phục đầy nữ tính và quyến rũ, gồm một thiết kế áo và chân váy đồng bộ, được làm từ chất liệu vải ren cao cấp với họa tiết hoa in nổi tinh tế."
    },
    {
        id: 8,
        image: "./images/item8.jpg",
        name: "3 piece blazer set",
        price: 1023000,
        description: "Rosie Set là một bộ trang phục đầy nữ tính và quyến rũ, gồm một thiết kế áo và chân váy đồng bộ, được làm từ chất liệu vải ren cao cấp với họa tiết hoa in nổi tinh tế."
    },
    {
        id: 9,
        image: "./images/item9.jpg",
        name: "Áo sơ mi tencel",
        price: 2030000,
        description: "Rosie Set là một bộ trang phục đầy nữ tính và quyến rũ, gồm một thiết kế áo và chân váy đồng bộ, được làm từ chất liệu vải ren cao cấp với họa tiết hoa in nổi tinh tế."
    },
    {
        id: 10,
        image: "./images/item10.jpg",
        name: "3 piece blazer set",
        price: 1890000,
        description: "Rosie Set là một bộ trang phục đầy nữ tính và quyến rũ, gồm một thiết kế áo và chân váy đồng bộ, được làm từ chất liệu vải ren cao cấp với họa tiết hoa in nổi tinh tế."
    }
]

const product = data.find((item)=>{
    return item.id == param
})
console.log(product);

var elementCard = document.querySelector(".product");
elementCard.innerHTML = `<div><img src=${product.image} alt="item1"></div>
<div class="product__content">
    <h1>${product.name}</h1>
    <span>Giá:</span>
    <span>${product.price}</span>
    <button>Mua hàng</button>
    <p>Giới thiệu</p>
    <p>${product.description}</p>
</div>`

const sameProduct = data.filter((value)=>{
   return (
        ((product.price-500000) < value.price) && ((product.price+500000) > value.price) && value.id !== product.id
   )
})
console.log(sameProduct);
console.log(product.price);

var elementProduct = document.querySelector(".wrapper-card");
const renderProduct = sameProduct.map((item)=>{
    return (
        `<div class="card">
        <img src=${item.image} alt="item2">
        <p>${item.name}</p>
        <p>${item.price}</p>
    </div>`
    )
})

elementProduct.innerHTML = renderProduct.join(" ");


