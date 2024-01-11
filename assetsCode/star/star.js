// SETUP FUNCTION
function setup() {
  createCanvas(100, 100);
  angleMode(DEGREES);
}

// DRAW FUNCTION
function draw() {
  // Set background color
  // Gray
  // background(170);

  // Transparent background
  clear();
  background(0, 0, 0, 0);

  // Declare styles
  noStroke();
  radialFillGradient(50, 50, 50, 50, 10, 20, color(255, 255, 125), color(255, 255, 0));

  // Show stars
  starOne();
  // starTwo();
  // starThree();
}

// STAR ONE FUNCTION
function starOne() {
  beginShape();
    vertex(50, 10);
    bezierVertex(47.5, 45, 47.5, 45, 25, 25);
    bezierVertex(45, 47.5, 45, 47.5, 10, 50);
    bezierVertex(45, 52.5, 45, 52.5, 25, 75);
    bezierVertex(47.5, 55, 47.5, 55, 50, 90);
    bezierVertex(52.5, 55, 52.5, 55, 75, 75);
    bezierVertex(55, 52.5, 55, 52.5, 90, 50);
    bezierVertex(55, 47.5, 55, 47.5, 75, 25);
    bezierVertex(52.5, 45, 52.5, 45, 50, 10);
  endShape(CLOSE);
}

// STAR TWO FUNCTION
function starTwo() {
  beginShape();
    vertex(50, 10);
    bezierVertex(48, 48, 48, 48, 10, 50);
    bezierVertex(48, 52, 48, 52, 50, 90);
    bezierVertex(52, 52, 52, 52, 90, 50);
    bezierVertex(52, 48, 52, 48, 50, 10);
  endShape();
}

// STAR THREE FUNCTION
function starThree() {
  push();
    fill(255, 255, 255);
    
    translate(50, 50);
    scale(0.6);
    rotate(-18);
    star(0, 0, 30, 70, 5);
  pop();
}

// STAR FUNCTION
function star(x, y, radius1, radius2, npoints) {
  // Declare variables
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;

  // Draw star
  beginShape();
  // Repeat for every angle
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// RADIAL FILL GRADIENT FUNCTION
function radialFillGradient(
  startX, startY,
  endX, endY,
  startR, endR,
  colorOne, colorTwo) {
  // Declare variable
  let gradient = drawingContext.createRadialGradient(startX, startY, startR, endX, endY, endR);

  // Create color stops
  gradient.addColorStop(0, colorOne);
  gradient.addColorStop(1, colorTwo);

  // Draw gradient
  drawingContext.fillStyle = gradient;
}