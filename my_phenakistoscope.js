// NUMBER OF SLICES
const SLICE_COUNT = 12;

// SETUP PSCOPE FUNCTION
function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW); // Counter-clockwise
  pScope.set_slice_count(SLICE_COUNT);

  // Load image sequence
  pScope.load_image_sequence('bubble-tea', 'png', 24);

  // Load images
  pScope.load_image('star-one', 'png');
  pScope.load_image('star-two', 'png');
  pScope.load_image('star-three', 'png');
  pScope.load_image('ice-cube', 'png');
  pScope.load_image('waves', 'png');
}

// SETUP LAYERS FUNCTION
function setup_layers(pScope) {
  // Circle Background
  new PLayer(null, 0);

  // Space Layer
  let spaceLayer = new PLayer(space);
  spaceLayer.mode(RING);
  spaceLayer.set_boundary(0, 1000);

  // Stars Layer
  let starsLayer = new PLayer(stars);
  starsLayer.mode(RING);
  starsLayer.set_boundary(750, 1000);

  // Shooting Star Layer
  let shootingStarLayer = new PLayer(shootingStar);
  shootingStarLayer.mode(RING);
  shootingStarLayer.set_boundary(800, 850);

  // Ice Cube Layer
  let iceCubeLayer = new PLayer(iceCube);
  iceCubeLayer.mode(RING);
  iceCubeLayer.set_boundary(700, 800);

  // Planet Layer
  let planetLayer = new PLayer(planet);
  planetLayer.mode(RING);
  planetLayer.set_boundary(0, 380);

  // Waves Layer
  let wavesLayer = new PLayer(waves);
  wavesLayer.mode(RING);
  wavesLayer.set_boundary(0, 750);

  // Bubble Tea Layer
  let bubbleTeaLayer = new PLayer(bubbleTea);
  bubbleTeaLayer.mode(RING);
  bubbleTeaLayer.set_boundary(0, 400);
}

// SPACE FUNCTION
function space() {
  // Declare styles
  noStroke();
  radialFillGradient(0, 0, 0, 0, 1000, 750, color(21, 24, 54), color(45, 50, 110));
  
  // Draw ellipse
  ellipse(0, 0, 2000);
}

