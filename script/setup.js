player = new Player(x, y, width, height, color);
player.update();

let enableAnimation;
function animate() {
  enableAnimation = requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height - height - height / 2);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.fillRect(0, canvas.height - height - height /2, canvas.width, height + height /2);
  player.update();
  sideLimit(player);
  controls(player);

  //Loop through particles to trigger particle properties..
  particles.forEach((particle, index) => {
    particle.update();
    if (particle.alpha <= 0) {
      particles.splice(index, 1);
    }
  })

  //Loop through projectiles to activate properties..
  projectiles.forEach((projectile, index) => {
    projectile.update();
    if (projectile.y <= 0) {
      projectiles.splice(index, 1);
    }
  })

  //Loop through enemies..
  enemies.forEach((enemy, enemyIndex) => {
    enemy.update();
    if (enemy.y + enemy.radius >= canvas.height) {
      cancelAnimationFrame(enableAnimation);
    }

    //Loop through projectiles to track the enemy and projectiles distance..
    projectiles.forEach((projectile, projectileIndex) => {
      const dist = Math.hypot(enemy.x - projectile.x, enemy.y - projectile.y);
      if (dist - enemy.radius - projectile.radius <= 1) {

         //push particles when projectiles hit the enemy..
          for (let i = 0; i < enemy.radius * 2; i++) {
            particles.push(new Particle(
              projectile.x,
              projectile.y,
              Math.random() * 2,
              enemy.color,
              {
                x: (Math.random() - 0.5) * (Math.random() * 15),
                y: (Math.random() - 0.5) * (Math.random() * 15)
              }
            ));
            }

          if (enemy.radius - 10 > 10) {
            setTimeout(() => {
              gsap.to(enemy, {
                radius: enemy.radius - 10
              })
            }, 0);
          } else {
            setTimeout(() => {
              enemies.splice(enemyIndex, 1);
              projectiles.splice(projectileIndex, 1);
            }, 0)
          }
      }
    })
  })
}

window.setInterval(() => {
  const radius = (Math.random() * 30) + 10;
  const x = Math.random() * canvas.width;
  const y = canvas.width - canvas.width - radius;
  const color = `HSL(${Math.random() * 360}, 100%, 50%)`;
  enemies.push(new Enemy(x, y, radius, color));
}, 1500);

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
