// diclase diffrent variable
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FOOD, enemyGroup,foodgroup,Enemy;
var time=0,land,invisibleland;
var END=0
var PLAY=1
var gamestate=PLAY
var score
// set score=0
score=0;


function preload(){
  
 
//load animation and load image
monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
 
}


function setup() {

  
// create the canves
createCanvas(400,400) 

// create land
land=createSprite(200,390,400,30) 
land.shapeColor=("black");  

// create monkey
monkey=createSprite(50,350,20,20)
monkey.addAnimation('monkey',monkey_running)  
monkey.scale=0.1  ;  

// create invisibleland 
invisibleland=createSprite(200,395,400,30);
invisibleland.shapeColor=("black")  
  
// create food group
foodgroup= new Group()
enemygroup= new Group()

 
}


function draw() {

  
// create background
background("lime")
  
 
// create text as show time, score
text("Survival Time: "+time,130,20) 
text ("score: "+score,300,20)
  

// when gamestate = play 
if (gamestate===PLAY){
monkey.collide(invisibleland);

time = time + Math.round(getFrameRate()/60); 
  
if(keyDown("space")&&monkey.y >= 345){
monkey.velocityY=-10
}            
    
monkey.velocityY=monkey.velocityY+0.4 ;   
   
FOOD()
Enemy()
                                     
if (monkey.isTouching(foodgroup)){
   
score=score+1; 
  
foodgroup.destroyEach( )
           
} 
   
}
  
drawSprites() ;
  
invisibleland.visible=false 
monkey.collide(enemygroup) 
  
  if (monkey . isTouching (enemygroup)){
gamestate=END;
  

}
  

  
 

  
  
  
  
  
  
  
  
  
}



  
  

function FOOD (){
  
if (frameCount%130===0) {
banana=createSprite(500,230,20,20)
banana.velocityX=-7  
banana.addImage(bananaImage)
banana.scale=0.15
banana.collide (land);
banana.lifetime=80 
foodgroup.add(banana)
 
}
   
   
}


function Enemy (){
  
if (frameCount%230===0){
    
obstacle=createSprite(500,350,200,200)   
obstacle.velocityX=-7  
obstacle.addImage(obstaceImage)
obstacle.scale=0.15
obstacle.collide (land);
obstacle.lifetime=80
enemygroup.add(obstacle) 
  
}   
    
}









