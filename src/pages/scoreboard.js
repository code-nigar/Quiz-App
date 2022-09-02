//accordion
var acc = document.getElementsByClassName("dg");
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
//dashboard button
function viewDashboard(){
  let currentPath = window.location.pathname;
  let newpath = currentPath.slice(0,currentPath.indexOf("scoreboard.html")) + "dashboard.html"
  window.location.pathname = newpath;
}
//logout button
function logOut(){
  let currentPath = window.location.pathname;
  let newpath = currentPath.slice(0,currentPath.indexOf("pages")) + "index.html"
  window.location.pathname = newpath;
}
//score fetching and displaying
let htmlScore = localStorage.getItem("HTML-Score");
let cssScore = localStorage.getItem("CSS-Score");
let jsScore = localStorage.getItem("JS-Score");
console.log(htmlScore);
console.log(cssScore);
console.log(jsScore);
if(htmlScore){
  document.getElementsByClassName("score-count")[0].innerText = htmlScore;
}
if(cssScore){
  document.getElementsByClassName("score-count")[1].innerText = cssScore;
}
if(jsScore){
  document.getElementsByClassName("score-count")[2].innerText = jsScore;
}

//hidden play buttons
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
  let newpath = currentPath.slice(0,currentPath.indexOf("scoreboard.html")) + "quiz.html"
  window.location.pathname = newpath;
}