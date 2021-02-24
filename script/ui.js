//Key controls..
function controls(player) {
  document.addEventListener('keydown', (evt) => {
    switch(evt.keyCode) {
      case 37:
      case 65:
        player.xv = -5;
      break;
      case 39:
      case 68:
        player.xv = 5;
      break;
    }
  })

  document.addEventListener('keyup', (evt) => {
    switch(evt.keyCode) {
      case 37:
      case 65:
        if (player.xv === -5) {
          player.xv = 0;
        }
      break;
      case 39:
      case 68:
        if (player.xv === 5) {
          player.xv = 0;
        }
    }
  })
}

//Control movement limit..
function sideLimit(player) {
  if (player.xv === -5) {
    if (player.x <= canvas.width - canvas.width) {
      player.x = 0;
    }
  } else if (player.xv === 5) {
    if (player.x >= canvas.width - player.width) {
      player.x = canvas.width - player.width;
    }
  }
}
