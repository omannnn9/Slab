const canvas = document.querySelector("canvas");
let ballX = 400;
let ballY = 250;
const ctx = canvas.getContext("2d");

ctx.beginPath();

ctx.arc(ballX, ballY, 20, 0, Math.PI * 2);

ctx.fillStyle = "#00FF9C";

ctx.fill();
