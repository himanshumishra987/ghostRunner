var climberimg , towerimg , doorimg , ghostimg;
var ghost,tower;
var gamestate="play";
var doorGroup ,climberGroup,invisibleblockGroup;
function preload(){
climberimg=loadImage("climber.png")
towerimg=loadImage("tower.png") 
doorimg=loadImage("door.png")
ghostimg=loadImage("ghost-standing.png")
}
function setup(){
createCanvas(600,600);  
  tower=createSprite(300,300);
  tower.addImage(towerimg);
  tower.velocityY=1
  
  ghost=createSprite(300,300,50,50);
  ghost.addImage(ghostimg);
  ghost.scale=0.5;
  
  doorGroup=new Group()
  climberGroup=new Group()
  invisibleblockGroup=new Group()
}
function draw(){
  background("black");
  if(gamestate=="play"){
     if(keyDown("left_arrow")){
   ghost.x=ghost.x-3
 }
 if(keyDown("right_arrow")){
   ghost.x=ghost.x+3
 }
 if(keyDown("space")){
ghost.velocityY=-10;
 }
 ghost.velocityY=ghost.velocityY+0.5;
 if(tower.y>400){
   tower.y=300
 }
 if(climberGroup.isTouching(ghost)){
   ghost.velocityY=0;
 }
 if(invisibleblockGroup.isTouching(ghost)){
   ghost.destroy()
 gamestate="END"}
              
 
 
 
  
  
  
  
  
 spawndoors() ;
  
  
  
  drawSprites();
  }
  if(gamestate=="END"){
    textSize(30);
    text("gameOver",300,300);                                                          
  }

}

function spawndoors(){
  if(frameCount%240==0){
   
  
  var door =createSprite(200,50);
  door.addImage(doorimg);
  door.velocityY=1;
  var climber=createSprite(200,110);
  climber.addImage(climberimg);
  climber.velocityY=1;
    door.x=Math.round(random(120,400));
    ghost.depth=door.depth;
    ghost.depth+=1;
    climber.x = door.x;
    door.lifetime=600;
    climber.lifetime=600;
    doorGroup.add(door);
    climberGroup.add(climber);
    
    var invisibleblock=createSprite(200,115);
    invisibleblock.velocityY=1;
    invisibleblock.width=climber.width;
    invisibleblock.height=2;
    invisibleblock.x=climber.x;
    invisibleblock.lifetime=600;
    invisibleblockGroup.add(invisibleblock);
    invisibleblock.debug=true;
}}














