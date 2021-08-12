import { updateSnake, drawSnake, SNAKE_SPEED, snakeHead, snakeIntersection } from './snake.js'
import { updateFood, drawFood } from './apple.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
let gameOverSound = new Audio("defeat.mp3");
const restartButtton = document.querySelector('#Restart')
const go_Text = document.querySelector('.game_over')

function main(currentTime) {
  if (gameOver === true) {
    gameOverSound.play()
    restartButtton.style.opacity = 1
    go_Text.style.opacity = 1
    return
  }
  
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  draw()
  checkDeath()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  if (outsideGrid(snakeHead) === true || snakeIntersection() === true) {
    gameOver = true
  }
}

restartButtton.addEventListener('click', restart)

function restart() {
  window.location.reload()
}