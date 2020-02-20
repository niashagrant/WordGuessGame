var dessertWordBank = [
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

var word = [];
var wrongGuess = [];
var rightGuess = [];
var playing = false;
var triedLetters = [];
var score = 0;

var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "_"
];

$(document).ready(function() {
  $("#showGamePage").click(function() {
    $("#instructions").hide();
    $("#playGame").show();
  });

  function randomWord() {
    var random = Math.floor(Math.random() * dessertWordBank.length);
    var toString = dessertWordBank[random];
    console.log(toString);
    word = toString.split("");
    console.log(word);
  }
  randomWord();

  function wordSpaces() {
    for (var i = 0; i < word.length; i++) {
      $("#displayLetters").append("<li>" + word[i] + "</li>");
    }
  }
  wordSpaces();

  function play(space) {
    var index = jQuery.inArray(space, word);
    if (index === -1) {
      wrongGuess.push(space);
      var wrong = wrongGuess.length;
      console.log("wrong" + wrong);
      $(".wrongLetters tbody tr td:nth-of-type(" + wrong + ")").text(space);
    }
  }
  play();

  //   function letter() {
  //     for (i = 0; i < letters.length; i++) {
  //       var letterBtn = $("<button>");
  //       letterBtn.addClass(" letter-button letter letter-button-color");
  //       letterBtn.attr("data-letter", letters[i]);
  //       letterBtn.text(letters[i]);
  //       $("#buttons").append(letterBtn);
  //     }

  //     $(".letter-button").on("click", function() {
  //       var fridgeMagnet = $("<div>");
  //       fridgeMagnet.addClass("letter fridge-color");
  //       fridgeMagnet.text($(this).attr("data-letter"));
  //       $("#display").append(fridgeMagnet);
  //     });
  //   }
  //   letter();
});
