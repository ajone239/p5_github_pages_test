const width = 600
const height = 500

let gaming = false

let ball
let player
let right_wall
let left_wall
let top_wall
let bot_wall

let bricks = []

let showables
let updateables
let collidables

function setup() {
  createCanvas(width, height);

  ball = new Ball(10)
  player = new Player(width / 2 - 30, height - 40, 60, 20)

  left_wall = new Rectangle(0, -10, 5, height + 20)
  right_wall = new Rectangle(width - 5, -10, 5, height + 20)
  top_wall = new Rectangle(-10, 0, width + 10, 5)
  bot_wall = new Rectangle(-10, height - 5, width + 10, 5)

  makeBricks()

  showables = [ball, player, right_wall, left_wall, top_wall, bot_wall]
  updateables = [ball, player]
  collidables = [player, right_wall, left_wall, top_wall, bot_wall]

  noLoop()
}

function draw() {
  background(0);
  stroke(255);
  for (var c of collidables.concat(bricks)) {
    ball.check_collision(c)
  }
  for (var u of updateables) {
    u.update()
  }
  for (var s of showables.concat(bricks)) {
    s.show()
  }

  if (bricks.length == 0) {
    noLoop()
    text("Game over", width / 2, height / 2)
  }
}

function makeBricks() {
  const vert_count = 3
  const horz_count = 9
  for (var i = 0; i < vert_count; i++) {
    for (var j = 0; j < horz_count; j++) {
      var b = new Brick(
        10 + (j * width / horz_count),
        10 + (i * height / 4 / vert_count),
        50,
        20,
        bricks
      )
      bricks.push(b)
    }
  }
}

function keyPressed() {
  if (!gaming) {
    loop()
    gaming = true
  }
  if (key == 'a' || key == 'h') {
    player.go(true)
  } else if (key == 'd' || key == 'l') {
    player.go(false)
  } else if (key == ' ') {
    gaming = false
    noLoop()
    setup()
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
