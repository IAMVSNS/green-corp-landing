const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];
const BUBBLE_DENSITY = 100; // Количество пузырьков

// инициализировать начальную позицию пузырька,
// его размер, скорость движения вверх, прозрачность цвета.
// Мы использует функцию Math.random, чтобы получить число в промежутке от left до right,
// а затем с помощью метода toFixed(2) мы оставляем от числа два знака после запятой.

function generateDecimalBetween(left, right) {
   return (Math.random() * (left - right) + right).toFixed(2);
}

class Bubble {
    // Конструктор принимает аргумент canvas, это будет html-элемент canvas
   constructor(canvas) {
       this.canvas = canvas;
       this.getCanvasSize();
       this.init();
   }

   // Метод getCanvasSize будет как раз вытаскивать
   // из холста его размеры и сохранять в переменные внутри класса Bubble.
   getCanvasSize() {
       this.canvasWidth = this.canvas.clientWidth;
       this.canvasHeight = this.canvas.clientHeight;
   }

   // Метод init будет инициализировать пузырек:
   init() {
    // В методе init нужно инициализировать цвет пузырька одним из случайных цветов.
       this.color = COLORS[Math.floor(Math.random() * COLORS.length)]; // проектного задания 7.4
       this.alpha = generateDecimalBetween(5, 10) / 10;                 // проектного задания 7.5.
       this.size = generateDecimalBetween(1, 3);                        // проектного задания 7.5.
       this.translateX = generateDecimalBetween(0, this.canvasWidth);   // проектного задания 7.5.
       this.translateY = generateDecimalBetween(0, this.canvasHeight);  // проектного задания 7.5.
       this.velocity = generateDecimalBetween(20, 40);  // Значение скорости
       this.movementX = generateDecimalBetween(-2, 2) / this.velocity;  // Движение по горизонтали
       this.movementY = generateDecimalBetween(1, 20) / this.velocity;  // Движение по вертикали
   }

    // метод move будет пересчитывать положение пузырька на холсте, так как фигуры должны двигаться вверх.
   move() {
       this.translateX = this.translateX - this.movementX;
       this.translateY = this.translateY - this.movementY;

        // Уменьшаем координаты x, y.
        // Мы проверяем, что значения опустились ниже 0 в координатах или
        // вышли за горизонтальные границы, и, если это так, заново инициализируем данные.
       if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth) {
           this.init();
           this.translateY = this.canvasHeight;
       }
   }
}

class CanvasBackground {
   constructor(id) {    // id - атрибут тега хоста
       this.canvas = document.getElementById(id);   // проектного задания 7.7
       this.ctx = this.canvas.getContext("2d");
       this.dpr = window.devicePixelRatio;
   }

   start() {    // Метод start запустит анимацию:
                // подстроит размеры холста, создаст пузырьки и анимирует их.
       this.canvasSize();       // Выставляем ширину и высоту холста, настраиваем масштаб.
       this.generateBubbles();  // Генерация пузырьков
       this.animate();          // Запуск анимации.
   }

   canvasSize() {       // проектного задания 7.8.
       this.canvas.width = this.canvas.offsetWidth * this.dpr;
       this.canvas.height = this.canvas.offsetHeight * this.dpr;
       this.ctx.scale(this.dpr, this.dpr);      // Проектное задание 7.9
   }
   // Происходит отчистка холста
   animate() {
       this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
        // Метод clearRect принимает на вход координаты левого
        // верхнего угла прямоугольника (0,0) и ширину и высоту прямоугольника.

        // Перемещение пузырьков, вычисление новой позиции
       this.bubblesList.forEach((bubble) => {
           bubble.move();
           this.ctx.translate(bubble.translateX, bubble.translateY);
           this.ctx.beginPath();
           this.ctx.arc(0, 0, bubble.size, 0, 2 * Math.PI);

           // Как это получилось? проектне задания 7.13. пункт 3
           this.ctx.fillStyle = "rgba(" + bubble.color + "," + bubble.alpha + ")";

           this.ctx.fill();

           // Проектное задание 7.13. Как правильно указать масштабирование????
           this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
       });

       requestAnimationFrame(this.animate.bind(this));  // Запуск анимации
   }

    // generateBubbles будет создавать массив пузырьков
   generateBubbles() {
       this.bubblesList = [];
       for (let i = 0; i < BUBBLE_DENSITY; i++) {
           this.bubblesList.push(new Bubble(this.canvas))
       }
   }
}

const canvas = new CanvasBackground("orb-canvas");
canvas.start();
