class Rectangle {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }

  is_in_bounds(left_x, right_x, top_y, bot_y) {
    /*  x--w
     *  |  | left <--
     */
    const left = (left_x >= this.x) && (left_x <= (this.x + this.w))
    /*            x--w
     *  --> right |  |
     */
    const right = (right_x >= this.x) && (right_x <= (this.x + this.w))
    /*
     *  -  y
     *     |
     *  -  h
     *  ^
     *  |
     *  top_y
     */
    const top = (top_y >= this.y) && (top_y <= (this.y + this.h))
    /*
     *  bot_y
     *  |
     *  v
     *  -  y
     *     |
     *  -  h
     */
    const bot = (bot_y >= this.y) && (bot_y <= (this.y + this.h))

    return [((left || right) && top && bot),
    ((top || bot) && left && right)]
  }

  collide() { }

  show() {
    rect(this.x, this.y, this.w, this.h)
  }
}

