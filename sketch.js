//personaje
var zhongli, zhongliImg;
var zhongliRun, zhongliRunImg;
var zhongliJump, zhongliJumpImg;
var zhongliDie, zhongliDieImg;
//fondo
var paisaje;
//extras
var mora, moraImg;
var roca, rocaImg;
var gameState = "play";
//sonido
var jumpSound, collidedSound;

function preload(){
zhongliRunImg = loadAnimation("zhonglichibiwalk.png")
zhongliDieImg = loadImage("zhonglichibilose.png")
paisajeImg = loadImage("paisaje.png")
jumpSound = loadSound("sonidodesalto.mp3")
collidedSound = loadSound("sonidodemuerte.mp3")
rocaImg = loadImage("rocaa.png")
}

function setup() {
createCanvas(600,600);

/*
paisaje = createSprite(300,300);
  paisaje.addImage("paisaje",paisajeImg);
  paisaje.velocityX = 0;
  */
//moraImg = new Group();
//rocaImg = new Group ();

zhongli = createSprite(200,200,50,50);
//zhongli.addImage("zhongliRun", zhongliDieImg);
zhongli.addAnimation("running", qinghuaRun);
  //zhongli.addAnimation("die", zhongliDie);
  //zhongli.setCollider('circle',0,0,350)
  zhongli.scale = 0.08
}

function draw() {
 background(0);
 /*
  if (gameState === "play") {
  
    if((touches.length > 0 || keyDown("SPACE")) && zhongli.y  >= height-120) {
      jumpSound.play( )
      zhongli.velocityY = -10;
       touches = [];
    }
    
    zhongli.velocityY = qinghua.velocityY + 0.8
    
    if(paisajeImg.y > 400){
      paisajeImg.y = 300
    }
    
    if(rocaImgGroup.isTouching(zhongli) || zhongli.y > 600){
      zhongli.destroy();
      gameState = "end"
    }
    

  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Se murio Zhongli ):", 230,250)
  }
  */
  drawSprites();
}