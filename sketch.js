var boy, boyImage;
var bgImg, bg;
var bag, bagImg;

var bag, bagImg,bagsGroup;
function preload(){
  boyImage = loadImage("boy.png");
  bgImg = loadImage("bg.png");

}
function setup() {
  createCanvas(1200, 600);
  bg = createSprite(0, 0, 1200, 400);
  bg.addImage(bgImg);
  
  bg.velocityX = -3;
  boy =  createSprite(100, 300);
  boy.addImage(boyImage);
  boy.scale = 0.3;
  bagsGroup= createGroup();
}

function draw() {
if (bg.x<0){
  bg.x = bg.width/2;
}
boy.y = mouseY;
  
  spawnBags();
  drawSprites();
}


function spawnBags()
{
if (frameCount%100===0){
  bag = createSprite(1100, Math.round(32, 500));
  bag.aaddImage()
}
  
}