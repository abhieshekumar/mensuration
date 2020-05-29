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

  define(side=0, angleA=0, angleB=0, dA=0, dB=0) {
    const valid = Validator.isRhombus(side, angleA, angleB, dA, dB);
    if (valid) {
      console.log(valid);
      this.#side = side;
      this.#angleA = angleA;
      this.#angleB = angleB;
      this.#dA = dA;
      this.#dB = dB;
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
    console.log(type);
    if (type == 'DD') {
      this.#side = this.getSideFromDiagonal(this.diagonalA, this.diagonalB);
      this.#h = this.getHeightFromDiagonal(this.diagonalA, this.diagonalB);
      // The smaller angle is opposite to smaller diagonal - https://www.quora.com/How-do-you-find-the-unknown-angle-of-a-rhombus
      if (this.diagonalA<this.diagonalB) {
        this.#angleA = 2*Math.atan((this.diagonalA/2)/(this.diagonalB/2));
        this.#angleB = Constants.PI - this.angleA;
      } else {
        this.#angleB = 2*Math.atan((this.diagonalB/2)/(this.diagonalA/2));
        this.#angleA = Constants.PI - this.angleB;
      }
    } else if (type == 'DS') {
      if (!this.diagonalA) {
        this.#dA = 2*Math.sqrt(this.side**2-(this.diagonalB/2)**2);
      } else {
        this.#dB = 2*Math.sqrt(this.side**2 - (this.diagonalA/2)**2);
      }
      // Now we have both diagonals lets call this function again with type = 'DD'
      this.compute('DD');
    } else if (type == 'SA') {
      if (!!this.angleA) {
        this.#angleB = Constants.PI - this.angleA;
      } else {
        this.#angleA = Constants.PI - this.angleB;
      }
      // https://math.stackexchange.com/questions/1355449/length-of-any-of-the-diagonals-of-a-rhombus-of-given-side-and-a-given-angle
      const d1 = 2*this.side*Math.sin(this.angleA/2);
      const d2 = 2*this.side*Math.cos(this.angleA/2);
      console.log(d1+' '+d2);
      if (d1>d2) {
        if (this.angleA > this.angleB) {
          this.#dA = d1;
          this.#dB = d2;
        } else {
          this.#dB = d1;
          this.#dA = d2;
        }
      } else {
        if (this.angleA > this.angleB) {
          this.#dA = d2;
          this.#dB = d1;
        } else {
          this.#dA = d2;
          this.#dB = d1;
        }
      }
      this.#h = this.getHeightFromDiagonal(this.diagonalA, this.diagonalB);
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
