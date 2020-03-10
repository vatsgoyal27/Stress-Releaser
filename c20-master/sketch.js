function setup() {
ellipse1 = createSprite(600, 200, 0.001, 0.001);
ellipse1.shapeColor = "red";
 r = 0;
 g = 50;
 b = 255;
ellipse1.debug = true;
createCanvas(1200,400);

}


function draw(){
  background(r, g, b);
  r = ellipse1.x -350;
  g = ellipse1.x -100;
  b = (ellipse1.x -700);
  ellipse1.x = mouseX;
  ellipse1.y = mouseY;
  fill("red");
  ellipse(mouseX, mouseY, 30, 30);
  drawSprites();
}