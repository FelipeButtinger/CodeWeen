const rockCard = document.getElementById("Rock");
const paperCard = document.getElementById("Throw");
const scissorsCard = document.getElementById("Scissors");

rockCard.addEventListener("click", function () {
  game("scissors");
});
paperCard.addEventListener("click", function () {
  game("paper");
});
scissorsCard.addEventListener("click", function () {
  game("scissors");
});

function game(choose) {
  rock.style.opacity = 0;
  rock.style.cursor = "default";

  scissors.style.opacity = 0;
  scissors.style.cursor = "default";

  paperCard.src = "img/Rock2.png";
  paperCard.style.cursor = "default";
}
