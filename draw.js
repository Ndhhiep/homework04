var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var width = c.width;
var height = c.height;

let eyes_left = {
  currentX: 900 - 25,
  currentY: 300 - 30,
  targetX: 900 - 25,
  targetY: 300 - 30,
};

let eyes_right = {
  currentX: 900 + 25,
  currentY: 300 - 30,
  targetX: 900 + 25,
  targetY: 300 - 30,
};

let eyeslen_left = {
  currentX: 900 - 25,
  currentY: 300 - 10,
  targetX: 900 - 25,
  targetY: 300 - 30,
};

let eyeslen_right = {
  currentX: 900 + 25,
  currentY: 300 - 10,
  targetX: 900 + 25,
  targetY: 300 - 30,
};

document.addEventListener("mousemove", (ell) => {
  eyeslen_left.targetX = ell.clientX;
  eyeslen_left.targetY = ell.clientY;
  console.log(eyeslen_left);
});

document.addEventListener("mousemove", (elr) => {
  eyeslen_right.targetX = elr.clientX;
  eyeslen_right.targetY = elr.clientY;
  console.log(eyeslen_right);
});

let fps = 60;
let fpsInterval = 1000 / fps;
let then = Date.now();
let delta = 0;
let click = false;

let tongue = {
  currentX: 870,
  currentY: 400,
  targetX: 850,
  targetY: 400,
};

document.addEventListener("click", (tm) => {
  click = true;
  console.log(tongue);
});

// let tongue_space = 870;
let alpha = 0.5;
let animationID;

function draw(x, y) {
  setInterval(() => {
    delta = Date.now() - then;
    let fps = 1000 / delta;
    then = Date.now();

    if (click == true) {
      alpha += 0.1;
      tongue.currentX += Math.sin(alpha) * 3.5;
    } else {
      tongue.currentX = 870;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.font = "20px Georgia";
    ctx.fillText(`FPS: ${Math.round(fps * 1000) / 1000}`, 10, 50);

    // vẽ đầu
    ctx.beginPath();
    ctx.arc(x, y, 130, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //vẽ tai
    ctx.beginPath();
    ctx.arc(x - 115, y - 150, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x + 115, y - 150, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //vẽ miệng
    ctx.beginPath();
    ctx.roundRect(x - 110, y + 30, 220, 100, 50);
    ctx.fillStyle = "#FDF5E6";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //vẽ mặt
    ctx.beginPath();
    ctx.ellipse(x - 30, y - 40, 35, 60, 0, 0, 2 * Math.PI);
    // ctx.stroke();
    ctx.fillStyle = "#FDF5E6";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x + 30, y - 40, 35, 60, 0, 0, 2 * Math.PI);
    // ctx.stroke();
    ctx.fillStyle = "#FDF5E6";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x, y, 80, 0, 2 * Math.PI);
    // ctx.stroke();
    ctx.fillStyle = "#FDF5E6";
    ctx.fill();
    ctx.closePath();

    //vẽ mắt
    ctx.beginPath();
    ctx.ellipse(
      eyes_left.currentX,
      eyes_left.currentY,
      20,
      50,
      0,
      0,
      2 * Math.PI
    );
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(
      eyes_right.currentX,
      eyes_right.currentY,
      20,
      50,
      0,
      0,
      2 * Math.PI
    );
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    //vẽ len mắt
    ctx.beginPath();
    ctx.ellipse(
      eyeslen_left.currentX,
      eyeslen_left.currentY,
      10,
      20,
      0,
      0,
      2 * Math.PI
    );
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(
      eyeslen_right.currentX,
      eyeslen_right.currentY,
      10,
      20,
      0,
      0,
      2 * Math.PI
    );
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //vẽ mũi
    ctx.beginPath();
    ctx.ellipse(x, y + 60, 30, 15, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    //vẽ lưỡi
    ctx.beginPath();
    ctx.moveTo(850, 400);
    ctx.lineTo(950, 400);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(tongue.currentX, 400, 10, 15, 0, 0, 1 * Math.PI);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.stroke();

    if (eyeslen_left.currentX < eyeslen_left.targetX) {
      eyeslen_left.currentX += 1;
    } else if (eyeslen_left.currentX > eyeslen_left.targetX) {
      eyeslen_left.currentX -= 1;
    }

    if (eyeslen_left.currentY < eyeslen_left.targetY) {
      eyeslen_left.currentY += 1;
    } else if (eyeslen_left.currentY > eyeslen_left.targetY) {
      eyeslen_left.currentY -= 1;
    }

    if (eyeslen_left.currentX > 890) {
      eyeslen_left.currentX -= 1;
    }
    if (eyeslen_left.currentX < 860) {
      eyeslen_left.currentX += 1;
    }

    if (eyeslen_left.currentY > 300) {
      eyeslen_left.currentY -= 1;
    }
    if (eyeslen_left.currentY < 240) {
      eyeslen_left.currentY += 1;
    }

    if (eyeslen_right.currentX < eyeslen_right.targetX) {
      eyeslen_right.currentX += 1;
    } else if (eyeslen_right.currentX > eyeslen_right.targetX) {
      eyeslen_right.currentX -= 1;
    }

    if (eyeslen_right.currentY < eyeslen_right.targetY) {
      eyeslen_right.currentY += 1;
    } else if (eyeslen_right.currentY > eyeslen_right.targetY) {
      eyeslen_right.currentY -= 1;
    }

    if (eyeslen_right.currentX > 940) {
      eyeslen_right.currentX -= 1;
    }
    if (eyeslen_right.currentX < 910) {
      eyeslen_right.currentX += 1;
    }

    if (eyeslen_right.currentY > 300) {
      eyeslen_right.currentY -= 1;
    }
    if (eyeslen_right.currentY < 240) {
      eyeslen_right.currentY += 1;
    }
  }, fpsInterval);
}

draw(900, 300);
