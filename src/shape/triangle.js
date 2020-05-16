import Validator from '../validation/validator';

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

  define(sideA=0, sideB=0, sideC=0, angleA=0, angleB=0, angleC=0) {
    if (Validator.isTriangle(sideA, sideB, sideC,
        angleA, angleB, angleC)) {
      this.#sideA = sideA;
      this.#sideB = sideB;
      this.#sideC = sideC;
      this.#angleA = angleA;
      this.#angleB = angleB;
      this.#angleC = angleC;
    }
  }

  get() {
    return {side: this.side};
  }

  perimeter() {
    return 4 * this.side;
  }

  area() {
    return this.side * this.side;
  }

  diagonal() {
    return this.side * Math.sqrt(2);
  }
}

export default Triangle;
