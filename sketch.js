function setup() {
  createCanvas(750, 500);
}

function draw() {
  drawBackground();
  drawCircleKristien1();
  drawCircleKristien2(0, 350, 100, 65);
  drawCircleCola1();
  drawCircleCola2();
  drawCircleYin1();
  drawCircleSid1();  
}

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

function drawCircleKristien1(){
noStroke();
  
  fill("rgb(240,248,108)")
  circle(500,160,130)
  
  fill("#4B99F8E0")
  circle(500,160,120)
  
  fill("#fc558b")
  circle(500,160,110)
  
  fill("#f1b62e")
  circle(500,160,100)
  
  fill("#4B99F8E0")
  circle(500,160,90)
  
  fill("#222222")
  circle(500,160,80)
  
  fill("#fc558b")
  circle(500,160,30)
  
//sunray (x,y, inner,outer, count, colorName, weight)
  drawSunRays(500, 160, 60, 90, 40, '#E7DFDF', 2);

//generate point within the circle
  drawCirclePoints(500, 160, 80, 40, 'purple',10);
  drawCirclePoints(500, 160, 70, 40, 'deepskyblue', 6);
  drawCirclePoints(500, 160, 60, 20, '#e74a1f', 10);
  drawCirclePoints(500, 160, 50, 30, 'deepskyblue', 6);
  drawCirclePoints(500, 160, 40, 15, ' #6f6dc1', 10);
  drawCirclePoints(500, 160, 30, 30, 'deepskyblue', 6);

// inner circle snail shell 
  drawSpiral(500, 160, 0.8, 5 * TWO_PI); // like a snail shell

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
    let radius = r;
// all the points will lie exactly on the circle with radius r, and form a perfect ring.
    let x = cx + radius * cos(angle);
    let y = cy + radius * sin(angle);
    point(x, y);
  }
}

function drawSpiral(cx, cy, k, maxAngle) {
  noFill();
  stroke('#ffffff');
  strokeWeight(2);

  beginShape();
  for (let angle = 0; angle < maxAngle; angle += 0.05) {
    let r = k * angle;
    let x = cx + r * cos(angle);
    let y = cy + r * sin(angle);
    vertex(x, y);// reference: https://p5js.org/reference/p5/vertex/, learn from p5.js website
  }
  endShape();
}

/*function drawCircleKristien1(){
  noStroke();
  
  fill("rgb(240,248,108)")
  circle(500,300,220)
  
  fill("#4B99F8E0")
  circle(500,300,210)
  
  fill("#fc558b")
  circle(500,300,200)
  
  fill("#f1b62e")
  circle(500,300,190)
  
  fill("#4B99F8E0")
  circle(500,300,180)
  
  fill("#222222")
  circle(500,300,160)
  
  fill("#fc558b")
  circle(500,300,50)
  
//sunray (x,y, inner,outer, count, colorName, weight)
  drawSunRays(500, 300, 110, 150, 40, '#E7DFDF', 2);

//generate point within the circle
  drawCirclePoints(500, 300, 80, 40, 'purple',10);
  drawCirclePoints(500, 300, 70, 40, 'deepskyblue', 6);
  drawCirclePoints(500, 300, 60, 20, '#e74a1f', 10);
  drawCirclePoints(500, 300, 50, 30, 'deepskyblue', 6);
  drawCirclePoints(500, 300, 40, 15, ' #6f6dc1', 10);
  drawCirclePoints(500, 300, 30, 30, 'deepskyblue', 6);

// inner circle snail shell 
  drawSpiral(500, 300, 0.8, 5 * TWO_PI); // like a snail shell

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
    let radius = r;
// all the points will lie exactly on the circle with radius r, and form a perfect ring.
    let x = cx + radius * cos(angle);
    let y = cy + radius * sin(angle);
    point(x, y);
  }
}

function drawSpiral(cx, cy, k, maxAngle) {
  noFill();
  stroke('#ffffff');
  strokeWeight(2);

  beginShape();
  for (let angle = 0; angle < maxAngle; angle += 0.05) {
    let r = k * angle;
    let x = cx + r * cos(angle);
    let y = cy + r * sin(angle);
    vertex(x, y);// reference: https://p5js.org/reference/p5/vertex/, learn from p5.js website
  }
  endShape();

}*/


function drawCircleKristien2(x, y, w, h){
// I chose to draw an eye because the artist has a multicultural background. To me,the eye represents observation, identity, and perception across different cultures. It's a symbol of seeing the world through multiple lenses — personal, cultural, and spiritual.
let cx = x + w / 2;
  let cy = y + h / 2;
  let left = x;
  let right = x + w;
  let top = y;
  let bottom = y + h;
  
/*circle
  fill("#FFA726");
  noStroke();
  circle(x + w / 2, y + h / 2, max(w, h) + 50);
*/
  
//shapes around eyes
  let maxLayers = 7; // wanna 7 layer
  let startR = 80; // outer R
  let layerGap = 10; // 
  
  for (let layer = 0; layer < maxLayers; layer++) {
  let r = startR - layer * layerGap; 
  let count = 40 + layer * 5; 
  
  for (let i = 0; i < count; i++) {
    let angle = TWO_PI * i / count;
    let x = cx + r * cos(angle);
    let y = cy + r * sin(angle);

    if (i % 3 === 0) {
      fill('#e76f51');
      noStroke();
      circle(x, y, 8);
    } else if (i % 3 === 1) {
      fill('#90d4ff');
      noStroke();
      rect(x - 4, y - 4, 8, 8);
    } else {
      fill('#2c75ff');
      noStroke();
      triangle(x, y - 5, x + 5, y + 5, x - 5, y + 5);
    }
  }

// outer eye
  fill('#yellow');
  stroke('#111111');     
  strokeWeight(4); 
  beginShape();
  // up line
  vertex(left, cy);
  bezierVertex(cx - w * 0.2, top, cx + w * 0.2, top, right, cy);
  // got inspiration from website p5.js moon shape: https://p5js.org/reference/p5/bezierVertex/
  // down line
  bezierVertex(cx + w * 0.2, bottom, cx - w * 0.2, bottom, left, cy);
  endShape(CLOSE);
  //I got ChatGPT help to do math, that's too tricky for me to do all the math things :(

  
// middle
  let eyeRadius = min(w, h) / 1.5;//Let the eyeball occupy approximately half of the eye shape's width or height.
  drawMultiColorEyeball(cx, cy, eyeRadius);
  
function drawMultiColorEyeball(cx, cy, maxRadius) {
  let colors = [
  '#90d4ff',  
  '#3e9efc', 
  '#2c75ff', 
  '#6540f5',
  '#4b2ca7', 
  '#2b185a', 
  '#111111' ];

  noStroke();
  for (let i = 0; i < colors.length; i++) {
    let r = maxRadius * (1 - i * 0.15); // reduce 15% each layer
    fill(colors[i]); //colour list i made
    circle(cx, cy, r);
  }
}
  
// crucifix reflects the artist’s respect for all spiritual and cultural beliefs
  stroke('#ffffff');
  strokeWeight(2);
  line(cx - 4, cy, cx + 4, cy);
  line(cx, cy - 4, cx, cy + 9); 
      
 }
}

