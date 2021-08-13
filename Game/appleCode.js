import { onSnakeCheck, growSnake } from './snakeCode.js'

let apple = getRandomPos()
export let points = 0
export const point_dis = document.querySelector("#Points")
let sound = new Audio("score-sound.mp3");

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

 export function getRandomPos() {
  let newFoodPosition = {
    x: Math.ceil(Math.random() * 20),
    y: Math.ceil(Math.random() * 20)
  }
  return newFoodPosition
}
  