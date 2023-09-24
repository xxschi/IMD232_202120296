let cv;
let mv;
let cvTomv;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvTomv = createVector();
}

function draw() {
  background('slateblue');
  strokeWeight(2);
  stroke('white');
  line(0, 0, cv.x, cv.y);

  mv.set(mouseX, mouseY);
  stroke('fuchsia');
  line(0, 0, cv.x, cv.y);

  cvTomv = p5.Vector.sub(mv, cv);
  stroke('lime');
  translate(cv.x, cv.y);
  line(0, 0, cvTomv.x, cvTomv.y);

  cvTomv.mult(0.5);
  strokeWeight(4);
  stroke('black');
  line(0, 0, cvTomv.x, cvTomv.y);
}
