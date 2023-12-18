let wind;
let snow;
let snows = [];//array of snow flakes
let snowNum = 500; // amount of snow flakes
let count =0;
let speed = 0.01
let speed2 = 8;

var hair=1000;
var xof=0.0;//noise of hairs

//initial positions of the standing puppet
var bhairX=-130;
var bhairY=-15;
var bheadX=-130;
var bheadY=-15;
var bbodyX=-130;
var bbodyY=-15;
var blegX=-130;
var blegY=50;

let aniw=15;
let fan = 0;

//colors
let r = 253;
let g = 250;
let b = 236 ;

function setup() {
  createCanvas(390, 390);
  snow = new Snow();
  for (let i = 0; i < snowNum; i++) {
    let snow = new Snow();
    snows.push(snow);
  }
  //white Noise sounds like a fan
  wind = new p5.Noise('white');
  wind.amp(0);   
}

function draw() { 
  background(r,g,b,50);
  //83 = 's' , snow sky
  if(keyIsPressed&&keyCode==83){
    if(r>=157){
      r -= 1;
    }
    if(g >=150){
      g -=1;
    }
   if(b  >=147){
      b  -=1;
    }       
  }
  else{
    if(r <=253){
      r += 1;
    }
    if(g <=250){
      g +=1;
    }
    if(b<=236){
      b  +=1;
    }    
  }
  //rotate the canvas
  if(keyIsPressed&&keyCode==82){
    translate(width,0);
    rotate(HALF_PI );
    
    //light puppet's dress
    fill(217,187,91);
    rect(260,210,130,130);
    
  }
  //starting animation
  for(let angle_1 = 4; angle_1 < 270 ; angle_1 +=15){
     noFill();
     stroke(20);
     arc(390+bhairX, 80+bhairY, angle_1, hair, PI, PI+HALF_PI);
    // f is pressed
    if(keyIsPressed&&keyCode==70){
    xof+=0.5;
    hair = noise(xof)*300
  }
  else{
    hair=angle_1;
  }
    
    
  }
  fill(38,91,100);
  noStroke();
  arc(325+bheadX, 80+bheadY, 130, 130,0,PI);
  if(aniw==0){
   //rotating body
   fill(38,91,100);
   noStroke();
   arc(325+bbodyX, 210+bbodyY, 130, 130,PI*(bbodyY+1),PI*(bbodyY));
  }
  else{
    fill(38,91,100);
    noStroke();
    arc(325+bbodyX, 210+bbodyY, 130, 130,0,2*PI);
  }
  
  fill(38,91,100);
  noStroke();
  arc(352+blegX,275+blegY,180,180,2.28,4,CHORD);      arc(233+blegX,275+blegY,180,180,5.42,0.86,CHORD);
  
  for(let i=0.1;i<60;i+=5){
    stroke(38,91,100);
    line(357.5+sqrt(16*i)+blegX,210 +blegY + i,blegX+357.5-sqrt(16*i),blegY+210+i);
    line(blegX+357.5+sqrt(16*i),340 - i+blegY,blegX+357.5-sqrt(16*i),blegY+340 - i);
  }
  
  for(let i=0;i<15;i+=5){
    stroke(38,91,100);
    line(328+blegX,270+i+blegY,387+blegX,270+i+blegY);
  }
  //moving eyes with the head in the begining
  fill(255);
  ellipse(310+bheadX,100+bheadY,15,25);
  fill(255);
  ellipse(340+bheadX,100+bheadY,15,25);
  fill('#85ABCE');
  ellipse(310+bheadX+(mouseX-310)/90,105 +bheadY+ (mouseY-105)/90, 10 , 10);
  fill('#85ABCE');
  ellipse(340+bheadX+(mouseX-340)/90,105+bheadY + (mouseY-105)/90 , 10 , 10);
  fill(255);
  arc(310+bheadX+(mouseX-310)/90,105+bheadY + (mouseY-105)/90,8,8 , PI,HALF_PI+PI,CHORD);
  fill(255);
  arc(340+bheadX+(mouseX-340)/90,105 +bheadY+ (mouseY-105)/90,8,8 , PI,HALF_PI+PI,CHORD);
  stroke('pink');
 
  curve(325+bheadX,bheadY+70+0.4*sqrt(pow(mouseX-325,2)+pow(mouseY-120,2)),bheadX+310,bheadY+120,bheadX+340,bheadY+120,bheadX+325,bheadY+70+0.4*sqrt(pow(mouseX-325,2)+pow(mouseY-120,2)));
  if(aniw==0){
    if(bhairX<0){
    bhairX+=2;
    blegX+=2;
    bbodyX+=2;
    bheadX+=2;
    bhairY+=30/130;
    bbodyY+=30/130;
    bheadY+=30/130;
    blegY-=100/130;
  }
  }
  //waiting
  if(aniw>0){
    aniw-=0.5;
  }
  
  //puppet is in the right place , main design is starting
  if(bhairX==0){
  stroke(255);
  fill(236,132,68);
  arc(70,15,130,130,PI,0);//orange arc 
  
  for(let i=10; i<135;i+=7.2){
    stroke(255);
    line(i,15,i,0);
  }
   
  for(var i =7; i <= 135; i+=15){
    noFill();
    stroke(20);
    arc(70, 15, i, i, 0, speed);   
    if(speed < PI){
      speed +=0.005
    }   
  }
  
  fill(217,187,91);
  noStroke();
  arc(260,0,250,165,HALF_PI, PI)
  
 
  for(let angle_1 = 4; angle_1 < 270 ; angle_1 +=15){
     noFill();
     stroke(20);
     arc(390, 80, angle_1, hair, PI, PI+HALF_PI);
    if(keyIsPressed&&keyCode==70){
    xof+=0.5;
    hair = noise(xof)*300
  }
  else{
    hair=angle_1;
  }    
  }
  
 //fan
  fill(236,132,68);
  noStroke();
  ellipse(65, 145, 130, 130);
   rect(65,145,65,65);
 
    fill(255);
    arc(65,145,120,120,-0.4+fan,0.4+fan);
    arc(65,145,120,120,HALF_PI-0.4+fan,HALF_PI+0.4+fan);
    arc(65,145,120,120,PI-0.4+fan,PI+0.4+fan);
    arc(65,145,120,120,PI+HALF_PI-0.4+fan,PI+HALF_PI+0.4+fan);
    
    
  if(mouseIsPressed) {
    wind.start();
  }
  if(keyIsDown(70)){
    fan+=0.05;
    wind.amp(0.1,0.1);   
  }else{
    fan = 0;
    wind.amp(0,0.1);
  }
  for(var k =7; k <= 135; k+=15){
    noFill();
    stroke(0);
    arc(130, 145, k, k,3*HALF_PI, HALF_PI);    
  }  
   //orange arc, second row 
  fill(236,132,68);
  noStroke();
  arc(260, 145, 130, 130,HALF_PI,HALF_PI*3);
  
  
  fill(38,91,100);
  noStroke();
  arc(325, 80, 130, 130,0,PI);
  fill(38,91,100);
  noStroke();
  arc(325, 210, 130, 130,PI,0);
  if((mouseX>260&&mouseX<390&&mouseY<210&&mouseY>80||(keyIsPressed&&(keyCode==70||keyCode==83)))){
  fill(255);
  ellipse(310,100,15,25);
  fill(255);
  ellipse(340,100,15,25);
  fill('#85ABCE');
  ellipse(310+(mouseX-310)/90,105 + (mouseY-105)/90, 10 , 10);
  fill('#85ABCE');
  ellipse(340+(mouseX-340)/90,105 + (mouseY-105)/90 , 10 , 10);
  fill(255);
  arc(310+(mouseX-310)/90,105 + (mouseY-105)/90,8,8 , PI,HALF_PI+PI,CHORD);
  fill(255);
  arc(340+(mouseX-340)/90,105 + (mouseY-105)/90,8,8 , PI,HALF_PI+PI,CHORD);
  stroke('pink');
  curve(325,70+0.4*sqrt(pow(mouseX-325,2)+pow(mouseY-120,2)),310,120,340,120,325,70+0.4*sqrt(pow(mouseX-325,2)+pow(mouseY-120,2)));
  }
 
 
  for(let angle_1 = 4; angle_1 < 270 ; angle_1 +=15){
     noFill();
     stroke(20);
     arc(130, 340, hair,angle_1, PI, PI+HALF_PI);
    if(keyIsPressed&&keyCode==70){
    xof+=0.5;
    hair = noise(xof)*300
  }
  else{
    hair=1000;
  }
  }
  
  fill(217,187,91);
  noStroke();
  arc(130, 275, 130, 130,HALF_PI*3,HALF_PI);
  if(mouseX>130&&mouseX<260&&mouseY<340&&mouseY>210||(keyIsPressed&&(keyCode==70||keyCode==82||keyCode==83))){
  fill(255);
  ellipse(150,290,15,25);
  fill(255);
  ellipse(150,260,15,25);
  fill('#85ABCE');
  ellipse(150+(mouseX-150)/50,290 + (mouseY-290)/50, 10 , 10);
  fill('#85ABCE');
  ellipse(150+(mouseX-150)/50,260 + (mouseY-260)/50 , 10 , 10);
  fill(255);
  arc(150+(mouseX-150)/100,290 + (mouseY-290)/100,8,8 , PI,HALF_PI+PI,CHORD);
  fill(255);
  arc(150+(mouseX-150)/100,260 + (mouseY-260)/100,8,8 , PI,HALF_PI+PI,CHORD);
  stroke('pink');
  curve(0.4*sqrt(pow(mouseX-170,2)+pow(mouseY-275,2)),275,170,290,170,260,0.4*sqrt(pow(mouseX-170,2)+pow(mouseY-275,2)),275);
  }
  fill(217,187,91);
  noStroke();
  arc(260, 275, 130, 130,HALF_PI,HALF_PI*3);
  
  fill(38,91,100);
  noStroke();
 arc(352,275,180,180,2.28,4,CHORD);  arc(233,275,180,180,5.42,0.86,CHORD);
  
  for(let i=0.1;i<60;i+=5){
    stroke(38,91,100);
    line(357.5+sqrt(16*i),210 + i,357.5-sqrt(16*i),210+i);
    line(357.5+sqrt(16*i),340 - i,357.5-sqrt(16*i),340 - i);
  }
  
  for(let i=0;i<15;i+=5){
    stroke(38,91,100);
    line(328,270+i,387,270+i);
  }
  
  fill(217,187,91);
  noStroke();
  arc(65, 340, 130, 180, HALF_PI, PI);
  
  fill(217,187,91);
  noStroke();
  rect(65,340,65,65);
  
  
  fill(38,91,100);
  noStroke();
  arc(130, 400, 230, 120,HALF_PI*3,0);
  
   noStroke();
  fill(236,132,68)
  arc(390,470,260,260,PI,HALF_PI*3);
  for(let i=4; i<270;i+=16)
  {
    noFill();
    stroke(240);
    arc(390,470,i,i,PI,0);
  }
  }
  if(keyIsPressed&&keyCode==83){
    for (let i = 0; i < snows.length; i++) {
      snows[i].display(0, 0);
      snows[i].update();
    }
    
  }
}

class Snow {
  constructor() {
    //starting POS of a snow
    this.x = random(width);
    this.y = random(height);
    this.size = random(3, 5);
    this.speed = random(0, 5);

  }
  //display snow 
  display() {
    noStroke();
    //ellipse(this.x, this.y, this.size);
    fill(239, 245, 255, 200);
    ellipse(this.x + 100 * sin(this.speed), this.y + 100 * cos(this.speed), this.size);
  }
  update() {
    this.y = this.y + this.speed;
    //making the movement faster
    this.speed = this.speed + 0.01;
    if (this.y > height) {
      this.y = 0;
    }
  }
}