// STARS FUNCTION
function stars(x, y, animation, pScope) {
  // Declare arrays
  let bgStarAlphaAmounts = [
    map(animation.frame * 2, 0, 1, 0, 150),
    map(animation.frame, 0, 1, 150, 0),
    map(animation.frame * 2, 0, 1, 150, 0),
    map(animation.frame, 0, 1, 0, 150)
  ];
  let starsScales = [
    map(animation.wave(1), 0, 1, 0.25, 0.2),
    map(animation.wave(1), 0, 1, 0.1, 0.15),
    map(animation.wave(1), 0, 1, 0.15, 0.1)
  ];

  // Declare variable
  let currentFrame = floor(map(animation.frame, 0, 1, 0, 12));

  // Background Stars
  push();
    // Declare styles
    translate(x - 180, y - 830);
    rotate(-10);
    scale(0.05);

    // Calculate transparency
    if (currentFrame < 6) {
      tint(255, bgStarAlphaAmounts[0]);
    }
    if (currentFrame >= 6) {
      tint(255, bgStarAlphaAmounts[1]);
    }
    
    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(x - 200, y - 900);
    rotate(5);
    scale(0.06);

    // Calculate transparency
    if (currentFrame < 6) {
      tint(255, bgStarAlphaAmounts[2]);
    }
    if (currentFrame >= 6) {
      tint(255, bgStarAlphaAmounts[3]);
    }

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(x - 160, y - 940);
    rotate(-15);
    scale(0.07);

    // Calculate transparency
    if (currentFrame < 6) {
      tint(255, bgStarAlphaAmounts[2]);
    }
    if (currentFrame >= 6) {
      tint(255, bgStarAlphaAmounts[3]);
    }

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(x - 80, y - 880);
    rotate(7.5);
    scale(0.08);
    
    // Calculate transparency
    if (currentFrame < 3) {
      tint(255, bgStarAlphaAmounts[2]);
    }
    if (currentFrame >= 3) {
      tint(255, bgStarAlphaAmounts[3]);
    }

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(x - 60, y - 970);
    rotate(-2.5);
    scale(0.04);

    // Calculate transparency
    if (currentFrame < 9) {
      tint(255, bgStarAlphaAmounts[2]);
    }
    if (currentFrame >= 9) {
      tint(255, bgStarAlphaAmounts[3]);
    }

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();

  push();
    // Declare styles
    translate(x + 180, y - 830);
    rotate(10);
    scale(0.05);

    // Calculate transparency
    if (currentFrame < 6) {
      tint(255, bgStarAlphaAmounts[0]);
    }
    if (currentFrame >= 6) {
      tint(255, bgStarAlphaAmounts[1]);
    }
    
    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(x + 200, y - 900);
    rotate(-5);
    scale(0.06);

    // Calculate transparency
    if (currentFrame < 6) {
      tint(255, bgStarAlphaAmounts[2]);
    }
    if (currentFrame >= 6) {
      tint(255, bgStarAlphaAmounts[3]);
    }

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(x + 160, y - 940);
    rotate(15);
    scale(0.07);

    // Calculate transparency
    if (currentFrame < 6) {
      tint(255, bgStarAlphaAmounts[2]);
    }
    if (currentFrame >= 6) {
      tint(255, bgStarAlphaAmounts[3]);
    }

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(x + 80, y - 880);
    rotate(-7.5);
    scale(0.08);

    // Calculate transparency
    if (currentFrame < 3) {
      tint(255, bgStarAlphaAmounts[2]);
    }
    if (currentFrame >= 3) {
      tint(255, bgStarAlphaAmounts[3]);
    }

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();
  push();
    // Declare styles
    translate(x + 60, y - 970);
    rotate(2.5);
    scale(0.04);

     // Calculate transparency
    if (currentFrame < 9) {
      tint(255, bgStarAlphaAmounts[2]);
    }
    if (currentFrame >= 9) {
      tint(255, bgStarAlphaAmounts[3]);
    }

    // Draw image
    pScope.draw_image('star-three', 0, 0);
  pop();

  // Star Left One
  push();
    // Declare styles
    translate(x - 100, y - 940);
    scale(starsScales[1]);

    // Draw image
    pScope.draw_image('star-two', 0, 0);
  pop();

  // Star Left Two
  push();
    // Declare styles
    translate(x - 150, y - 880);
    scale(starsScales[2]);

    // Draw image
    pScope.draw_image('star-two', 0, 0);
  pop();

  // Star Center
  push();
    // Declare styles
    translate(x, y - 940);
    scale(starsScales[0]);

    // Draw image
    pScope.draw_image('star-one', 0, 0);
  pop();

  // Star Right One
  push();
    // Declare styles
    translate(x + 100, y - 940);
    scale(starsScales[2]);

    // Draw image
    pScope.draw_image('star-two', 0, 0);
  pop();

  // Star Right Two
  push();
    // Declare styles
    translate(x + 150, y - 880);
    scale(starsScales[1]);

    // Draw image
    pScope.draw_image('star-two', 0, 0);
  pop();
}

// SHOOTING STAR FUNCTION
function shootingStar(x, y, animation, pScope) {
  // Only draw once
  if (animation.frame == 0) {
    // Declare styles
    translate(x, y - 835);
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = color(255);
    drawingContext.filter = 'blur(0.75px)';

    // Tail
    push();
      // Declare styles
      scale(1.2);
      noStroke();
      fill(255);

      // Draw tail
      beginShape();
        vertex(50, 5);
        bezierVertex(40, -5, -20, -10, -20, -5);
        bezierVertex(-30, -5, -30, 5, -20, 0);
        bezierVertex(-10, 2.5, 10, -5, 50, 5);
      endShape();
    pop();

    // Head
    push();
      // Declare style
      scale(0.06);

      // Draw image
      pScope.draw_image('star-three', -450, -50);
    pop();
  }
}

