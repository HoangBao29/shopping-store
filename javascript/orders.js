var loginActive = localStorage.getItem("login");
if (loginActive === null) {
    alert("Xin vui lòng đăng nhập để xem giỏ hàng của bạn!")
    window.location.href="login.html"
}
else {
    const dataOrder = JSON.parse(localStorage.getItem("product"));
    console.log(dataOrder);
    const renderTable = document.querySelector(".table")
    const renderOrder = dataOrder.map((item,index)=>{
        console.log(item);
        console.log(index);
        return (
            `<tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td style="width:20%"><div><img src=${item.image} alt="image"></div></td>
            <td>${item.price}</td>
            <td>${item.quality}</td>
            <td>${item.price*item.quality}</td>
          </tr>`
        )
    })
    document.getElementById("table").insertAdjacentHTML('renderOrder', renderOrder);
}