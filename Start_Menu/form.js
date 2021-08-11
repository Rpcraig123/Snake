const play_button = document.getElementById("Play")
let intro = new Audio("Intro.mp3");

window.onload=function() {
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

// const easy_button = document.getElementById("Easy")
// const medium_button = document.getElementById("Medium")
// const hard_button = document.getElementById("Hard")

// inc_button.addEventListener('click', incCount)
// inc_button.addEventListener('mouseover', revColI)
// inc_button.addEventListener('mouseout', retColI)
// dec_button.addEventListener('click', decCount)
// dec_button.addEventListener('mouseover', revColD)
// dec_button.addEventListener('mouseout', retColD)