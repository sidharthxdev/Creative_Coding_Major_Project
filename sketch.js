function setup() {
  createCanvas(750, 500);
}

function draw() {

  noStroke();

//blue area
  fill("blue")
  rect(0, 0, 400, 300)

//red area
  fill("#F71B0B")
  rect(250, 0, 500, 250)

//yellow area
  
  fill("yellow")
  rect(0, 300, 350, 440)

//purple area
  
// this coding learnt from website p5.js
// reference: https://p5js.org/reference/p5/push/
  push();
   translate(630, 355); //Translate the origin to the mouse's position
   rotate(radians(85));
   fill("purple");
   rect(-150, -135, 500, 190);
pop();
  
  fill("purple");
  rect(300,500,300,200)
  
  fill("purple");
  rect(580,160,200,200, 100, 100, 100, 100)
  
// pink area
  
  fill("#E91E63")
  rect(200, 200, 400, 200,30, 30, 30, 10)
  
  //overlay part
  
 push();
  translate(500, 300);
  rotate(radians(160));
  fill("#E91E63");
  rect(-150, -120, 300, 200, 100, 30, 100, 10);
pop();
  
  fill("yellow")
  ellipse(0, 270, 350, 180);
  
  push();
    translate(400, 530);
    rotate(radians(150));
    fill("#FF9800")
    ellipse(0, 0, 500, 280);
pop();
  
  fill("blue")
  ellipse(300, 60, 200, 150);
 
  push();
   translate (80,190)
   rotate(radians(10))
   fill("blue")
   ellipse(0,0,170,40)
pop();
  
  push();
   translate(200, 260);
   rotate(radians(120));
   fill("#E91E63");
   ellipse(0, 0, 250, 170);
pop();
  
  fill("#E91E63")
  rotate(25)
  ellipse(250, 230, 200, 160);
  
 push();
  translate(195, 465);
  rotate(radians(150));
  fill("yellow");
  rect(-115, -85, 350, 170, 100, 100, 100, 100);
pop();

 push();  
  translate(90,590);
  rotate(radians(124))
  fill("yellow")
  ellipse(0, 0, 350, 180);
pop();
  
}
