// NUMBER OF SLICES
const SLICE_COUNT = 12;

// SETUP PSCOPE FUNCTION
function setup_pScope(pScope) {
  // pScope.output_mode(OUTPUT_GIF(1000));
  // pScope.output_mode(STATIC_FRAME);
  // pScope.output_mode(ANIMATED_FRAME);
  // pScope.output_mode(STATIC_DISK);
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW); // Counter-clockwise
  pScope.set_slice_count(SLICE_COUNT);

  // Load images and image sequences
  pScope.load_image_sequence('bubble-tea', 'png', 24);
  pScope.load_image('star-one', 'png');
  pScope.load_image('star-two', 'png');
  pScope.load_image('star-three', 'png');
  pScope.load_image('ice-cube', 'png');
  pScope.load_image('waves', 'png');
  pScope.load_image('pearl', 'png');
}

function setup_layers(pScope) {
  // Circle Background
  new PLayer(null, 45, 50, 110); // Light purple

  // Stars Layer
  let starsLayer = new PLayer(stars);
  starsLayer.mode(RING);
  starsLayer.set_boundary(800, 1000);

  // Ice Cube Layer
  let iceCubeLayer = new PLayer(iceCube);
  iceCubeLayer.mode(RING);
  iceCubeLayer.set_boundary(800, 1000);

  // Planet Layer
  let planetLayer = new PLayer(planet);
  planetLayer.mode(RING);
  planetLayer.set_boundary(0, 380);

  // Waves Layer
  let wavesLayer = new PLayer(waves);
  wavesLayer.mode(RING);
  wavesLayer.set_boundary(0, 800);

  // // Pearl Layer
  // let pearlLayer = new PLayer(pearl);
  // pearlLayer.mode(SWIRL(1));
  // pearlLayer.set_boundary(0, 500);

  // Bubble Tea Layer
  let bubbleTeaLayer = new PLayer(bubbleTea);
  bubbleTeaLayer.mode(RING);
  bubbleTeaLayer.set_boundary(0, 400);
}

