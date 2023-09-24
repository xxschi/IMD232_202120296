let center;
let mouse;
let centerTomouse;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('pink');
  center = createVector(width / 2, height / 2);
  mouse = createVector();
  centerTomouse = createVector();
}

function draw() {
  background('pink');
  mouse.set(mouseX, mouseY);
  centerTomouse = p5.Vector.sub(mouse, center);
  strokeWeight(2);
  stroke('white');
  translate(center.x, center.y);
  line(0, 0, centerTomouse.x, centerTomouse.y);

  centerTomouse.normalize();
  centerTomouse.mult(50);
  strokeWeight(4);
  stroke('black');
  line(0, 0, centerTomouse.x, centerTomouse.y);
  console.log(centerTomouse.mag());
}