// ICE CUBE FUNCTION
function iceCube(x, y, animation, pScope) {
  // Declare array
  let iceCubesY = [
    map(animation.wave(1), 0, 1, 0, 25),
    map(animation.wave(1), 0, 1, 0, 100),
    map(animation.wave(1), 0, 1, 100, 0)
  ];

  // Declare styles
  translate(x, y - 760);
  scale(0.175);

  // Left ice cube
  push();
    // Declare styles
    translate(-650, iceCubesY[1] + 50);
    rotate(map(animation.wave(1), 0, 1, -5, 5));
    
    // Draw image
    pScope.draw_image('ice-cube', 0, 0);
  pop();
  
  // Center ice cube
  push();
    // Declare styles
    translate(0, iceCubesY[0]);
    rotate(map(animation.wave(1), 0, 1, -2.5, 2.5));
    
    // Draw image
    pScope.draw_image('ice-cube', 0, 0);
  pop();

  // Right ice cube
  push();
    // Declare styles
    translate(650, iceCubesY[2] + 50);
    rotate(map(animation.wave(1), 0, 1, 5, -5));
    
    // Draw image
    pScope.draw_image('ice-cube', 0, 0);
  pop();
}

// WAVES FUNCTION
function waves(x, y, animation, pScope) {
  // Only draw once
  if (animation.frame == 0) {
    // Draw image
    pScope.draw_image('waves', x, y);
  }
}

// PLANET FUNCTION
function planet(x, y, animation) {
  // Declare styles
  noStroke();
  radialFillGradient(0, -400, 0, 0, 100, 500, color(120, 240, 230), color(20, 140, 120));

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
      bezierVertex(-200, 250, 200, 120, 500, 150);
      vertex(500, 100);
      bezierVertex(200, 120, -200, 100, -500, 100);
    endShape();

    ellipse(-200, -200, 100, 50);
    ellipse(-150, -270, 90, 40);

    // Draw shadow
    fill(30, 125, 110);
    beginShape();
      vertex(500, 150);
      vertex(500, 500);
      vertex(-500, 500);
      vertex(-500, 150);
      vertex(-400, 150);
      bezierVertex(-100, 400, 100, 400, 400, 150);
    endShape();
  }
}

// BUBBLE TEA FUNCTION
function bubbleTea(x, y, animation, pScope) {
  // Declare arrays
  let bubbleTeaY = [
    map(animation.frame * 2, 0, 1, 0, -200),
    map(animation.frame / 2, 0, 1, -200, 0)
  ];
  let shadowSize = [
    map(animation.frame, 0, 1, 1, 0.1),
    map(animation.frame, 0, 1, 0.25, 1)
  ];

  // Declare variables
  let currentFrame = floor(map(animation.frame, 0, 1, 0, 12));

  // Declare styles
  translate(x, y - 525);
  scale(0.6);

  // Shadow
  push();
    // Declare styles
    noStroke();
    fill(30, 125, 110);

    // Calculate scale
    if (currentFrame > 3 && currentFrame <= 6) {
      scale(shadowSize[0], 1);
    }
    if (currentFrame > 6 && currentFrame < 9) {
      scale(shadowSize[1], 1);
    }
    else {
      scale(1);
    }
    ellipse(0, 235, 175, 50);
  pop();

  // Bubble Tea
  push();
    // Calculate Y values
    if (currentFrame > 3 && currentFrame <= 6) {
      translate(0, bubbleTeaY[0]);
    }
    if (currentFrame > 6 && currentFrame < 9) {
      translate(0, bubbleTeaY[1]);
    }
    else {
      translate(0, 0);
    }

    // Draw image sequence
    pScope.draw_image_from_sequence('bubble-tea', 0, 0, animation.frame);
  pop();
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