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
  rect(350, 0, 400, 250)

//purple area

  fill("purple")
  rect(500, 200, 250, 450)
  
//yellow area
  
  fill("yellow")
  rect(0, 300, 350, 440)
  
// orange area

  fill("#FF9800")
  rect(200, 400, 400, 250)
  
// pink area
  
  fill("#E91E63")
  rect(200, 200, 400, 200)

  fill("#E91E63")
  ellipse(200, 270, 350, 180);
  
  fill("#E91E63")
  ellipse(250, 200, 200, 100);
  
}