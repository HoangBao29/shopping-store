// fake data

const data = [
    {
        id: 1,
        image: "./images/item1.jpg",
        name: "Jumpsuit Trễ Vai Tay Bèo",
        price: 2100000
    },
    {
        id: 2,
        image: "./images/item2.jpg",
        name: "Đầm chữ A dạo phố",
        price: 1900000
    },
    {
        id: 3,
        image: "./images/item3.jpg",
        name: "Đầm Chiffon cổ V",
        price: 1320000
    },
    {
        id: 4,
        image: "./images/item4.jpg",
        name: "Đầm lụa xòe phối khuy",
        price: 3620000
    },
    {
        id: 5,
        image: "./images/item5.jpg",
        name: "Quần sooc viền ren",
        price: 9820000
    },
    {
        id: 6,
        image: "./images/item6.jpg",
        name: "Áo tencel phối viền bèo",
        price: 6231000
    },
    {
        id: 7,
        image: "./images/item7.jpg",
        name: "Áo dài Tay Bèo",
        price: 3265000
    },
    {
        id: 8,
        image: "./images/item8.jpg",
        name: "3 piece blazer set",
        price: 1023000
    },
    {
        id: 9,
        image: "./images/item9.jpg",
        name: "Áo sơ mi tencel",
        price: 2030000
    },
    {
        id: 10,
        image: "./images/item10.jpg",
        name: "3 piece blazer set",
        price: 1890000
    }
]

// render data



var elementCard = document.querySelector(".wrapper-product");
const renderData = data.map((item)=>{
    return `<div class="product__card">
    <img onclick="handlePagination(${item.id})" src=${item.image} alt="item">
    <p>${item.name}</p>
    <p>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    <div>
        <button onclick="handleOrder(${item.id})">Mua ngay</button>
    </div>
</div>`
})
elementCard.innerHTML = renderData.join(" ");

const handlePagination = (id) => {
    // window.location.href = `detail.html?index=${id}`;
}

// get data from input

var loginActive = localStorage.getItem("login");
if (!loginActive) {
    var cartRender = document.querySelector(".cart");
    cartRender.remove();
    console.log(cartRender);
}
console.log(loginActive);

var renderLogin = document.getElementById("account")
console.log(renderLogin);
if(loginActive !== null) {
    var dataLogin = JSON.parse(loginActive)
    renderLogin.innerHTML=`<ul id="account">
    <li><a href="profile.html">${dataLogin.name}</a></li>
    <span>/</span>
    <li><a onclick="handleLogout()">Đăng xuất</a></li>
</ul>`
}

// function logout

const handleLogout = () => {
    localStorage.removeItem('login');
    window.location.href = "index.html";
}

console.log(loginActive);

const handleGetItem = () => {
    var renderItem = document.querySelector(".item-card");
    var checkProduct = JSON.parse(localStorage.getItem('product'));
    if(checkProduct === null){
        renderItem.innerText = 0;
    }
    else {
        const filterUser = checkProduct.find((item)=>{
            return item.email === JSON.parse(loginActive).email
        })
        if(!filterUser){
            renderItem.innerText = `0`
        }
        else {
            const qty = filterUser.dataOrders.reduce((acc,cur)=>{
                return acc + cur.quality
            },0)
            renderItem.innerText = `${qty}`
        }
    }
}

handleGetItem();


const handleOrder = (id) => {
    if(loginActive === null) {
        alert("Xin vui lòng đăng nhập để mua hàng!")
        window.location.href="login.html"
    }
    else {
        var dataUserOrder = JSON.parse(loginActive);
        const item = data.find((value)=>{
            return value.id === id
        })
        console.log("=======item", item);
        item.quality = 1;
        // item.userEmail = dataUserOrder.email;
        var product = JSON.parse(localStorage.getItem("product"))
        console.log(item);
        // // console.log(product)
        if(product === null){
            localStorage.setItem('product', JSON.stringify([{
                email: dataUserOrder.email,
                dataOrders: [
                    item
                ]
            }]))
        }
        else{
            console.log(product);
            const checkUser = product.find((user)=>{
                return user.email === dataUserOrder.email
            })
            if (checkUser) {
                const checkItem = checkUser.dataOrders.find((item)=>{
                    return item.id === id;
                })
                console.log(checkItem);
                if(checkItem){
                    checkItem.quality += 1;
                }
                else{
                    product.find((value)=>{
                        if(value.email === dataUserOrder.email){
                            value.dataOrders.push(item)
                        }
                    })
                }
            }
            else{
                item.email = dataUserOrder.email;

                product.push({
                    email: dataUserOrder.email,
                    dataOrders: [
                        item
                    ]
                })
            }
            localStorage.setItem('product', JSON.stringify(product))
        }
        handleGetItem();
    }
    // kiem tra co product, bang  cach la get Item
    //  => null => push len cai [{}]
    // ko null thi convert tk lay ve => push len cai mang
}


