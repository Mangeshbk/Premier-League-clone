
let userData = JSON.parse(localStorage.getItem('userArr')) || []

let btn_next = document.getElementById('btn_next')
btn_next.addEventListener('click', validate)



function validate() {
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let date = document.getElementById('date').value;
    let mobile = document.getElementById('mobile').value;



    if (first_name == '' || last_name == '' || email == '' || password == '' || gender == '' || date == '' || mobile == '') {
        alert('Please Fill all the input box')
    }
    else {
        let user = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            gender: gender,
            date: date,
            mobile: mobile
        }
        localStorage.setItem('current_user',JSON.stringify(email))
        userData.push(user)
        console.log(userData)
        localStorage.setItem('current_user',JSON.stringify(first_name))
        localStorage.setItem('userArr', JSON.stringify(userData))
        //  document.getElementById('step-2').style.opacity='1.0'
        window.location.href = 'manage_profile.html'
    }
}





let first_name = document.getElementById('first_name')
first_name.addEventListener('input', show1)
function show1() {
    first_name = document.getElementById('first_name').value;
    console.log(first_name)
    if (first_name.length >= 3) {
        first_img.style.display = 'block'
    } else {
        first_img.style.display = 'none'
    }
}





let last_name = document.getElementById('last_name')
last_name.addEventListener('input', show)
function show() {
    last_name = document.getElementById('last_name').value;
    console.log(last_name)
    if (last_name.length >= 3) {
        second_img.style.display = 'block'
    } else {
        second_img.style.display = 'none'
    }
}



let email = document.getElementById('email')
email.addEventListener('input', show3)
function show3() {
    email = document.getElementById('email').value;
    console.log(email)
    var res = email.includes('@')
    if (res == true) {
        email_img.style.display = 'block'
    } else {
        email_img.style.display = 'none'
    }
}




let pass = document.getElementById('password')
pass.addEventListener('input', show4)
function show4() {
    pass = document.getElementById('password').value;
    console.log(pass)
    if (pass.length >= 8) {
        pass_img.style.display = 'block'
    } else {
        pass_img.style.display = 'none'
    }
}



// let gender =  document.querySelector('input[name="gender"]:checked')
// gender.addEventListener('input',show5)
// function show5(){
//     gender =  document.querySelector('input[name="gender"]:checked').value;
//     console.log(gender)
//     if(gender.length == 'male' || 'female' || 'other'){
//         gender_img.style.display='block'
//     } else{
//         gender_img.style.display='none'
//     }
// }



let date = document.getElementById('date')
date.addEventListener('input', show6)
function show6() {
    date = document.getElementById('date').value;
    console.log(date)
    if (date.length != '') {
        date_img.style.display = 'block'
    } else {
        date_img.style.display = 'none'
    }
}



let mobile = document.getElementById('mobile')
mobile.addEventListener('input', show2)
function show2() {
    mobile = document.getElementById('mobile').value;
    console.log(mobile)
    if (mobile.length == 10) {
        mobile_img.style.display = 'block'
    } else {
        mobile_img.style.display = 'none'
    }
}
