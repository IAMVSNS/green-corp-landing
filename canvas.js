COLORS[Math.floor(Math.random() * (COLORS.length - 1))];
// инициализировать начальную позицию пузырька,
// его размер, скорость движения вверх, прозрачность цвета.
// Мы использует функцию Math.random, чтобы получить число в промежутке от left до right,
// а затем с помощью метода toFixed(2) мы оставляем от числа два знака после запятой.

const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];
const BUBBLE_DENSITY = 100; // Количество пузырьков

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

// Метод getCanvasSize будет как раз вытаскивать из холста его размеры и сохранять в переменные внутри класса Bubble.
    getCanvasSize() {
        // нужны нам для расчета положения точки на холсте
        this.canvasWidth = this.canvas.clientWidth;
        this.canvasHeigth = this.canvas.clientHeigth;
    }

// Метод init будет инициализировать пузырек:
    init() {
        // В методе init нужно инициализировать цвет пузырька одним из случайных цветов.
        this.color;
        this.size = generateDecimalBetween(1, 3);
        this.alpha = generateDecimalBetween(5, 10) / 10;
        this.translateX = generateDecimalBetween(0, this.canvasWidth);
        this.translateY = generateDecimalBetween(0, this.canvasHeigth);
        // Далее свойcтва направления и скорости движения.
        this.velocity - generateDecimalBetween(20, 40); // Значение скорости
        this.movementX = generateDecimalBetween(-2, 2) / this.velocity; // Движение по горизонтали
        this.movementY = generateDecimalBetween(1, 20) / this.velocity; // Движение по вертикали
    }

// метод move будет пересчитывать положение пузырька на холсте, так как фигуры должны двигаться вверх.
    move() {
        this.translateX = this.translateX - this.movementY;
        this.translateY = this.translateY - this.movementY;

        // Уменьшаем координаты x, y.
        // Мы проверяем, что значения опустились ниже 0 в координатах или
        // вышли за горизонтальные границы, и, если это так, заново инициализируем данные.
        if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth) {
            this.init();
            this.translateY = this.canvasHeigth;
        }

        const canvas = document.getElementById("orb-canvas");

        const bubbles = [];
        bubbles.push(new bubbles(canvas));
        bubbles.push(new bubbles(canvas));
        bubbles.push(new bubbles(canvas));

        console.log(bubbles);
    }
}

class CanvasBackground {
    constructor(id) { // id - атрибут тега хоста
        this.canvas = document.getElementById("id");
        this.ctx = canvas.getContext("2d");
        this.dpr = window.devicePixelRatio;
    }

    start() { // Метод start запустит анимацию:
        // подстроит размеры холста, создаст пузырьки и анимирует их.
        this.canvasSize(); // Выставляем ширину и высоту холста, настраиваем масштаб.
        this.generateBubbles(); // Генерация пузырьков
        this.animate(); // Запуск анимации.
    }

    canvasSize() {
        this.canvas.width = this.canvas.offsetWidth * this.dpr;
        this.canvas.heigth = this.canvas.offsetHeight * this.dpr;
        this.ctx.scale; // Проектное задание 7.9 ???? Не понял, верно написал?
        
    }

// generateBubbles будет создавать массив пузырьков
    generateBubbles() { // Проектное задание 7.10 ???? Не понял
        this.bubblesList = [];

    }
// Происходит отчистка холста
    animate() {
        this.ctx.clearRect;
        this.clientWidth = 0;
        this.clientHeigth = 0;

        // Перемещение пузырьков, вычисление новой позиции
        this.bubblesList.forEach((bubble) => {
            bubble.move();
            this.ctx.translate(bubble.translateX, bubble.translateY);
            this.ctx.beginPath();
            this.ctx.arc = (0, 0, bubble.size);
            this.ctx.fillStyle = rgba(0,0,0,1);
            this.ctx.fill();
            this.ctx.setTransform("Здесь что-то должно быть"); // Проектное задание 7.13. Как указать масштабирование????
        });
    }

}
