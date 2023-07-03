// get data from input field

var emailData = document.getElementById('email')
var namePass = document.getElementById('password')

function submitForm(event) {
    // block event submit form
    event.preventDefault();
    let check = true;
    if (emailData.value === "") {
        alert ("Vui lòng nhập Email!")
        check = false
    }
    if (namePass.value === "") {
        alert("Vui lòng nhập mật khẩu!")
        check = false
    }
    if (check === true) {
        var userInfor = localStorage.getItem("user");
        const newUser = JSON.parse(userInfor)
            console.log(newUser);
            var kiemtra = newUser.some((item)=>{
                return item.email === emailData.value && item.pass === namePass.value
            })
            if (kiemtra === true) {
                var timkiem = newUser.find((item)=>{
                    return item.email === emailData.value
                })
                timkiem.active = true;
                localStorage.setItem('login', JSON.stringify(timkiem));
                window.location.href = 'index.html';
            }else {
                alert ("Sai email hoặc mật khẩu, vui lòng nhập lại!")
            }    
    }
}