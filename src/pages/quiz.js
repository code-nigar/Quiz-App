let quizType = localStorage.getItem("quizType");
console.log(quizType);
let quizTitle = quizType.slice(0,quizType.indexOf("btn"))+" Quiz";
document.getElementById("quiz-title").innerHTML = quizTitle;

function Question(
  question,
  option1,
  option2,
  option3,
  option4,
  correctOptionNumber
) {
  this.question = question;
  this.option1 = option1;
  this.option2 = option2;
  this.option3 = option3;
  this.option4 = option4;
  this.correctOptionNumber = correctOptionNumber;
}
// array of quiz-question-objects
const html_quiz = [
  {
    QuizQuestion: new Question(
      "HTML stands for :",
      "hyper tool market language",
      "Hyper text markup language",
      "both",
      "none",
      2
    ),
  },
  {
    QuizQuestion: new Question(
      "Who is making the Web standards? :",
      "google",
      "mozilla",
      "world wide web consortium",
      "microsoft",
      2
    ),
  },
  {
    QuizQuestion: new Question(
      "Fundamental HTML Block is known as ___________. :",
      "HTML Body",
      "HTML Tag",
      "HTML Element",
      "HTML Attribute",
      2
    ),
  },
  {
    QuizQuestion: new Question(
      "What tag is used to display a picture in a HTML page? :",
      "picture",
      "image",
      "src",
      "img",
      4
    ),
  },
  {
    QuizQuestion: new Question(
      "HTML web pages can be read and rendered by :",
      "Compiler",
      "Server",
      "Web Browser",
      "Interpreter",
      3
    ),
  }
];
const css_quiz = [
  {
    QuizQuestion: new Question(
      "CSS stands for :",
      "cascading style sheet",
      "color style sheet",
      "creative style sheet",
      "computer style sheet",
      1
    ),
  },
  {
    QuizQuestion: new Question(
      "Which of the following is a component of CSS style rule?:",
      "selector",
      "proprety",
      "value",
      "all of the above",
      4
    ),
  },
  {
    QuizQuestion: new Question(
      "Which of the following defines 1% of viewport height?",
      "px",
      "vh",
      "vw",
      "vmin",
      2
    ),
  },
  {
    QuizQuestion: new Question(
      "Which of the following property is used to control the position of an image in the background?",
      "background-color",
      "background-image",
      "background-repeat",
      "background-position",
      4
    ),
  },
  {
    QuizQuestion: new Question(
      "Which of the following property serves as shorthand for the marker properties?",
      "list-style",
      "list-style-type",
      "list-style-image",
      "none",
      1
    ),
  }
]
const js_quiz = [
  {
    QuizQuestion: new Question(
      "which of the following keywords is used to define a variable in Javascript?",
      "var",
      "let",
      "both A and B",
      "None",
      3
    ),
  },
  {
    QuizQuestion: new Question(
      "upon encountering empty statements, what does the Javascript Interpreter do?",
      "throws an error",
      "ignores the statement",
      "gives a warning",
      "none",
      2
    ),
  },
  {
    QuizQuestion: new Question(
      "which of the following methods can be used to display data in some form using Javascript?",
      "document.write()",
      "console.log()",
      "window.alert()",
      "all of the above",
      4
    ),
  },
  {
    QuizQuestion: new Question(
      "How can a datatype be declared to be a constant type?",
      "const",
      "constant",
      "let",
      "var",
      1
    ),
  },
  {
    QuizQuestion: new Question(
      "what keyword is used to check whether a given property is valid or not?",
      "in",
      "is in",
      "exist",
      "lies",
      1
    ),
  }
]
//setting array of quiz objects in local storage
localStorage.setItem("html-questions", JSON.stringify(html_quiz));
localStorage.setItem("css-questions", JSON.stringify(css_quiz));
localStorage.setItem("js-questions", JSON.stringify(js_quiz));

//getting quiz questions a/c to quiz Type selected by user in dashboard
let quizQuestion;
if(quizType === "HTMLbtn"){
  quizQuestion = JSON.parse(localStorage.getItem("html-questions"));
}
else if(quizType === "CSSbtn"){
  quizQuestion = JSON.parse(localStorage.getItem("css-questions"));
}
else if(quizType === "JSbtn"){
  quizQuestion = JSON.parse(localStorage.getItem("js-questions"));
}else{
  console.log("quizType ERROR");
}
console.log(quizQuestion);

