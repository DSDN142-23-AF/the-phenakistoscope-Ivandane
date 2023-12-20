// NUMBER OF SLICES
const SLICE_COUNT = 12;

// SETUP PSCOPE FUNCTION
function setup_pScope(pScope){
  // pScope.output_mode(ANIMATED_FRAME);
  pScope.output_mode(STATIC_DISK);
  // pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false); // Set to false before hand-in
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  // Load Image
  pScope.load_image_sequence('bubble-tea', 'png', 24);
  pScope.load_image('pearl', 'png');
  pScope.load_image('ice-cube', 'png');
}

function setup_layers(pScope){
  // Draw Circle Background
  new PLayer(null, 15, 10, 60);

  // Ice Cube Layer
  let iceCubeLayer = new PLayer(iceCube);
  iceCubeLayer.mode(RING);
  iceCubeLayer.set_boundary(800, 1000);

  // Waves Layer
  let wavesLayer = new PLayer(waves);
  wavesLayer.mode(RING);
  wavesLayer.set_boundary(0, 850);

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
    noStroke();
    fill(140, 210, 235);
    
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

// PLANET FUNCTION
function planet(x, y, animation, pScope) {
  pScope.fill_background(105, 0, 190);
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
    translate(0, -500);
    scale(0.6);
    pScope.draw_image_from_sequence('bubble-tea', x, y - map(animation.wave(1), 0, 1, 0, 200), animation.frame);
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