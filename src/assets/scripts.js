// Rules button effect
const rulesBtn = document.querySelector(".content button");
const gameRules = document.querySelector("#game-rules");

rulesBtn.addEventListener("click", e => {
  e.preventDefault();
  gameRules.classList.toggle("fade")
  toggleText();
})

function toggleText() {
  if (rulesBtn.textContent === "Veja aqui.") {
    rulesBtn.textContent = "Fechar"
  } else {
    rulesBtn.textContent = "Veja aqui."
  }
}
// Score
const score = {
  player_score: 0,
  cpu_score: 0
}

const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");
playerScore.textContent = score.player_score;
cpuScore.textContent = score.cpu_score;

const updateScore = winner => {
  if (winner === "player") {
    score.player_score += 1;
    playerScore.textContent = score.player_score;
    alertResult(winner);
  }

  if (winner === "cpu") {
    score.cpu_score += 1;
    cpuScore.textContent = score.cpu_score;
    alertResult(winner);
  }

  if (winner === "draw") {
    alertResult(winner);
  }
}

/* Move functions */

// Player move
const rockBtn = document.querySelector("[data-rock]");
const paperBtn = document.querySelector("[data-paper]");
const scissorsBtn = document.querySelector("[data-scissors]");

rockBtn.addEventListener("click", _ => play("rock"));
paperBtn.addEventListener("click", _ => play("paper"));
scissorsBtn.addEventListener("click", _ => play("scissors"));

// Cpu move
const cpuPlay = _ => {
  let cpuMove = Math.ceil(Math.random() * (3 - 0) + 0);
  switch (cpuMove) {
    case 1:
      cpuMove = "rock"
      break;
    case 2:
      cpuMove = "paper"
      break;
    case 3:
      cpuMove = "scissors"
      break;
  };
  return cpuMove;
};

// Show the moves on display
const showPlayerMove = move => {
  const playerMoveDisplay = document.querySelector("#player-move");

  if (move === "rock") {
    playerMoveDisplay.classList.toggle("rock-move");

    setTimeout(_ => {
      playerMoveDisplay.classList.toggle("rock-move");
    }, 1500)
  }

  if (move === "paper") {
    playerMoveDisplay.classList.toggle("paper-move");

    setTimeout(_ => {
      playerMoveDisplay.classList.toggle("paper-move");
    }, 1500)
  }

  if (move === "scissors") {
    playerMoveDisplay.classList.toggle("scissors-move");

    setTimeout(_ => {
      playerMoveDisplay.classList.toggle("scissors-move");
    }, 1500)
  }

}

const showCpuMove = move => {
  const cpuMoveDisplay = document.querySelector("#cpu-move");

  if (move === "rock") {
    cpuMoveDisplay.classList.toggle("rock-move");

    setTimeout(_ => {
      cpuMoveDisplay.classList.toggle("rock-move");
    }, 1500)
  }

  if (move === "paper") {
    cpuMoveDisplay.classList.toggle("paper-move");

    setTimeout(_ => {
      cpuMoveDisplay.classList.toggle("paper-move");
    }, 1500)
  }

  if (move === "scissors") {
    cpuMoveDisplay.classList.toggle("scissors-move");

    setTimeout(_ => {
      cpuMoveDisplay.classList.toggle("scissors-move");
    }, 1500)
  }
}

// Who won?
const getWinner = (player, cpu) => {
  if (player === cpu) return "draw"
  if (player === "rock" && cpu === "paper") return "cpu"
  if (player === "paper" && cpu === "scissors") return "cpu"
  if (player === "scissors" && cpu === "rock") return "cpu"

  return "player"
}

// Alert result
const alertResult = result => {
  const alertArea = document.querySelector(".alert-result");

  if (result === "player") {
    alertArea.style.color = "lime";
    alertArea.textContent = "Ganhou!";
    setTimeout(_ => {
      alertArea.textContent = ""
    }, 1500);
  }

  if (result === "cpu") {
    alertArea.style.color = "red";
    alertArea.textContent = "Perdeu!"
    setTimeout(_ => {
      alertArea.textContent = ""
    }, 1500);
  }

  if (result === "draw") {
    alertArea.style.color = "white";
    alertArea.textContent = "Empatou!"
    setTimeout(_ => {
      alertArea.textContent = ""
    }, 1500);
  }
}

// Getting all together
const play = move => {
  const playerMove = move;
  const cpuMove = cpuPlay();

  showPlayerMove(playerMove);
  showCpuMove(cpuMove);

  updateScore(getWinner(playerMove, cpuMove));
}

