class Projectile {
  constructor (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.yv = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }
  update() {
    this.draw();
    if (this.x >= canvas.width - height * 2) {
      this.yv = -100;
    } else {
      this.yv = -4;
    }
    this.y += this.yv;
  }
}