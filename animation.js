const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const numberOfDot = document.getElementById('numberOfDot');

const color = ['#A020F0', '#FFA500', '#FFC0CB']


function randInt(min, max) { //gets a random integer between whatever values you need
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
  }

function randomCoordinateX() {
    minX = 0;
    maxX = canvas.width
    randomX = Math.floor(Math.random() * (maxX - minX));
    return randomX
}
function randomCoordinateY() {
    minY = 0;
    maxY = canvas.height;
    randomY = Math.floor(Math.random() * (maxY - minY));
    return randomY
}
dotCount = []

function drawDots() {
    ctx.fillStyle = color[randInt(0,3)]
    ctx.beginPath();
        // ctx.arc(x, y, radius, start, end)
        randomXCoordinates = randomCoordinateX()
        randomYCoordinates = randomCoordinateY()
        ctx.arc(randomXCoordinates, randomYCoordinates, randInt(1,4), 0, 2 * Math.PI, false);
        dotCount.push(ctx.arc)
        numberOfDot.innerText = dotCount.length 
        ctx.fill();
}
let speed = 100
let gameloop = () => {
    setInterval(drawDots, 1000/speed);
}

gameloop()