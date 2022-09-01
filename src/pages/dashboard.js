var currentUser = sessionStorage.getItem("userName");
document.getElementById("welcome-user").innerHTML = currentUser;

//accordion
var acc = document.getElementsByClassName("info-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//start  button
var startbtns = document.getElementsByClassName("start-button");
for (i=0; i<startbtns.length; i++) {
  startbtns[i].addEventListener("click",()=>{
    let btn_triggered = event.target.id;
    start(btn_triggered);
  })
}

function start(bt){
  localStorage.setItem("quizType",bt);
  
  let currentPath = window.location.pathname;
  let newpath = currentPath.slice(0,currentPath.indexOf("dashboard.html")) + "quiz.html"
  window.location.pathname = newpath;
}
function showScoreboard(){
  let currentPath = window.location.pathname;
  let newpath = currentPath.slice(0,currentPath.indexOf("dashboard.html")) + "scoreboard.html"
  window.location.pathname = newpath;
}
function viewDashboard(){
  location.reload();
}
function logOut(){
  let currentPath = window.location.pathname;
  let newpath = currentPath.slice(0,currentPath.indexOf("pages")) + "index.html"
  window.location.pathname = newpath;
}