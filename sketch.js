var canvas;
var music;
var redSurface,blueSurface,greenSurface,yellowSurface;
var box,topEdge,bottomEdge,rightEdge,leftEdge;

function preload()
 {
    music = loadSound("music.mp3");
 }

function setup(){
    canvas = createCanvas(800,600);

    topEdge= createSprite(400,1, 800, 10);
    topEdge.visible=false
    bottomEdge= createSprite(400,599, 800, 10);
    bottomEdge.visible=false
    rightEdge= createSprite(799,300,10, 600);
    rightEdge.visible=false
    leftEdge= createSprite(1,300, 10, 600);
    leftEdge.visible=false

    //create 4 different surfaces
    redSurface= createSprite(100,560, 160, 30);
    redSurface.shapeColor="red"

    greenSurface= createSprite(300,560, 160, 30);
    greenSurface.shapeColor="green"

    blueSurface= createSprite(500,560, 160, 30);
    blueSurface.shapeColor="blue"

    yellowSurface= createSprite(700,560, 160, 30);
    yellowSurface.shapeColor="yellow"

    //create box sprite and give velocity
    box=createSprite(random(20,750),50,60,60)
    box.shapeColor="white"
    box.velocityY=5
    box.velocityX=5
}

function draw() {
    background(0);

    // add  a condition to bounce off the touching surface and edges 
    createEdgeSprites()
    box.bounceOff(topEdge)
    box.bounceOff(bottomEdge)
    box.bounceOff(rightEdge)
    box.bounceOff(leftEdge)

    //add condition to check if box touching surface and make it box
    
    if (isTouching(redSurface,box)&&box.bounceOff(redSurface)){
        box.shapeColor="red"
        music.play();
    }

    if (isTouching(greenSurface,box) &&  box.bounceOff(greenSurface)){
        box.shapeColor="green"
    }

    if (isTouching(blueSurface,box) &&  box.bounceOff(blueSurface)){
        box.shapeColor="blue"
    }

    if (isTouching(yellowSurface,box) &&  box.bounceOff(yellowSurface)){
        box.shapeColor="yellow"
        box.velocityX=0
        box.velocityY=0
        music.stop();
    }
    
    drawSprites();
}
function isTouching(o1,o2){

    if(o1.x-o2.x < o2.width/2 + o1.width/2 &&
      o2.x-o1.x < o1.width/2 + o2.width/2 &&
      o1.y-o2.y < o2.height/2 + o1.height/2 &&
      o2.y-o1.y < o1.height/2 + o2.height/2)
      {
        return true
      }
   else
      {
     return false
      }
  }

  
  
   