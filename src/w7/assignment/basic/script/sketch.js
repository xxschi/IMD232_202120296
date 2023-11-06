let traffic; // Traffic 객체를 저장할 변수
let infiniteOffset = 80; // 화면 경계를 조절하기 위한 오프셋 값

function setup() {
  setCanvasContainer('canvas', 3, 2, true); // 캔버스 설정 및 크기 조정
  colorMode(HSL, 360, 100, 100, 100); // 컬러 모드 설정
  background('white'); // 배경을 흰색으로 설정
  traffic = new Traffic(); // Traffic 객체 생성
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height)); // 랜덤 위치에 차량 추가
  }
}

function draw() {
  background('white'); // 매 프레임마다 배경을 지우고 다시 그림
  traffic.run(); // Traffic 객체 실행
}

function mouseDragged() {
  // 마우스를 드래그할 때 발생하는 이벤트
  traffic.addVehicle(mouseX, mouseY); // 마우스 위치에 차량 추가
}
