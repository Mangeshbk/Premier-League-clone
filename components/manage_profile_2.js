

var userData = JSON.parse(localStorage.getItem('userArr')) 

let user_first_name = JSON.parse(localStorage.getItem('current_user'))
console.log(userData,user_first_name)









document.getElementById('personal-1').style.display = 'none'
document.getElementById('fav-1').style.display = 'block'
document.getElementById('email-1').style.display = 'block'
document.getElementById('personal-2').style.display = 'block'
document.getElementById('fav-2').style.display = 'none'
document.getElementById('email-2').style.display = 'none'

document.getElementById('otherclubs').style.display = 'none'
document.getElementById('hide_hr').style.display = 'none'







var btn_value = document.querySelector('#club-container');
btn_value.addEventListener('click', getValue)

function getValue(e) {
    
    if (e.target != e.currentTarget) {
        var value = e.target.value;
        // alert(value)
       favClub = value
        
        // userData.push(user)
        e.target.style.background = '#e90052'
        e.target.style.color = '#white'
        
        for(let i = 0; i < userData.length; i++){
            if(user_first_name == userData[i].first_name){
                 userData[i].favClub = favClub
            }
        }
           
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
    // user['other_favClub'] = otherFavClub
    // console.log(user)
    // userData.push(user)

    for(let i = 0; i < userData.length; i++){
        if(user_first_name == userData[i].first_name){
             userData[i].otherFavClub = otherFavClub
        }
    }

    localStorage.setItem('userArr',JSON.stringify(userData))
    window.location.href='manage_profile_3.html'



    // document.getElementById('fav_club').style.display = 'block'
    // document.getElementById('userPersonalDetail').style.display = 'none'
    // document.getElementById('favClub').style.display = 'none'


    // document.getElementById('fav-1').style.display = 'none'
    // document.getElementById('fav-2').style.display = 'block'
}























function goBack(){
    window.location.href='manage_profile.html'
}














function otherclub() {

    document.getElementById('otherclubs').style.display = 'block'
    document.getElementById('hide_hr').style.display = 'block'

}