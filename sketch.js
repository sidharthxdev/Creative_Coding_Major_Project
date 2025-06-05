// Declared two circle objects 
let circle1;
let circle2;

function setup() {
  createCanvas(750, 500); // Set canvas size
  noLoop();               // for now is static 

  // i set up color palette extracted from our reference first for future use
  let fullPalette = [
    "#E53935", "#FF5252", "#0097A7", "#5C91A1", "#B2DFDB", "#4E2424",
    "#FFB300", "#F48FB1", "#0D0477", "#BA68C8", "#AED581", "#7C2945",
    "#FB8C00", "#FFEB3B", "#0D0477", "#AB47BC", "#F0F4C3", "#4A154B",
    "#FF3D00", "#FF4081", "#004D61", "#A67C52", "#E1BEE7", "#103A44"
  ];

  // the first large patterned circle is placed near blue/yellow/pink areas
  circle1 = new PatternedCircle(140, 300, 100, fullPalette);

  // then the second smaller circle placed top-right using a different color combo
  circle2 = new PatternedCircle(540, 150, 70, fullPalette.slice(8, 16));
}

function draw() {
  noStroke(); 

  // basically copied the code of the background froom the main branch for my convenience
  fill("blue");
  rect(0, 0, 400, 300);

  fill("#F71B0B");
  rect(250, 0, 500, 250);

  fill("yellow");
  rect(0, 300, 350, 440);

  push();
  translate(630, 355);
  rotate(radians(85));
  fill("purple");
  rect(-150, -135, 500, 190);
  pop();

  fill("purple");
  rect(300, 500, 300, 200);
  fill("purple");
  rect(580, 160, 200, 200, 100, 100, 100, 100);

  fill("#E91E63");
  rect(200, 200, 400, 200, 30, 30, 30, 10);

  push();
  translate(500, 300);
  rotate(radians(160));
  fill("#E91E63");
  rect(-150, -120, 300, 200, 100, 30, 100, 10);
  pop();

  fill("yellow");
  ellipse(0, 270, 350, 180);

  push();
  translate(400, 530);
  rotate(radians(150));
  fill("#FF9800");
  ellipse(0, 0, 500, 280);
  pop();

  fill("blue");
  ellipse(300, 60, 200, 150);

  push();
  translate(80, 190);
  rotate(radians(10));
  fill("blue");
  ellipse(0, 0, 170, 40);
  pop();

  push();
  translate(200, 260);
  rotate(radians(120));
  fill("#E91E63");
  ellipse(0, 0, 250, 170);
  pop();

  fill("#E91E63");
  rotate(25);
  ellipse(250, 230, 200, 160);

  push();
  translate(195, 465);
  rotate(radians(150));
  fill("yellow");
  rect(-115, -85, 350, 170, 100, 100, 100, 100);
  pop();

  push();
  translate(90, 590);
  rotate(radians(124));
  fill("yellow");
  ellipse(0, 0, 350, 180);
  pop();

  // drew both circles
  circle1.drawLayeredPacitaCircle(); // First large one
  circle2.drawLayeredPacitaCircle(); // Second small one
}

// used class to create pacita-style patterned circles
class PatternedCircle {
  constructor(x, y, r, palette) {
    this.x = x;             
    this.y = y;             
    this.r = r;             
    this.palette = palette; 
  }

  drawLayeredPacitaCircle() {
    push(); 
    translate(this.x, this.y); 

    // white base background 
    fill("white");
    ellipse(0, 0, this.r * 2);

    // with center black + green circles 
    fill("black");
    ellipse(0, 0, this.r * 0.4);
    fill("green");
    ellipse(0, 0, this.r * 0.25);

    // then rainbow ring outlines
    noFill();
    strokeWeight(4);
    let ringColors = this.palette.slice(0, 6);
    for (let i = 0; i < ringColors.length; i++) {
      stroke(ringColors[i]);
      ellipse(0, 0, this.r * (0.5 + 0.1 * i)); 
    }

    // also some dotted outer rings 
    let layers = 5;                          
    let startRadius = this.r * 0.55;        
    let endRadius = this.r * 0.95;           
    let step = (endRadius - startRadius) / (layers - 1);
    let maxDotSize = 10;
    let spacingFactor = 1.1;                 // controls how tight the dots are

    noStroke(); // dots don't need outlines

    for (let l = 0; l < layers; l++) {
      let radius = startRadius + l * step;
      let dotSize = min(maxDotSize, TWO_PI * radius / 20); // auto-scale dot size
      let numDots = floor(TWO_PI * radius / (dotSize * spacingFactor));
      fill(this.palette[l % this.palette.length]); // used different color for each ring

      let angleOffset = 0; // for now is no rotation - in a static mode

      for (let i = 0; i < numDots; i++) {
        let angle = TWO_PI * i / numDots + angleOffset;
        let x = cos(angle) * radius;
        let y = sin(angle) * radius;
        ellipse(x, y, dotSize); // draw each dot
      }
    }

    pop(); 
  }
}
