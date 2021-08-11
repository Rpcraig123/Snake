import { getInputDirection } from "./input.js"
// import { snakeBody } from "./game.js"

export const SNAKE_SPEED = 7
let snakeBody = [
  { x: 12, y: 17 }
]
let newSegments = 0
export let snakeHead = snakeBody[0]

export function updateSnake() {
  addSegments()
  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }
  snakeHead = snakeBody[0]
  snakeHead.x += inputDirection.x
  snakeHead.y += inputDirection.y
}

export function drawSnake() {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    document.querySelector("#game-board").appendChild(snakeElement)
  })
}

export function expandSnake(amount) {
  newSegments += amount
}

export function onSnake(position) {
  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeBody[i].x === position.x && snakeBody[i].y === position.y) {
      return true
    }
  }
}

export function snakeIntersection() {
  for (let i = 1; i < snakeBody.length; i++) {
    if (snakeBody[i].x == snakeHead.x && snakeBody[i].y == snakeHead.y) {
      return true
    }
  }
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }
  newSegments = 0
}