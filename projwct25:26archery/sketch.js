var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redB,blueB,greenB,pinkB;
var arrowGroup; 
var playerBase,player;



var score=0;

function preload(){
  
  backgroundImage = loadImage("images/background0.png");
  arrowImage = loadImage("images/arrow0.png");
  bowImage = loadImage("images/bow0.png");
  red_balloonImage = loadImage("images/red_balloon0.png");
  green_balloonImage = loadImage("images/green_balloon0.png");
  pink_balloonImage = loadImage("images/pink_balloon0.png");
  blue_balloonImage = loadImage("images/blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  //creating player object
   playerBase=new PlayerBase(300,random(450,height-300),180,150);
   player=new Player(285,playerBase.body.position.y-153,50,180);

   //creating computerBase and computerPlayer object
   computerBase=new ComputerBase(300, random(450,height-300),180 ,150);
   computerPlayer=new ComputerPlayer(285,computerBase.body.position.y-153,50,180);
   

  //creating groups for balloons
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();

  //creating groups for arrows
  arrowGroup = new Group();
  
   score = 0    
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  

  ComputerBase.display();
    
  drawSprites();
  text("Score: "+ score, 300,50);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
}
