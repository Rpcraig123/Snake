import { getInputDirection } from "./input.js"

export const snakeSpeed = 5
const snakeBody = [{x: 5, y: 5},{x: 5, y: 6},{x: 5, y: 7}]
let newSegments = 0

export function update() {
  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

// export function expandSnake(amount) {
//   newSegments += amount
// }

// export function onSnake(position) {
//   snakeBody.some(segment => {
//     if (segment.x === position.x && segment.y === position.y) {
//       return true 
//     }
//   })
// }