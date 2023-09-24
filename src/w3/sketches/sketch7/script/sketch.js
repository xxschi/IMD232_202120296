let cv;
let mv;
let cvTomv;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('salmon');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvTomv = createVector();
}

function draw() {
  background('salmon');

  mv.set(mouseX, mouseY);
  cvTomv = p5.Vector.sub(mv, cv);
  let mag = cvTomv.mag();
  noStroke();
  fill('white');
  rect(10, 10, mag, 10);

  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvTomv.x, cvTomv.y);

  //mag는 양수로만 나옴!!
}
