export let gridSize = 20

export function randomGridPosition() {
  return {
    x: Math.ceil(Math.random() * gridSize),
    y: Math.ceil(Math.random() * gridSize)
  }
}

export function outsideGrid(position) {
  if (position.x < 1 || position.x > gridSize || position.y < 1 || position.y > gridSize) {
      return true
  }
}