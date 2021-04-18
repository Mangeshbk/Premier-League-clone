document.getElementById('personal-1').style.display = 'block'
document.getElementById('fav-1').style.display = 'block'
document.getElementById('email-1').style.display = 'block'
document.getElementById('personal-2').style.display = 'none'
document.getElementById('fav-2').style.display = 'none'
document.getElementById('email-2').style.display = 'none'
document.getElementById('right-mark').style.display = 'none'
document.getElementById('cross-mark').style.display = 'none'
document.getElementById('right-mark1').style.display = 'none'
document.getElementById('cross-mark1').style.display = 'none'
document.getElementById('right-mark2').style.display = 'none'
document.getElementById('cross-mark2').style.display = 'none'
document.getElementById('right-mark3').style.display = 'none'
document.getElementById('cross-mark3').style.display = 'none'
document.getElementById('right-mark4').style.display = 'none'
document.getElementById('cross-mark4').style.display = 'none'
document.getElementById('right-mark5').style.display = 'none'
document.getElementById('cross-mark5').style.display = 'none'
document.getElementById('right-mark8').style.display = 'none'
document.getElementById('cross-mark8').style.display = 'none'

document.getElementById('userPersonalDetail').style.display = 'block'
document.getElementById('favClub').style.display = 'none'
document.getElementById('fav_club').style.display = 'none'
document.getElementById('otherclubs').style.display = 'none'
document.getElementById('hide_hr').style.display = 'none'

var registered_user = JSON.parse(localStorage.getItem('userArr')) || []

var users

function register2() {
    var first_name = document.getElementById('fn').value;
    var last_name = document.getElementById('ln').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var mobile = document.getElementById('mobile').value;
    var gender = document.querySelector("input[name=gender]:checked")


    if (first_name == '' || first_name.length < 4) {
        // alert('Please fill all the details')
        document.getElementById('cross-mark').style.display = 'block'
    }
    if (last_name == "") {
        document.getElementById('cross-mark1').style.display = 'block'
    }
    if (email == "") {
        document.getElementById('cross-mark2').style.display = 'block'
    }
    if (password == '' || password.length < 8) {
        document.getElementById('cross-mark3').style.display = 'block'
    }
    if (dob == '') {
        document.getElementById('cross-mark5').style.display = 'block'
    }
    if (mobile == '') {
        document.getElementById('cross-mark8').style.display = 'block'
    } else {
        document.getElementById('right-mark').style.display = 'block'
        document.getElementById('right-mark1').style.display = 'block'
        document.getElementById('right-mark2').style.display = 'block'
        document.getElementById('right-mark3').style.display = 'block'
            //document.getElementById('right-mark4').style.display = 'block'
        document.getElementById('right-mark5').style.display = 'block'
        document.getElementById('right-mark8').style.display = 'block'

        document.getElementById('userPersonalDetail').style.display = 'none'
        document.getElementById('favClub').style.display = 'block'
        document.getElementById('personal-2').style.display = 'block'
        document.getElementById('personal-1').style.display = 'none'



        users = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            date_of_birth: dob,
            mobile: mobile,
            gender: gender.value
        }




    }





}




var btn_value = document.querySelector('#club-container');
btn_value.addEventListener('click', getValue)




function getValue(e) {
    if (e.target != e.currentTarget) {
        var value = e.target.value;
        alert(value)
        e.target.style.background = '#e90052'
        e.target.style.color = '#white'
        users['fav_club'] = value
            //console.log(users)


        e.stopPropagation()


    }

}


function next() {
    var c = document.getElementsByClassName('checks')
    var otherFavClub = []

    for (let i = 0; i < 20; i++) {
        if (c[i].checked == true) {
            otherFavClub.push(c[i].value)
        }
    }
    users['other_favClub'] = otherFavClub



    document.getElementById('fav_club').style.display = 'block'
    document.getElementById('userPersonalDetail').style.display = 'none'
    document.getElementById('favClub').style.display = 'none'


    document.getElementById('fav-1').style.display = 'none'
    document.getElementById('fav-2').style.display = 'block'
}


function complete() {
    let c = document.getElementsByClassName('checks1')
    let d = document.getElementsByClassName('checks2')
    let league_email_coomunication = []
    let partner_email_coomunication = []

    for (let i = 0; i < 5; i++) {
        if (c[i].checked == true) {
            league_email_coomunication.push(c[i].value)
        }
    }
    users['league_email_coomunication'] = league_email_coomunication


    for (let i = 0; i < 5; i++) {
        if (c[i].checked == true) {
            partner_email_coomunication.push(c[i].value)
        }
    }
    users['partner_email_coomunication'] = partner_email_coomunication


    registered_user.push(users)
    localStorage.setItem('userArr', JSON.stringify(registered_user))
}


function otherclub() {

    document.getElementById('otherclubs').style.display = 'block'
    document.getElementById('hide_hr').style.display = 'block'

}