function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
}

function draw() {
  background('black');
  ellipse(mouseX, mouseY, 50);
}
