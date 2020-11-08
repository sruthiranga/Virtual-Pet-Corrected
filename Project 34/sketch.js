const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Create variables here
var dogSprite, dogImg;
var happyDog;
var database;
var foodS, foodStock;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  happyDog.scale = 0.5;
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  
  dog = createSprite(250, 250, 20, 20);
  dogSprite.addImage(dogImg);
  dogSprite.scale = 0.3;


  foodStock = database.ref('Food');
  foodStock.on("value", (data)=>{
    foodS = data.val();
    textSize(20);
  fill("black");
  text("Food Stock:"+foodS, 150, 100);
  });
  
}


function draw() {  
  background(46, 139, 87);

  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dogSprite.addImage(dogHappy);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  //foodS = data.val();
  console.log(foodS);
}

function writeStock(x){

  if(x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



