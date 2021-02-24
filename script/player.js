class Player {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.xv = 0;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect( this.x, this.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.x += this.xv;
  }
}