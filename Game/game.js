import { updateSnake, drawSnake, SNAKE_SPEED, snakeHead, snakeIntersection } from './snake.js'
import { updateFood, drawFood, points, point_dis } from './apple.js'
import { outsideGrid, gridSize } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
// const highScore = document.getElementById('HS')
let gameOverSound = new Audio("defeat.mp3");

function main(currentTime) {
  if (gameOver === true) {
    gameOverSound.play()
    if (confirm(`GAME OVER!\nScore = ${points}\nPress OK to restart.`)) {
      // highScore.innerHTML = `High Score: ${points}`
      // point_dis.innerHTML = `Points: 0`
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

