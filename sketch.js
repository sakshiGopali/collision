
var fixedRect,movingRect; 
function setup(){ 
  createCanvas(800,400);
   fixedRect=createSprite(200, 200, 50, 80); 
   fixedRect.shapeColor="green"; 
   movingRect=createSprite(400, 200, 80, 30);
    movingRect.shapeColor="green";
   }
function draw() { 
  background(0,0,0);
  fixedRect.debug =true;
   movingRect.debug =true; 
       //console.log(movingRect.x - fixedRect.x); 
       //console.log(movingRect.width/2 + fixedRect.width/2); 
   movingRect.x= World.mouseX; 
   movingRect.y= World.mouseY; 
   if(movingRect.x -fixedRect.x < movingRect.width/2 + fixedRect.width/2){ 
    fixedRect.shapeColor="red"; 
    movingRect.shapeColor="red";
    } 
    else { fixedRect.shapeColor="green";
      movingRect.shapeColor="green"; } 

   drawSprites();
         }
