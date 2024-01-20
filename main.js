let num = Math.floor(Math.random() * 101);
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let play = document.getElementById("play");
let msg = document.getElementById("msg");

let chances = 7;

msg.innerText = `Chances left: ${chances}`;

let compare = (playerGuess) => {
  parseInt(playerGuess);
  if (chances > 0 && chances < 9) {
    if (isNaN(playerGuess) || playerGuess < 0 || playerGuess > 100) {
      chances++;
      msg.innerText = "Invalid Input! 😒";
    } else if (playerGuess == num) {
      msg.innerText = "Congratulations You won! 🥳";
      btn.style.display = "none";
      play.style.display = "block";
    } else if (playerGuess < num) {
      msg.innerText = `Too low! 😥 Chances left: ${chances}`;
    } else if (playerGuess > num) {
      msg.innerText = `Too high! 😶‍🌫️ Chances left ${chances}`;
    }
  } else {
    msg.innerText = `You lost! 😞. The actual number was ${num}`;
    input.disabled = true;
    btn.disabled = true;
    btn.style.backgroundColor = "#ccc";
    btn.style.cursor = "not-allowed";
  }
};

function handleKeyPress(event) {
  if (event.key === "Enter") {
    chances--;
    let playerGuess = input.value;
    compare(playerGuess);
  }
}

btn.addEventListener("click", () => {
  chances--;
  let playerGuess = input.value;
  compare(playerGuess);
});

play.addEventListener("click", () => {
  input.value = "";
  chances = 7;
  msg.innerText = `Chances left: ${chances}`;
  input.disabled = false;
  btn.disabled = false;
  btn.style.backgroundColor = "#1fa2ff";
  btn.style.cursor = "pointer";
  play.style.display = "none";
  btn.style.display = "block";
});
