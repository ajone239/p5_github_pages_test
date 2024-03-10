const width = 500
const height = 400

class Player {
  constructor(vy) {
    this.vy = vy;
  }
}

let p1 = new Player(height / 2);

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(0);
  stroke(255);
  line(width / 2, 0, width / 2, height);
  ellipse(width / 2, p1.vy, 100);
}

function keyPressed() {
  if (key == 'w') {
    p1.vy -= 5;
  } else if (key == 's') {
    p1.vy += 5;
  }
}
