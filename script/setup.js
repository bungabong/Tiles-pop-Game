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

  //Loop through enemies..
  enemies.forEach((enemy) => {
    enemy.update();
  })
}

window.setInterval(() => {
  const radius = (Math.random() * 20) + 10;
  const x = Math.random() * canvas.width;
  const y = canvas.width - canvas.width - radius;
  const color = `HSL(${Math.random() * 360}, 100%, 50%)`;
  enemies.push(new Enemy(x, y, radius, color));
}, 3000);

document.addEventListener('click', () => {
  //Projectile Properties..
  const radius = 3;
  const x = player.x + width / 2;
  const y = player.y;
  const color = 'white';
  projectiles.push(new Projectile(x, y, radius, color));
 // projectiles.push(new Projectile(x - width / 2 + 10, y, radius, color));
 // projectiles.push(new Projectile(x + width / 2 - 10, y, radius, color));
});

animate();
