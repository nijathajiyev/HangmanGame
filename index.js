                                                        var guessWord = document.querySelector("#guessWord");
var guessWrong = document.querySelector("#guessWrong");
var guessChance = document.querySelector("#guessChance");
var win = document.querySelector("#wins");
var lost = document.querySelector("#losses");


animals = ["monkey", "cancer", "leon", "bird", "cat", "rabbit", "tortoise","mouse","chicken"];

var userChoise = "";
var compChoise = [];
var wrongGuess = [];
var showCount = 0;
var showScreen = [];

var wins = 0;
var losses = 0;
var chance = 9;

function startGame() {
  chance = 9;

  compChoise = animals[Math.floor(Math.random() * animals.length)];
  compArr = compChoise.split("");
  lengthCount = compArr.length;

  showScreen = [];
  wrongGuess = [];

  for (var i = 0; i < lengthCount; i++) {
    showScreen.push("_");
  }

  guessChance.innerHTML = `Chance of Guesses: ${chance}`;
  guessWord.innerHTML = showScreen.join(" ");
  guessWrong.innerHTML = `Wrong Guesses: ${wrongGuess}`;
}


function check(letter) {
  var randomChoise = false;
  
  for (var i = 0; i < lengthCount; i++) {
    if (compChoise[i] === letter) {
      randomChoise = true;
    }
  }

  if (randomChoise) {
    for (j = 0; j < lengthCount; j++) {
     if (compChoise[j] === letter) {
      showScreen[j] = letter;
      }
    }
  } else {
    if(wrongGuess.indexOf(letter) === -1){
      wrongGuess.push(letter);
      chance--;
    }
  }
  winOrLost();
}

function winOrLost() {
  guessChance.innerHTML = `Chance of Guesses: ${chance}`;
  guessWord.innerHTML = showScreen.join(" ");
  guessWrong.innerHTML =  `Wrong Guesses: ${wrongGuess}`;

  if (compArr.toString() === showScreen.toString()) {
    wins++;
    alert("win");

    win.innerHTML = `Wins: ${wins}`;
    startGame();
  } else if (chance === 0) {
    losses++;
    alert("lost");

    lost.innerHTML = `Losses: ${losses}`;
    startGame();
  }
}

startGame();

document.onkeydown = function (e) {
  var letters = e.key.toLowerCase();
  check(letters);
}