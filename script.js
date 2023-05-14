const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let currentScore = 0;
let activePlayer = 0;
let playing = true;
const scores = [0, 0];

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//change player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//upon rolling button
btnRoll.addEventListener("click", function () {
  if (playing) {
    const randomRoll = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");

    switch (randomRoll) {
      case 1: {
        diceEl.src = "dice-1.png";
        break;
      }
      case 2: {
        diceEl.src = "dice-2.png";
        break;
      }
      case 3: {
        diceEl.src = "dice-3.png";
        break;
      }
      case 4: {
        diceEl.src = "dice-4.png";
        break;
      }
      case 5: {
        diceEl.src = "dice-5.png";
        break;
      }
      case 6: {
        diceEl.src = "dice-6.png";
        break;
      }
    }
    if (randomRoll !== 1) {
      currentScore += randomRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] <= 100) switchPlayer();
    else {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }
  }
});

btnNew.addEventListener("click", function () {
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
});
