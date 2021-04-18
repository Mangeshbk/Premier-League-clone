






// document.getElementById('otherclubs').style.display = 'none'
// document.getElementById('hide_hr').style.display = 'none'


// document.getElementById('personal-1').style.display = 'none'
// document.getElementById('fav-1').style.display = 'block'
// document.getElementById('email-1').style.display = 'block'
// document.getElementById('personal-2').style.display = 'none'
// document.getElementById('fav-2').style.display = 'none'
// document.getElementById('email-2').style.display = 'none'



var userData = JSON.parse(localStorage.getItem('userArr'))
var user_first_name = JSON.parse(localStorage.getItem('current_user'))

  console.log(user_first_name)




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
    // user['league_email_coomunication'] = league_email_coomunication


    for (let i = 0; i < 9; i++) {
        if (d[i].checked == true) {
            partner_email_coomunication.push(d[i].value)
        }
    }
    // user['partner_email_coomunication'] = partner_email_coomunication


    for(let i = 0; i < userData.length; i++){
        if(user_first_name==userData[i].first_name){
             userData[i].partner_email_coomunication = partner_email_coomunication
             userData[i].league_email_coomunication = league_email_coomunication

    
        }
    }

    //userData.push(user)
    localStorage.setItem('userArr', JSON.stringify(userData))
    window.location.href='index.html'
}



function goBack(){
    window.location.href='manage_profile_2.html'
}