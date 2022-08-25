var quiz_options = document.getElementsByClassName("quiz-option-item");
var i;

for (i = 0; i < quiz_options.length; i++) {
  quiz_options[i].addEventListener("click", function () {});
}

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
    htmlQuizQuestion: new Question(
      "HTML stands for :",
      "hyper tool market language",
      "Hyper text markup language",
      "both",
      "none",
      2
    ),
  },
  {
    htmlQuizQuestion: new Question(
      "HTML stands for :",
      "hyper tool market language",
      "Hyper text markup language",
      "both",
      "none",
      2
    ),
  },
  {
    htmlQuizQuestion: new Question(
      "HTML stands for :",
      "hyper tool market language",
      "Hyper text markup language",
      "both",
      "none",
      2
    ),
  },
  {
    htmlQuizQuestion: new Question(
      "HTML stands for :",
      "hyper tool market language",
      "Hyper text markup language",
      "both",
      "none",
      2
    ),
  },
];
//console.log(html_quiz);
//console.log(html_quiz[0].htmlQuizQuestion.question);
//console.log(html_quiz[0].htmlQuizQuestion.option1);

var score = 0;
var selectedOption = 0;
function clickedOpt(value) {
  selectedOption = value;
}

for (let x = 0; x < html_quiz.length; x++) {

  window.onload = function(){
    score += score;

    document.getElementById("quiz-question-number").innerHTML =
      "Question " + (x + 1);
    document.getElementById("quiz-question").innerHTML =
      html_quiz[x].htmlQuizQuestion.question;
    document.getElementById("opt1").innerHTML =
      html_quiz[x].htmlQuizQuestion.option1;
    document.getElementById("opt2").innerHTML =
      html_quiz[x].htmlQuizQuestion.option2;
    document.getElementById("opt3").innerHTML =
      html_quiz[x].htmlQuizQuestion.option3;
    document.getElementById("opt4").innerHTML =
      html_quiz[x].htmlQuizQuestion.option4;

    let opts = document.getElementsByClassName("quiz-option-item");
    console.log(opts);

    var i;

    for (i = 0; i < opts.length; i++) {
    opts[i].addEventListener("click", function() {
    this
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

  }
} 
    /*
      document.getElementById("opt1").click(function(){
        if (selectedOption === html_quiz[x].htmlQuizQuestion.correctOptionNumber) {
          document.getElementById("opt" + selectedOption).style.cssText = "background: linear-gradient(to left, hsl(162, 5%, 88%), hsl(162, 9%, 68%));";
          x++;
          score++;
        } else {
          document.getElementById("opt"+(selectedOption).toString).style.cssText = "background-color: red;";
          x++;
        }
     });
    */