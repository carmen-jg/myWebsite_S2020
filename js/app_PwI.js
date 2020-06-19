var drawImage, imgWidth, imgHeight;
var flowers = [];

function preload() {
    for (var i = 0; i < 3; i++) {
        flowers[i] = loadImage('img/flower' + i + '.png');
    }
    console.log(flowers);
}

function setup() {
    var myCanvas = createCanvas(800,600);
    myCanvas.parent("myContainer");
    background(50);
    imgWidth = 50;
    imgHeight = 50;
    drawImage = flowers[0];
    document.getElementById("sizeDimension").innerHTML = imgWidth + "px"
}

function draw(){
    
    
//    image(flowers[0], 200, 100, imgWidth, imgHeight);
//    image(flowers[1], 200, 200, imgWidth, imgHeight);
//    image(flowers[2], 200, 300, imgWidth, imgHeight);
}

function changeImage(value) {
    drawImage = flowers[value];
}

function mouseDragged() {
    image(drawImage, mouseX - (imgWidth/2), mouseY - (imgHeight/2), imgWidth, imgHeight);
    // image(url, x, y, w, h)
}

function upSize() {
    imgWidth = imgWidth + 5;
    imgHeight = imgHeight + 5;
    document.getElementById("sizeDimension").innerHTML = imgWidth + "px"
}

function downSize() {
    imgWidth = imgWidth - 5;
    imgHeight = imgHeight - 5;
    document.getElementById("sizeDimension").innerHTML = imgWidth + "px"
}

function clrCanvas() {
    background(50);
}