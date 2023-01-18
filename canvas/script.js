const canvas = document.querySelector('canvas');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

// color
// fillRect(x, y, width, height);
context.fillStyle = 'rgba(255, 0, 0, 0.5)';
context.fillRect(100, 100, 100, 100);
context.fillStyle = 'rgba(0, 255, 0, 0.5)';
context.fillRect(400, 100, 100, 100);
context.fillStyle = 'rgba(0, 0, 255, 0.5)';
context.fillRect(100, 400, 100, 100);
context.fillStyle = 'rgba(0, 0, 0, 0.5)';
context.fillRect(300, 300, 100, 200);

// line
context.beginPath();
// context.moveTo(x, y); coordinats
context.moveTo(50, 300);
context.lineTo(300, 100);
context.lineTo(400, 200);
// color
context.strokeStyle = '#0000ff';
context.stroke();

// Arc / circle
// arc(x, y, radius, startAngle, endAngle, counterclockwise)
context.beginPath();
context.arc(250, 60, 50, 0, 2 * Math.PI, false);
context.stroke();

// random color for styles
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// more circle on page random coordiants
for (let i = 0; i < 300; i += 1) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x, y, 50, 0, 2 * Math.PI, false);
  context.strokeStyle = randomColor();
  context.stroke();
}
