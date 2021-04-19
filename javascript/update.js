var loggedin_user = JSON.parse(localStorage.getItem("userArr"));
console.log(loggedin_user);

function manage() {
  window.location.href = "manage_profile.html";
}