//running timer
var counter = 0;
var timeleft = 300; //5 minutes
var dec=1;
var sec,min;
function calcSec(){
  counter++;
  min = Math.floor((timeleft-dec)/60);
  sec = (timeleft-counter)%60;
  if(min>=0 && sec>=0){
  document.getElementById("remaining-time").innerHTML=(min +" : "+ sec);
  }else{
    document.getElementById("remaining-time").innerHTML=("00 : 00");
    document.getElementById("remaining-time").style="color:red; font-weight:500;";
    //set quiz marks which belongs to current  quiz type
    if(quizType === "HTMLbtn"){
      localStorage.setItem("HTML-Score",score+"/"+quizQuestion.length);
    }
    else if(quizType === "CSSbtn"){
      localStorage.setItem("CSS-Score",score+"/"+quizQuestion.length);
    }
    else if(quizType === "JSbtn"){
      localStorage.setItem("JS-Score",score+"/"+quizQuestion.length);
    }else{
      console.log("quizType ERROR, cant set score");
    }
    //display score by latest
    swal({ 
      title: "Time is up!",
      icon: "info",
      text: "you scored: "+score+"/"+quizQuestion.length,
      timer: 3000,
    });
    //move to dashboard
    setTimeout(()=>{
      let currentPath = window.location.pathname;
      let newpath = currentPath.slice(0,currentPath.indexOf("quiz.html")) + "dashboard.html"
      window.location.pathname = newpath;
    },2600);
  }
  setInterval(dec++,6000); //minute decreases after 6000ms
}
setInterval(calcSec,1000); //each second is rendered after 1000ms

var score = 0;
var selectedOption = 0;
var correctOptionNumber;
var renderQuestion = 0;

const loadQuestion = (questionObj,x) => {
  setTimeout(()=>{
    document.getElementById("quiz-question-number").innerHTML =
    "Question " + (x+1);
  document.getElementById("quiz-question").innerHTML =
  questionObj[x].QuizQuestion.question;
  document.getElementById("opt1").innerHTML =
  questionObj[x].QuizQuestion.option1;
  document.getElementById("opt2").innerHTML =
  questionObj[x].QuizQuestion.option2;
  document.getElementById("opt3").innerHTML =
  questionObj[x].QuizQuestion.option3;
  document.getElementById("opt4").innerHTML =
  questionObj[x].QuizQuestion.option4;
  //revert option colors
  document.getElementById("opt1").style = "background-color: white; transition: background-color 600ms linear;";
  document.getElementById("opt2").style = "background-color: white; transition: background-color 600ms linear;";
  document.getElementById("opt3").style = "background-color: white; transition: background-color 600ms linear;";
  document.getElementById("opt4").style = "background-color: white; transition: background-color 600ms linear;";
  correctOptionNumber = questionObj[x].QuizQuestion.correctOptionNumber;
  },700)
}
loadQuestion(quizQuestion,renderQuestion);

//quiz-options and their functionality
var quiz_options = document.getElementsByClassName("quiz-option-item");
for (let i = 0; i < quiz_options.length; i++) {
  quiz_options[i].addEventListener("click", ()=>{
    if(i+1 == quizQuestion[renderQuestion].QuizQuestion.correctOptionNumber){
      console.log("perfect!!");
      score++;
      console.log(score);
      document.getElementById(quiz_options[i].id).style = "background-color: #3cb371; transition: background-color 500ms linear; color: white; transition: color 400ms linear;";
    }else{
      console.log("false");
      document.getElementById(quiz_options[i].id).style = "background-color: #e03c31; transition: background-color 500ms linear; color: white; transition: color 400ms linear;";
    }
    renderQuestion++;
    if(renderQuestion<quizQuestion.length){ //keep loading new question till condition matches
      loadQuestion(quizQuestion,renderQuestion); //load new question
    }else{
      if(quizType === "HTMLbtn"){
        localStorage.setItem("HTML-Score",score+"/"+quizQuestion.length);
      }
      else if(quizType === "CSSbtn"){
        localStorage.setItem("CSS-Score",score+"/"+quizQuestion.length);
      }
      else if(quizType === "JSbtn"){
        localStorage.setItem("JS-Score",score+"/"+quizQuestion.length);
      }else{
        console.log("quizType ERROR, cant set score");
      }
      //display score as sweet alert
      swal({ 
        title: "Your Score!",
        icon: "success",
        text: score+"/"+quizQuestion.length,
        timer: 2500,
      });
      //move to dashboard
      setTimeout(()=>{
        let currentPath = window.location.pathname;
        let newpath = currentPath.slice(0,currentPath.indexOf("quiz.html")) + "dashboard.html"
        window.location.pathname = newpath;
      },2600);
    }
  });
}