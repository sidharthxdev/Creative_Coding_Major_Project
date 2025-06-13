/* For my individual component also I started with with referring to the Week 9 Lecture of 
responsive design example for the animation of the circles
Following the same and keeping the existing provided code in the lecture */

/* This sketch creates animated circles at a time interval of every second that move around the canvas 
and display different patterns (rings, dots, or a combination of both). */


//array for each cirlces(circle of life :p)
let animatedcircles = [];
let interval = 1000; // Time interval (in milliseconds) between automatic circle generation (here it is set to 1 second))
let lastAddedTime = 0; // Stores the last time a new circle was added

function setup() {
  createCanvas(windowWidth, windowHeight);
  animatedcircles.push(
    new patternCircle(width / 2, height / 2, random(16, 64))
  ); // Start with one circle at the center of the canvas
  // Initialize the timer for circle generation
  lastAddedTime = millis();
}


function draw() {
  background(0);

  // Add a new circlePattern at fixed intervals
  if (millis() - lastAddedTime > interval) {
    // Select a random existing ball as the origin
    let parentCircle = random(animatedcircles);
    // Select a random existing circle as the origin for the new circle
    // Create a new circle at the same position as the parent circle with a random size between 10-50 pixels
    animatedcircles.push(new patternCircle(parentCircle.circleXPos, parentCircle.circleYPos, random(16, 64)));
    lastAddedTime = millis(); 
    // Update our timer so we know when to add the next circle
  }

  // For loop to make every circle move and appear on screen
  for (let circlePattern of animatedcircles) {
    circlePattern.move();
    circlePattern.display();
  }
}

//for responsiveness
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let circle_Position of animatedcircles) {
    circle_Position.pos.x = constrain(circle_Position.pos.x, circle_Position.r, width - circle_Position.r);
    circle_Position.pos.y = constrain(circle_Position.pos.y, circle_Position.r, height - circle_Position.r);
  }
}

/* Class to create a circle with a specific pattern where each circle 
will have its own position, size, speed, color, and pattern type */
class patternCircle {
  constructor(starterXPos, starterYPos, starterRadius) {
    //Store the circle's starting position
    this.circleXPos = starterXPos;
    this.circleYPos = starterYPos;
    this.circleRadius = starterRadius;
    // Give the circle a random speed (Slower speed)
    this.circle_XSpeed = random(-1.5, 1.5);
    this.circle_YSpeed = random(-1.5, 1.5);
    // Randomly assign a pattern type: 0 = rings, 1 = dots, 2 = rings+dots
    this.patternType = floor(random(3));
    // Randomly assign a colour
    this.color = color(random(255), random(255), random(255));
  }

  // This function updates the circle's position and handles bouncing off walls
  move() {
    this.circleXPos += this.circle_XSpeed;
    this.circleYPos += this.circle_YSpeed;
    
     // Checking if the circle is about to hit the left or right edge of the screen
    if (
      this.circleXPos + this.circle_XSpeed + this.circleRadius / 2 > width ||
      this.circleXPos + this.circle_XSpeed - this.circleRadius / 2 < 0
    ) {
      //bounce off the boundaries
      this.circle_XSpeed *= -1;
    }

    // Checking if the circle is about to hit the top or bottom edge of the screen
    if (
      this.circleYPos + this.circleRadius / 2 > height ||
      this.circleYPos - this.circleRadius / 2 < 0
    ) {
      this.circle_YSpeed *= -1;
    }
  }


  //drawing the circle on the screen with its chosen pattern
  display() {
    noStroke();

    /*push() and pop() create a temporary drawing state
    to move the origin point without affecting other circles*/
    push();
    translate(this.circleXPos, this.circleYPos);

    if (this.patternType === 0) {
      // Concentric Rings
      let rings = floor(random(3, 7)); //number of rings
      for (let i = rings; i > 0; i--) {
        // Each ring gets a random color
        fill(
          random(100, 255),
          random(100, 255),
          random(100, 255),
        );
        circle(0, 0, (this.circleRadius * i) / rings); //draw the circle pattern
      }

/* I had used some help here from my friend from the computer science batch along with some
assitance from ai on figuring our the math for the dots and rings around the circle and 
its positining as this concept was a bit confusing for my independent execution */
    } else if (this.patternType === 1) {
      // circle with dots pattern
      let rings = floor(random(2, 5));

        // Create each ring of dots
      for (let r = 1; r <= rings; r++) {
        let dots = floor(random(8, 18));
        let ringRadius = (this.circleRadius / 2) * (r / rings);
        
      // Place each dot around the circle
        for (let d = 0; d < dots; d++) {
          let angle = (TWO_PI / dots) * d; // TWO_PI is a full circle (360 degrees)
          fill(
            random(100, 255),
            random(100, 255),
            random(100, 255),
            200
          );
          ellipse( // Drawiung the dot at the calculated position uning the cos and sin functions
            ringRadius * cos(angle), // Calculates x position
            ringRadius * sin(angle), // Calculates y position
            this.circleRadius / (rings * 2) //this controls the size of the dots
          );
        }
      }
      fill(random(100, 255), random(100, 255), random(100, 255), 220); //the center dot
      ellipse(0, 0, this.circleRadius / 5);
    } 
    
    else if (this.patternType === 2) { //for the second type of circle pattern following a similar structure from above
      // Combination: Rings + Dots
      let rings = floor(random(3, 6));
      for (let i = rings; i > 0; i--) { //drawing the rings
        // Each ring gets a random color
        fill(
          random(100, 255),
          random(100, 255),
          random(100, 255),
          180 // Added some transparency to the rings for some visual effect
        );
        circle(0, 0, (this.circleRadius * i) / rings);

        //adding dots around the rings
        // The number of dots in each ring is random
        let dots = floor(random(8, 16));
        let ringRadius = (this.circleRadius / 2) * (i / rings); //distance from the center for the current ring
        
        
        for (let d = 0; d < dots; d++) {
          let angle = (TWO_PI / dots) * d;
          fill(
            random(100, 255),
            random(100, 255),
            random(100, 255),
            200
          );
          ellipse(
            ringRadius * cos(angle),
            ringRadius * sin(angle),
            this.circleRadius / (rings * 2.5) //used a slightly smaller size for the dots
          );
        }
      }

      //center circle for the final pattern
      fill(random(100, 255), random(100, 255), random(100, 255), 220);
      ellipse(0, 0, this.circleRadius / 6);
    }
    pop(); // goes back to the initial state 
  }
}