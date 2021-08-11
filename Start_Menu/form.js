const play_button = document.getElementById("Play")
let intro = new Audio("Intro.mp3");

window.onload = function() {
  intro.play()
}

play_button.addEventListener('click', revCol)

function revCol() {
  play_button.style.color ="green";
  play_button.style.backgroundColor ="black";
  const root = document.querySelector(":root");
  root.style.setProperty("--color",'black')
  location.href = "/Game/game.html"
}