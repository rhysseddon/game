$(document).ready(function() {
$("#startModal").modal('show');
resetAnswers();
//resetButtons(); 
});

// Takes an array of all the countries and shuffles
var countries = ["wales", "scotland", "ireland", "england", "france", "germany", "argentina", "nepal", "peru"];
function resetAnswers(){
function shuffleArray(countries) {
      for (let i = countries.length -1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         [countries[i], countries[j]] = [countries[j], countries[i]];
        }
 }
 // Takes 3 answers from the shuffled array and keeps shuffling if the answers
do {
    shuffleArray(countries);
shuffledArray = [countries[0],countries[1], countries[2]];
console.log("shuffling" + shuffledArray );
} while (shuffledArray.includes(flags[flagCount]))
console.log(shuffledArray);
shuffledArray.push(flags[flagCount]);
console.log(shuffledArray);
shuffleArray(shuffledArray);
console.log(shuffledArray);
$(".answer1").text(shuffledArray[0]);
$(".answer2").text(shuffledArray[1]);
$(".answer3").text(shuffledArray[2]);
$(".answer4").text(shuffledArray[3]);
}


var flags = ["wales", "scotland", "ireland", "england", "ireland", "france"];
var flagCount = 0;
var answer;
/*
$('.answer-button').on('click', function(answer) {
 answer = flags[flagCount];
    if ($(this).text().match(answer)) {
     console.log(answer + " correct");
     flagCount ++;
     resetAnswers();
     resetButtons();
 } else {
     console.log("incorrect")
 }
});

$(".answer1").text(answers[0]);
$(".answer2").text(answers[1]);
$(".answer3").text(answers[2]);
$(".answer4").text(answers[3]);

function resetButtons() {
    $('.answer-button').css("background-color", "#df9a57");
}
}
/*var flag = answers[0];
function checkAnswer(){
    $(".flag").attr("src", "assets/images/" + flag + "-flag.jpg");
if (clickedButton === flag) {
    console.log("correct");
}
}
checkAnswer();*/