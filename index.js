const rockCard = document.getElementById("Rock");
const paperCard = document.getElementById("Throw");
const scissorsCard = document.getElementById("Scissors");

let vidas = 3;
let vidasMonstro = 3;

rockCard.addEventListener("click", function () {
  play("rock ");
});
paperCard.addEventListener("click", function () {
  play("paper");
});
scissorsCard.addEventListener("click", function () {
  play("scissors");
});

function animation() {
  paperCard.style.pointerEvents = "none";
  paperCard.style.transition = "transform 3s";
  paperCard.style.transform = "rotate(-30deg) translateY(-20px)";

  setTimeout(function () {
    paperCard.style.transition = "transform 1s";
    paperCard.style.transform = "rotate(90deg) translateY(20px)";
  }, 3000);
  setTimeout(function () {
    paperCard.style.transition = "transform 0.5s";
    paperCard.style.transform = "rotate(-30deg) translateY(-20px)";
  }, 3500);
  setTimeout(function () {
    paperCard.style.transition = "transform 0.5s";
    paperCard.style.transform = "rotate(90deg) translateY(20px)";
  }, 4000);
  setTimeout(function () {
    paperCard.style.transition = "transform 0.5s";
    paperCard.style.transform = "rotate(-30deg) translateY(-20px)";
  }, 4500);
  setTimeout(function () {
    paperCard.style.transition = "transform 0.5s";
    paperCard.style.transform = "rotate(90deg) translateY(20px)";
  }, 5000);
  setTimeout(function () {
    paperCard.src = "img/Paper2.png";
    paperCard.style.pointerEvents = "auto";
  }, 5300);
}

function computadorEscolha() {
  const escolhas = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * escolhas.length);
  return escolhas[randomIndex];
}

function play(choose) {
  rock.style.opacity = 0;
  rock.style.cursor = "default";

  scissors.style.opacity = 0;
  scissors.style.cursor = "default";

  paperCard.src = "img/Rock2.png";
  paperCard.style.cursor = "default";

  animation();

  setTimeout(function () {
    const escolhaComputador = computadorEscolha();
    determinarVencedor(choose, escolhaComputador);
  }, 5000);
}

function game() {}
function determinarVencedor(jogador, computador) {
  let resultado = "";

  if (jogador === computador) {
    resultado = "Empate!";
    console.log(resultado);
  } else if (
    (jogador === "rock" && computador === "scissors") ||
    (jogador === "paper" && computador === "rock") ||
    (jogador === "scissors" && computador === "paper")
  ) {
    resultado = "Você ganhou!";
    console.log(resultado);
    vidasMonstro--;
    console.log(`vidas monstro ${vidasMonstro}`);
  } else {
    resultado = "Você perdeu!";
    console.log(resultado);
    vidas--;
    console.log(`vidas ${vidas}`);
  }

  // Atualiza o display de resultados e vidas
  resultadoDisplay.textContent = resultado;
  vidasDisplay.textContent = `Vidas: ${vidas}`;
  vidasMonstroDisplay.textContent = `Vidas do Monstro: ${vidasMonstro}`;

  // Verifica se alguém perdeu todas as vidas
  if (vidas === 0) {
    alert("Você perdeu todas as vidas! Fim de jogo.");
    resetarJogo();
  } else if (vidasMonstro === 0) {
    alert("Você derrotou o monstro! Parabéns!");
    resetarJogo();
  }
}
