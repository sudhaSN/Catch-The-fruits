var backgroundImg, truckImgLeft, truckImgRight;
var truckLeft, truckRight;
var score= 0;

function preload(){
  backgroundImg = loadImage("Background.png");
  truckImgLeft = loadImage("truckLeft.png");
  truckImgRight = loadImage("truckRight.png")
}
function setup() {
  createCanvas(1200, 700);
}

function draw() {
  background(backgroundImg);
  drawSprites();
}
