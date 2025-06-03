function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

function draw() {

  noStroke();

//blue area
  
  fill("blue")
  rect(0, 0, 400, 300)

//red area
  fill("#F71B0B")
  rect(250, 0, 500, 250)

//purple area

  fill("purple")
  rect(500, 200, 250, 450)
  
//yellow area
  
  fill("yellow")
  rect(0, 300, 350, 440)
  
  
// orange area

  fill("#FF9800")
  rect(200, 400, 400, 250,30, 30, 30, 10)

  
// pink area
  
  fill("#E91E63")
  rect(200, 200, 400, 200,30, 30, 30, 10)

// extension layer
  
  fill("yellow")
  ellipse(0, 270, 350, 180);
  
  fill("#FF9800")
  ellipse(400, 400, 400, 200);
  
  
  //overlay part

  
  fill("yellow")
  ellipse(150, 480, 300, 200);
  
  fill("#E91E63")
  rect(550, 200, 100, 100,30, 30, 30, 10)
  
  fill("purple")
  rect(500, 330, 100, 100, 30, 30, 30, 10)
  
  
  fill("blue")
  ellipse(300, 60, 200, 150);
  
// this coding learnt from website p5.js
// reference: https://p5js.org/reference/p5/push/ 
  push();
  //Translate the origin to the mouse's position
  translate (80,190)
    rotate(radians(10))
    fill("blue")
    ellipse(0,0,170,40)
  pop();
  

  push();
  translate(200, 300);
    rotate(radians(105));
    fill("#E91E63");
    ellipse(0, 0, 350, 180);
  pop();
  
  
  
  fill("#E91E63")
  rotate(25)
  ellipse(250, 230, 200, 160);
  
}