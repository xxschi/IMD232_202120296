let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  //createVector = 벡터기능을 해주는 코드! 한 번은 해줘야 함.
  //acc = 등가속도 함수 이름

  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  update();
  infiniteEdge();
  function update() {
    acc = p5.Vector.random2D();
    acc.mult(1);
    vel.add(acc);
    pos.add(vel);
  }

  //if (pos.x - radius < 0 || pos.x + radius > width) {
  //  vel.x *= -1;
  //}
  //if (pos.y - radius < 0 || pos.y + radius > height) {
  // vel.y *= -1;
  fill('red');
  ellipse(pos.x, pos.y, 2 * radius);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}
