// NUMBER OF SLICES
const SLICE_COUNT = 12;

// SETUP PSCOPE FUNCTION
function setup_pScope(pScope){
  //pScope.output_mode(ANIMATED_FRAME);
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false); // Set to false before hand-in
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  // Load Image
  pScope.load_image('bubble-tea', 'png');
  pScope.load_image('pearl', 'png');
  pScope.load_image('ice-cube', 'png');
}

function setup_layers(pScope){
  // Draw Circle Background
  new PLayer(null, 170);

  // Ice Cube Layer
  let iceCubeLayer = new PLayer(iceCube);
  iceCubeLayer.mode(RING);
  iceCubeLayer.set_boundary(800, 1000);

  // Waves Layer
  let wavesLayer = new PLayer(waves);
  wavesLayer.mode(RING);
  wavesLayer.set_boundary(0, 850);

  // Inner Circle Layer
  let innerCircleLayer = new PLayer(innerCircle);
  innerCircleLayer.mode(RING);
  innerCircleLayer.set_boundary(0, 400);

  // Pearl Layer
  let pearlLayer = new PLayer(pearl);
  pearlLayer.mode(SWIRL(1));
  pearlLayer.set_boundary(0, 400);

  // Bubble Tea Layer
  let bubbleTeaLayer = new PLayer(bubbleTea);
  bubbleTeaLayer.mode(RING);
  bubbleTeaLayer.set_boundary(0, 400);
}

// ICE CUBE FUNCTION
function iceCube(x, y, animation, pScope) {
  push();
    translate(0, -880);
    scale(0.25);
    push();
      translate(-500, 100 * animation.wave(1));
      rotate(map(animation.wave(1), 0, 1, -5, 5));
      pScope.draw_image('ice-cube', 0, 0);
    pop();
    
    push();
      translate(0, 50 * animation.wave(1));
      pScope.draw_image('ice-cube', 0, 0);
    pop();

    push();
      translate(500, 100 * animation.wave(-1));
      rotate(map(animation.wave(1), 0, 1, 5, -5));
      pScope.draw_image('ice-cube', 0, 0);
    pop();
  pop();
}

// WAVES FUNCTION
function waves(x, y, animation, pScope) {
  push();
    let radius = 15;
    let offset = 850;
    fill(255);
    
    if (animation.frame == 0) {
      beginShape();
        for (let theta = 0; theta < 360; theta += 1) {
          let dx = (radius * cos(theta * 10) + offset) * cos(theta);
          let dy = (radius * cos(theta * 10) + offset) * sin(theta);
          vertex(dx, dy);
        }
      endShape();
    }
  pop();
}

// INNER CIRCLE FUNCTION
function innerCircle(x, y, animation, pScope) {
  pScope.fill_background(3, 186, 252);
}

// PEARL FUNCTION
function pearl(x, y, animation, pScope) {
  push();
    scale(map(animation.frame, 0, 1, 0.1, 0.75));
    rotate(animation.frame * 360);
    pScope.draw_image('pearl', x, y);
  pop();
}

// BUBBLE TEA FUNCTION
function bubbleTea(x, y, animation, pScope) {
  push();
    translate(0, -400);
    scale(1.25);
    pScope.draw_image('bubble-tea', x, y - (animation.wave(0.5) * 150));
  pop();
}

// FILL GRADIENT FUNCTION
function fillGradient(
  startX, startY,
  endX, endY,
  colorOne, colorTwo) {
  let gradient = drawingContext.createLinearGradient(startX, startY, endX, endY);
  gradient.addColorStop(0, colorOne);
  gradient.addColorStop(1, colorTwo);
  drawingContext.fillStyle = gradient;
}