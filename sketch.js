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
  
  fill("blue")
  rect(0, 0, 400, 300)
  
  fill("#F71B0B")
  rect(350, 0, 400, 250)
  

  fill("purple")
  rect(500, 200, 250, 450)
  

  fill("yellow")
  rect(0, 300, 350, 440)
  

  fill("#FF9800")
  rect(200, 400, 400, 250)
  
  fill("#E91E63")
  rect(200, 200, 400, 200)

  fill("#E91E63")
  ellipse(200, 270, 350, 180);
  
}