let traffic;
//traffic은 Traffic의 인스턴스를 저장하는 변수이다. //let ~ : 변수를 만듦
let infiniteOffset = 80;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  //캔버스를 설정하는 함수, 'canvas'라는 HTML요소에 그림을 그림. 캔버스의 너비와 높이를 3:2 비율로 고정한다.
  colorMode(HSL, 360, 100, 100, 100);
  //컬러 모드를 HSL 모드로 설정하며, 각 구성 요소의 범위를 지정한다.
  background('white');
  //캔버스의 컬러를 white 컬러로 설정한다.
  traffic = new Traffic();
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  }
}

function draw() {
  background('white');
  traffic.run();
}

function mouseDragged() {
  // 마우스를 드래그할 때 발생한다.
  traffic.addVehicle(mouseX, mouseY);
  //현재 마우스의 위치를 감지한 후 해당 위치에 새로운 vehicles를 추가한다.
}
