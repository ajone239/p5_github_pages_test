const width = 600
const height = 500

let gaming = false

let ball
let player
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
  player = new Player(width / 2, height - 40, 60, 10)

  left_wall = new Rectangle(0, -10, 5, height + 20)
  right_wall = new Rectangle(width - 5, -10, 5, height + 20)
  top_wall = new Rectangle(-10, 0, width + 10, 5)
  bot_wall = new Rectangle(-10, height - 5, width + 10, 5)

  showables = [ball, player, right_wall, left_wall, top_wall, bot_wall]
  updateables = [ball, player]
  collidables = [player, right_wall, left_wall, top_wall, bot_wall]

  noLoop()
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

function keyPressed() {
  if (!gaming) {
    loop()
    gaming = true
  }
  if (key == 'a') {
    player.go(true)
  } else if (key == 'd') {
    player.go(false)
  }
}
function keyReleased() {
  player.stop()
}

function mousePressed() {
  if (!gaming) {
    loop()
    gaming = true
  }
  player.set_pos(mouseX)
}

function mouseDragged() {
  player.set_pos(mouseX)
}
