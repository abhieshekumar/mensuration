import * as Constants from '../constants';
import Validator from '../validation/validator';

class Rhombus {
  // Side
  #side = 0;
  // Angles
  #angleA = 0;
  #angleB = 0;
  // Both diagonals
  #dA = 0;
  #dB = 0;
  // Height
  #h = 0

  get side() {
    return this.#side;
  }

  get angleA() {
    return this.#angleA;
  }

  get angleB() {
    return this.#angleB;
  }

  get diagonalA() {
    return this.#dA;
  }

  get diagonalB() {
    return this.#dB;
  }

  get height() {
    return this.#h;
  }

  set side(param) {
    this.#side = param;
  }

  set angleA(param) {
    this.#angleA = param;
  }

  set angleB(param) {
    this.#angleB = param;
  }

  set diagonalA(param) {
    this.#dA = param;
  }

  set diagonalB(param) {
    this.#dB = param;
  }

  set height(param) {
    this.#h = param;
  }

  define(side=0, angleA=0, angleB=0, dA=0, dB=0, h=0) {
    const valid = Validator.isRhombus(side, dA, dB, h, angleA, angleB);
    if (valid) {
      this.side = side;
      this.angleA = angleA;
      this.angleB = angleB;
      this.diagonalA = dA;
      this.diagonalB = dB;
      this.height = h;
      this.compute(valid);
    }
  }

  getSideFromDiagonal(d1, d2) {
    return Math.sqrt((d1/2)**2 + (d2/2)**2);
  }

  getHeightFromDiagonal(d1, d2) {
    // Height = Area/side
    return ((d1*d2)/2)/(this.getSideFromDiagonal(d1, d2));
  }

  compute(type) {
    if (type == 'DD') {
      this.side = this.getSideFromDiagonal(this.diagonalA, this.diagonalB);
      this.height = this.getHeightFromDiagonal(this.diagonalA, this.diagonalB);
      // The smaller angle is opposite to smaller diagonal - https://www.quora.com/How-do-you-find-the-unknown-angle-of-a-rhombus
      if (this.diagonalA<this.diagonalB) {
        this.angleA = 2*Math.atan((this.diagonalA/2)/(this.diagonalB/2));
        this.angleB = Constants.PI - this.angleA;
      } else {
        this.angleB = 2*Math.atan((this.diagonalB/2)/(this.diagonalA/2));
        this.angleA = Constants.PI - this.angleB;
      }
    } else if (type == 'DS') {
      if (!this.diagonalA) {
        this.diagonalA = 2*Math.sqrt(this.side**2-(this.diagonalB/2)**2);
      } else {
        this.diagonalB = 2*Math.sqrt(this.side**2 - (this.diagonalA/2)**2);
      }
      // Now we have both diagonals lets call this function again with type = 'DD'
      this.compute('DD');
    } else if (type == 'SA') {
      if (!this.angleA) {
        this.angleB = Constants.PI - this.angleA;
      } else {
        this.angleA = Constants.PI - this.angleB;
      }
      // https://math.stackexchange.com/questions/1355449/length-of-any-of-the-diagonals-of-a-rhombus-of-given-side-and-a-given-angle
      const d1 = 2*this.side*Math.sin(this.angleA/2);
      const d2 = 2*this.side*Math.cos(this.angleA/2);
      if (d1>d2) {
        if (this.angleA > this.angleB) {
          this.diagonalA = d1;
          this.diagonalB = d2;
        } else {
          this.diagonalB = d1;
          this.diagonalA = d2;
        }
      } else {
        if (this.angleA > this.angleB) {
          this.diagonalA = d2;
          this.diagonalB = d1;
        } else {
          this.diagonalB = d2;
          this.diagonalA = d1;
        }
      }
      this.height = this.getHeightFromDiagonal(this.diagonalA, this.diagonalB);
    }
  }

  get() {
    return {side: this.side,
      angleA: this.angleA,
      angleB: this.angleB,
      diagonalA: this.diagonalA,
      diagonalB: this.diagonalB,
      height: this.height};
  }

  perimeter() {
    return this.side*4;
  }

  area() {
    return (this.diagonalA*this.diagonalB)/2;
  }
}

export default Rhombus;
