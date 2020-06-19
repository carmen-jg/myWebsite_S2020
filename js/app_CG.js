var bubbles = [];
//var w = random(0,255);

function setup() {
    var myCanvas = createCanvas(600,400);
    myCanvas.parent("myContainer");
}

function mousePressed() {
    var r = random(10,40);
    var b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(50);
    
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
        bubbles[i].color();
    }
}


class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
    show() {
        noStroke();
        ellipse(this.x, this.y, this.r * 2);
    }
    
    move() {
        this.x = this.x + random(-2,2);
        this.y = this.y + random(-2,2);
    }
    
    color() {
        fill(random(100,250), random(100,250), random(100,250), random(10,80));
    }
}
// random numbers: declare a variable and set it to a function "random" with two values, min and max
// unique to p5, vanilla javascript is function Math.random() math.floor is dropping decimal