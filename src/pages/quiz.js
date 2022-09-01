let quizType = sessionStorage.getItem("quizType");
console.log(quizType);

//var quiz_options = document.getElementsByClassName("quiz-option-item");
//var i;

//for (i = 0; i < quiz_options.length; i++) {
//  quiz_options[i].addEventListener("click", checkOption(i));
//}

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

//console.log(html_quiz);
//console.log(html_quiz[0].htmlQuizQuestion.question);
//console.log(html_quiz[0].htmlQuizQuestion.option1);

var score = 0;
var selectedOption = 0;
var correctOptionNumber;
var renderQuestion = 0;
/*
function clickedOpt(value) {
  selectedOption = value;
}
*/

//let x;

const loadQuestion = (questionObj,x) => {
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
  correctOptionNumber = questionObj[x].QuizQuestion.correctOptionNumber;
};
loadQuestion(quizQuestion,renderQuestion);

//quiz-options and their functionality
var quiz_options = document.getElementsByClassName("quiz-option-item");
for (let i = 0; i < quiz_options.length; i++) {
  quiz_options[i].addEventListener("click", ()=>{
    if(i+1 == quizQuestion[renderQuestion].QuizQuestion.correctOptionNumber){
      console.log("perfect!!");
      score++;
      console.log(score);
    }else{
      console.log("false");
    }
    renderQuestion++;
    if(renderQuestion<quizQuestion.length){ //keep loading new question till condition matches
      setTimeout(loadQuestion(quizQuestion,renderQuestion),2000); //load new question
    }else{
      alert("quiz ends\nYour score is "+score);
    }
  });
}
/*
function checkOption(i){
  if(i == quizQuestion[renderQuestion].QuizQuestion.correctOptionNumber){
    console.log("perfect");
  }else{
    console.log("false");
  }
  renderQuestion++;
  setTimeout(loadQuestion(quizQuestion,renderQuestion),2000);
}
*/
/*
const getCheckAnswer = (clickedelemntid) => {
  //let answer;
  let opts = document.getElementsByClassName("quiz-option-item");
  if(opts[correctOptionNumber] === opts[clickedelemntid]){
    console.log("correct answer");
    score += score;
  }
  else{
    console.log("inorrect");
  }
}
*/