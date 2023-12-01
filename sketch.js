
let radius = 10;
let cells = [];
let speed = 5;
let gridWidth;
let gridHeight;

let fontSize = 48;

function setup() {
    createCanvas(windowWidth, windowHeight * 0.93);
    gridWidth = int(width / (radius * 2));
    gridHeight = int(height / (radius * 2));

    createGrid(gridWidth, gridHeight, radius);

    stroke(255);
    angleMode(DEGREES);
}

function draw() {
    background(10, 20, 35);
    show();
    step();
    nameDisplay();
}

function nameDisplay() {
    fill(255);
    strokeWeight(0.5);
    textSize(fontSize);
    textAlign(CENTER);
    text('Atharva Gupta', width / 2, height / 2);
    textSize(fontSize/3)
    text('professional dumbass', width / 2, (height+ fontSize)/2);
}


class Cell{
    constructor(x, y, rad) {
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.ang = 0;
        this.newAng = 0;
    }
    draw() {
        let coordx = this.x * this.rad * 2 + this.rad;
        let coordy = this.y * this.rad * 2 + this.rad;

        line(coordx, coordy, coordx + this.rad * cos(this.ang), coordy + this.rad * sin(this.ang));
        stroke(255, 100);
    }
    update() {
        let neighbours = findNeighbours(this);
        let sum = 0;
        for (let i = 0; i < neighbours.length; i++) {
            sum += neighbours[i].ang;
        }
        this.newAng = sum / neighbours.length;
    }
    actuallyUpdate() {
        this.ang = this.newAng;
    }
}

class RogueCell extends Cell {
    constructor(x, y, rad, speed) {
        super(x, y, rad);
        this.speed = speed;
    }
    draw() {
        stroke(200, 0, 0);
        super.draw();
    }
    update() {
        this.ang += this.speed;
        //this.ang = this.ang % 360;
    }
    actuallyUpdate() {
        this.ang = this.ang;
    }
}

function show() {
    strokeWeight(1);
    for (let i = 0; i < cells.length; i++) {
        cells[i].draw();
    }
}

function step() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].update();
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].actuallyUpdate();
    }
}

function createGrid(x, y, r) {
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (random(1) > 0.01) {
                cells.push(new Cell(j, i, r));
            } else {
                cells.push(new RogueCell(j, i, r, speed));
            }
        }
    }
    let index = int(random(x * y - 1))
    cells[index] = new RogueCell(index%x, int(index/x), r, speed);
}

function findNeighbours(circle) {
    let neighbours = [];
    for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
            if (x == 0 && y == 0) {
                continue;
            }
            neigX = circle.x + x;
            neigY = circle.y + y;
            if (neigX < gridWidth && neigY < gridHeight && neigX >= 0 && neigY >= 0) {
                neighbours.push(cells[neigX + (neigY * gridWidth)]);
            }
        }
    }
    return neighbours;
}
