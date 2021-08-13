import { updateSnake, drawSnake, snakeSpeed, snakeHead, snakeIntersectCheck } from './snakeCode.js'
import { updateApple, drawApple } from './appleCode.js'

let lastRender = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
let gameOverSound = new Audio("defeat.mp3");
const restartButtton = document.querySelector('#Restart')
restartButtton.addEventListener('click', restart)
const go_Text = document.querySelector('.game_over')

function main(currentTime) {
  if (gameOver === true) {
    gameOverSound.play()
    restartButtton.style.opacity = 1
    go_Text.style.opacity = 1
    return
  }
  window.requestAnimationFrame(main)
  const secsBetweenRender = (currentTime - lastRender) / 1000
  let snakeTime = 1 / snakeSpeed
  if (secsBetweenRender < snakeTime) {
    return
  }
  lastRender = currentTime
  updateSnake()
  updateApple()
  gameBoard.innerHTML = ''
  drawSnake()
  drawApple()
  checkGameOver()
}

window.requestAnimationFrame(main)

function checkGameOver() {
  if (outsideGridCheck(snakeHead) === true || snakeIntersectCheck() === true) {
    gameOver = true
  }
}

function restart() {
  window.location.reload()
}

export function outsideGridCheck(pos) {
  if (pos.x < 1 || pos.x > 20 || pos.y < 1 || pos.y > 20) {
      return true
  }
}