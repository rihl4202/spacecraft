var iss
var spacecraft
var hasDocked

function preload(){ 
  issImg = loadImage("iss.png")
  spaceBgImg = loadImage("spacebg.jpg")
  spacecraft1 = loadImage("spacecraft1.png")
  spacecraft2 = loadImage("spacecraft2.png")
  spacecraft3 = loadImage("spacecraft3.png")
  spacecraft4 = loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage("issSprite",issImg)
  iss.scale = 0.5

  spacecraft = createSprite(285, 320, 50, 50);
  spacecraft.addImage("sc1",spacecraft1)
  spacecraft.scale = 0.15

}

function draw() {
  background(spaceBgImg);  
  drawSprites();

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)
    if(keyDown("up")){
      spacecraft.y -= 2
    }
    if(keyDown("down")){
      spacecraft.y += 2
    }
    if(keyDown("left")){
      spacecraft.x -= 2
    }
    if(keyDown("right")){
      spacecraft.x += 2
    }
    if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
      hasDocked = true
    }
  }
 if(hasDocked){
  textSize(25)
  fill("purple")
  text("Docking Successful",200,300)
 }
  
}