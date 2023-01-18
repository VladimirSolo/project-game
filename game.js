// const canvas = document.querySelector('canvas');
// import platformIm from './img/platfom.png';

const canvas = document.createElement('canvas');
document.body.append(canvas);

const c = canvas.getContext('2d');

canvas.width = 1600;
canvas.height = 800;
// 17 obj width and height
const scaledCanvas = {
  width: canvas.width / 4,
  height: canvas.height / 4,
};

// 5 create gravity
const gravity = 0.5;

// 12 img
class Sprite {
  constructor({position, imageSrc}) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
  }
  // 13
  draw() {
    if (!this.image) return
    c.drawImage(this.image, this.position.x, this.position.y);
  }
  // 14
  update() {
    this.draw();
  }
}

class Player {
  constructor(position) {
    // 1 create position
    this.position = position;
    // 2 create vel
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.height = 50;
    this.width = 50;
    // 43 add speed
    this.speed = 13;
  }

  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    // 7 plus x
    this.position.x += this.velocity.x;
    // 3 plus vel
    this.position.y += this.velocity.y;
    // 4 add speed box add gravity
    // останавливаем не даем выйти за экран
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}
 // 46 just player and add exemplar classa in init fucntion
let player;

 // create platform 18 =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

class Platform {
  // 26 change x and y
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    // 29 add img
    this.image = image;
    // 32 add img width and height

    this.width = 585;
    this.height = 125;
  }

  draw() {
    // 30 change on drawImage
    c.drawImage(this.image, this.position.x, this.position.y);
    // c.fillStyle = 'blue';
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}
 // create GenericObject 34 =================<<<<<<<<<<<<<<

class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = 585;
    this.height = 125;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

// 31 create img 
// 35 create func img ========================================================
function createImage(path) {
  const image = new Image();
  image.src = path;
  return image
}

// 22 add more platforms
// 33 add morrrrreeeeee

// 45 empty do platforms and genericObjects
let platforms = []
// 36 array generics img
let genericObjects = []
// keys 8
const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
};

// 15
// const background = new Sprite({
//   position: {
//     x: 0,
//     y: 0,
//   },
//   imageSrc: './img/background.png'
// });

// 27 scroll background
let scrollOffset = 0;

// 40 create func init and change const on let ---------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function init() {
  player = new Player({
    x: 50,
    y: 0,
  });
platforms = [
      // 47 add new img
      new Platform({
        x:3985,
         y:500,
              image: createImage('./img/platformSmallTall.png'),
        }),
  new Platform({
    x:-1,
     y:700,
     image: createImage('./img/platform.png'),
    }),
  new Platform({
    x:500,
     y:700,
          image: createImage('./img/platform.png'),
    }),
  new Platform({
    x:1300,
     y:700,
          image: createImage('./img/platform.png'),
    }),
  new Platform({
    x:2200,
     y:700,
          image: createImage('./img/platform.png'),
    }),
  new Platform({
    x:2700,
     y:350,
          image: createImage('./img/platform.png'),
    }),
  new Platform({
    x:3700,
     y:700,
          image: createImage('./img/platform.png'),
    }),
  new Platform({
    x:5000,
     y:700,
          image: createImage('./img/platform.png'),
    }),
     ]

genericObjects = [
  new GenericObject({
    x:0,
     y:0,
          image: createImage('./img/background.png'),
    }),
  new GenericObject({
    x:0,
     y:150,
          image: createImage('./img/hills.png'),
    }),
]
 scrollOffset = 0;
}

// ------------->>>>>>>>>MAIN FUNCTION ANIMATE<<<<<<<<<<---------------

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);

  // 16 background and scale save restore
  // c.save();
  // c.scale(4,4) // верхний левый угол img
  // c.translate(0, -background.image.height + scaledCanvas.height)
  // background.update();
  // c.restore();

  // 37 foreach generic
  genericObjects.forEach((generic) => {
    generic.draw();
  })
  // 23
  platforms.forEach((platfom) => {
    platfom.draw();
  })
  player.update();
  // 19 
  // platfom.draw();


  // 11 step by step
  // 21 add && stop player
  // 42==============change integer on speed
  if (keys.d.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } 
  // 48 add || condition
  else if ((keys.a.pressed && player.position.x > 150) || (keys.a.pressed && scrollOffset === 0 && player.position.x > 0)) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    // 22 add move platfom
    // 24 add foreach
    // 28 scroll
    // 38 add generic foreach paralcs effect

    if (keys.d.pressed) {
      scrollOffset += player.speed;

      platforms.forEach((platfom) => {
        platfom.position.x -= player.speed;
      })

      genericObjects.forEach((generic) => {
        generic.position.x -= player.speed * 0.66;
      })
         // 49 add && condition
    } else if (keys.a.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;

      platforms.forEach((platfom) => {
        platfom.position.x += player.speed;
      })

      genericObjects.forEach((generic) => {
        generic.position.x += player.speed * 0.66;
      })

    }
  }
// console.log(scrollOffset)
  // 20 условие для запрыгивания на платформу
  // 25 add foreach
  platforms.forEach((platfom) => {
  if (player.position.y + player.height <= platfom.position.y 
    && player.position.y + player.height + player.velocity.y 
    >= platfom.position.y
    && player.position.x + player.width
    >= platfom.position.x && player.position.x
    && player.position.x
    <= platfom.position.x + platfom.width
    ) {
    player.velocity.y = 0;
  }
});
// winning of last platform
if (scrollOffset > 5000) {
  console.log('yon WIN!!!!!')
}

// 39 losing
// console.log(player.position.y)
if (player.position.y > canvas.height - 55) {
  // console.log('You Lose')
  // 41 init restart game
  init();
}
}

// 44 start game 
init();

animate();

// 6 listen only english alphabet
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'd':
      // 9 add keys
      // console.log('d')
      keys.d.pressed = true;
      //  player.velocity.x = 1
      break;
    case 'a':
      keys.a.pressed = true;
      // player.velocity.x = -1;
      break;
    case 'w':
      // dont repeat button up
      if (player.velocity.y === 0) {
        player.velocity.y = -19;
      }
  }
});

// 10
window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
  }
  // console.log(event);
});
