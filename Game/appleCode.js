import { onSnakeCheck, growSnake } from './snakeCode.js'

let apple = getRandomPos()
let points = 0
let sound = new Audio("score-sound.mp3");
export const point_dis = document.querySelector("#Points")

export function updateApple() {
  if (onSnakeCheck(apple) === true) {
    points += 1
    sound.play()
    point_dis.innerHTML = `Points: ${points}`
    growSnake()
    apple = getRandomPos()
  }
}

export function drawApple() {
  const appleElement = document.createElement('div')
  appleElement.style.gridRowStart = apple.y
  appleElement.style.gridColumnStart = apple.x
  appleElement.classList.add('apple')
  document.querySelector("#game-board").appendChild(appleElement)
}

 function getRandomPos() {
  let newApplePos = {
    x: Math.ceil(Math.random() * 20),
    y: Math.ceil(Math.random() * 20)
  }
  let snakeCells = document.querySelectorAll('.snake')
  for (let i = 1; i < snakeCells.length; i++) {
    if (snakeCells[i].style.gridColumnStart == newApplePos.x && snakeCells[i].style.gridRowStart == newApplePos.y) {
      newApplePos = getRandomPos()
    }
  }
  return newApplePos
}
  