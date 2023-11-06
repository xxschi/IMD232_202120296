class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // 차량의 초기 상태 설정
    this.pos = createVector(x, y); // 위치
    this.vel = p5.Vector.random2D(); // 무작위 속도
    this.acc = createVector(); // 가속도
    this.mass = mass; // 질량
    this.rad = rad; // 차량의 반지름
    this.speedMx = speedMx; // 최대 속력
    this.forceMx = forceMx; // 최대 힘
    this.neighborhooodRad = 50; // 차량 간의 상호작용 범위
    this.color = color; // 차량의 색상
  }

  cohesion(others) {
    // 차량들을 하나로 유지하기 위한 힘을 계산하고 반환
    // 주변 차량과의 거리를 계산하여 방향 및 크기 조절 후 힘을 반환
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos);
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.sub(this.pos);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  align(others) {
    // 차량들 간의 방향 정렬을 위한 힘을 계산하고 반환
    // 주변 차량의 속도를 평균하여 방향 및 크기 조절 후 힘을 반환
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.vel);
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  separate(others) {
    // 충돌 회피를 위한 힘을 계산하고 반환
    // 주변 차량과의 거리를 계산하여 방향 및 크기 조절 후 힘을 반환
    let cnt = 0;
    const steer = createVector(0, 0);
    others.forEach((each) => {
      if (each !== this) {
        const dist = this.pos.dist(each.pos);
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          steer.add(towardMeVec);
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  applyForce(force) {
    // 주어진 힘을 차량에 적용
    // 힘을 질량으로 나눈 후 가속도에 추가
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass);
  }

  update() {
    // 차량의 위치, 속도 및 가속도 업데이트
    // 적용된 힘에 따라 위치와 속도를 조정
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  borderInfinite() {
    // 화면 경계를 넘어가지 않도록 위치 조정
    // 화면 경계에 닿으면 반대편으로 이동
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }
  }

  display() {
    // 차량을 화면에 그림
    // 차량의 모양, 위치, 및 색상을 설정하여 그리기
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop();
  }
}
