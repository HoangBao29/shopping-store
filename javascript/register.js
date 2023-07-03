// get data from input field

var nameData = document.getElementById('inputId')
var emailData = document.getElementById('email')
var namePass = document.getElementById('password')
var retypePass = document.getElementById('retype')
var phoneData = document.getElementById('phone')
var nameAdd = document.getElementById('address')


// regex validate

let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let regexPass = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
let regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
// submit form function

function submitForm(event){
    // block event submit form
    event.preventDefault();
    // validate form data
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
    // create user infor
    if(check===true){
        // save user infor local storage
        
        // lấy tk userInfor từ local về

        var userInfor = localStorage.getItem("user");
        if(userInfor === null){
            localStorage.setItem('user', JSON.stringify([{
                name: nameData.value,
                email: emailData.value,
                pass: namePass.value,
                phone: phoneData.value,
                add: nameAdd.value,
            }]));
            window.location.href = 'login.html';
        }
        else{
            const newUser = JSON.parse(userInfor)
            var kiemtra = newUser.some((item)=>{
                return item.email === emailData.value
            })
            if (kiemtra === false) {
                newUser.push({
                    name: nameData.value,
                    email: emailData.value,
                    pass: namePass.value,
                    phone: phoneData.value,
                    add: nameAdd.value,
                })
                localStorage.setItem('user', JSON.stringify(newUser));
                window.location.href = 'login.html';
            }else{
                alert("Email đã được sử dụng, vui lòng nhập email khác!")
            }
            
            
            
            
        }
        // 1 goi trong inforUser --> lay data từ local về --> conver cái mảng --> push inforUser

        // inforUser.push()
       }
    

    //
    // link to login page 
    // 
}
