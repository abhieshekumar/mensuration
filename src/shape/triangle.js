import Validator from '../validation/validator';
import * as Constants from '../constants';

/** This class realises the Triangle class */
class Triangle {
  // Sides
  #a = 0;
  #b = 0;
  #c = 0;
  // Angles
  #A = 0;
  #B = 0;
  #C = 0;

  /**
   * Returns the sideA property
   * @return {number} the sideA of triangle
   */
  get sideA() {
    return this.#a;
  }

  /**
   * Returns the sideB property
   * @return {number} the sideB of triangle
   */
  get sideB() {
    return this.#b;
  }

  /**
   * Returns the sideC property
   * @return {number} the sideC of triangle
   */
  get sideC() {
    return this.#c;
  }

  /**
   * Returns the angleA property
   * @return {number} the angleA of triangle
   */
  get angleA() {
    return this.#A;
  }

  /**
   * Returns the angleB property
   * @return {number} the angleB of triangle
   */
  get angleB() {
    return this.#B;
  }

  /**
   * Returns the angleC property
   * @return {number} the angleC of triangle
   */
  get angleC() {
    return this.#C;
  }

  /**
   * Defines the parameters of the triangle
   * @param {number} sideA
   * @param {number} sideB
   * @param {number} sideC
   * @param {number} angleA
   * @param {number} angleB
   * @param {number} angleC
   */
  define(sideA=0, sideB=0, sideC=0, angleA=0, angleB=0, angleC=0) {
    // eslint-disable-next-line max-len
    const valid = Validator.isTriangle(sideA, sideB, sideC, angleA, angleB, angleC);
    if (valid) {
      this.#a = sideA;
      this.#b = sideB;
      this.#c = sideC;
      this.#A = angleA;
      this.#B = angleB;
      this.#C = angleC;
      this.compute(valid);
    }
  }

