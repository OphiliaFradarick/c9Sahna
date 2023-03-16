var butterfly, butterflyImg;

function preload(){
  butterflyImg = loadImage("butterfly.png");
}

function setup() {
  createCanvas(600,500);

  butterfly = createSprite(280,240);
  butterfly.shapeColor="turquoise";
  butterfly.addImage("blue butterfly",butterflyImg);

}

function draw() {
 background(100);

 drawSprites();
}