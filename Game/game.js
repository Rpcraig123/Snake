import { updateSnake, drawSnake, SNAKE_SPEED, snakeHead, snakeIntersection } from './snake.js'
import { updateFood, drawFood } from './apple.js'
import { outsideGrid, gridSize } from './grid.js'

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

// document.onload = function setUp() {
//   for (i = 1; i < Math.pow(gridSize,2); i++) {
//     let blankElement = document.createElement('div')
//     blankElement.classList.add('blank')
//     document.querySelector("#game-board").appendChild(blankElement)
//   }
// }

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

