function sketch_10print(p) {

    let cells = 30;
    let cellWidth;
    let x = -1;
    let y = -1;

    p.setup = function(){
        p.createCanvas(p.windowHeight/2, p.windowHeight/2);
        cellWidth = p.width / cells;
        p.background('#DB1D00');
        p.frameRate(120);
    }
    p.draw = function () {
        p.stroke('#000000');
        p.strokeWeight(2);
        let odds = p.random(1);
        if (odds < .5) {
            p.line(x * cellWidth, y * cellWidth, (x + 1) * cellWidth, (y + 1) * cellWidth);
        } else {
            p.line((x + 1) * cellWidth, y * cellWidth, x * cellWidth, (y + 1) * cellWidth);
        }
        x++;
        if (x == cells + 1) {
            x = -1;
            y++;
        }
        if (y == cells + 1) {
            p.noLoop();
            p.print("Done");
        }
    }
}

let print10 = new p5(sketch_10print, '10print');