// STARS FUNCTION
function stars(x, y, animation, pScope) {
  // Declare arrays
  let bgStarAlphas = [150, 150, 150, 150, 150];
  let bgStarAlphaAmounts = [0, 0, 0, 0, 0];

  // Declare variables
  let currentFrame = floor(map(animation.frame, 0, 1, 0, 12));
  let centerStarScale = map(animation.wave(1), 0, 1, 0.25, 0.2);
  let starsScale = map(animation.wave(1), 0, 1, 0.1, 0.15);

  // Background stars
  push();
    // Declare styles
    translate(-230, -950);
    rotate(-10);
    scale(0.05);

    // Start on the 1st frame
    if (currentFrame >= 0) {
      bgStarAlphaAmounts[0] = 2 * map(animation.frame, 0, 1, 150, 0);
    }
    else if (currentFrame >= 6) {
      bgStarAlphaAmounts[0] = 2 * map(animation.frame, 0, 1, 0, 150);
    }
    bgStarAlphas[0] -= bgStarAlphaAmounts[0];
    tint(255, bgStarAlphas[0]);
    
    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(-200, -900);
    rotate(5);
    scale(0.06);

    // Start on the 6th frame
    if (currentFrame >= 6) {
      bgStarAlphaAmounts[1] = 2 * map(animation.frame, 0, 1, 150, 0);
    }
    else if (currentFrame >= 6) {
      bgStarAlphaAmounts[1] = 2 * map(animation.frame, 0, 1, 0, 150);
    }
    bgStarAlphas[1] -= bgStarAlphaAmounts[1];
    tint(255, bgStarAlphas[1]);

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(-160, -940);
    rotate(-15);
    scale(0.07);

    // Start on the 6th frame
    if (currentFrame >= 6) {
      bgStarAlphaAmounts[2] = 2 * map(animation.frame, 0, 1, 150, 0);
    }
    else {
      bgStarAlphaAmounts[2] = 2 * map(animation.frame, 0, 1, 0, 150);
    }
    bgStarAlphas[2] -= bgStarAlphaAmounts[2];
    tint(255, bgStarAlphas[2]);

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(-80, -880);
    rotate(7.5);
    scale(0.08);

    // Start on the 3rd frame
    if (currentFrame >= 3) {
      bgStarAlphaAmounts[3] = 2 * map(animation.frame, 0, 1, 150, 0);
    }
    else {
      bgStarAlphaAmounts[3] = 2 * map(animation.frame, 0, 1, 0, 150);
    }
    bgStarAlphas[3] -= bgStarAlphaAmounts[3];
    tint(255, bgStarAlphas[3]);

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(-60, -970);
    rotate(-2.5);
    scale(0.04);

    // Start on the 9th frame
    if (currentFrame >= 9) {
      bgStarAlphaAmounts[4] = 2 * map(animation.frame, 0, 1, 150, 0);
    }
    else {
      bgStarAlphaAmounts[4] = 2 * map(animation.frame, 0, 1, 0, 150);
    }
    bgStarAlphas[4] -= bgStarAlphaAmounts[4];
    tint(255, bgStarAlphas[4]);

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();

  push();
    // Declare styles
    translate(230, -950);
    rotate(10);
    scale(0.05);

    // Start on the 1st frame
    if (currentFrame >= 0) {
      bgStarAlphaAmounts[0] = 2 * map(animation.frame, 0, 1, 150, 0);
    }
    else if (currentFrame >= 6) {
      bgStarAlphaAmounts[0] = 2 * map(animation.frame, 0, 1, 0, 150);
    }
    bgStarAlphas[0] -= bgStarAlphaAmounts[0];
    tint(255, bgStarAlphas[0]);
    
    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(200, -900);
    rotate(-5);
    scale(0.06);

    // Start on the 6th frame
    if (currentFrame >= 6) {
      bgStarAlphaAmounts[1] = 2 * map(animation.frame, 0, 1, 150, 0);
    }
    else if (currentFrame >= 6) {
      bgStarAlphaAmounts[1] = 2 * map(animation.frame, 0, 1, 0, 150);
    }
    bgStarAlphas[1] -= bgStarAlphaAmounts[1];
    tint(255, bgStarAlphas[1]);

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(160, -940);
    rotate(15);
    scale(0.07);

    // Start on the 6th frame
    if (currentFrame >= 6) {
      bgStarAlphaAmounts[2] = 2 * map(animation.frame, 0, 1, 150, 0);
    }
    else {
      bgStarAlphaAmounts[2] = 2 * map(animation.frame, 0, 1, 0, 150);
    }
    bgStarAlphas[2] -= bgStarAlphaAmounts[2];
    tint(255, bgStarAlphas[2]);

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(80, -880);
    rotate(-7.5);
    scale(0.08);

    // Start on the 3rd frame
    if (currentFrame >= 3) {
      bgStarAlphaAmounts[3] = 2 * map(animation.frame, 0, 1, 150, 0);
    }
    else {
      bgStarAlphaAmounts[3] = 2 * map(animation.frame, 0, 1, 0, 150);
    }
    bgStarAlphas[3] -= bgStarAlphaAmounts[3];
    tint(255, bgStarAlphas[3]);

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(60, -970);
    rotate(2.5);
    scale(0.04);

    // Start on the 9th frame
    if (currentFrame >= 9) {
      bgStarAlphaAmounts[4] = 2 * map(animation.frame, 0, 1, 150, 0);
    }
    else {
      bgStarAlphaAmounts[4] = 2 * map(animation.frame, 0, 1, 0, 150);
    }
    bgStarAlphas[4] -= bgStarAlphaAmounts[4];
    tint(255, bgStarAlphas[4]);

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();

  // Left star one
  push();
    // Declare styles
    translate(-100, -940);
    scale(starsScale);

    // Draw image
    pScope.draw_image('star-two', 0, 0);
  pop();

  // Left star two
  push();
    // Declare styles
    translate(-150, -880);
    scale(starsScale);

    // Draw image
    pScope.draw_image('star-two', 0, 0);
  pop();

  // Center star
  push();
    // Declare styles
    translate(0, -925);
    scale(centerStarScale);

    // Draw image
    pScope.draw_image('star-one', 0, 0);
  pop();

  // Right star one
  push();
    // Declare styles
    translate(100, -940);
    scale(starsScale);

    // Draw image
    pScope.draw_image('star-two', 0, 0);
  pop();

  // Right star two
  push();
    // Declare styles
    translate(150, -880);
    scale(starsScale);

    // Draw image
    pScope.draw_image('star-two', 0, 0);
  pop();
}

// ICE CUBE FUNCTION
function iceCube(x, y, animation, pScope) {
  // Declare variables
  let leftIceCubeY = map(animation.wave(1), 0, 1, 0, 100);
  let centerIceCubeY = map(animation.wave(1), 0, 1, 0, 25);
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
}

// WAVES FUNCTION
function waves(x, y, animation, pScope) {
  if (animation.frame == 0) {
    pScope.draw_image('waves', 0, 0);
  }
}

// PLANET FUNCTION
function planet(x, y, animation, pScope) {
  push();
    // Declare style
    noStroke();
    radialFillGradient(-400, -400, 400, 400, 400, 400, color(145, 210, 200), color(0, 215, 175));

    // Only draw once
    if (animation.frame == 0) {
      // Draw planet
      ellipse(0, 0, 800);

      // Draw craters
      fill(255, 255, 255, 100);
      beginShape();
        vertex(-500, -100);
        vertex(-500, 100);
        bezierVertex(-200, 100, 200, -25, 500, 100);
        vertex(500, -100);
        bezierVertex(200, -200, -200, -50, -500, -100);
      endShape();

      beginShape();
        vertex(-500, 100);
        vertex(-500, 120);
        bezierVertex(-200, 120, 200, 130, 500, 150);
        vertex(500, 100);
        bezierVertex(200, 120, -200, 100, -500, 100);
      endShape();

      ellipse(-200, -200, 100, 50);
      ellipse(-150, -270, 90, 40);

      // Draw shadow
      fill(0, 50);
      beginShape();
        vertex(500, -100);
        vertex(500, 500);
        vertex(-500, 500);
        vertex(-500, 300);
        bezierVertex(-400, 300, 300, 600, 400, -100);
      endShape();
    }
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