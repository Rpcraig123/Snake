import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let apple = getRandomFoodPosition()
const snakeGrowth = 1
export let points = 0
export const point_dis = document.querySelector("#Points")
let sound = new Audio("score-sound.mp3");

export function updateFood() {
  if (onSnake(apple) === true) {
    points += 1
    sound.play()
    point_dis.innerHTML = `Points: ${points}`
    expandSnake(snakeGrowth)
    apple = getRandomFoodPosition()
  }
}

export function drawFood() {
  const appleElement = document.createElement('div')
  appleElement.style.gridRowStart = apple.y
  appleElement.style.gridColumnStart = apple.x
  appleElement.classList.add('apple')
  document.querySelector("#game-board").appendChild(appleElement)
}

function getRandomFoodPosition() {
  let newFoodPosition = randomGridPosition()
  while (newFoodPosition == null || onSnake(newFoodPosition) === true) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
  