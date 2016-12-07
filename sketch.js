var phase = 0;
var itemsTotal=15;
var ans = false;
var displayAns = false;
var ready = false;
var scoreFont;
var score=0
var wasteType=0;

var startpic;
var compost;
var recycle;
var trash;
var go;
var next;

var alcan;
var alcanW;
var ffbox;
var ffboxW;
var apple;
var appleW;
var bn;
var bnW;
var bbf;
var bbfW;
var cb;
var cbW;
var cs;
var csW;
var ecc;
var eccW;
var glass;
var glassW;
var npc;
var npcW;
var pc;
var pcW;
var pizza;
var pizzaW;
var plasticBag;
var plasticBagW;
var plasticBottle;
var plasticBottleW;
var wrapper;
var wrapperW;

function preload(){
  scoreFont = loadFont('coolvetica rg.ttf');
  startpic = loadImage("title.png");
  compost = loadImage("compost-bin.png");
  recycle = loadImage("recycling-bin.png");
  trash = loadImage("trash-bin.png");
  go = loadImage("go.png");
  alcan = loadImage("aluminum-can.png");
  alcanW = loadImage("alcan-word.png");
  next = loadImage("next.png");
  ffbox = loadImage("ffbox.png");
  ffboxW = loadImage("ffboxW.png");
  apple = loadImage("apple.png");
  appleW = loadImage("appleW.png");
  bn = loadImage("bathroom-napkin.png");
  bnW = loadImage("bathroom-napkinW.png");
  bbf = loadImage("bio-based-fork.png");
  bbfW = loadImage("bio-based-forkW.png");
  cb = loadImage("chip-bag.png");
  cbW = loadImage("chip-bagW.png");
  cs = loadImage("coffee-stirer.png");
  csW = loadImage("coffee-stirerW.png");
  ecc = loadImage("earth-choice-cup.png");
  eccW = loadImage("earth-choice-cupW.png");
  glass = loadImage("glass.png");
  glassW = loadImage("glassW.png");
  npc = loadImage("noncompostable-paper-cup.png");
  npcW = loadImage("noncompostable-paper-cupW.png");
  pc = loadImage("pekoe-cup.png");
  pcW = loadImage("pekoe-cupW.png");
  pizza = loadImage("pizza.png");
  pizzaW = loadImage("pizzaW.png");
  plasticBag = loadImage("plastic-bag.png");
  plasticBagW = loadImage("plastic-bagW.png");
  plasticBottle = loadImage("plastic-bottle.png");
  plasticBottleW = loadImage("plastic-bottleW.png");
  wrapper = loadImage("wrapper.png");
  wrapperW = loadImage("wrapperW.png");
}

function setup(){
  createCanvas(1265,600);
  background(242,231,118);
}

function draw(){
  if (phase ===0){
    Start();
  }if(phase ===1){
    Instructions();
  }if (phase ===2){
    Alcan();
  }if (phase ===3){
    FFbox();
  }if (phase ===4){
    Apple();
  }if (phase ===5){
    PlasticBag();
  }if (phase ===6){
    BathroomNapkin();
  }if (phase ===7){
    PlasticBottle();
  }if (phase ===8){
    Pizza();
  }if (phase ===9){
    NPC();
  }if (phase ===10){
    CoffeeStirer();
  }if (phase ===11){
    Glass();
  }if (phase ===12){
    BBF();
  }if (phase ===13){
    PekoeCup();
  }if (phase ===14){
    Wrapper();
  }if (phase ===15){
    ECC();
  }if (phase ===16){
    ChipBag();
  }if (phase ===17){
    End();
  }if (displayAns === true && ans === false){
    Wrong();
  }if(displayAns === true && ans === true){
    Right();
  }console.log("phase: " + phase);
}

function Start(){
  image(startpic,50,0,1200,600);
  if(keyIsDown(RIGHT_ARROW) || (mouseIsPressed && mouseX >= 425 && mouseX <= 887 && mouseY >= 422 && mouseY <= 517) || (touchX >= 425 && touchX <= 887 && touchY >= 422 && touchY <= 517) ){
    phase++;
    console.log("Right Arrow");
  }
}

