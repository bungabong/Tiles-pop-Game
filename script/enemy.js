class Enemy {
  constructor (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.yv = 1;
    this.alpha = 1;
    this.friction = 0.99;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }
  update() {
    this.draw();
    this.y += this.yv;
  }
}