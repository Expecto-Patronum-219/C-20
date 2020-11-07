var a, b
var c, d

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="red"

  b=createSprite(300, 100, 50, 50);
  b.shapeColor="red"

  c=createSprite(50, 200, 50, 50);
  c.shapeColor="red"
  c.velocityX=3

  d=createSprite(700, 200, 50, 50);
  d.shapeColor="red"
  d.velocityX=-3

  edges=createEdgeSprites()
}

function draw() {
  background("gold");  

a.x=mouseX
a.y=mouseY

console.log(a.y-b.y)

if(a.x-b.x < a.width/2 + b.width/2 && b.x-a.x< a.width/2 + b.width/2 && a.y-b.y< a.height/2 + b.height/2 && b.y-a.y< a.height/2 + b.height/2){
  a.shapeColor="green"
  b.shapeColor="green"
}
else{
  a.shapeColor="red"
  b.shapeColor="red"
}

if(c.x-d.x<c.width/2 + d.width/2 && d.x-c.x<d.width/2 + c.width/2){
c.velocityX=c.velocityX*(-1)
d.velocityX=d.velocityX*(-1)
}

if(c.y-d.y<c.height/2 + d.height/2 && d.y-c.y<d.height/2 + c.height/2){
  c.velocityY=c.velocityY*(-1)
  d.velocityY=d.velocityY*(-1)
  }

c.bounceOff(edges)
d.bounceOff(edges)

  drawSprites();
}