function Instructions(){
  background(242,231,118);
  image(next,950,350,400,200);
  if((mouseIsPressed && mouseX >= 950 && mouseX<= 1350 && mouseY >= 350 && mouseY <= 550) || (touchX >= 950 && touchX<= 1350 && touchY >= 350 && touchY <= 550) || keyIsDown(RIGHT_ARROW)){
    phase++; 
  }
  fill('black');
  textFont(scoreFont);
  textSize(72);
  text("The Zero Waste Game",295, 150);
  textSize(36);
  text("Place the waste item into the correct container. ",270, 225);
  // text('by clicking on it then bump it into the container.', 270, 265);
  // text('Use the up key to move up and the down key to move down.', 180, 305);
  text('Remember to Reuse, Reduce, & Recycle.', 365, 270);
  textSize(24);
  text('Whenever you see a button with an arrow you may click on it or press the right arrow key.', 200, 315);
}

function Alcan(){
  wasteItem=1;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(alcanW, 300, 50, 600, 100);
  if(keyIsDown(RIGHT_ARROW) || (mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) ){
    ready = true;
    console.log("Right Arrow");
  }
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(alcan, mouseX, mouseY, 60, 140);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function FFbox(){
  wasteItem=2;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(ffboxW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(ffbox, mouseX, mouseY, 140, 140);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function Apple(){
  wasteItem=3;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(appleW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(apple, mouseX, mouseY, 140,140);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function BathroomNapkin(){
  wasteItem=5;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(bnW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) ||(touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(bn, mouseX, mouseY,140, 140);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function BBF(){
  wasteItem=11;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(bbfW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(bbf, mouseX, mouseY, 230, 70);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function ChipBag(){
  wasteItem=15;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(cbW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(cb, mouseX, mouseY, 140, 140);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function CoffeeStirer(){
  wasteItem=9;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(csW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(cs, mouseX, mouseY, 14, 140);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function ECC(){
  wasteItem=14;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(eccW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(ecc, mouseX, mouseY, 140, 140);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function Glass(){
  wasteItem=10;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(glassW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(glass, mouseX, mouseY, 90, 140);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function NPC(){
  wasteItem=8;
  background(242,231,118);
  image(go, 500, 240, 200, 100);
  image(npcW, 300, 5, 600, 250);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 240 && mouseY <= 340) || (touchX >=500 & touchX <=700 && touchY >= 240 && touchY <= 340) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,360,200,230 );
    image(recycle, 500, 360, 200, 230);
    image(trash, 800, 360, 200, 230);
    image(npc, mouseX, mouseY, 90, 140);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 360 && mouseY <= 590 || (touchX >= 200 && touchX<= 400 && touchY >= 360 && touchY <= 590)){//compost
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 360 && mouseY <= 590 || (touchX >= 500 && touchX<= 700 && touchY >= 360 && touchY <= 590) ){//trash
      displayAns = true;
      ans = false;
    }
    
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 360 && mouseY <= 590 || (touchX >= 800 && touchX<= 1000 && touchY >= 360 && touchY <= 590) ){//recycling
      displayAns = true;
      ans = true;
      score++;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function PekoeCup(){
  wasteItem=12;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(pcW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(pc, mouseX, mouseY, 90, 140);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function Pizza(){
  wasteItem=7;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(pizzaW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(pizza, mouseX, mouseY, 260, 100);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function PlasticBag(){
  wasteItem=4;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(plasticBagW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(plasticBag, mouseX, mouseY, 90, 70);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function PlasticBottle(){
  wasteItem=6;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(plasticBottleW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(plasticBottle, mouseX, mouseY, 60, 180);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function Wrapper(){
  wasteItem=13;
  background(242,231,118);
  image(go, 500, 170, 200, 100);
  image(wrapperW, 300, 50, 600, 100);
  if((mouseIsPressed && mouseX >=500 & mouseX <=700 && mouseY >= 170 && mouseY <= 270) || (touchX >=500 & touchX <=700 && touchY >= 170 && touchY <= 270) || keyIsDown(RIGHT_ARROW)) ready = true;
  if(ready === true){
    image(compost,200,300,200,230 );
    image(recycle, 500, 300, 200, 230);
    image(trash, 800, 300, 200, 230);
    image(wrapper, mouseX, mouseY, 140, 70);
    noCursor();
  }
  if((mouseIsPressed || touchIsDown) && ready === true){
    if(mouseX >= 200 && mouseX<= 400 && mouseY >= 300 && mouseY <= 530 || (touchX >= 200 && touchX<= 400 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 500 && mouseX<= 700 && mouseY >= 300 && mouseY <= 530 || (touchX >= 500 && touchX<= 700 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = false;
    }
    if(mouseX >= 800 && mouseX<= 1000 && mouseY >= 300 && mouseY <= 530 || (touchX >= 800 && touchX<= 1000 && touchY >= 300 && touchY <= 530) ){
      displayAns = true;
      ans = true;
      score++;
    }
  }
  fill('black');
  textFont(scoreFont);
  textSize(36);
  text('Score: ' + score, 5, 50);
}

function End(){
  background(242,231,118);
  fill('black');
  textFont(scoreFont);
  textSize(48);
  text('Your final score is ' + score + '/' + itemsTotal + '.',420, 250);
  text('Thanks for playing The Zero Waste Game!',250, 300);
  text('Recycle & Compost Responsibly.', 340, 350);
}

function Wrong(){
  cursor(HAND);
  background("red");
  ready = false;
  image(next,950,350,400,200);
  fill('black');
  textFont(scoreFont);
  textSize(72);
  text("Oops! That doesn't go there.",200, 200);
  if(wasteItem===1){
    text("Aluminum is recyclable!",200, 260); 
    text('Better luck next time.', 200, 325); 
  }
  if(wasteItem===2){
    textSize(36);
    text("Frozen food boxes have a plastic coating to prevent freezer burn.",120, 260); 
    text("The plastic makes it nonrecyclable; it's trash.", 120, 325); 
  }
  if(wasteItem===3){
    text("Fruit is an organic material.",200, 260); 
    text("That is compostable.", 200, 325); 
  }
  if(wasteItem===4){
    textSize(48);
    text("In most recycling centers plastic bags are trash.",120, 260); 
    text("Although some special recycling centers do accept it.", 120, 325); 
  }
  if(wasteItem===5){
    textSize(48);
    text("Napkins are made from trees which are organic.",170, 260); 
    text("That is compostable.", 170, 325); 
  }
  if(wasteItem===6){
    textSize(36);
    text("Plastic bottles are recyclable unless they are made from PLA.",170, 260); 
    text("Better luck next time.", 170, 325); 
  }
  if(wasteItem===7){
    text("Pizza is food.",200, 260); 
    text("All food is compostable.", 200, 325); 
  }
  if(wasteItem===8){
    textSize(36);
    text("Noncompostable paper cups have a plastic lining that cause them to be trash.",40, 260); 
    text("Read your cup! If it doesn't say compostable it is trash.", 220, 325); 
  }
  if(wasteItem===9){
    textSize(48);
    text("A wooden coffee stirer is made from a tree.",200, 260); 
    text("That is organic and compostable.", 200, 325); 
  }
  if(wasteItem===10){
    text("Glass is recyclable.",200, 260); 
    text("Better luck next time.", 200, 325); 
  }
  if(wasteItem===11){
    textSize(36);
    text("When an item is labeled bio-based that means it is biodegradable.",170, 260); 
    text("That is organic and compostable.", 170, 325); 
  }
  if(wasteItem===12){
    textSize(48);
    text("The Pekoe cup is labeled as a #1 plastic.",200, 260); 
    text("That is recyclable.", 200, 325); 
  }
  if(wasteItem===13){
    text("Most wrappers are trash.",200, 260); 
    text("Better luck next time.", 200, 325); 
  }
  if(wasteItem===14){
    textSize(48);
    text("Earth Choice items are compostable.",200, 260); 
    text("They cycle through the Earth's ecosystems.", 200, 325); 
  }
  if(wasteItem===15){
    text("Chip bags are trash.",200, 260); 
    text("Better luck next time.", 200, 325); 
  }
  if((mouseIsPressed && mouseX >= 950 && mouseX<= 1350 && mouseY >= 350 && mouseY <= 550) || keyIsDown(RIGHT_ARROW) || (touchIsDown && touchX >= 950 && touchX<= 1350 && touchY >= 350 && touchY <= 550)){
    displayAns = false;
    phase++; 
  }
}

function Right(){
  cursor(HAND);
  background('green');
  ready = false;
  image(next,950,350,400,200);
  fill('black');
  textFont(scoreFont);
  textSize(72);
  text("Yaasss!",418, 200);
  text("Great job!",420, 260);
  text('Keep it up.', 420, 325);
  if((mouseIsPressed && mouseX >= 950 && mouseX<= 1350 && mouseY >= 350 && mouseY <= 550) || keyIsDown(RIGHT_ARROW) || (touchIsDown && touchX >= 950 && touchX<= 1350 && touchY >= 350 && touchY <= 550)){
    displayAns = false;
    phase++; 
  }
}
