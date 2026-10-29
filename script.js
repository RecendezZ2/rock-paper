
const form = document.querySelector("#form");
const urChoiceSelected = document.querySelector("#ur-choice");
const results = document.querySelector("#results");

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * choices.length);

  return choices[random];
};

const getWinner = (urChoice, computer) => {
  if (urChoice === computer) {
    return "Its a tie!!! Both of you win!!!";
  } else if (
    (urChoice === "rock" && computer === "scissors") ||
    (urChoice === "scissors" && computer === "paper") ||
    (urChoice === "paper" && computer === "rock")
  ) {
    return "You are the winner!";
  }

  return "Computer wins!";
};

const submit = (event) => {
  event.preventDefault();

  const urChoice = urChoiceSelected.value;
  const computer = getComputerChoice();
  const winner = getWinner(urChoice, computer);

  results.textContent =
    `Your choice is...➡️ ${urChoice}. Computer's choice is....➡️ ${computer}. So!?! ${winner}`;

  console.log("Your choice:", urChoice);
  console.log("Computer choice:", computer);
  console.log("Winner:", winner);
};

form.addEventListener("submit", submit);
