"use strict ";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

function guessNumber(DOMContentLoaded) {
  const guess = Number(document.querySelector(".guess").value);

  // Invalid input
  if (!guess) {
    displayMessage("Please Enter Number...");

    // Correct Answer
  } else if (guess === secretNumber) {
    displayMessage("Correct Answer...");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".check").disabled = true;

    // high score
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = score;

    // out of choices
  } else if (score > 1) {
    if (guess != secretNumber) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage(guess > secretNumber ? "Too High.." : "Too Low..");
    }
  } else {
    displayMessage("You Lost...");
    document.querySelector(".highscore").textContent = "0";
  }
}

function playAgain(DOMContentLoaded) {
  displayMessage("Start Guessing...");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".check").disabled = false;
}

document.querySelector(".check").addEventListener("click", guessNumber);
document.querySelector(".again").addEventListener("click", playAgain);
