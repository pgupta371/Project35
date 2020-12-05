var dog, database, foodS, foodStock;

function preload(){
  img1 = loadImage("Dog.png");
  img2 = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(245,270);
  dog.addImage(img1);
  dog.scale = 0.4

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(img2);
  }

  fill(255);
  textSize(20);
  text("Press the up arrow key to feed the dog milk!", 50, 40);

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


