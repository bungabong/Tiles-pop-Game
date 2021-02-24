player = new Player(x, y, width, height, color);
player.update();

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height - height - height / 2);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.fillRect(0, canvas.height - height - height /2, canvas.width, height + height /2);
  player.update();
  sideLimit(player);
  controls(player);

  //Loop through projectiles to activate properties..
  projectiles.forEach((projectile, index) => {
    projectile.update();
    if (projectile.y <= 0) {
      projectiles.splice(index, 1);
    }
  })
}

document.addEventListener('click', () => {
  //Projectile Properties..
  const radius = 3;
  const x = player.x + width / 2;
  const y = player.y;
  const color = 'white';
  projectiles.push(new Projectile(x, y, radius, color));
});

animate();
