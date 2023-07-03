var loginActive = localStorage.getItem("login");
console.log(loginActive);

var renderLogin = document.getElementById("account")
console.log(renderLogin);
if(loginActive !== null) {
    renderLogin.innerHTML=`<ul id="account">
    <li><a href="profile.html">Trang cá nhân</a></li>
</ul>`
}



var userInfor = localStorage.getItem("login");
const newUser = JSON.parse(userInfor)
console.log("data láy ve", newUser);
document.getElementById("inputId").value = newUser.name;
document.getElementById("email").value = newUser.email;
document.getElementById("password").value = newUser.pass;
document.getElementById("retype").value = newUser.retype;
document.getElementById("phone").value = newUser.phone;
document.getElementById("address").value = newUser.add;


// lay local ve getitem
// document.... set input value cho tung input
//  = login.name value = login.email

// regex validate

let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let regexPass = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
let regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/

function submitForm(event) {
    event.preventDefault();
    var nameData = document.getElementById('inputId')
    var emailData = document.getElementById('email')
    var namePass = document.getElementById('password')
    var retypePass = document.getElementById('retype')
    var phoneData = document.getElementById('phone')
    var nameAdd = document.getElementById('address')

    console.log(namePass.value);

    let check = true;
    if(nameData.value === ""){
        alert("Xin vui lòng nhập họ và tên của bạn!")
        check = false;
    }
    if(regexEmail.test(emailData.value) === false){
        alert("Vui lòng nhập đúng định dạng email!")
        check = false;
    }
    if(namePass.value=== ""){
        alert("Xin vui lòng nhập mật khẩu của bạn!")
        check = false;
    }
    else if(regexPass.test(namePass.value) === false){
        alert("Vui lòng đúng định dạng mật khẩu: bao gồm chữ hoa, chữ thường, số từ 8 đến 16 kí tự")
        check = false;
    }
    else if(retypePass.value !== namePass.value){
        alert("Vui lòng nhập giống mật khẩu!")
        check = false;
    }
    if(phoneData.value === ""){
        alert("Xin vui lòng nhập số điện thoại của bạn!")
        check = false;
    }
    else if(regexPass.test(phoneData.value) === false){
        alert("Xin vui lòng nhập đúng định dạng của số điện thoại!")
        check = false;
    }
    if(nameAdd.value === ""){
        alert("Vui lòng nhập địa chỉ!")
        check = false;
    }
    console.log(check);
    if (check) {
        var getUser = localStorage.getItem("user");
        const userUpdate = JSON.parse(getUser)
        console.log(userUpdate);
        const newUserUpdate = userUpdate.map((item)=> {
            if(item.email === emailData.value){
                {
                    return ({
                        name: nameData.value,
                        email: emailData.value,
                        pass: namePass.value,
                        phone: phoneData.value,
                        add: nameAdd.value,
                    })
                }
            }
            return item
        })
        console.log("hahahhaha",newUserUpdate);
        localStorage.setItem('user', JSON.stringify(newUserUpdate));

        var newLoginUpdate = newUserUpdate.find((item)=>{
            return item.email === emailData.value
        })
        console.log(newLoginUpdate);
        newLoginUpdate.active = true;
        // console.log(newLoginUpdate);
        localStorage.setItem('login', JSON.stringify(newLoginUpdate));
    }
}
