// Efeito botão regras
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
