var fixedRect,movingRect;

function setup() {
  createCanvas(400,400);

  fixedRect = createSprite(350, 200, 50, 80);
  fixedRect.shapeColor = "pink";
  fixedRect.velocityX = -2;

  movingRect = createSprite(20,200,90,30);
  movingRect.shapeColor = "pink";
  movingRect.velocityX = 2;
}


function draw() {
  background(0);
  
  /*movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink"
  }*/

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
    {
      movingRect.velocityX = movingRect.velocityX*(-1);
      fixedRect.velocityX = fixedRect.velocityX*(-1);
    }
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
    {
      movingRect.velocityY = movingRect.velocityY*(-1);
      fixedRect.velocityY = fixedRect.velocityY*(-1);
    }

  console.log(movingRect.x - fixedRect.x);

  drawSprites();
}