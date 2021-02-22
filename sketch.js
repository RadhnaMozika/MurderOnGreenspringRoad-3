var player, panel;
var bgImg, layout;
var choice, answer, endImg, choiceBG;
var pattersonImg, pabstImg, harwImg, hegannImg, cameronImg, iraImg;

var gameState = 1;

function preload()
{

  bgImg = loadImage("images/Greenspring-Dawnice.png");

  endImg = loadImage("images/end.jpg");

  choiceBG = loadImage("images/choiceBG.jpg");

  harwImg = loadImage("images/DennisHarw.png");
  pattersonImg = loadImage("images/VernePatterson.png");
  pabstImg = loadImage("images/JonathonPabst.png");
  hegannImg = loadImage("images/KatherineHegann.png");
  cameronImg = loadImage("images/LaverneCameron.png");
  iraImg = loadImage("images/Ira.png");
	
}

function setup() {
  createCanvas(1350, 650);
  
  player = new Player();
  panel = new Panel();
  layout = new Layout();

  choice = new Choice();
	
}


function draw() {
  background(0);

  

  console.log("X "+player.body.x);
  console.log("Y "+player.body.y);


  if(gameState === 1){  
  
  image(bgImg, 0, 0, 10000, 10000);

  player.move();
  panel.movement();
  panel.write();

  layout.Deeplagoon();

  
  drawSprites();

  if(player.body.isTouching(panel.laverneCameron)){
    panel.laverne_Account();
  }

  if(player.body.isTouching(panel.jonathonPabst)){
    panel.jonathon_Account();
  }

  if(player.body.isTouching(panel.vernePatterson)){
    panel.verne_Account();
  }

  if(player.body.isTouching(panel.katherineMiriumHegann)){
    panel.katherine_Account();
  }

  if(player.body.isTouching(panel.dennisHarw)){
    panel.dennis_Account();
  }
  if(player.body.isTouching(panel.police)){
    panel.police_Account();
  }
  
  if(player.body.isTouching(panel.byStander1)){
    panel.Account1();
   }
   if(player.body.isTouching(panel.byStander2)){
    panel.Account2();
   }
    if(player.body.isTouching(panel.byStander3)){
    panel.Account3();
   }
   if(player.body.isTouching(panel.byStander4)){
    panel.Account4();
   }
   if(player.body.isTouching(panel.byStander5)){
    panel.Account5();
   }
   if(player.body.isTouching(panel.bert)){
    panel.bert_Account();
   }

   if(player.body.isTouching(player.earring1)){
    panel.earring1_Account();
   }
   if(player.body.isTouching(player.earring2)){
    panel.earring2_Account();
   }
   if(player.body.isTouching(player.scalpel)){
    panel.scalpel_Account();
   }

   if(player.body.isTouching(player.fireRemains)){
    panel.fire_Account();

    if(keyDown("enter")){
      gameState = 2;
    }  
  }
}

  console.log(answer);
  console.log("gamestate "+gameState)

  

   if(gameState === 2){
     background(choiceBG);
     camera.x = width/2;
     camera.y = height/2;

     choice.answer();

    drawSprites();
   }
   

     textFont("Garamond");
     fill(0);
     textSize(60)
     
   if(gameState === 3){
     background(endImg);
     choice.remove();
     text("YOU  WIN", 520,320)
   }

   if(gameState === 4){
    background(endImg);
     choice.remove();

     
     
    text("YOU  LOSE", 500, 320);
    if(answer === 2){
      textSize(30);
      text("Verne Patterson was not the killer", 450, 350);
    }
    else if(answer === 3){
      textSize(30);
      text("Katherine Mirium Heganns was suspicious, but she was not the killer", 230, 350);
    }
  }



}
   