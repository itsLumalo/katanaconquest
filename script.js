const spriteScale = 3 / 4;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const background1 = new Image();
const samuriIdleSS = new Image();
const samuriIdleShadowSS = new Image();
const samuriAttackSS = new Image();
const samuriAttackShadowSS = new Image();
const skeletonIdleSS = new Image();
const skeletonIdleShadowSS = new Image();

background1.src = "assets/backgrounds/origbig.png";
samuriIdleSS.src = "assets/samuri/IDLE.png";
samuriIdleShadowSS.src = "assets/samuri/IDLESHADOW.png";
samuriAttackSS.src = "assets/samuri/ATTACK 1.png";
samuriAttackShadowSS.src = "assets/samuri/ATTACK 1SHADOW.png";
skeletonIdleSS.src = "assets/skeleton/Idle.png";
skeletonIdleShadowSS.src = "assets/skeleton/IdleShadow.png";

let currentAnimation = "idle";
let currentEnemie = "skeleton";

let frame = 0;
let enemieFrame = 0;
let frameWidth = 96;
let enemieFrameWidth = 150;

canvas.addEventListener("click", function () {
  currentAnimation = "attack";
  frame = 0;
});

function tick() {
  ctx.imageSmoothingEnabled = false;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(
    background1,
    -100,
    -80,
    background1.width * spriteScale,
    background1.height * spriteScale
  );

  // SAMURAI IDLE
  if (currentAnimation == "idle") {
    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.drawImage(
      samuriIdleShadowSS,
      frame * frameWidth,
      0,
      frameWidth,
      samuriIdleSS.height,
      canvas.width / 2 - 96 / 2 - 30 + 5,   // +5 RIGHT
      canvas.height / 2 - 35 + 54,
      frameWidth,
      (samuriIdleSS.height * 1) / 3
    );
    ctx.restore();

    ctx.drawImage(
      samuriIdleSS,
      frame * frameWidth,
      0,
      frameWidth,
      samuriIdleSS.height,
      canvas.width / 2 - 96 / 2 - 30 + 5,   // +5 RIGHT
      canvas.height / 2 - 35,
      frameWidth,
      samuriIdleSS.height
    );

    if (frame >= 9) frame = 0;
  }

  // SAMURAI ATTACK
  else if (currentAnimation == "attack") {
    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.drawImage(
      samuriAttackShadowSS,
      frame * frameWidth,
      0,
      frameWidth,
      samuriAttackSS.height,
      canvas.width / 2 - 96 / 2 - 40 + 5,   // +5 RIGHT
      canvas.height / 2 - 35 + 54,
      frameWidth,
      (samuriAttackSS.height * 1) / 3
    );
    ctx.restore();

    ctx.drawImage(
      samuriAttackSS,
      frame * frameWidth,
      0,
      frameWidth,
      samuriAttackSS.height,
      canvas.width / 2 - 96 / 2 - 40 + 5,   // +5 RIGHT
      canvas.height / 2 - 35,
      frameWidth,
      samuriAttackSS.height
    );

    if (frame >= 6) {
      frame = 0;
      currentAnimation = "idle";
    }
  }

  // ENEMY (unchanged)
  if (currentEnemie == "skeleton") {
    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.scale(-1, 1);
    ctx.drawImage(
      skeletonIdleShadowSS,
      enemieFrame * enemieFrameWidth,
      0,
      enemieFrameWidth,
      skeletonIdleSS.height,
      -(canvas.width / 2 - 96 / 2) - 150,
      canvas.height / 2 - 53 + 66,
      enemieFrameWidth,
      (skeletonIdleSS.height * 1) / 3
    );
    ctx.restore();

    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(
      skeletonIdleSS,
      enemieFrame * enemieFrameWidth,
      0,
      enemieFrameWidth,
      skeletonIdleSS.height,
      -(canvas.width / 2 - 96 / 2) - 150,
      canvas.height / 2 - 53,
      enemieFrameWidth,
      skeletonIdleSS.height
    );
    ctx.restore();

    if (enemieFrame >= 3) enemieFrame = 0;
  }

  frame++;
  enemieFrame++;
}

function startGame() {
  setInterval(() => {
    tick();
  }, 100);
}
startGame();
