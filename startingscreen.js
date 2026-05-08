const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const titleImg = new Image();
titleImg.src = "assets/backgrounds/title.png";

function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // scale image to 1/4 size
    const scaledW = titleImg.width / 4;
    const scaledH = titleImg.height / 4;

    // center on X, 1/3 down on Y
    const x = (canvas.width / 2) - (scaledW / 2)+4;
    const y = canvas.height / 3;

    ctx.drawImage(titleImg, x, y, scaledW, scaledH);
}

window.onload = function() {
    setInterval(tick, 100);
};
