/* Started with referring to the Week 9 Lecture of 
responsive design example for the animation of the circles
Following the same and keeping the existing provided code in the lecture */

/* Responsive Bouncing Patterned Circles
  - Uses two pattern variants: Pacita (CircledesignedbyCora) and Yin (CirclefromYin)
  - Each cirlce bounces within the window and displays its pattern
  - Color palettes and patterns are adapted from the code made by team members
*/

let circlepattern = []; // Array to hold all our cirles

// Color palette for Cora's circles
const fullPalette = [
  "#E53935", "#FF5252", "#0097A7", "#5C91A1", "#B2DFDB", "#4E2424",
  "#FFB300", "#F48FB1", "#0D0477", "#BA68C8", "#AED581", "#7C2945",
  "#FB8C00", "#FFEB3B", "#0D0477", "#AB47BC", "#F0F4C3", "#4A154B",
  "#FF3D00", "#FF4081", "#004D61", "#A67C52", "#E1BEE7", "#103A44"
];

const numberofcircle = 64;

function setup() {
  createCanvas(windowWidth, windowHeight);

    // for loop to create 64 circlepattern, randomly assigning each a pattern type
  for (let i = 0; i < numberofcircle; i++) {
    // Selecting a random starting palette, ensuring at least 6 colors are available
    let paletteStart = floor(random(0, fullPalette.length - 6));     
    let palette = fullPalette.slice(paletteStart, paletteStart + 6);
     // Randomly positioning the circle within the central half of the window
    let x = random(width/4, 3*width/4);
    let y = random(height/4, 3*height/4);
        // Randomly assign a radius between 60 and 120 for the circle
    let r = random(48, 64); // Increased size here from team feedback session

    let rand = random();    // Randomly choose pattern type for the circle
    if (rand < 0.25) {
     circlepattern.push(new criclepattern(x, y, r, palette)); // Cora's artwork pattern
    } else if (rand < 0.5) {
     circlepattern.push(new YinPatterncriclepattern(x, y, r)); // Yin's artwork pattern
    } else if (rand < 0.75) {
     circlepattern.push(new KristienPattern1criclepattern(x, y, r)); // Kristien's circle pattern 1
    } else {
     circlepattern.push(new KristienPattern2criclepattern(x, y, r)); // Kristien's circle pattern 2
    }
  }
}

