//source code- http://www.mikedane.com/web-development

//timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 40;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till end of quiz.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "END";


}

setTime();


//list questions and answers
var questions = [
{
    prompt: "In HTML, what is the start tag for a paragraph?\n(a) <h1>\n(b) <body>\n(c) <p>",
     answer: "c"
},
{
    prompt: "Why use CSS?\n(a) add content\n(b) add data\n(c) add style",
    answer: "c"
},
{
    prompt: "Why use JavaScript?\n(a) coding shortcut\n(b) change data\n(c) program behavior of website",
    answer: "c"
},
{
    prompt: "What are JavaScript building blocks\n(a) arrays\n(b) variables\n(c) both",
    answer: "c"
}]
    //score counter
var score = 0;

 for(var i=0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
         score++
         alert("Correct!");
     }else {
         alert("Wrong!");
     }
 }
 alert("You got " + score + "/" + questions.length);

