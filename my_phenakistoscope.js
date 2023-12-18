// NUMBER OF SLICES
const SLICE_COUNT = 12;

// SETUP PSCOPE FUNCTION
function setup_pScope(pScope){
  //pScope.output_mode(ANIMATED_FRAME);
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true); // Set to false before hand-in
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  // Load Image
  pScope.load_image('bubble-tea', 'png');
  pScope.load_image('pearl', 'png');
}

function setup_layers(pScope){
  // Draw Circle Background
  new PLayer(null, 170);

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

  // Outer Circle Layer
  let outerCircleLayer = new PLayer(outerCircle);
  outerCircleLayer.mode(RING);
  outerCircleLayer.set_boundary(800, 1000);

  // Ice Cube Layer
}

// INNER CIRCLE FUNCTION
function innerCircle(x, y, animation, pScope) {
  pScope.fill_background(3, 186, 252, 255);
}

// BUBBLE TEA FUNCTION
function bubbleTea(x, y, animation, pScope) {
  push();
    translate(0, -400);
    scale(1.25);
    pScope.draw_image('bubble-tea', x, y - (animation.wave(0.5) * 150));
  pop();
}

// PEARL FUNCTION
function pearl(x, y, animation, pScope) {
  push();
    scale(map(animation.frame, 0, 1, 0.1, 0.75));
    rotate(animation.frame * 360);
    pScope.draw_image('pearl', x, y);
  pop();
}

// OUTER CIRCLE FUNCTION
function outerCircle(x, y, animation, pScope) {
  pScope.fill_background(3, 186, 252, 255);
}