import { Column } from "./column.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;

const columns = [];
const columnsCount = canvas.width / fontSize;

for (let i = 0; i < columnsCount; i++) {
  columns.push(new Column(i * fontSize, fontSize, context, canvas.height));
}

context.font = `bold ${fontSize}px monospace`;

const column = new Column(100, fontSize, context, canvas.height);

function animate() {
  context.fillStyle = "rgba(0, 0, 0, 0.1";
  context.fillRect(0, 0, canvas.width, canvas.height)
  
  context.fillStyle = "green";
  columns.forEach(column => column.drawSymbol())
  
  setTimeout(() => requestAnimationFrame(animate), 100)
}

animate()
