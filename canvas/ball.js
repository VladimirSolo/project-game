const canvas = document.querySelector('canvas');
// console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

// создаем обьект с координатами
// потом перезаписываем его при движении мыши
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};
// max min radius
const maxRadius = 40;
// const minRadius = 2;
// array color
// https://color.adobe.com/ru/explore
const colorArray = [
  '#F20544',
  '#8C2656',
  '#3F618C',
  '#012340',
  '#011826',
];
// слушатель движение мыши на все окно виндов
window.addEventListener('mousemove', (event) => {
  // console.log(event);
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // прив расширении экрана обновляеся содержимое
  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.minRadius = radius;

  this.draw = function () {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.strokeStyle = 'grey';
    context.stroke();
    // закрашиваем circle заливает указанным цветом
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
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

    // найти расстояние между кругом и мышью
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) { 
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

let circlesArr = [];
function init() {
  circlesArr = [];

  for (let i = 0; i < 800; i += 1) {
    const radius = Math.random() * 3 + 1;
    const x = Math.random() * (innerWidth - radius * 2) + radius;
    const y = Math.random() * (innerHeight - radius * 2) + radius;
    // шаг увеличения
    const dx = (Math.random() - 0.5);
    const dy = (Math.random() - 0.5);
    circlesArr.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);
  // вызываем метод функции конструктора
  for (let i = 0; i < circlesArr.length; i += 1) {
    circlesArr[i].update();
  }
}
init();

animate();
