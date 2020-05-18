import Validator from '../validation/validator';
import * as Constants from '../constants';

/** Perfroms basic operations on triangle given the three parameters of the triangle with atleast one side. */
class Triangle {
  // Sides
  #a = 0;
  #b = 0;
  #c = 0;
  // Angles
  #A = 0;
  #B = 0;
  #C = 0;

  get sideA() {
    return this.#a;
  }

  get sideB() {
    return this.#b;
  }

  get sideC() {
    return this.#c;
  }

  get angleA() {
    return this.#A;
  }

  get angleB() {
    return this.#B;
  }

  get angleC() {
    return this.#C;
  }

  set sideA(param) {
    this.#a = param;
  }

  set sideB(param) {
    this.#b = param;
  }

  set sideC(param) {
    this.#c = param;
  }

  set angleA(param) {
    this.#A = param;
  }

  set angleB(param) {
    this.#B = param;
  }

  set angleC(param) {
    this.#C = param;
  }

  define(sideA=0, sideB=0, sideC=0, angleA=0, angleB=0, angleC=0) {
    const valid = Validator.isTriangle(sideA, sideB, sideC, angleA, angleB, angleC);
    if (valid) {
      this.a = sideA;
      this.b = sideB;
      this.c = sideC;
      this.A = angleA;
      this.B = angleB;
      this.C = angleC;
      this.compute(valid);
    }
  }

  getSide(a, b, C) {
    if (C > 0.001) {
      return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C));
    } else {
      return Math.sqrt((a - b) * (a - b) + a * b * C * C * (1 - C * C / 12));
    }
  }

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

  compute(type) {
    if (type == 'SSS') {
      if (this.a + this.b <= this.c || this.b + this.c <= this.a || this.c + this.a <= this.b) {
        // Invalid
      } else {
        this.A = this.getAngle(this.b, this.c, this.a);
        this.B = this.getAngle(this.c, this.a, this.b);
        this.C = this.getAngle(this.a, this.b, this.c);
      }
    } else if (type == 'AAS|ASA') {
      if (!this.A) {
        this.A = Constants.PI - this.B - this.C;
      } if (!this.B) {
        this.B = Constants.PI - this.A - this.C;
      } if (!this.C) {
        this.C = Constants.PI - this.A - this.B;
      } if (this.A <= 0 || this.B <=0 || this.C <= 0) {
        // Invalid. Do not execute further.
      }
      const sinA = Math.sin(this.A);
      const sinB = Math.sin(this.B);
      const sinC = Math.sin(this.C);
      let ratio = 0;
      if (!!a) {
        ratio = this.a/sinA;
      } else if (!!b) {
        ratio = this.b/sinB;
      } else if (!!c) {
        ratio = this.c/sinC;
      }
      if (!this.a) {
        this.a = ratio * sinA;
      } else if (!this.b) {
        this.b = ratio * sinB;
      } else if (!this.c) {
        this.c = ratio * sinC;
      }
    } else if (type == 'SAS') {
      if (!!this.A && this.A >= Constants.PI || !!this.B && this.B >= Constants.PI || !!this.C && this.C >= Constants.PI) {
        // Invalid. Do not proceed
      }
      if (!this.a) {
        this.a = this.getSide(this.b, this.c, this.A);
      } if (!this.b) {
        this.b = this.getSide(this.c, this.a, this.B);
      } if (!this.c) {
        this.c = this.getSide(this.a, this.b, this.C);
      } if (!this.A) {
        this.A = this.getAngle(this.b, this.c, this.a);
      } if (!this.B) {
        this.B = this.getAngle(this.c, this.a, this.b);
      } if (!this.C) {
        this.C = this.getAngle(this.a, this.b, this.c);
      }
    } else if (type == 'SSA') {
      let knownSide;
      let knownAngle;
      let partialSide;
      if (!!this.a && !!this.A) {
        knownSide = a;
        knownAngle = A;
      } if (!!this.b && !!this.B) {
        knownSide = b;
        knownAngle = B;
      } if (!!this.c && !!this.C) {
        knownSide = c;
        knownAngle = C;
      } if (!!this.a && !this.A) {
        partialSide = this.a;
      } if (!!this.b && !this.B) {
        partialSide = this.b;
      } if (!!this.c && !this.C) {
        partialSide = this.c;
      }

      if (knownAngle >= Constants.PI) {
        // Invalid. Do not proceed.
      }

      let partialAngle;
      let unknownSide;
      let unknownAngle;
      const ratio = knownSide/Math.sin(knownAngle);
      const temp = partialSide / ratio;
      if (temp>1 || knownAngle >= Constants.HALF_PI && knownSide <= partialSide) {
        // Invalid. no Solution
      } else if (temp==1 && knownSide >= partialSide) {
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
      if (!!this.a && !this.A) {
        this.A = partialAngle;
      } if (!!this.b && !this.B) {
        this.B = partialAngle;
      } if (!!this.c && !this.C) {
        this.C = partialAngle;
      } if (!!this.a && !this.A) {
        this.a = unknownSide;
        this.A = unknownAngle;
      } if (!!this.b && !this.B) {
        this.b = unknownSide;
        this.B = unknownAngle;
      } if (!!this.c && !this.C) {
        this.c = unknownSide;
        this.C = unknownAngle;
      }
    }
  }

  get() {
    return {sideA: this.a,
      sideB: this.b,
      sideC: this.c,
      angleA: this.A,
      angleB: this.B,
      angleC: this.C};
  }

  perimeter() {
    if (Arrays.isArray(this.a) || Arrays.isArray(this.b) || Arrays.isArray(this.c)) {
      const result = [0, 0];
      
    }
  }

  semiPerimeter() {
    return this.perimeter()/2;
  }

  area() {
    const semiPerimeter = this.semiPerimeter();
    return Math.sqrt(semiPerimeter*(semiPerimeter-this.a));
  }
}

export default Triangle;
