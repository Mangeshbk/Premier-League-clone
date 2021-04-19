
let userData = JSON.parse(localStorage.getItem('userArr')) 
let user_first_name = JSON.parse(localStorage.getItem('current_user'))
console.log(userData)


for(let i = 0; i < userData.length; i++){
    if(user_first_name==userData[i].first_name){
        document.getElementById('first_name').value=userData[i].first_name
        document.getElementById('last_name').value = userData[i].last_name
        document.getElementById('email').value = userData[i].email;
        document.getElementById('password').value = userData[i].password
        // document.querySelector('input[name="gender"]:checked').value = userData[i].gender
        document.getElementById('date').value = userData[i].date
        document.getElementById('mobile').value = userData[i].mobile
    }
}






















let btn_next = document.getElementById('btn_next')
btn_next.addEventListener('click', validate)



function validate() {
   let new_first_name = document.getElementById('first_name').value;
   let new_last_name = document.getElementById('last_name').value;
   let new_email = document.getElementById('email').value;
   let new_password = document.getElementById('password').value;
   let new_gender = document.querySelector('input[name="gender"]:checked').value;
   let new_date = document.getElementById('date').value;
   let new_mobile = document.getElementById('mobile').value;



    if (new_first_name == '' ||new_last_name == '' || new_email == '' || new_password == '' || new_gender == '' || new_date == '' || new_mobile == '') {
        alert('Please Fill all the input box')
    }
   else {
        userData.forEach(element => {
           
            if(user_first_name==element.first_name){
               
                element.first_name=new_first_name
                element.last_name = new_last_name
                element.email = new_email
                element.password = new_password
                element.gender = new_gender
                element.date = new_date
                element.mobile = new_mobile
                
            }
            
        });

        //  document.getElementById('step-2').style.opacity='1.0'
        localStorage.setItem('userArr', JSON.stringify(userData))
        window.location.href = 'manage_profile_2.html'
        
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
