var ship, shipImage, edges
var seaImage
var sea,edges
function preload(){
seaImage = loadImage("sea.png")
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  

  sea=createSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImage);
  ship.scale =0.25;


}

function draw() {

  background("blue");
 
  


//ship.velocityY = ship.velocityY + 0.5;


//ship.collide(edges[3])
drawSprites();
}