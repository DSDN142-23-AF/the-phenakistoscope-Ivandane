// SETUP FUNCTION
function setup() {
  createCanvas(100, 100);
  angleMode(DEGREES);
  frameRate(24);
}

// DRAW FUNCTION
function draw() {
  // Declare variables
  let currentFrame = frameCount % 24;
  let teaColor = [166, 122, 66];
  // console.log(currentFrame);
  
  // Set background color
  // Gray
  // background(170);

  // Transparent background
  clear();
  background(0, 0, 0, 0);

  // Declare styles
  scale(0.75);
  translate(16.6, 34);
  strokeWeight(0.5);

  bubbleTea(currentFrame);
  // bubbleTea(0); // Input specific frame
}

// BUBBLE TEA FUNCTION
function bubbleTea(frame) {
  lidOne(frame);
  cupOne(frame);
  straw(frame);
  tea(frame);
  pearls(frame);
  cupTwo(frame);
  lidTwo(frame);
  eyes(frame);
  mouth(frame);
}

// CUP ONE FUNCTION
function cupOne(frame) {
  push();
    stroke(0); // Black
    fill(255, 255, 255, 100); // White with 100/255 transparency

    beginShape();
    if (frame == 0 || frame == 12) {
      vertex(25, 41);
      bezierVertex(40, 37.5, 60, 37.5, 75, 41);
      bezierVertex(60, 45, 40, 45, 25, 41);
    }

    if (frame == 1 || frame == 11 || frame == 13 || frame == 23) {
      vertex(25, 45);
      bezierVertex(40, 41.5, 60, 41.5, 75, 45);
      bezierVertex(60, 50, 40, 50, 25, 45);
    }

    if (frame == 2 || frame == 10 || frame == 14 || frame == 22) {
      vertex(25, 47.5);
      bezierVertex(40, 44, 60, 44, 75, 47.5);
      bezierVertex(60, 52.5, 40, 52.5, 25, 47.5);
    }

    if (frame == 3 || frame == 9 || frame == 15 || frame == 21) {
      vertex(25, 50);
      bezierVertex(40, 46.5, 60, 46.5, 75, 50);
      bezierVertex(60, 55, 40, 55, 25, 50);
    }

    if (frame == 4 || frame == 8 || frame == 16 || frame == 20) {
      vertex(25, 52);
      bezierVertex(40, 48.5, 60, 48.5, 75, 52);
      bezierVertex(60, 57, 40, 57, 25, 52);
    }

    if (frame == 5 || frame == 7 || frame == 17 || frame == 19) {
      vertex(25, 54);
      bezierVertex(40, 50.5, 60, 50.5, 75, 54);
      bezierVertex(60, 59, 40, 59, 25, 54);
    }

    if (frame == 6 || frame == 18) {
      vertex(25, 55);
      bezierVertex(40, 52.5, 60, 52.5, 75, 55);
      bezierVertex(60, 60, 40, 60, 25, 55);
    }
    endShape();
    
    noFill();
    bezier(35, 96, 40, 94, 60, 94, 65, 96);
  pop();
}

