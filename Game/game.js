import { updateSnake, drawSnake, SNAKE_SPEED, snakeHead, snakeIntersection } from './snake.js'
import { updateFood, drawFood } from './apple.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
// const highScore = document.getElementById('HS')
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
  // let prevSnakes = document.querySelectorAll('.snake')
  // for (let i=0;i<prevSnakes.length;i++) {
  //   document.querySelector('#game-board').removeChild(prevSnakes[i])
  // }
  // let prevApple = document.querySelectorAll('.apple')
  // for (let i=0;i<prevApple.length;i++) {
  //   document.querySelector('#game-board').removeChild(prevApple[i])
  // }
  // let newSnakeElement = document.createElement('div')
  // newSnakeElement.style.gridRowStart = 17
  // newSnakeElement.style.gridColumnStart = 12
  // newSnakeElement.classList.add('snake')
  // document.querySelector("#game-board").appendChild(newSnakeElement)
  // let newApple = document.createElement('div')
  // newApple.style.gridRowStart = Math.ceil(Math.random() * 20)
  // newApple.style.gridColumnStart = Math.ceil(Math.random() * 20)
  // newApple.classList.add('apple')
  // document.querySelector("#game-board").appendChild(newApple)
  // restartButtton.style.opacity = 0
  // go_Text.style.opacity = 0
  // window.requestAnimationFrame(main)
  // window.requestAnimationFrame(main)
}