import Validator from '../validation/validator';

/** This class realises the Square object */
class Square {
  #side = 0;

  /**
   * Return the side property
   * @return {number} the side of square
   */
  get side() {
    return this.#side;
  }

  /**
   * Defines the parameters for the square
   * @param {number} side
   */
  define(side) {
    if (Validator.isLength(side)) {
      this.#side = side;
    }
  }

  /**
   * Returns an object representing the square.
   * @return {Object} an object defining the parameters of square.
   */
  get() {
    return {side: this.side};
  }

  /**
   * Returns the perimeter of square object
   * @return {number} the perimeter of square
   */
  perimeter() {
    return 4 * this.side;
  }

  /**
   * Returns the area of square object
   * @return {number} the area of square
  */
  area() {
    return this.side * this.side;
  }

  /**
   * Returns the diagonal of square object
   * @return {number} the diagonal of square
  */
  diagonal() {
    return this.side * Math.sqrt(2);
  }
}

export default Square;
