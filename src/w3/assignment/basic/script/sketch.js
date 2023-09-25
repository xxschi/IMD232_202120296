let pos;
let vel;
let acc;
let radius = 50;
let posToAcc;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');

  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector(0, 0);
  posToAcc = createVector(0, 0);
}

function draw() {
  background('white');
  let mouseRandom = p5.Vector.random2D();
  mouseRandom.mult(5);
  acc.add(mouseRandom);

  update();
  infiniteEdge();
}

function update() {
  vel.add(acc);
  vel.limit(2);
  pos.add(vel);
  let mouseRandom = createVector(mouseX - pos.x, mouseY - pos.y);
  strokeWeight(2);

  stroke('purple');
  line(pos.x, pos.y, pos.x + vel.x * 100, pos.y + vel.y * 100);

  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 100, pos.y + vel.y * 100);

  stroke('black');
  line(pos.x, pos.y, mouseX, mouseY);

  fill(0);
  noStroke();
  ellipse(pos.x, pos.y, radius * 2);

  posToAcc = p5.Vector.sub(vel, pos);
  posToAcc.mult(0);
  translate(pos.x, pos.y);
  stroke('red');
  line(0, 0, pos.x, pos.y);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}
