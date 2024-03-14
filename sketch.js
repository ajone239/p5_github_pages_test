const width = 500
const height = 400

let ball
let right_wall
let left_wall
let top_wall
let bot_wall

let showables
let updateables
let collidables

function setup() {
  createCanvas(width, height);
  ball = new Ball(20)
  left_wall = new Rectangle(0, -10, 5, height + 20)
  right_wall = new Rectangle(width - 5, -10, 5, height + 20)
  top_wall = new Rectangle(-10, 0, width + 10, 5)
  bot_wall = new Rectangle(-10, height - 5, width + 10, 5)

  showables = [ball, right_wall, left_wall, top_wall, bot_wall]
  updateables = [ball]
  collidables = [right_wall, left_wall, top_wall, bot_wall]
}
function draw() {
  background(0);
  stroke(255);

  for (var s of showables) {
    s.show()
  }
  for (var u of updateables) {
    u.update()
  }
  for (var c of collidables) {
    ball.check_collision(c)
  }
}
