// NUMBER OF SLICES
const SLICE_COUNT = 12;

// SETUP PSCOPE FUNCTION
function setup_pScope(pScope) {
  // pScope.output_mode(OUTPUT_GIF(1000));
  // pScope.output_mode(ANIMATED_FRAME);
  // pScope.output_mode(STATIC_DISK);
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW); // Counter-clockwise
  pScope.set_slice_count(SLICE_COUNT);

  // Load images and image sequences
  pScope.load_image_sequence('bubble-tea', 'png', 24);
  pScope.load_image('pearl', 'png');
  pScope.load_image('ice-cube', 'png');
}

function setup_layers(pScope) {
  // Circle Background
  new PLayer(null, 115, 120, 180); // Light purple

  // Ice Cube Layer
  let iceCubeLayer = new PLayer(iceCube);
  iceCubeLayer.mode(RING);
  iceCubeLayer.set_boundary(800, 1000);

  // Waves Layer
  let wavesLayer = new PLayer(waves);
  wavesLayer.mode(RING);
  wavesLayer.set_boundary(0, 800);

  // Planet Layer
  let planetLayer = new PLayer(planet);
  planetLayer.mode(RING);
  planetLayer.set_boundary(0, 380);

  // Pearl Layer
  let pearlLayer = new PLayer(pearl);
  pearlLayer.mode(SWIRL(1));
  pearlLayer.set_boundary(0, 500);

  // Bubble Tea Layer
  let bubbleTeaLayer = new PLayer(bubbleTea);
  bubbleTeaLayer.mode(RING);
  bubbleTeaLayer.set_boundary(0, 400);
}

// ICE CUBE FUNCTION
function iceCube(x, y, animation, pScope) {
  push();
    // Declare variables
    let leftIceCubeY = map(animation.wave(1), 0, 1, 0, 100);
    let centerIceCubeY = map(animation.wave(1), 0, 1, 0, 50);
    let rightIceCubeY = map(animation.wave(1), 0, 1, 100, 0);

    // Declare styles
    translate(0, -820);
    scale(0.2);

    // Left ice cube
    push();
      // Declare styles
      translate(-650, leftIceCubeY + 50);
      rotate(map(animation.wave(1), 0, 1, -5, 5)); // Rotate between -5 and 5 degrees
      
      // Draw image
      pScope.draw_image('ice-cube', 0, 0);
    pop();
    
    // Center ice cube
    push();
      // Declare styles
      translate(0, centerIceCubeY);
      rotate(map(animation.wave(1), 0, 1, -2.5, 2.5)); // Rotate between -2.5 and 2.5 degrees
      
      // Draw image
      pScope.draw_image('ice-cube', 0, 0);
    pop();

    // Right ice cube
    push();
      // Declare styles
      translate(650, rightIceCubeY + 50);
      rotate(map(animation.wave(1), 0, 1, 5, -5)); // Rotate between -5 and 5 degrees
      
      // Draw image
      pScope.draw_image('ice-cube', 0, 0);
    pop();
  pop();
}

// WAVES FUNCTION
function waves(x, y, animation, pScope) {
  push();
    // Declare variables
    let radius = 15;
    let offset = 800;

    // Declare styles
    noStroke();
    fill(245, 115, 135); // Dark pink
    // radialFillGradient(0, 0, 0, 0, 400, 800, color(175, 210, 210), color());
    
    // Only draw once
    if (animation.frame == 0) {
      // Draw shape
      beginShape();
        // Repeat for every angle
        for (let theta = 0; theta < 360; theta += 1) {
          let dx = (radius * cos(theta * 10) + offset) * cos(theta);
          let dy = (radius * cos(theta * 10) + offset) * sin(theta);
          vertex(dx, dy);
        }
      endShape();
    }
  pop();
}

// PLANET FUNCTION
function planet(x, y, animation, pScope) {
  push();
    // Declare style
    noStroke();
    fill(0, 215, 175); // Teal

    // Draw ellipse
    ellipse(0, 0, 800);
  pop();
}

// PEARL FUNCTION
function pearl(x, y, animation, pScope) {
  push();
    // Scale from 0.1x to 1x
    scale(map(animation.frame, 0, 1, 0.1, 1));

    // Rotate from 0 to 360 degrees
    rotate(animation.frame * 360);
    
    // Draw image
    pScope.draw_image('pearl', x, y);
  pop();
}

// BUBBLE TEA FUNCTION
function bubbleTea(x, y, animation, pScope) {
  push();
    // Declare variable
    let bubbleTeaY = y - map(animation.wave(1), 0, 1, 0, 200);

    // Declare styles
    translate(0, -525);
    scale(0.6);

    // Draw image sequence
    pScope.draw_image_from_sequence('bubble-tea', x, bubbleTeaY, animation.frame);
  pop();
}

// LINEAR FILL GRADIENT FUNCTION
function linearFillGradient(
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