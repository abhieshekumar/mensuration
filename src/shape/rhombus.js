import * as Constants from '../constants';
import Validator from '../validation/validator';

/** This class realises the Rhombus object */
class Rhombus {
  #side = 0;
  #angleA = 0;
  #angleB = 0;
  #dA = 0;
  #dB = 0;

  /**
   * Returns the side property
   * @return {number} the side of rhombus
   */
  get side() {
    return this.#side;
  }

  /**
   * Returns the angleA property
   * @return {number} angleA of rhombus
   */
  get angleA() {
    return this.#angleA;
  }

  /**
   * Returns the angleB property
   * @return {number} angleB of rhombus
   */
  get angleB() {
    return this.#angleB;
  }

  /**
   * Returns the diagonalA property
   * @return {number} diagonalA of rhombus
   */
  get diagonalA() {
    return this.#dA;
  }

  /**
   * Returns the diagonalB property
   * @return {number} diagonalB of rhombus
   */
  get diagonalB() {
    return this.#dB;
  }

  /**
   * Defines the parameters of the rhombus
   * @param {number} side
   * @param {number} angleA in radians
   * @param {number} angleB in radians
   * @param {number} dA diagonal
   * @param {number} dB diagonal
   */
  define(side=0, angleA=0, angleB=0, dA=0, dB=0) {
    const valid = Validator.isRhombus(side, angleA, angleB, dA, dB);
    if (valid) {
      this.#side = side;
      this.#angleA = angleA;
      this.#angleB = angleB;
      this.#dA = dA;
      this.#dB = dB;
      this.compute(valid);
    }
  }

  /**
   * Returns the side length of rhombus given both diagonals
   * @return {number} the side length
   */
  getSideFromDiagonal() {
    return Math.sqrt((this.diagonalA/2)**2 + (this.diagonalB/2)**2);
  }

  /**
   * Computes height given the diagonal of radius
   * @return {number} the height of rhombus
   */
  height() {
    // Height = Area/side
    return ((this.diagonalA*this.diagonalB)/2)/(this.getSideFromDiagonal());
  }

  /**
   * Defines the complete rhombus object
   * @param {string} type indicates the type of parameter given by user
   */
  compute(type) {
    if (type == 'DD') {
      this.#side = this.getSideFromDiagonal();
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
      // We have both diagonals lets call function again with type = 'DD'
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
      if (this.angleA > this.angleB) {
        if (d1 > d2) {
          this.#dA = d1;
          this.#dB = d2;
        } else {
          this.#dA = d2;
          this.#dB = d1;
        }
      } else {
        if (d1 > d2) {
          this.#dA = d2;
          this.#dB = d1;
        } else {
          this.#dA = d1;
          this.#dB = d2;
        }
      }
    }
  }

  /**
   * Used to get the complete rhombus object
   * @return {Object} the rhombus object
   */
  get() {
    return {side: this.side,
      angleA: this.angleA,
      angleB: this.angleB,
      diagonalA: this.diagonalA,
      diagonalB: this.diagonalB};
  }

  /**
   * Computes the parameter of rhombus
   * @return {number} the perimeter
   */
  perimeter() {
    return this.side*4;
  }

  /**
   * Computes the area of rhombus
   * @return {number} the area
   */
  area() {
    return (this.diagonalA*this.diagonalB)/2;
  }
}

export default Rhombus;
