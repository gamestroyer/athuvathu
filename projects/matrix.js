let characters = "abcdefghijklmnopqrstuvwxyzБГДЁЖИЙЛПФЦЧШЩЪЫЭЮЯ";
let letters = [];
let count = 100;
let speed = 2;
let ltrWdth = 15;
let ltrsize = ltrWdth;
let frame = 0;
let trail = 40;


function sketch_matrix(p) {
    p.setup = function () {
        p.createCanvas(p.windowHeight/2, p.windowHeight/2);
    }
    p.draw = function () {
        p.background(0, 0, 0, trail);
        if (letters.length < count) {
            letters.push(new Letter(ltrsize));
        }

        for (let letter of letters) {
            letter.show();
            if (frame % speed == 0) {
            letter.update();
            }
        }
        frame++;
    }
    class Letter {
        constructor(size) {
            this.recreate(size);
        }
        recreate(size) {
            this.ltr = p.random(characters.split("")).toUpperCase();
            this.x = Math.floor(p.random(0, p.width) / ltrWdth) * ltrWdth;
            this.size = size;
            this.y = p.random(-p.width, 0) - size;
        }
        show() {
            p.fill(30, 200, 20);
            p.textSize(this.size);
            p.textFont("Consolas");
            p.text(this.ltr, this.x, this.y);
        }
        update() {
            this.y += ltrsize;
            this.ltr = p.random(characters.split("")).toUpperCase();
            if (this.y - this.size > p.height) {
            this.recreate(this.size);
            }
        }
    }
}

matrix = new p5(sketch_matrix, 'matrix')