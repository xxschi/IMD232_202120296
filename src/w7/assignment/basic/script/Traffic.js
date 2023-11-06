class Traffic {
  constructor() {
    // 차량(vehicles) 배열을 초기화시킨다.
    this.vehicles = [];
  }

  run() {
    // 모든 차량에 대해 반복 실행한다.
    this.vehicles.forEach((eachVehicle) => {
      // 차량 간의 충돌 회피 힘을 계산한다.
      const separate = eachVehicle.separate(this.vehicles);
      separate.mult(1); // 힘의 강도 조절
      eachVehicle.applyForce(separate); // 힘을 차량에 적용한다.

      // 차량 간의 방향 정렬 힘을 계산한다.
      const align = eachVehicle.align(this.vehicles);
      align.mult(0.5); // 힘의 강도 조절
      eachVehicle.applyForce(align); // 힘을 차량에 적용

      // 차량들을 하나로 유지하기 위한 힘을 계산한다.
      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5); // 힘의 강도 조절
      eachVehicle.applyForce(cohesion); // 힘을 차량에 적용

      // 차량 업데이트
      eachVehicle.update();

      // 화면 경계에서 벗어남 방지
      eachVehicle.borderInfinite();

      // 차량을 화면에 표시
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    // 새로운 차량 추가
    // const mass = floor(random(1, 3)); // 질량 설정 (랜덤)
    const mass = 1; // 질량 설정 (고정값)
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    );
  }
}