  /**
   * Returns the unknown side of the triangle given the
   * other two sides and the angle corresponding to
   * the unknown side.
   * @param {number} a
   * @param {number} b
   * @param {number} C
   * @return {number} the unknown side
   */
  getSide(a, b, C) {
    if (C > 0.001) {
      return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C));
    } else {
      return Math.sqrt((a - b) * (a - b) + a * b * C * C * (1 - C * C / 12));
    }
  }

  /**
   * Computes the angle opposite the the last parameter of the function
   * @param {number} a side
   * @param {number} b side
   * @param {number} c side
   * @return {number} angle corresponding to side c
   */
  getAngle(a, b, c) {
    const temp = (a * a + b * b - c * c) / (2 * a * b);
    if (-1 <= temp && temp <= 0.9999999) {
      return Math.acos(temp);
    } else if (temp <= 1) {
      return Math.sqrt((c * c - (a - b) * (a - b)) / (a * b));
    } else {
      // Invalid. Error
    }
  }

  /**
   * Defines the complete triangle onject
   * @param {string} type indicates the type of parameter given by the user
   */
  compute(type) {
    if (type == 'SSS') {
      // eslint-disable-next-line max-len
      if (this.sideA + this.sideB <= this.sideC || this.sideB + this.sidec <= this.sideA || this.sideC + this.sideA <= this.sideB) {
        // Invalid
      } else {
        this.#A = this.getAngle(this.sideB, this.sideC, this.sideA);
        this.#B = this.getAngle(this.sideC, this.sideA, this.sideB);
        this.#C = this.getAngle(this.sideA, this.sideB, this.sideC);
      }
    } else if (type == 'AAS|ASA') {
      if (!this.angleA) {
        this.#A = Constants.PI - this.angleB - this.angleC;
      } if (!this.angleB) {
        this.#B = Constants.PI - this.angleA - this.angleC;
      } if (!this.angleC) {
        this.#C = Constants.PI - this.angleA - this.angleB;
      } if (this.angleA <= 0 || this.angleB <=0 || this.angleC <= 0) {
        // Invalid. Do not execute further.
      }
      const sinA = Math.sin(this.angleA);
      const sinB = Math.sin(this.angleB);
      const sinC = Math.sin(this.angleC);
      let ratio = 0;
      if (!!this.sideA) {
        ratio = this.sideA/sinA;
      } else if (!!this.sideB) {
        ratio = this.sideB/sinB;
      } else if (!!this.sideC) {
        ratio = this.sideC/sinC;
      }
      if (!this.sideA) {
        this.#a = ratio * sinA;
      } if (!this.sideB) {
        this.#b = ratio * sinB;
      } if (!this.sideC) {
        this.#c = ratio * sinC;
      }
    } else if (type == 'SAS') {
      // eslint-disable-next-line max-len
      if (!!this.angleA && this.angleA >= Constants.PI || !!this.angleB && this.angleB >= Constants.PI || !!this.angleC && this.angleC >= Constants.PI) {
        // Invalid. Do not proceed
      }
      if (!this.sideA) {
        this.#a = this.getSide(this.sideB, this.sideC, this.angleA);
      } if (!this.sideB) {
        this.#b = this.getSide(this.sideC, this.sideA, this.angleB);
      } if (!this.sideC) {
        this.#c = this.getSide(this.sideA, this.sideB, this.angleC);
      } if (!this.angleA) {
        this.#A = this.getAngle(this.sideB, this.sideC, this.sideA);
      } if (!this.angleB) {
        this.#B = this.getAngle(this.sideC, this.sideA, this.sideB);
      } if (!this.angleC) {
        this.#C = this.getAngle(this.sideA, this.sideB, this.sideC);
      }
    } else if (type == 'SSA') {
      let knownSide;
      let knownAngle;
      let partialSide;
      if (!!this.sideA && !!this.angleA) {
        knownSide = this.sideA;
        knownAngle = this.angleA;
      } if (!!this.sideB && !!this.angleB) {
        knownSide = this.sideB;
        knownAngle = this.angleB;
      } if (!!this.sideC && !!this.angleC) {
        knownSide = this.sideC;
        knownAngle = this.angleC;
      } if (!!this.sideA && !this.angleA) {
        partialSide = this.sideA;
      } if (!!this.sideB && !this.angleB) {
        partialSide = this.sideB;
      } if (!!this.sideC && !this.angleC) {
        partialSide = this.sideC;
      }

      if (knownAngle >= Constants.PI) {
        // Invalid. Do not proceed.
      }

      let partialAngle;
      let unknownSide;
      let unknownAngle;
      const ratio = knownSide/Math.sin(knownAngle);
      const temp = partialSide / ratio;
      // eslint-disable-next-line max-len
      if (temp > 1 || knownAngle >= Constants.HALF_PI && knownSide <= partialSide) {
        // Invalid. no Solution
      } else if (temp == 1 && knownSide >= partialSide) {
        // Unique solution
        partialAngle = Math.asin(temp);
        unknownAngle = Constants.PI - knownAngle - partialAngle;
        unknownSide = ratio * Math.sin(unknownAngle);
      } else {
        // Two solutions;
        const partialAngle0 = Math.asin(temp);
        const partialAngle1 = Constants.PI - partialAngle0;
        const unknownAngle0 = Constants.PI - knownAngle - partialAngle0;
        const unknownAngle1 = Constants.PI - knownAngle - partialAngle1;
        const unknownSide0 = ratio * Math.sin(unknownAngle0);
        const unknownSide1 = ratio * Math.sin(unknownAngle1);
        partialAngle = [partialAngle0, partialAngle1];
        unknownAngle = [unknownAngle0, unknownAngle1];
        unknownSide = [unknownSide0, unknownSide1];
      }
      if (!!this.sideA && !this.angleA) {
        this.#A = partialAngle[0];
      } if (!!this.sideB && !this.angleB) {
        this.#B = partialAngle[0];
      } if (!!this.sideC && !this.angleC) {
        this.#C = partialAngle[0];
      }
      if (!this.sideA && !this.angleA) {
        this.#a = unknownSide[0];
        this.#A = unknownAngle[0];
      } else if (!this.sideB && !this.angleB) {
        this.#b = unknownSide[0];
        this.#B = unknownAngle[0];
      } else if (!this.sideC && !this.angleC) {
        this.#c = unknownSide[0];
        this.#C = unknownAngle[0];
      }
    }
  }

  /**
   * Used to get the complete triangle object
   * @return {Object} the triangle object
   */
  get() {
    return {sideA: this.sideA,
      sideB: this.sideB,
      sideC: this.sideC,
      angleA: this.angleA,
      angleB: this.angleB,
      angleC: this.angleC};
  }

  /**
   * Computes the perimeter of triangle
   * @return {number} the perimeter
   */
  perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  /**
   * Computes the semi perimeter of triangle
   * @return {number} the semi perimeter
   */
  semiPerimeter() {
    return this.perimeter()/2;
  }

  /**
   * Computes the area of triangle
   * @return {number} the area
   */
  area() {
    // eslint-disable-next-line max-len
    return Math.sqrt(this.semiPerimeter()*(this.semiPerimeter()-this.sideA)*(this.semiPerimeter()-this.sideB)*(this.semiPerimeter()-this.sideC));
  }

  /**
   * Checks if triangle is equilateral
   * @return {boolean}
   */
  isEquilateral() {
    return this.sideA === this.sideB && this.sideB === this.sideC;
  }

  /**
   * Checks if triangle is isosceles
   * @return {boolean}
   */
  isIsosceles() {
    // eslint-disable-next-line max-len
    return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
  }

  /**
   * Checks if triangle is scalene
   * @return {boolean}
   */
  isScalene() {
    return !this.isEquilateral() && !this.isIsosceles();
  }

  /**
   * Checks if triangle is acute
   * @return {boolean}
   */
  isAcute() {
    let sides = [this.sideA, this.sideB, this.sideC];
    sides.sort();
    sides = sides.map((x) => x**2);
    return sides[2] < (sides[0] + sides[1]);
  }

  /**
   * Checks if triangle is obtuse
   * @return {boolean}
   */
  isObtuse() {
    let sides = [this.sideA, this.sideB, this.sideC];
    sides.sort();
    sides = sides.map((x) => x**2);
    return sides[2] > (sides[0] + sides[1]);
  }

  /**
   * Checks if triangle is right angled
   * @return {boolean}
   */
  isRightAngled() {
    let sides = [this.sideA, this.sideB, this.sideC];
    sides.sort();
    sides = sides.map((x) => x**2);
    return sides[2] === (sides[0] + sides[1]);
  }
}

export default Triangle;
