 var Surface1,Surface2,Surface3,Surface4,Box;
 var music,edges;
 var msound

function preload(){
 music = loadSound("music.mp3");
 //msound= loadSound("music.mp3")
}

function setup(){
 canvas = createCanvas(770,800);
   
 Surface1 = createSprite(90,790,190,25);
 Surface1.shapeColor="red";

 Surface2 = createSprite(285,790,190,25);
 Surface2.shapeColor="blue";

 Surface3 = createSprite(480,790,190,25);
 Surface3.shapeColor="green";

 Surface4 = createSprite(675,790,190,25);
 Surface4.shapeColor="orange";

 Box = createSprite(450,400,30,30)
 Box.shapeColor="White";
 Box.velocityX=4
 Box.velocityY=5;

}

function draw() {
 background("gray");

 edges=createEdgeSprites();
 Box.bounceOff(edges)


 Box.velocityY = Box.velocityY + 0.5

 if(Surface1.isTouching(Box) && Box.bounceOff(Surface1)){
 Box.shapeColor="red"; 
 music.play();
}

 if(Surface2.isTouching(Box) && Box.bounceOff(Surface2)){
 Box.shapeColor="Blue"; 
music.stop()
}

 if(Box.isTouching(Surface3) && Box.bounceOff(Surface3)){
 Box.shapeColor="green";
 music.play();

}

 if(Surface4.isTouching(Box) && Box.bounceOff(Surface4)){
 Box.shapeColor="orange";
music.stop()
}


 drawSprites();
}