import { updateSnake, drawSnake, SNAKE_SPEED, snakeHead, snakeIntersection } from './snake.js'
import { updateFood, drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver === true) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location.reload()
    }
    else {
      alert("GAME OVER! - Refresh the page to continue (temporary)")
    }
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

