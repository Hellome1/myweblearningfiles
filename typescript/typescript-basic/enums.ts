const enum Direction {
  Up = 'UP',
  Down = 1,
  Left = 3,
  Right = 'RIGHT'
}
const value = 'UP'
if (value === Direction.Up) {
  console.log(Direction.Down)
}