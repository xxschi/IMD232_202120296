let pos;
let vel;
let acc;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  acc.mult(0.1);
  console.log('pos', pos);
  console.log('vel', vel);
  console.log('acc', acc);
}

function draw() {
  background('salmon');
  update();
  checkEdges();
  display();
  console.log('velmag', vel.mag());
  console.log('accmag', acc.mag());
}

function update() {
  vel.add(acc);
  vel.limit(30);
  //속도제한
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) pos.x = 0;

  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) pos.y = 0;
}

function display() {
  noStroke();
  fill('cornsilk');
  ellipse(pos.x, pos.y, 50);
}
