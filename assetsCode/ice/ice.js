// Declare image variable
let img;

// PRELOAD FUNCTION
function preload() {
  img = loadImage('assets/ice-cube-outline.png');
}

// SETUP FUNCTION
function setup() {
  createCanvas(100, 100);
  // createCanvas(100, 100, WEBGL);
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

  // Load image
  // image(img, 0, 0, img.width / 5, img.height / 5);

  // Declare styles
  scale(4);
  // translate(38, 38);
  ice(0, 0);
}

// ICE FUNCTION
function ice(x, y) {
  // push();
  //   noFill();
  //   stroke(255);
  //   rotateX(-30);
  //   rotateY(-40);
  //   box(15);
  // pop();

  //   stroke(200, 245, 255); // Lighter Blue
  //   line(39.8, 56.6, 49, 51);
  //   line(49, 51, 49, 39);
  //   line(49, 51, 60.1, 55.6);

  push();
    stroke(255); // White
    strokeWeight(0.2);
    fillGradient(40, 40, 60, 60, color(140, 210, 235, 230), color(170, 240, 255, 230))
    translate(x - 38, y - 38);

    beginShape();
      vertex(38.9, 43.6);
      bezierVertex(37.9, 46.6, 38.8, 53.6, 39.8, 56.6);
      bezierVertex(39.8, 57.6, 51, 63.5, 51, 62.5);
      bezierVertex(51, 63.5, 60.1, 56.6, 60.1, 55.6);
      bezierVertex(61.1, 53.6, 61.7, 44.8, 60.7, 42.8);
      bezierVertex(60.7, 41.8, 49, 38, 49, 39);
      bezierVertex(49, 38, 38.9, 42.6, 38.9, 43.6);
    endShape();

    bezier(51, 50.6, 51.5, 52.6, 51.5, 58.5, 51, 60.5);
    bezier(40.9, 44.6, 42.9, 45.0, 47, 46.6, 49, 48.6);
    bezier(58.7, 43.8, 56.7, 44.5, 55, 45.5, 52.5, 48);

    push();
      stroke(255, 255, 255, 200); // White with 200/255 transparency
      strokeWeight(2);
      strokeCap(ROUND);

      bezier(41.4, 47, 40.9, 49, 41.5, 53, 42, 55);
      bezier(44, 43.5, 46, 42, 47, 41.5, 49, 41.3);
    pop();
  pop();
}

// FILL GRADIENT FUNCTION
function fillGradient(
  startX, startY,
  endX, endY,
  colorOne, colorTwo) {
  // Declare variable
  let gradient = drawingContext.createLinearGradient(startX, startY, endX, endY);
  
  // Create color stops
  gradient.addColorStop(0, colorOne);
  gradient.addColorStop(1, colorTwo);

  // Draw gradient
  drawingContext.fillStyle = gradient;
}