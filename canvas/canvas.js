const canvas = document.querySelector('canvas');
// console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

/*
// переменные
const x = Math.random() * innerWidth;
const y = Math.random() * innerHeight;
// шаг увеличения
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
const radius = 50;
 */

// circle func
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.strokeStyle = 'grey';
    context.stroke();
    // закрашиваем circle
    context.fillStyle = 'red';
    context.fill();
  };

  this.update = function () {
    // чтобы круг бегал слева направо и используем радиус
  // чтобы не выходил за экран
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    // чтобы круг бегал ВВЕРХ ВНИЗ и используем радиус
    // чтобы не выходил за экран
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

// const circle = new Circle(200, 200, 3, 3, 40);

const circlesArr = [];
for (let i = 0; i < 100; i += 1) {
  const radius = 50;
  const x = Math.random() * (innerWidth - radius * 2) + radius;
  const y = Math.random() * (innerHeight - radius * 2) + radius;
  // шаг увеличения
  const dx = (Math.random() - 0.5);
  const dy = (Math.random() - 0.5);
  circlesArr.push(new Circle(x, y, dx, dy, radius));
}
console.log(circlesArr)

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);
  // вызываем метод функции конструктора
  for (let i = 0; i < circlesArr.length; i += 1) {
    circlesArr[i].update();
  }
}

animate();

/*
function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.strokeStyle = 'blue';
  context.stroke();
  // чтобы круг бегал слева направо и используем радиус
  // чтобы не выходил за экран
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  // чтобы круг бегал ВВЕРХ ВНИЗ и используем радиус
  // чтобы не выходил за экран
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
 */
