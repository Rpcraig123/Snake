let inputDir = { x: 0, y: 0 }
let lastInputDir = inputDir
let snakeBody = [{ x: 12, y: 17 }]
let newSquares = 0
export let snakeHead = snakeBody[0]
export const snakeSpeed = 7

export function updateSnake() {
  addSquares()
  const inputDir = getInputDir()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }
  snakeHead = snakeBody[0]
  snakeHead.x += inputDir.x
  snakeHead.y += inputDir.y
}

export function drawSnake() {
  snakeBody.forEach(square => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = square.y
    snakeElement.style.gridColumnStart = square.x
    snakeElement.classList.add('snake')
    document.querySelector("#game-board").appendChild(snakeElement)
  })
}

export function growSnake() {
  newSquares += 1
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

function addSquares() {
  for (let i = 0; i < newSquares; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }
  newSquares = 0
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

function getInputDir() {
  lastInputDir = inputDir
  return inputDir
}