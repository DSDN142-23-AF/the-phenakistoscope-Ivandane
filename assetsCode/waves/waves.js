// SETUP FUNCTION
function setup() {
  createCanvas(2000, 2000);
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

  // Declare style
  translate(1000, 1000);

  // Draw main wave
  push();
    radialFillGradient(0, -1100, 0, -1100, 50, 600, color(255, 155, 170), color(245, 115, 135));
    strokeWeight(15);
    drawingContext.filter = 'blur(2px)';
    stroke(255, 135, 155);
    
    waves(750);
  pop();

  // Draw shadings
  push();
    noFill();
    strokeWeight(15);
    drawingContext.filter = 'blur(10px)';
    
    stroke(255, 130, 150);
    waves(650);

    stroke(255, 120, 140);
    waves(550);

    stroke(255, 110, 130);
    waves(450);
  pop();

  // Draw contour
  erase();
    ellipse(0, 0, 800);
  noErase();
}

// WAVES FUNCTION
function waves(offset) {
  // Declare variable
  let radius = 15;

  // Draw shape
  beginShape();
    // Repeat for every angle
    for (let theta = 0; theta < 360; theta += 1) {
      let dx = (radius * cos(theta * 10) + offset) * cos(theta);
      let dy = (radius * cos(theta * 10) + offset) * sin(theta);
      vertex(dx, dy);
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