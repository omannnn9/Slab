const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

ctx.beginPath();

ctx.arc(400, 250, 20, 0, Math.PI * 2);

ctx.fillStyle = "#00FF9C";

ctx.fill();
