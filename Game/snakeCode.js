let inputDir = { x: 0, y: 0 }
let lastInputDir = inputDir
export const snakeSpeed = 7
let snakeBody = [{ x: 12, y: 17 }]
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

export function growSnake() {
  newSegments += 1
}

export function onSnakeCheck(pos) {
  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeBody[i].x === pos.x && snakeBody[i].y === pos.y) {
      return true
    }
  }
}

export function snakeIntersectCheck() {
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

window.addEventListener('keydown', moveSnake)

function moveSnake(event) {
  event.preventDefault()
  switch (event.key) {
    case 'ArrowUp':
      if (lastInputDir.y !== 0) break
      inputDir = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDir.y !== 0) break
      inputDir = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInputDir.x !== 0) break
      inputDir = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDir.x !== 0) break
      inputDir = { x: 1, y: 0 }
      break
  }
}

function getInputDirection() {
  lastInputDir = inputDir
  return inputDir
}