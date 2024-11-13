const rockCard = document.getElementById("Rock");
const paperCard = document.getElementById("Throw");
const scissorsCard = document.getElementById("Scissors");

const monster = document.getElementById("throw2")

let vidas = 3;
let vidasMonstro = 3;

rockCard.addEventListener("click", function () {
  play("rock");
});
paperCard.addEventListener("click", function () {
  play("paper");
});
scissorsCard.addEventListener("click", function () {
  play("scissors");
});

function animation(choose) {

  
  
  paperCard.style.pointerEvents = "none";
  paperCard.style.transition = "transform 3s";
  paperCard.style.transform = "rotate(-30deg) translateY(-20px)";

  monster.style.transition = "transform 3s";
  monster.style.transform = "rotate(30deg) translateY(20px)";

  setTimeout(function () {
    paperCard.style.transition = "transform 1s";
    paperCard.style.transform = "rotate(90deg) translateY(20px)";

    monster.style.transition = "transform 1s";
  monster.style.transform = "rotate(-90deg) translateY(-20px)";
  }, 3000);
  setTimeout(function () {
    paperCard.style.transition = "transform 0.5s";
    paperCard.style.transform = "rotate(-30deg) translateY(-20px)";

    monster.style.transition = "transform 0.5s";
  monster.style.transform = "rotate(30deg) translateY(20px)";
  }, 3500);
  setTimeout(function () {
    paperCard.style.transition = "transform 0.5s";
    paperCard.style.transform = "rotate(90deg) translateY(20px)";

    monster.style.transition = "transform 0.5s";
  monster.style.transform = "rotate(-90deg) translateY(-20px)";
  }, 4000);
  setTimeout(function () {
    paperCard.style.transition = "transform 0.5s";
    paperCard.style.transform = "rotate(-30deg) translateY(-20px)";

    monster.style.transition = "transform 0.5s";
  monster.style.transform = "rotate(30deg) translateY(20px)";
  }, 4500);
  setTimeout(function () {
    paperCard.style.transition = "transform 0.5s";
    paperCard.style.transform = "rotate(90deg) translateY(20px)";
    
    monster.style.transition = "transform 0.5s";
  monster.style.transform = "rotate(-90deg) translateY(-20px)";
  }, 5000);

  if(choose == "paper"){
    setTimeout(function () {
      paperCard.src = "../img/Paper2.png";
      paperCard.style.pointerEvents = "auto";
    }, 5300);
  }else if(choose == "scissors"){
    setTimeout(function () {
      paperCard.src = "../img/Scissors2.png";
      paperCard.style.pointerEvents = "auto";
    }, 5300);
  }else if(choose == "rock"){
    setTimeout(function () {
      paperCard.src = "../img/Rock2.png";
      paperCard.style.pointerEvents = "auto";
    }, 5300);
  }
  
}

function computadorEscolha() {
  const escolhas = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * escolhas.length);
  return escolhas[randomIndex];
  
}

function play(choose) {
  console.log(choose)
  rock.style.opacity = 0;
  rock.style.cursor = "default";

  scissors.style.opacity = 0;
  scissors.style.cursor = "default";

  paperCard.src = "../img/Rock2.png";
  paperCard.style.cursor = "default";

  animation(choose);

  setTimeout(function () {
    const escolhaComputador = computadorEscolha();
    console.log(escolhaComputador);

    if(escolhaComputador == "rock"){
      monster.src = "../img/gargula.png"
    }else if(escolhaComputador == "scissors"){
       monster.src = "../img/claw.png"
    }else if(escolhaComputador == "paper"){
       monster.src = "../img/scroll.png"
    }
    determinarVencedor(choose, escolhaComputador);
  }, 5000);
  
  setTimeout(function(){
    gameReset();
    paperCard.style.transform = "rotate(0deg)"
  },6500)
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
    monsterTakeDamage();
    console.log(`vidas monstro ${vidasMonstro}`);
  } else {
    resultado = "Você perdeu!";
    console.log(resultado);
    takeDamage();
    console.log(`vidas ${vidas}`);
  }


  if (vidas === 0 || vidasMonstro === 0) {
    const overlay = document.getElementById("gameOverOverlay");
    overlay.classList.add("show");
  
    const gameOverSound = document.getElementById("gameOverSound");
    gameOverSound.currentTime = 0; 
    gameOverSound.play().catch(error => {
      console.error("Erro ao reproduzir o áudio:", error);
    });
  }
}

function monsterTakeDamage(){
  vidasMonstro--
  if(vidasMonstro==2){
    const primeiraVida = document.getElementById("monsterHeart1");
    primeiraVida.src = "../img/heart2.png"
  }else if(vidasMonstro == 1){
    const segundaVida = document.getElementById("monsterHeart2");
    segundaVida.src = "../img/heart2.png"
  }else if(vidasMonstro == 0){
     const terceiraVida = document.getElementById("monsterHeart3");
    terceiraVida.src = "../img/heart2.png"
  }
}

function takeDamage(){
  vidas--
  if(vidas==2){
    const primeiraVida = document.getElementById("playerHeart3");
    primeiraVida.src = "../img/heart2.png"
  }else if(vidas == 1){
    const segundaVida = document.getElementById("playerHeart2");
    segundaVida.src = "../img/heart2.png"
  }else if(vidas == 0){
     const terceiraVida = document.getElementById("playerHeart1");
    terceiraVida.src = "../img/heart2.png"
  }
}
function gameReset(){
  rock.style.opacity = 1;
  rock.style.cursor = "pointer";

  scissors.style.opacity = 1;
  scissors.style.cursor = "pointer";

  paperCard.src = "../img/Paper2.png";
  paperCard.style.cursor = "pointer";

  monster.src = "../img/monsterHand.png"
}