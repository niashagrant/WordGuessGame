$(document).ready(function() {
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

  for (i = 0; i < letters.length; i++) {
    var letterBtn = $("<button>");
    letterBtn.addClass(" letter-button letter letter-button-color");
    letterBtn.attr("data-letter", letters[i]);
    letterBtn.text(letters[i]);
    $("#buttons").append(letterBtn);
  }

  $(".letter-button").on("click", function() {
    var fridgeMagnet = $("<div>");
    fridgeMagnet.addClass("letter fridge-color");
    fridgeMagnet.text($(this).attr("data-letter"));
    $("#display").append(fridgeMagnet);
  });
});

// var desserts = [
//   [
//     "cake",
//     "cinnamon roll",
//     "cookie",
//     "brownie",
//     "muffin",
//     "cupcake",
//     "donut",
//     "doughnut",
//     "flan",
//     "fudge",
//     "frozen yogurt",
//     "gingerbread",
//     "macaron",
//     "brittle",
//     "popsicle",
//     "pie",
//     "pudding",
//     "sundae",
//     "tart",
//     "souffle",
//     "meringue"
//   ]
// ];

// var randomDessertArray = dessert[Math.floor(Math.random() * desserts.length)];
// var randomDessert = randomDessertArray[
//   Math.floor(Math.random() * randomDessertArray.length)
// ].toUpperCase();

$(document).ready(function() {
  $("#showGamePage").click(function() {
    $("#instructions").hide();
    $("#playGame").show();
  });
});
