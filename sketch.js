//Creates a canvas 750px wide and 500px tall
function setup() {
  createCanvas(750, 500);
}

function draw() {
  //draw background shapes
  drawBackground();
  //Draw the multi-layered “Yin” circle at position (x 300, y 250) with base radius 60
  drawCircleYin1(300, 250, 60);
}

//Background composition
function drawBackground() {

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
  
  fill("#EB306F")
  rect(200, 200, 400, 200,30, 30, 30, 10)
  
  //overlay part
  
 push();
  translate(500, 300);
  rotate(radians(160));
  fill("#EB306F");
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
   fill("#EB306F");
   ellipse(0, 0, 250, 170);
pop();
  
  fill("#EB306F")
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

//[Yin] Draw a multi‐layered circle with each layer corresponds to one ring of the cicle, using dots, rectangle, zigzags, squares, beams and stitching like wavy lines inspired by pacita abad's artwork.

function drawCircleYin1(cx, cy, radius) {
  //small filled circle at the centre
  noStroke();
  fill('#F764AD');
  //at exactly (cx, cy) the center,diameter=radius*0.3
  circle(cx, cy, radius * 0.3);
  
  //Green dots ring 
  noStroke();
  fill('#8FC79B');
  //28 dots placed on a circle of radicus 0.3*circlr radius from centre
  for (let i = 0; i < 28; i++) {
    let angle = TWO_PI * i/28;
    //where θ increments by that fixed step each iteration
    let x = cx + radius*.3 * cos(angle);
    let y = cy + radius*.3 * sin(angle);
    circle(x, y, radius * 0.05);
  }

  //Teal dots ring
  fill('#048A9D');
  //18 dots evenly spaced on a circle of 0.4*circle radius from centre
  for (let i = 0; i < 18; i++) {
    let angle = TWO_PI * i/18 + 0.1;
    let x = cx + radius*0.4 * cos(angle);
    let y = cy + radius*0.4 * sin(angle);
    circle(x, y, radius * 0.1);
  }

  //Coloured beams
  //Divide the full circle into 30 equal slices.
  let beamCount = 30;
  let beamColors = ['#F4B205','#E12C25','#4FC3F7','#8FC79B','#081487'];
  let innerR = radius * 0.45;
  let outerR = radius * 0.85;
  noStroke();
  for (let i = 0; i < beamCount; i++) {
    let startA = TWO_PI * i / beamCount;
    let endA = TWO_PI * (i + 1) / beamCount;
    fill(beamColors[i % beamColors.length]);
    let x1 = cx + innerR * cos(startA);
    let y1 = cy + innerR * sin(startA);
    let x2 = cx + outerR * cos(startA);
    let y2 = cy + outerR * sin(startA);
    let x3 = cx + outerR * cos(endA);
    let y3 = cy + outerR * sin(endA);
    let x4 = cx + innerR * cos(endA);
    let y4 = cy + innerR * sin(endA);
    //Draw the shape with following:
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  //Zigzag threads
  stroke('#457B9D');
  strokeWeight(1);
  noFill();
  //24 zigzag “threads" evenly places on a circle radius from centre
  for (let i = 0; i < 24; i++) {
    let baseAngle = TWO_PI * i / 24;
    //Start a custom shape
    beginShape();
    for (let j = 0; j < 6; j++) {
      //Alternating radial offset +5 or –5 pixels to create the zigzag
      let offset = (j%2===0?+5:-5);
      //step forward in small angular increments j*0.06
      let angle = baseAngle + j*0.06;
      let x = cx + (radius+offset)*cos(angle);
      let y = cy + (radius+offset)*sin(angle);
      vertex(x, y);
    }
    endShape();
  }

  //Pink rectangle ring
  noStroke();
  fill('#F495AF');
  //30 small rectangles evenly places on a circle radius from centre 
  for (let i = 0; i < 30; i++) {
    //a tiny phase shift +PI/95 which rotates the entire ring by about 0.033 radians
    let angle = TWO_PI * i/30 + PI/95;
    let x = cx + radius*1.2 * cos(angle);
    let y = cy + radius*1.2 * sin(angle);
    //each rectangle is rotated by a fixed PI/4 so they sit as diamonds
    push();
      translate(x, y);
      rotate(PI/4);
      rectMode(CENTER);
      rect(0, 0, radius*0.08, radius*0.1);
    pop();
  }
  
//Wavy ring between rectangles and outer green dots
  stroke('#F4B205');
  strokeWeight(2);
  noFill();
  //421 points around the circle waveCount+1
  let waveCount = 420;
  //Base radius
  let waveRad = radius * 1.3;
  //how far those sine peaks pull outward/inward
  let amplitude = 1;   
  let numberOfWaves = 60;       
  beginShape();
  for (let i = 0; i <= waveCount; i++) {
    let angle = TWO_PI * i / waveCount;
    //generate a repeating up-and-down pattern around the circle
    let rOff = amplitude * sin(numberOfWaves  * angle);
    let x = cx + (waveRad + rOff) * cos(angle);
    let y = cy + (waveRad + rOff) * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);

// Outer green dots
//similar to the inner rings to echo symmetry
  noStroke();
  fill('#D2D39B');
  for (let i = 0; i < 36; i++) {
    let angle = TWO_PI * i/36;
    let x = cx + radius*1.4 * cos(angle);
    let y = cy + radius*1.4 * sin(angle);
    circle(x, y, radius * 0.06);
  }
}
// ===== end yin's circle ========