// CUP TWO FUNCTION
function cupTwo(frame) {
  push();
    stroke(0); // Black
    fill(255, 255, 255, 100); // White with 100/255 transparency

    beginShape();
    if (frame == 0 || frame == 12) {
      vertex(25, 41);
      vertex(35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      vertex(75, 41);
      bezierVertex(60, 45, 40, 45, 25, 41);
    }

    if (frame == 1 || frame == 11 || frame == 13 || frame == 23) {
      vertex(25, 45);
      bezierVertex(32, 65, 30, 80, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(70, 80, 68, 65, 75, 45);
      bezierVertex(60, 50, 40, 50, 25, 45);
    }

    if (frame == 2 || frame == 10 || frame == 14 || frame == 22) {
      vertex(25, 47.5);
      bezierVertex(31, 67.5, 25, 82.5, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 82.5, 69, 67.5, 75, 47.5);
      bezierVertex(60, 52.5, 40, 52.5, 25, 47.5);
    }

    if (frame == 3 || frame == 9 || frame == 15 || frame == 21) {
      vertex(25, 50);
      bezierVertex(30, 70, 25, 85, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 85, 70, 70, 75, 50);
      bezierVertex(60, 55, 40, 55, 25, 50);
    }

    if (frame == 4 || frame == 8 || frame == 16 || frame == 20) {
      vertex(25, 52);
      bezierVertex(27.5, 72, 25, 87, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 87, 72.5, 72, 75, 52);
      bezierVertex(60, 57, 40, 57, 25, 52);
    }

    if (frame == 5 || frame == 7 || frame == 17 || frame == 19) {
      vertex(25, 54);
      bezierVertex(25, 74, 25, 89, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 89, 75, 74, 75, 54);
      bezierVertex(60, 59, 40, 59, 25, 54);
    }

    if (frame == 6 || frame == 18) {
      vertex(25, 55);
      bezierVertex(20, 75, 25, 90, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 90, 80, 75, 75, 55);
      bezierVertex(60, 60, 40, 60, 25, 55);
    }
    endShape();
    
  pop();
}

// LID ONE FUNCTION
function lidOne(frame) {
  push();
    let lidOneY = 0;
    if (frame == 0 || frame == 12 || frame == 14) {
      lidOneY = 10.5;
    }

    if (frame == 1 || frame == 11) {
      lidOneY = 14.5;
    }

    if (frame == 2 || frame == 10) {
      lidOneY = 16.5;
    }

    if (frame == 3 || frame == 9) {
      lidOneY = 19.5;
    }

    if (frame == 4 || frame == 8) {
      lidOneY = 21.5;
    }

    if (frame == 5 || frame == 7) {
      lidOneY = 23.5;
    }

    if (frame == 6) {
      lidOneY = 24.5;
    }

    if (frame == 13) {
      lidOneY = 12.5;
    }

    if (frame == 15 || frame == 22) {
      lidOneY = 8.5;
    }

    if (frame == 16 || frame == 21) {
      lidOneY = 6.5;
    }

    if (frame == 17) {
      lidOneY = 4.5;
    }

    if (frame == 18) {
      lidOneY = 2.5;
    }

    if (frame == 19) {
      lidOneY = 3.83;
    }

    if (frame == 20) {
      lidOneY = 5.16;
    }

    if (frame == 23) {
      lidOneY = 9.5;
    }
    fill(255, 255, 255, 100); // White with 100/255 transparency
    beginShape();
      vertex(45, lidOneY);
      bezierVertex(40, lidOneY + 4.5, 60, lidOneY + 4.5, 55, lidOneY);
      bezierVertex(55, lidOneY - 0.5, 45, lidOneY - 0.5, 45, lidOneY);
    endShape();
  pop();
}

// LID TWO FUNCTION
function lidTwo(frame) {
  push();
    let lidTwoY = 0;
    if (frame == 0 || frame == 12 || frame == 14) {
      lidTwoY = 40;
    }

    if (frame == 1 || frame == 11) {
      lidTwoY = 44;
    }

    if (frame == 2 || frame == 10) {
      lidTwoY = 46.5;
    }

    if (frame == 3 || frame == 9) {
      lidTwoY = 49;
    }

    if (frame == 4 || frame == 8) {
      lidTwoY = 51;
    }

    if (frame == 5 || frame == 7) {
      lidTwoY = 53;
    }
    
    if (frame == 6) {
      lidTwoY = 54;
    }

    if (frame == 13) {
      lidTwoY = 42;
    }

    if (frame == 15 || frame == 22) {
      lidTwoY = 38;
    }

    if (frame == 16 || frame == 21) {
      lidTwoY = 36;
    }

    if (frame == 17) {
      lidTwoY = 34;
    }

    if (frame == 18) {
      lidTwoY = 32;
    }

    if (frame == 19) {
      lidTwoY = 33.33;
    }

    if (frame == 20) {
      lidTwoY = 34.66;
    }

    if (frame == 23) {
      lidTwoY = 39;
    }

    stroke(0); // Black
    fill(255, 255, 255, 100); // White with 100/255 transparency
    beginShape();
      vertex(22, lidTwoY);
      bezierVertex(40, lidTwoY + 5.5, 60, lidTwoY + 5.5, 78, lidTwoY);
      bezierVertex(80, lidTwoY, 80, lidTwoY + 6, 78, lidTwoY + 6);
      bezierVertex(60, lidTwoY + 11.5, 40, lidTwoY + 11.5, 22, lidTwoY + 6);
      bezierVertex(20, lidTwoY + 5.5, 20, lidTwoY, 22, lidTwoY);
    endShape();

    beginShape();
      vertex(22, lidTwoY);
      bezierVertex(20, lidTwoY - 28, 45, lidTwoY - 30, 45, lidTwoY - 29.5);
      bezierVertex(40, lidTwoY - 25, 60, lidTwoY - 25, 55, lidTwoY - 29.5);
      bezierVertex(55, lidTwoY - 30, 80, lidTwoY - 28, 78, lidTwoY);
      bezierVertex(60, lidTwoY + 5.5, 40, lidTwoY + 5.5, 22, lidTwoY);
    endShape();
  pop();
}

// TEA FUNCTION
function tea(frame) {
  push();
    noStroke();
    fillGradient(
      width / 2, height,
      width / 2, height / 2,
      color(105, 60, 5), color(225, 180, 125)
    );

    beginShape();
    if (frame == 0) {
      vertex(25.7, 45);
      vertex(35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      vertex(74.2, 45);
      bezierVertex(60, 45, 40, 45, 25.7, 45);
    }

    if (frame == 1) {
      vertex(26, 49);
      bezierVertex(32, 65, 30, 80, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(70, 80, 68, 65, 74, 49);
      bezierVertex(60, 50, 40, 50, 25, 49);
    }

    if (frame == 2) {
      vertex(26, 51.5);
      bezierVertex(31, 67.5, 25, 82.5, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 82.5, 69, 67.5, 74, 51.5);
      bezierVertex(60, 50, 40, 50, 25, 51.5);
    }

    if (frame == 3) {
      vertex(26, 54);
      bezierVertex(30, 70, 25, 85, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 85, 70, 70, 74, 54);
      bezierVertex(60, 55, 40, 55, 25, 54);
    }

    if (frame == 4) {
      vertex(25, 56);
      bezierVertex(27.5, 72, 25, 87, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 87, 72.5, 72, 75, 56);
      bezierVertex(60, 57, 40, 57, 25, 56);
    }

    if (frame == 5) {
      vertex(25, 58);
      bezierVertex(25, 74, 25, 89, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 89, 75, 74, 75, 58);
      bezierVertex(60, 59, 40, 59, 25, 58);
    }

    if (frame == 6) {
      vertex(25, 59);
      bezierVertex(20, 75, 25, 90, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 90, 80, 75, 75, 59);
      bezierVertex(60, 60, 40, 60, 25, 59);
    }

    if (frame == 7) {
      vertex(25, 58);
      bezierVertex(25, 74, 25, 89, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 89, 75, 74, 75, 58);
      bezierVertex(60, 55, 40, 55, 25, 58);
    }

    if (frame == 8) {
      vertex(25, 56);
      bezierVertex(27.5, 72, 25, 87, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 87, 72.5, 72, 75, 56);
      bezierVertex(60, 50, 40, 50, 25, 56);
    }

    if (frame == 9) {
      vertex(26, 54);
      bezierVertex(30, 70, 25, 85, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 85, 70, 70, 74, 54);
      bezierVertex(60, 47.5, 40, 47.5, 25, 54);
    }

    if (frame == 10) {
      vertex(26, 51.5);
      bezierVertex(31, 67.5, 25, 82.5, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(75, 82.5, 69, 67.5, 74, 51.5);
      bezierVertex(50, 40, 50, 40, 25, 51.5);
    }

    if (frame == 11) {
      vertex(26, 49);
      bezierVertex(32, 65, 30, 80, 35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      bezierVertex(70, 80, 68, 65, 74, 49);
      bezierVertex(45, 35, 55, 35, 25, 49);
    }

    if (frame == 12) {
      vertex(25.7, 45);
      vertex(35, 96);
      bezierVertex(40, 100, 60, 100, 65, 96);
      vertex(74.2, 45);
      bezierVertex(45, 30, 55, 30, 25.7, 45);
    }

    if (frame == 13) {
      vertex(26, 49);
      bezierVertex(32, 65, 30, 80, 35, 96);
      bezierVertex(40, 95, 60, 95, 65, 96);
      bezierVertex(70, 80, 68, 65, 74, 49);
      bezierVertex(45, 30, 55, 30, 25, 49);
    }

    if (frame == 14) {
      vertex(26, 51.5);
      bezierVertex(31, 67.5, 25, 82.5, 34, 94);
      bezierVertex(40, 95, 60, 95, 66, 94);
      bezierVertex(75, 82.5, 69, 67.5, 74, 51.5);
      bezierVertex(45, 20, 55, 20, 25, 51.5);
    }

    if (frame == 15) {
      vertex(26, 54);
      bezierVertex(30, 70, 25, 85, 33, 90);
      bezierVertex(33, 92, 67, 92, 67, 90);
      bezierVertex(75, 85, 70, 70, 74, 54);
      bezierVertex(45, 17.5, 55, 17.5, 25, 54);
    }

    if (frame == 16) {
      vertex(25, 56);
      bezierVertex(27.5, 72, 25, 87, 32, 90);
      bezierVertex(40, 88, 60, 88, 68, 90);
      bezierVertex(75, 87, 72.5, 72, 75, 56);
      bezierVertex(55, 15, 45, 15, 25, 56);
    }

    if (frame == 17) {
      vertex(25, 58);
      bezierVertex(25, 74, 25, 89, 31, 88);
      bezierVertex(40, 86, 60, 86, 69, 88);
      bezierVertex(75, 89, 75, 74, 75, 58);
      bezierVertex(52.5, 10, 47.5, 10, 25, 58);
    }

    if (frame == 18) {
      vertex(25, 59);
      bezierVertex(20, 75, 25, 90, 30, 88);
      bezierVertex(30, 85, 70, 85, 70, 88);
      bezierVertex(75, 90, 80, 75, 75, 59);
      bezierVertex(50, 5, 50, 5, 25, 59);
    }

    if (frame == 19) {
      vertex(25, 58);
      bezierVertex(25, 74, 25, 89, 31, 88);
      bezierVertex(40, 86, 60, 86, 69, 88);
      bezierVertex(75, 89, 75, 74, 75, 58);
      bezierVertex(52.5, 15, 47.5, 15, 25, 58);
    }

    if (frame == 20) {
      vertex(25, 56);
      bezierVertex(27.5, 72, 25, 87, 32, 90);
      bezierVertex(40, 88, 60, 88, 68, 90);
      bezierVertex(75, 87, 72.5, 72, 75, 56);
      bezierVertex(55, 25, 45, 25, 25, 56);
    }

    if (frame == 21) {
      vertex(26, 54);
      bezierVertex(30, 70, 25, 85, 33, 90);
      bezierVertex(33, 92, 67, 92, 67, 90);
      bezierVertex(75, 85, 70, 70, 74, 54);
      bezierVertex(45, 40, 55, 40, 25, 54);
    }

    if (frame == 22) {
      vertex(26, 51.5);
      bezierVertex(31, 67.5, 25, 82.5, 34, 94);
      bezierVertex(40, 95, 60, 95, 66, 94);
      bezierVertex(75, 82.5, 69, 67.5, 74, 51.5);
      bezierVertex(45, 45, 55, 45, 25, 51.5);
    }

    if (frame == 23) {
      vertex(26, 49);
      bezierVertex(32, 65, 30, 80, 35, 96);
      bezierVertex(40, 98, 60, 98, 65, 96);
      bezierVertex(70, 80, 68, 65, 74, 49);
      bezierVertex(45, 52.5, 55, 52.5, 25, 49);
    }
    endShape(CLOSE);
  pop();
}

// PEARL FUNCTION
function pearl(x, y) {
  push();
    fill(0);
    ellipse(x, y, 8);

    stroke(255, 255, 255, 150); // White with 150/255 transparency
    strokeWeight(1.5);
    strokeCap(ROUND);
    noFill();
    curve(x, y, x - 2, y - 2, x - 2.5, y + 1, x, y);
  pop();
}

// PEARLS FUNCTION
function pearls(frame) {
  if (frame == 0) {
    pearl(42, 93.5);
    pearl(50, 94);
    pearl(58, 93.5);
    pearl(38, 86);
    pearl(46, 86.5);
    pearl(54, 86.5);
    pearl(62, 86);
    pearl(42, 78.5);
    pearl(50, 79);
    pearl(58, 78.5);
  }

  if (frame == 1) {
    pearl(42, 93.5);
    pearl(50, 94);
    pearl(58, 93.5);
    pearl(37.5, 86);
    pearl(46, 86.5);
    pearl(54, 86.5);
    pearl(62.5, 86);
    pearl(41.5, 78.5);
    pearl(50, 79);
    pearl(58.5, 78.5);
  }

  if (frame == 2) {
    pearl(42, 93.5);
    pearl(50, 94);
    pearl(58, 93.5);
    pearl(37, 86.5);
    pearl(46, 86.5);
    pearl(54, 86.5);
    pearl(63, 86.5);
    pearl(41, 79);
    pearl(50, 79);
    pearl(59, 79);
  }

  if (frame == 3) {
    pearl(42, 93.5);
    pearl(50, 94);
    pearl(58, 93.5);
    pearl(36, 87);
    pearl(46, 86.5);
    pearl(54, 86.5);
    pearl(64, 87);
    pearl(41, 80);
    pearl(50, 79);
    pearl(59, 80);
  }

  if (frame == 4) {
    pearl(42, 93.5);
    pearl(50, 94);
    pearl(58, 93.5);
    pearl(35, 88);
    pearl(46, 86.5);
    pearl(54, 86.5);
    pearl(65, 88);
    pearl(40, 81);
    pearl(50, 79);
    pearl(60, 81);
  }

  if (frame == 5) {
    pearl(42, 93.5);
    pearl(50, 94);
    pearl(58, 93.5);
    pearl(35, 88.5);
    pearl(46, 86.5);
    pearl(54, 86.5);
    pearl(65, 88.5);
    pearl(39.5, 81.5);
    pearl(50, 79);
    pearl(60.5, 81.5);
  }

  if (frame == 6 || frame == 7) {
    pearl(42, 93.5);
    pearl(50, 94);
    pearl(58, 93.5);
    pearl(35, 89);
    pearl(46, 86.5);
    pearl(54, 86.5);
    pearl(65, 89);
    pearl(39, 82);
    pearl(50, 79);
    pearl(61, 82);
  }

  if (frame == 8) {
    pearl(42, 93.5);
    pearl(50, 94);
    pearl(58, 93.5);
    pearl(35.5, 89);
    pearl(46, 86.5);
    pearl(54, 86.5);
    pearl(64.5, 89);
    pearl(39, 82);
    pearl(50, 79);
    pearl(61, 82);
  }

  if (frame == 9) {
    pearl(42, 93.5);
    pearl(50, 94);
    pearl(58, 93.5);
    pearl(35.5, 88);
    pearl(46, 86.5);
    pearl(54, 86.5);
    pearl(64.5, 88);
    pearl(39.5, 81);
    pearl(50, 79);
    pearl(60.5, 81);
  }

  if (frame == 10) {
    pearl(42, 93.5);
    pearl(50, 94);
    pearl(58, 93.5);
    pearl(35.5, 87);
    pearl(46, 85);
    pearl(54, 85);
    pearl(64.5, 86);
    pearl(39.5, 78);
    pearl(50, 76);
    pearl(60.5, 78);
  }

  if (frame == 11) {
    pearl(42, 92);
    pearl(50, 94);
    pearl(58, 92);
    pearl(37.5, 85);
    pearl(46, 83);
    pearl(54, 83);
    pearl(62.5, 85);
    pearl(39.5, 76);
    pearl(50, 72);
    pearl(60.5, 76);
  }
  
  if (frame == 12) {
    pearl(42, 86);
    pearl(50, 90);
    pearl(58, 86);
    pearl(36.5, 78);
    pearl(46, 77);
    pearl(54, 77);
    pearl(63.5, 78);
    pearl(39, 69);
    pearl(50, 68);
    pearl(61, 69);
  }

  if (frame == 13) {
    pearl(41.5, 85);
    pearl(50, 86);
    pearl(58.5, 85);
    pearl(36.25, 76);
    pearl(46, 74);
    pearl(54, 74);
    pearl(63.25, 76);
    pearl(39, 67);
    pearl(50, 62);
    pearl(61, 67);
  }

  if (frame == 14) {
    pearl(41.25, 84.5);
    pearl(50, 85);
    pearl(58.75, 84.5);
    pearl(36, 75);
    pearl(46, 73);
    pearl(54, 73);
    pearl(64, 75);
    pearl(39, 65);
    pearl(50, 60);
    pearl(61, 65);
  }

  if (frame == 15) {
    pearl(41, 84);
    pearl(50, 84);
    pearl(59, 84);
    pearl(36, 74);
    pearl(46, 72);
    pearl(54, 72);
    pearl(64, 74);
    pearl(39, 64);
    pearl(50, 58);
    pearl(61, 64);
  }

  if (frame == 16) {
    pearl(41.25, 81);
    pearl(50, 79);
    pearl(58.75, 81);
    pearl(36, 66);
    pearl(46, 67);
    pearl(54, 67);
    pearl(64, 66);
    pearl(39, 54);
    pearl(50, 53);
    pearl(61, 54);
  }

  if (frame == 17) {
    pearl(41.5, 77);
    pearl(50, 75);
    pearl(58.5, 77);
    pearl(36, 62);
    pearl(46, 64);
    pearl(54, 64);
    pearl(64, 62);
    pearl(39, 49);
    pearl(50, 50);
    pearl(61, 49);
  }

  if (frame == 18) {
    pearl(42, 72);
    pearl(50, 74);
    pearl(58, 72);
    pearl(36, 58);
    pearl(46, 62);
    pearl(54, 62);
    pearl(64, 58);
    pearl(39, 44);
    pearl(50, 48);
    pearl(61, 44);
  }

  if (frame == 19) {
    pearl(42, 77);
    pearl(50, 79);
    pearl(58, 77);
    pearl(36, 65);
    pearl(46, 69);
    pearl(54, 69);
    pearl(64, 65);
    pearl(39, 52);
    pearl(50, 56);
    pearl(61, 52);
  }

  if (frame == 20) {
    pearl(42, 80);
    pearl(50, 82);
    pearl(58, 80);
    pearl(36, 68);
    pearl(46, 72);
    pearl(54, 72);
    pearl(64, 68);
    pearl(39, 56);
    pearl(50, 58);
    pearl(61, 56);
  }

  if (frame == 21) {
    pearl(42, 82);
    pearl(50, 84);
    pearl(58, 82);
    pearl(37, 72);
    pearl(46, 76);
    pearl(54, 76);
    pearl(63, 72);
    pearl(40, 60);
    pearl(50, 64);
    pearl(60, 60);
  }

  if (frame == 22) {
    pearl(42, 88);
    pearl(50, 90);
    pearl(58, 88);
    pearl(37, 78);
    pearl(46, 80);
    pearl(54, 80);
    pearl(63, 78);
    pearl(40, 68);
    pearl(50, 70);
    pearl(60, 68);
  }

  if (frame == 23) {
    pearl(42, 90);
    pearl(50, 92);
    pearl(58, 90);
    pearl(37, 84);
    pearl(46, 82);
    pearl(54, 82);
    pearl(63, 84);
    pearl(40, 72);
    pearl(50, 76);
    pearl(60, 72);
  }
}

// STRAW FUNCTION
function straw(frame) {
  push();
    if (frame == 7) {
      translate(0, -2);
    }

    if (frame == 8) {
      translate(0, -4);
    }

    if (frame == 9) {
      translate(0, -6);
    }

    if (frame == 10) {
      translate(0, -8);
    }

    if (frame == 11) {
      translate(0, -10);
    }

    if (frame == 12) {
      translate(0, -12);
    }

    if (frame == 13) {
      translate(0, -14);
    }

    if (frame == 14) {
      translate(0, -16);
    }

    if (frame == 15) {
      translate(0, -18);
    }

    if (frame == 16) {
      translate(0, -20);
    }

    if (frame == 17) {
      translate(0, -18);
    }

    if (frame == 18) {
      translate(0, -16);
    }

    if (frame == 19) {
      translate(0, -14);
    }

    if (frame == 20) {
      translate(0, -12);
    }

    if (frame == 21) {
      translate(0, -8);
    }

    if (frame == 22) {
      translate(0, -4);
    }

    else {
      translate(0, 0);
    }

    fill(255, 0, 0);
    beginShape();
      vertex(47, 2);
      vertex(47, 96);
      bezierVertex(48, 97, 52, 97, 53, 96);
      vertex(53, 2);
      bezierVertex(52, 1, 48, 1, 47, 2);
    endShape();

    bezier(47, 2, 47, 3, 53, 3, 53, 2);

    push();
      fill(255); // White
      let stripeY = 0;

      for(let i = 0; i < 5; i++) {
        beginShape();
          vertex(53, 2 + stripeY);
          bezierVertex(53, 4 + stripeY, 47, 10 + stripeY, 47, 10 + stripeY);
          vertex(47, 18 + stripeY);
          bezierVertex(47, 18 + stripeY, 53, 12 + stripeY, 53, 10 + stripeY);
        endShape(CLOSE);
        stripeY += 16;
      }
    pop();
  pop();
}

// EYES FUNCTION
function eyes(frame) {
  push();
    let eyesY = 0;

    if (frame == 0 || frame == 12) {
      eyesY = 58;
    }

    if (frame == 1 || frame == 11 || frame == 13 || frame == 23) {
      eyesY = 62;
    }

    if (frame == 2 || frame == 10 || frame == 14 || frame == 22) {
      eyesY = 66;
    }

    if (frame == 3 || frame == 9 || frame == 15 || frame == 21) {
      eyesY = 68;
    }

    if (frame == 4 || frame == 8 || frame == 16 || frame == 20) {
      eyesY = 69;
    }

    if (frame == 5 || frame == 7 || frame == 17 || frame == 19) {
      eyesY = 71;
    }
    
    if (frame == 6 || frame == 18) {
      eyesY = 72;
    }

    stroke(0);
    strokeWeight(1.5);

    line(35, eyesY - 5, 45, eyesY);
    line(45, eyesY, 35, eyesY + 3);

    line(65, eyesY - 5, 55, eyesY);
    line(55, eyesY, 65, eyesY + 3);
  pop();
}

// MOUTH FUNCTION
function mouth(frame) {
  push();
    let mouthY = 0;
    if (frame == 0 || frame == 12) {
      mouthY = 66.5;
    }

    if (frame == 1 || frame == 11 || frame == 13 || frame == 23) {
      mouthY = 70.5;
    }

    if (frame == 2 || frame == 10 || frame == 14 || frame == 22) {
      mouthY = 74.5;
    }

    if (frame == 3 || frame == 9 || frame == 15 || frame == 21) {
      mouthY = 76.5
    }

    if (frame == 4 || frame == 8 || frame == 16 || frame == 20) {
      mouthY = 78.5
    }

    if (frame == 5 || frame == 7 || frame == 17 || frame == 19) {
      mouthY = 79.5;
    }
    
    if (frame == 6 || frame == 18) {
      mouthY = 81.5;
    }

    noStroke();
    fill(230, 0, 0); // Red
    beginShape();
      vertex(46, mouthY);
      bezierVertex(45, mouthY + 5.5, 55, mouthY + 5.5, 54, mouthY);
      bezierVertex(54, mouthY, 52, mouthY + 0.5, 50, mouthY - 1.5);
      bezierVertex(48, mouthY, 46, mouthY + 0.5, 46, mouthY);
    endShape();

    stroke(0); // Black
    strokeWeight(1);
    noFill();
    curve(40, mouthY - 16.5, 42.5, mouthY - 1.5, 50, mouthY - 1.5, 50, mouthY - 11.5);
    curve(45, mouthY - 16.5, 50, mouthY - 1.5, 57.5, mouthY - 1.5, 50, mouthY - 11.5);
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