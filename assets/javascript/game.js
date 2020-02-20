var word = [
  "cake",
  "cinnamon roll",
  "cookie",
  "brownie",
  "muffin",
  "cupcake",
  "donut",
  "doughnut",
  "flan",
  "fudge",
  "frozen yogurt",
  "gingerbread",
  "macaron",
  "brittle",
  "popsicle",
  "pie",
  "pudding",
  "sundae",
  "tart",
  "souffle",
  "meringue"
];

var randomWord = Math.floor(Math.random() * word.length);
var choosenWord = word[randomWord];
var rightLetter = [];
var wrongLetter = [];
var underScore = [];

let displayUnderScore = document.getElementsByClassName("underScore");
let displayRightGuess = document.getElementsByClassName("rightGuess");
let displayWrongGuess = document.getElementsByClassName("wrongGuess");

// create the underscores based on the length of the randomly selected word
console.log(choosenWord);
$(document).ready(function() {
  // showing the next div
  $("#showGamePage").click(function() {
    $("#instructions").hide();
    $("#playGame").show();
  });

  let generateUnderscore = function() {
    for (let i = 0; i < choosenWord.length; i++) {
      underScore.push("_");
    }
    return underScore;
  };
  generateUnderscore();

  // getting the users guess
  $(document).on("keypress", function() {
    let keyword = String.fromCharCode(event.keyCode);

    // if users guess is right
    if (choosenWord.indexOf(keyword) > -1) {
      // add to right words array
      rightLetter.push(keyword);

      // replace underscore with letter
      underScore[choosenWord.indexOf(keyword)] = keyword;
      displayUnderScore[0].innerHTML = underScore.join(" ");
      displayRightGuess[0].innerHTML = rightLetter;

      // check to see if the letter is what the user guessed
      if (underScore.join("") === choosenWord) {
        alert("You win!");
      }
    }
    // add to wrong words array
    else {
      displayUnderScore[0].innerHTML = underScore.join(" ");
      wrongLetter.push(keyword);
      displayWrongGuess[0].innerHTML = wrongLetter;
    }
  });

  $("#refresh").click(function() {
    location.reload();
  });
});
