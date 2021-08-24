var box;
var edges;

function setup() {
  createCanvas(400, 400);
  //create a trex sprite
  box = createSprite(200, 200, 20, 20);
  box.shapeColor = "red";

  box.velocityX = -2;
  box.velocityY = 2;
  edges = createEdgeSprites();
}

function draw() {
  background("white");
  box.bounceOff(edges);
  drawSprites();
}
