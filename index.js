const rockCard = document.getElementById("Rock");
const paperCard = document.getElementById("Throw");
const scissorsCard = document.getElementById("Scissors");

let vidas = 3;
let vidasMonstro = 3;

rockCard.addEventListener("click", function () {
  play("scissors");
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

function play(choose) {
  rock.style.opacity = 0;
  rock.style.cursor = "default";

  scissors.style.opacity = 0;
  scissors.style.cursor = "default";

  paperCard.src = "img/Rock2.png";
  paperCard.style.cursor = "default";

  animation();

  setTimeout(function(){

  },5000)
}
function game() {}
