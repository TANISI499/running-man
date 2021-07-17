var path,pathimage;
var boy,boyimage;
var invisibleground1,invisibleground2;


function preload()
{
  pathimage=loadImage("path.png");
  boyimage=loadAnimation("Runner-1.png","Runner-2.png");


}

function setup()
{
  createCanvas(400,400)
  path=createSprite(200,200,50,50);
   path.addImage(pathimage);
   path.scale=1.0;
   path.velocityY=4;
  
   boy=createSprite(200,350,50,30);
   boy.addAnimation("boy",boyimage); 
   boy.scale=0.04;
   




  invisibleground1 = createSprite(80,400,20,400);
  invisibleground1.visible=false;
  
  invisibleground2 = createSprite(330,400,20,400);
  invisibleground2.visible=false;
  
       
}

function draw() 
{

  background("white")
  boy.x=World.mouseX; 
  if(path.y>400)
  {
    path.y=height/2;
  }
  
  boy.collide(invisibleground1);
  boy.collide(invisibleground2);

  drawSprites();
}
  
  


