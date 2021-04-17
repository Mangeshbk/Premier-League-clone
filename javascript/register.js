//console.log(registered_users)



function body_conatiner() {
    var div = document.getElementById('body-container')
    div.innerHTML = `<div id="strip">
    <h1>Sign In <span>Register</span></h1>
</div>
<div id="signin-container">
    <div id="sign-in">
        <label>Email Address</label><br>
        <input type="email" id="mail"><br>
        <label> Password</label><br>
        <input type="password" id="pass"></input><br>
        <div id="forget"><a href="#">Forgot login details?</a></div>
        <div id="sigin-btn"><button id="sigin">Sign in</button></div>
        <div id="login-info">
            <hr>
            <p> or login with</p>
            <hr>
        </div>

    </div>
    <div id="register">
        <h2>Don't have a Premier League account?</h2>
        <p>In that case, you are missing out on:</p>
        <li>Fantasy Premier League football game
        </li>
        <li>Exclusive fan services</li>
        <li>Customised site content</li>
        <li>Favourite Club information and notifications</li>
        <button id="register-btn">Register</button>
    </div>
    <div id="login-options">
        <button class="fb-login"><img src="https://users.premierleague.com/static/libsass/plusers/dist/img/svg/icon-facebook.svg" alt=""><p>Facebook</p></button>
        <button class="twitter-login"><img src="https://users.premierleague.com/static/libsass/plusers/dist/img/svg/icon-twitter.svg" alt=""><p>Twitter</p></button>
        <button class="google-login"><img src="https://users.premierleague.com/static/libsass/plusers/dist/img/svg/icon-google.svg" alt=""><p>Google</p></button>
        <button class="apple-login"><img src="https://users.premierleague.com/static/libsass/plusers/dist/img/svg/icon-apple.svg" alt=""><p>Apple</p></button>
    </div>
</div>`

    return div
}




function siginIN() {
    var registered_users = JSON.parse(localStorage.getItem('userArr'))

    let login_btn = document.getElementById('sigin')
    login_btn.addEventListener('click', function() {
        var sigin_mail = document.getElementById('mail').value;
        var signin_pass = document.getElementById('pass').value;

        if (sigin_mail == '' || signin_pass == '') {
            alert(`Please provide the email and password`)
        }

        registered_users.forEach(el => {
            var { email, password } = el
            console.log(email, password)
            if (sigin_mail == email && signin_pass == password) {
                alert(`logged in`)
            }
        });
    })
    return login_btn
}


function register() {
    let btn = document.getElementById('register-btn')
    btn.addEventListener('click', function() {
        location.assign('registration.html')
    })
    return btn
}


export { register, siginIN, body_conatiner }