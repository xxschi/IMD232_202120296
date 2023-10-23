class Repeller {
  constructor(x, y, power) {
    this.pos = createVector(x, y);
    this.power = power;
    this.rad = 25;
    this.draggingOffset = createVector(0, 0);
    this.isHover = false;
    this.isDragging = false;
  }

  repel(particle) {
    const force = p5.Vector.sub(particle.pos, this.pos);
    let distance = towardParticleVec.mag();
    let strength = this.power / distance ** 2;
    towardParticleVec.setMag(strength);
    return towardParticleVec;
  }

  display() {
    nostroke();
    fill('blue');
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  mouseMover(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.draggingOffset(mX - this.pos.x, mY - this.pos.y);
      this.isDragging = true;
    }
  }
  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.set(mX - this.draggingOffset.x, mY - this.draggingOffset.y);
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
