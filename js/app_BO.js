// module aliases
var Engine = Matter.Engine, 
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// global variables
var engine, world;
var circles = [];
var boundaries = [];
var ground;

function setup() {
    var myCanvas = createCanvas(800,600);
    myCanvas.parent("myContainer");
    // start physics engine to world object
    engine = Engine.create();
    world = engine.world;
    // new instances of boundary class and push to boundaries array
    boundaries.push(new Boundary(width/3, height - 50, width - 50, 20, 0.1));
    boundaries.push(new Boundary(width/2, height/2, width * 0.4, 20, -0.1));
    boundaries.push(new Boundary(400, 450, 30, 20, -0.3));
    for (var i = 0; i < 4; i++) {
        boundaries.push(new Boundary(random(0, 800), random(0, 600), 50, 20, random(0.3, -0.3)));
    }
}

// pseudocode:
    // class to make circles
    // function called when mouse is dragged:
        // make new circles
        // push them to an array

class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        var options = {
            friction: 0,
            restitution: random(0.85, 1.25)
        }
        
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        console.log(this.body);
    }
    
    show() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(random(1,4));
        stroke(random(50,205));
        noFill();
        ellipse(0,0,this.r * 2);
        pop();
    }
}

class Boundary {
    constructor(x, y, w, h, a) {
        this.w = w;
        this.h = h;
        var options = {
            friction: 0,
            restitution: 0.95,
            angle: a,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    
    show() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke(150);
        noFill();
        rect(0, 0, this.w, this.h);
        pop();
    }
}

function mouseDragged() {
    // make new instances of Circle class and push to circles array
    circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}

function draw(){
    background(5, 0, 25);
    // update engine each frame
    Engine.update(engine);
    
    // for loop to draw circles array to canvas
    for (var i= 0;  i < circles.length; i++) {
        // console.log(circles[i]);
        circles[i].show();
    }
    
    for (var i= 0;  i < boundaries.length; i++) {
        boundaries[i].show();
    }
}