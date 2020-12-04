//source code- http://www.mikedane.com/web-development
//able to get code to work with alerts.  Need to polish and improve the code.


//timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
console.log(`nick thinkgs they are the same`, mainEl, main, main == mainEl)

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
    choices:["<h1>","<body>","<p>"],
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
main.textContent = questions[0].prompt
//var questionDiv = document.createElement("p");

      // We then assign the the text of this paragraph to be the text in the array.
//questionDiv.textContent = questions[0].prompt;

      // We then add the paragraph to the our main div on the page ("#drink-options")
//main.appendChild(questionDiv);


//var choiceArray = questions[0].choices

//var choiceDiv = document.createElement("div");

// We then use a for loop to iterate through all .
// With each iteration, we perform a series of code operations each time.
//for (var i = 0; i < choiceArray.length; i++) {
  
  // For each drink in the array, we create a new paragraph to hold that text.
  // A new paragraph will be created with each iteration of the loop.
  //var newButton = document.createElement("button");
  
  // We then assign the the text of this paragraph to be the text in the array.
  //newButton.textContent = choiceArray[i];
  
  // We then add the paragraph to the our main div on the page 
  //choiceDiv.appendChild(newButton);
//}


//main.appendChild(choiceDiv);
//TODO: make buttons clickable, so that they check if the answer is write and then miove onto next questions or end


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

// function funloop(){
//   //do some stuff
//   var i = 0
//   if(i<windows){
//     funloop()
//   }
// }