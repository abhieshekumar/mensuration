import Validator from '../validation/validator';
import * as Constants from '../constants';

/** This class realises the Triangle object */
class Triangle {
  #sideA = 0;
  #sideB = 0;
  #sideC = 0;
  #angleA = 0;
  #angleB = 0;
  #angleC = 0;

  get sideA() {
    return this.#sideA;
  }

  get sideB() {
    return this.#sideB;
  }

  get sideC() {
    return this.#sideC;
  }

  get angleA() {
    return this.#angleA;
  }

  get angleB() {
    return this.#angleA;
  }

  get angleC() {
    return this.#angleA;
  }

  set sideA(param) {
    if (Validator.isLength(param)) {
      this.#sideA = param;
    }
  }

  set sideB(param) {
    if (Validator.isLength(param)) {
      this.#sideB = param;
    }
  }

  set sideC(param) {
    if (Validator.isLength(param)) {
      this.#sideC = param;
    }
  }

  set angleA(param) {
    if (Validator.isAngle(param)) {
      this.#angleA = param;
    }
  }

  set angleB(param) {
    if (Validator.isAngle(param)) {
      this.#angleB = param;
    }
  }

  set angleC(param) {
    if (Validator.isAngle(param)) {
      this.#angleC = param;
    }
  }

  cosineRule(sideAngle, side1, side2) {
    const cosAngle = (side1**2 + side2**2 - sideAngle**2)/(2*side2*side3);
    return Math.acos(cosAngle);
  }

  findAngleFromSum(angle1, angle2) {
    return Constants.PI - (angle1+angle2);
  }

  compute(type) {
    if (type == 'SSS') {
      this.angleA = this.cosineRule(this.sideA, this.sideC, this.sideB);
      this.angleB = this.cosineRule(this.sideB, this.sideA, this.sideC);
      this.angleC = this.cosineRule(this.sideC, this.sideB, this.sideA);
    } else if (type == 'AAS') {
      const angles = [this.angleA, this.angleB, this.angleC];

      // Find the index of zero angle
      const indexOfZeroAngle = angles.indexOf(0);
      angles[indexOfZeroAngle] = Constants.PI - angles.reduce((a, b) => a+b, 0);
      this.angleA = angles[0];
      this.angleB = angles[1];
      this.angleC = angles[2];
      // All angles have been computed

      if (this.sideA && this.angleA && this.angleC) {
        this.sideC = (Math.sin(this.angleC)*this.sideA)/(Math.sin(this.angleA));
        this.sideB = (Math.sin(this.angleB)*this.sideA)/(Math.sin(this.angleA));
      } else if (this.sideC && this.angleA && this.angleC) {
        this.sideA = (Math.sin(this.angleA)*this.sideC)/(Math.sin(this.angleC));
        this.sideB = (Math.sin(this.angleB)*this.sideC)/(Math.sin(this.angleC));
      } else if (this.sideB && this.angleA && this.angleB) {
        this.sideA = (Math.sin(this.angleA)*this.sideB)/(Math.sin(this.angleB));
        this.sideC = (Math.sin(this.angleC)*this.sideB)/(Math.sin(this.angleB));
      } else if (this.sideA && this.angleA && this.angleB) {
        this.sideB = (Math.sin(this.angleB)*this.sideA)/(Math.sin(this.angleA));
        this.sideC = (Math.sin(this.angleC)*this.sideA)/(Math.sin(this.angleA));
      } else if (this.sideC && this.angleC && this.angleB) {
        this.sideB = (Math.sin(this.angleB)*this.sideC)/(Math.sin(this.angleC));
        this.sideA = (Math.sin(this.angleA)*this.sideC)/(Math.sin(this.angleC));
      } else if (this.sideB && this.angleC && this.angleB) {
        this.sideA = (Math.sin(this.angleA)*this.sideB)/(Math.sin(this.angleB));
        this.sideC = (Math.sin(this.angleC)*this.sideB)/(Math.sin(this.angleB));
      }
      // All the side lengths hav been computed
    } else if (type == 'ASA') {
      const angles = [this.angleA, this.angleB, this.angleC];

      // Find the index of zero angle
      const indexOfZeroAngle = angles.indexOf(0);
      angles[indexOfZeroAngle] = Constants.PI - angles.reduce((a, b) => a+b, 0);
      this.angleA = angles[0];
      this.angleB = angles[1];
      this.angleC = angles[2];
      // All angles have been computed

      if (this.sideA && this.angleB && this.angleC) {
        this.sideB = (Math.sin(this.angleB)*this.sideA)/(Math.sin(this.angleA));
        this.sideC = (Math.sin(this.angleC)*this.sideA)/(Math.sin(this.angleA));
      } else if (this.sideB && this.angleA && this.angleC) {
        this.sideA = (Math.sin(this.angleA)*this.sideB)/(Math.sin(this.angleB));
        this.sideC = (Math.sin(this.angleC)*this.sideB)/(Math.sin(this.angleB));
      } else if (this.sideC && this.angleA && this.angleB) {
        this.sideA = (Math.sin(this.angleA)*this.sideC)/(Math.sin(this.angleC));
        this.sideB = (Math.sin(this.angleB)*this.sideC)/(Math.sin(this.angleC));
      }
      // All sides computed
    }
  }

  define(sideA=0, sideB=0, sideC=0, angleA=0, angleB=0, angleC=0) {
    const valid = Validator.isTriangle(sideA, sideB, sideC,
        angleA, angleB, angleC);
    if (valid) {
      this.#sideA = sideA;
      this.#sideB = sideB;
      this.#sideC = sideC;
      this.#angleA = angleA;
      this.#angleB = angleB;
      this.#angleC = angleC;
      this.compute(valid);
    }
  }
}

export default Triangle;