/*used the code from the lecture material of Week 9 for the responisve design 
which repositions the cirlce patterns if they go out of frame after resizing*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
   // Lfor loop for repositioning the circles if they are out of frame after resizing
  for (let criclepattern of circlepattern) {
    if (criclepattern.criclepatternXPos > width || criclepattern.criclepatternXPos < 0) {
      criclepattern.criclepatternXPos = random(width / 4, (3 * width) / 4);
    }
    if (criclepattern.criclepatternYPos > height || criclepattern.criclepatternYPos < 0) {
      criclepattern.criclepatternYPos = random(height / 4, (3 * height) / 4);
// If the circle's x and y position is out of frame, it resets to a random position in the central half
    } 
  }
}

function draw() {
  background(0);
  for (let criclepattern of circlepattern) {
    criclepattern.move();
    criclepattern.display();
  }
}

// Class for the patterned circles(Cora's pattern)
class PatternedCircle {
  constructor(x, y, r, palette) {
      // Storing the position, radius, and color palette for this circle
    this.x = x;             
    this.y = y;             
    this.r = r;             
    this.palette = palette; 
  }

  drawPatternedCircle() {
    push(); 
    translate(this.x, this.y); // Move the origin to the circle's position

    // base background for the circle
    fill("black");
    ellipse(0, 0, this.r * 2);

    // center black + green circles 
    fill("black");
    ellipse(0, 0, this.r * 0.4);
    fill("green");
    ellipse(0, 0, this.r * 0.25);

    // ring outlines
    noFill();
    strokeWeight(4);
    let ringColors = this.palette.slice(0, 6); // palette for ring colors
    for (let i = 0; i < ringColors.length; i++) {
      stroke(ringColors[i]);
      ellipse(0, 0, this.r * (0.5 + 0.1 * i)); // Drawing the colored rings
    }

    // dotted outer circle pattern 
    let layers = 5;                          
    let startRadius = this.r * 0.55;        
    let endRadius = this.r * 0.95;           
    let step = (endRadius - startRadius) / (layers - 1);
    let maxDotSize = 10;
    let spacingFactor = 1.1;

    noStroke();

    // for loop to draw dotted rings with varying radii and colors
    for (let l = 0; l < layers; l++) {
      let radius = startRadius + l * step;
      let dotSize = min(maxDotSize, TWO_PI * radius / 20);
      let numDots = floor(TWO_PI * radius / (dotSize * spacingFactor));
      fill(this.palette[l % this.palette.length]);
      let angleOffset = 0;
      for (let i = 0; i < numDots; i++) {
        let angle = TWO_PI * i / numDots + angleOffset;
        let x = cos(angle) * radius;
        let y = sin(angle) * radius;
        ellipse(x, y, dotSize);
      }
    }
    pop(); //Restore back to the drawing state
  }
}

// criclepattern class (Yin's circle pattern)
class criclepattern {
  constructor(starterXPos, starterYPos, starterRadius, palette) {
    // Initialising the circle position, radius, speed, and its pattern
    this.criclepatternXPos = starterXPos;
    this.criclepatternYPos = starterYPos;
    this.criclepatternRadius = starterRadius;
    this.criclepatternXSpeed = random(-5, 5);
    this.criclepatternYSpeed = random(-5, 5);
    this.patternedCircle = new PatternedCircle(
      this.criclepatternXPos, this.criclepatternYPos, this.criclepatternRadius, palette
    );
  }

  move() {
    // Updatig the position of circle with the speed
    this.criclepatternXPos += this.criclepatternXSpeed;
    this.criclepatternYPos += this.criclepatternYSpeed;

    // Bounce off left/right edges
    if (this.criclepatternXPos + this.criclepatternXSpeed + this.criclepatternRadius / 2 > width 
      || this.criclepatternXPos + this.criclepatternXSpeed - this.criclepatternRadius / 2 < 0) {
      this.criclepatternXSpeed *= -1;
    }
      // Bounce off top/bottom edges
    if (this.criclepatternYPos + this.criclepatternRadius / 2 > height 
      || this.criclepatternYPos - this.criclepatternRadius / 2 < 0) {
      this.criclepatternYSpeed *= -1;
    }
  }

  display() {
    // Update the PatternedCircle's position before drawing
    this.patternedCircle.x = this.criclepatternXPos;
    this.patternedCircle.y = this.criclepatternYPos;
    this.patternedCircle.r = this.criclepatternRadius;
    this.patternedCircle.drawPatternedCircle();
  }
}

// YinPattern pattern class (Yin pattern)
class YinPatterncriclepattern {
  constructor(x, y, r) {
    // Initialize ball position, radius, and speed
    this.criclepatternXPos = x;
    this.criclepatternYPos = y;
    this.criclepatternRadius = r;
    this.criclepatternXSpeed = random(-5, 5);
    this.criclepatternYSpeed = random(-5, 5);
  }

  move() {
    // Update the position of the circles by speed
    this.criclepatternXPos += this.criclepatternXSpeed;
    this.criclepatternYPos += this.criclepatternYSpeed;

   // Bounce off left/right edges
    if (this.criclepatternXPos + this.criclepatternXSpeed + this.criclepatternRadius / 2 > width 
      || this.criclepatternXPos + this.criclepatternXSpeed - this.criclepatternRadius / 2 < 0) {
      this.criclepatternXSpeed *= -1;
    }
    // Bounce off top/bottom edges
    if (this.criclepatternYPos + this.criclepatternRadius / 2 > height 
      || this.criclepatternYPos - this.criclepatternRadius / 2 < 0) {
      this.criclepatternYSpeed *= -1;
    }
  }

  display() {
    drawCircleYin1(this.criclepatternXPos, this.criclepatternYPos, this.criclepatternRadius);
  }
}

// Pattern function from Yin's code
function drawCircleYin1(cx, cy, radius) {
  // Fucntion to draw the pink circle
  noStroke();
  fill('#F764AD');
  circle(cx, cy, radius * 0.3);
  // green dots around the center
  noStroke();
  fill('#8FC79B');
  for (let i = 0; i < 28; i++) {
    let angle = TWO_PI * i/28;
    let x = cx + radius*.3 * cos(angle);
    let y = cy + radius*.3 * sin(angle);
    circle(x, y, radius * 0.05);
  }
    // blue dots in a larger ring
  fill('#048A9D');
  for (let i = 0; i < 18; i++) {
    let angle = TWO_PI * i/18 + 0.1;
    let x = cx + radius*0.4 * cos(angle);
    let y = cy + radius*0.4 * sin(angle);
    circle(x, y, radius * 0.1);
  }

  //colored beams radiating out from the center
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
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
  }
  //blue wavy outlines around the circle
  stroke('#457B9D');
  strokeWeight(1);
  noFill();
  for (let i = 0; i < 24; i++) {
    let baseAngle = TWO_PI * i / 24;
    beginShape();
    for (let j = 0; j < 6; j++) {
      let offset = (j%2===0?+5:-5);
      let angle = baseAngle + j*0.06;
      let x = cx + (radius+offset)*cos(angle);
      let y = cy + (radius+offset)*sin(angle);
      vertex(x, y);
    }
    endShape();
  }
  // pink rectangles in a circle 
  noStroke();
  fill('#F495AF');
  for (let i = 0; i < 30; i++) {
    let angle = TWO_PI * i/30 + PI/95;
    let x = cx + radius*1.2 * cos(angle);
    let y = cy + radius*1.2 * sin(angle);
    push();
      translate(x, y);
      rotate(PI/4);
      rectMode(CENTER);
      rect(0, 0, radius*0.08, radius*0.1);
    pop();
  }
  // yellow wavy outline
  stroke('#F4B205');
  strokeWeight(2);
  noFill();
  let waveCount = 420;
  let waveRad = radius * 1.3;
  let amplitude = 1;   
  let numberOfWaves = 60;       
  beginShape();
  for (let i = 0; i <= waveCount; i++) {
    let angle = TWO_PI * i / waveCount;
    let rOff = amplitude * sin(numberOfWaves  * angle);
    let x = cx + (waveRad + rOff) * cos(angle);
    let y = cy + (waveRad + rOff) * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
  // yellow dots (outsie the circle)
  noStroke();
  fill('#D2D39B');
  for (let i = 0; i < 36; i++) {
    let angle = TWO_PI * i/36;
    let x = cx + radius*1.4 * cos(angle);
    let y = cy + radius*1.4 * sin(angle);
    circle(x, y, radius * 0.06);
  }
}

// Kristen's circle pattern 01
class KristienPattern1criclepattern {
  constructor(x, y, r) {
    // Initialising the circle position, radius, and speed
    this.criclepatternXPos = x;
    this.criclepatternYPos = y;
    this.criclepatternRadius = r;
    this.criclepatternXSpeed = random(-5, 5);
    this.criclepatternYSpeed = random(-5, 5);
  }

  move() {
    // Updating position by speed
    this.criclepatternXPos += this.criclepatternXSpeed;
    this.criclepatternYPos += this.criclepatternYSpeed;
    
    // Bounce off left/right edges
    if (this.criclepatternXPos + this.criclepatternXSpeed + this.criclepatternRadius / 2 > width 
      || this.criclepatternXPos + this.criclepatternXSpeed - this.criclepatternRadius / 2 < 0) {
      this.criclepatternXSpeed *= -1;
    }

    // Bounce off top/bottom edges
    if (this.criclepatternYPos + this.criclepatternRadius / 2 > height 
      || this.criclepatternYPos - this.criclepatternRadius / 2 < 0) {
      this.criclepatternYSpeed *= -1;
    }
  }

  display() {
    // Draws Kristien's first circle pattern
    drawCircleKristien1(this.criclepatternXPos, this.criclepatternYPos, this.criclepatternRadius);
  }
}

// Kristie's Circle pattern 02
class KristienPattern2criclepattern {
  constructor(x, y, r) {
    this.criclepatternXPos = x;
    this.criclepatternYPos = y;
    this.criclepatternRadius = r;
    this.criclepatternXSpeed = random(-5, 5);
    this.criclepatternYSpeed = random(-5, 5);
  }

  move() {
    // Update position by speed
    this.criclepatternXPos += this.criclepatternXSpeed;
    this.criclepatternYPos += this.criclepatternYSpeed;

    // Bounce off left/right edges
    if (this.criclepatternXPos + this.criclepatternXSpeed + this.criclepatternRadius / 2 > width 
      || this.criclepatternXPos + this.criclepatternXSpeed - this.criclepatternRadius / 2 < 0) {
      this.criclepatternXSpeed *= -1;
    }
    // Bounce off top/bottom edges
    if (this.criclepatternYPos + this.criclepatternRadius / 2 > height 
      || this.criclepatternYPos - this.criclepatternRadius / 2 < 0) {
      this.criclepatternYSpeed *= -1;
    }
  }

  display() {
    // Draws Kristien's 2nd circle pattern
    drawCircleKristien2(this.criclepatternXPos - this.criclepatternRadius/2, this.criclepatternYPos - this.criclepatternRadius/2, this.criclepatternRadius, this.criclepatternRadius * 0.65);
  }
}

// Function for Kristen's first circle pattern
function drawCircleKristien1(cx = 500, cy = 160, r = 130) {
  // concentric colored circles
  noStroke();
  fill("rgb(240,248,108)");
  circle(cx, cy, r);
  fill("#4B99F8E0");
  circle(cx, cy, r - 10);
  fill("#fc558b");
  circle(cx, cy, r - 20);
  fill("#f1b62e");
  circle(cx, cy, r - 30);
  fill("#4B99F8E0");
  circle(cx, cy, r - 40);
  fill("#222222");
  circle(cx, cy, r - 50);
  fill("#fc558b");
  circle(cx, cy, r - 100);

  //sun rays radiating from the center
  drawSunRays(cx, cy, r * 0.46, r * 0.69, 40, '#E7DFDF', 2);
  //rings of colored points
  drawCirclePoints(cx, cy, r * 0.31, 40, 'purple', 10);
  drawCirclePoints(cx, cy, r * 0.27, 40, 'deepskyblue', 6);
  drawCirclePoints(cx, cy, r * 0.23, 20, '#e74a1f', 10);
  drawCirclePoints(cx, cy, r * 0.19, 30, 'deepskyblue', 6);
  drawCirclePoints(cx, cy, r * 0.15, 15, ' #6f6dc1', 10);
  drawCirclePoints(cx, cy, r * 0.12, 30, 'deepskyblue', 6);
  //white spiral in the center
  drawSpiral(cx, cy, 0.8, 5 * TWO_PI);
}

function drawSunRays(cx, cy, innerR, outerR, count, colorName, weight) {
  stroke(colorName);
  strokeWeight(weight);
  for (let i = 0; i < count; i++) {
    let angle = i * TWO_PI / count;
    let x1 = cx + innerR * cos(angle);
    let y1 = cy + innerR * sin(angle);
    let x2 = cx + outerR * cos(angle);
    let y2 = cy + outerR * sin(angle);
    line(x1, y1, x2, y2);
  }
}

function drawCirclePoints(cx, cy, r, count, colorName, weight) {
  stroke(colorName);
  strokeWeight(weight);
  for (let i = 0; i < count; i++) {
    let angle = i * (TWO_PI / count); 
    //divides the circle into equal slices and each individual point is evenly spaced around the circle
    let x = cx + r * cos(angle);
    let y = cy + r * sin(angle);
    point(x, y);
  }
}

function drawSpiral(cx, cy, k, maxAngle) {
  // Draws a spiral starting at (cx, cy) with growth factor k up to maxAngle
  noFill();
  stroke('#ffffff');
  strokeWeight(2);
  beginShape();
  for (let angle = 0; angle < maxAngle; angle += 0.05) {
    let r = k * angle;
    let x = cx + r * cos(angle);
    let y = cy + r * sin(angle);
    vertex(x, y);
  }
  endShape();
}

// --- Kristien Pattern 2 Function ---
function drawCircleKristien2(x, y, w, h) {
  // Calculating center and the frame dimensions for the ellipse
  let cx = x + w / 2;
  let cy = y + h / 2;
  let left = x;
  let right = x + w;
  let top = y;
  let bottom = y + h;

  let maxLayers = 7;
  let startR = 80;
  let layerGap = 10;

   // Draw several layers of shapes (circles, rectangles, triangles) in rings
  for (let layer = 0; layer < maxLayers; layer++) {
    let r = startR - layer * layerGap; 
    let count = 40 + layer * 5; 
    for (let i = 0; i < count; i++) {
      let angle = TWO_PI * i / count;
      let px = cx + r * cos(angle);
      let py = cy + r * sin(angle);
      if (i % 3 === 0) {
        fill('#e76f51');
        noStroke();
        circle(px, py, 8);
      } else if (i % 3 === 1) {
        fill('#90d4ff');
        noStroke();
        rect(px - 4, py - 4, 8, 8);
      } else {
        fill('#2c75ff');
        noStroke();
        triangle(px, py - 5, px + 5, py + 5, px - 5, py + 5);
      }
    }
  }

  // Draw a eye-like shape in the center using bezier curves
  fill('yellow');
  stroke('#111111');     
  strokeWeight(4); 
  beginShape();
  vertex(left, cy);
  bezierVertex(cx - w * 0.2, top, cx + w * 0.2, top, right, cy);
  bezierVertex(cx + w * 0.2, bottom, cx - w * 0.2, bottom, left, cy);
  endShape(CLOSE);

  // multi-color eyeball in the center
  let eyeRadius = min(w, h) / 1.5;
  drawMultiColorEyecriclepattern(cx, cy, eyeRadius);

  //white lines in the center of the eye
  stroke('#ffffff');
  strokeWeight(2);
  line(cx - 4, cy, cx + 4, cy);
  line(cx, cy - 4, cx, cy + 9); 
}

// colored circles to form an eyeball
function drawMultiColorEyecriclepattern(cx, cy, maxRadius) {
  let colors = [
    '#90d4ff',  
    '#3e9efc', 
    '#2c75ff', 
    '#6540f5',
    '#4b2ca7', 
    '#2b185a', 
    '#111111'
  ];
  noStroke();
  for (let i = 0; i < colors.length; i++) {
    let r = maxRadius * (1 - i * 0.15);
    fill(colors[i]);
    circle(cx, cy, r);
  }
}