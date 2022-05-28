var bg, bgImg;
var boy, boy1, boy2;
var leaf, leafImg;
var edge;
var leafGroup;
var invisibleBlock;
var invisibleBlockGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  bgImg = loadImage("images/bg.png");
  boy1 = loadImage("images/boy1.png");
  leafImg= loadImage("images/leaf.png");
}

function setup(){
  createCanvas(800,600);
  bg = createSprite(300,300);
  bg.addImage(bgImg);
  bg.scale = 1.8
  
  boy = createSprite(300,100);
  boy.addImage(boy1);
  boy.scale= 0.3;
  boy.debug = true
  
  
  edge = createEdgeSprites();
  
  leafGroup = new Group();
  invisibleBlockGroup = new Group();
}

function draw(){
  background("white");
  if(gameState === PLAY){
  leaves();
  
  if(keyDown("space")){
    boy.velocityY = -5;
  }

  
  boy.velocityY = boy.velocityY+0.5; 
  boy. setCollider("rectangle",0,4,80,140)

  
  if(keyWentDown("right")){
    boy.velocityX = boy.velocityX+5;
  }
  if(keyWentUp("right")){
    boy.velocityX = 0;
  }
  
  if(keyWentDown("left")){
    boy.velocityX = boy.velocityX-5;
  }
  if(keyWentUp("left")){
    boy.velocityX = 0;
  }
  
  boy.bounceOff(edge[0]);
  boy.bounceOff(edge[1]);
  
  drawSprites();
  }
  

}

function leaves(){
  
  if(frameCount%300===0){
    
    leaf = createSprite(200,50,30,30);
    leaf.velocityY = 1; 
    leaf.addImage(leafImg);
    leaf.x =  Math.round(random(130,620));
    leaf.lifetime = 500;
    leafGroup.add(leaf);
    leaf.scale = 0.4
    leaf.debug = true
    leaf. setCollider("rectangle",0,0,200,150)
    
    boy.depth = leaf.depth;
    boy.depth+=1; 
    
    invisibleBlock = createSprite(200,65,130,20);
    invisibleBlock.velocityY = 1; 
    invisibleBlock.y = leaf.y + 40;
    invisibleBlock.x = leaf.x -0;
    invisibleBlock.lifetime = 500;
    invisibleBlockGroup.add(invisibleBlock);
    invisibleBlock.visible = false;
    
  }  
}

