import Validator from '../validation/validator';

/** This class realises the Rectangle object */
class Rectangle {
  #length = 0;
  #breadth = 0;

  /**
   * Return the length property
   * @return {number} the length of rectangle
   */
  get length() {
    return this.#length;
  }

  /**
   * Return the breadth property
   * @return {number} the breadth of rectangle
   */
  get breadth() {
    return this.#breadth;
  }

  /**
   * Defines the parameters for the rectangle
   * @param {number} length
   * @param {number} breadth
   */
  define(length, breadth) {
    if (Validator.isLength(length) && Validator.isLength(breadth)) {
      this.#length = length;
      this.#breadth = breadth;
    }
  }

  /**
   * Returns an object representing the rectangle.
   * @return {Object} an object defining the parameters of rectangle.
   */
  get() {
    return {length: this.length, breadth: this.breadth};
  }

  /**
   * Return the area of the rectangle object
   * @return {number} the area of rectangle
   */
  area() {
    return this.length * this.breadth;
  }

  /**
   * Return the perimeter of rectangle object
   * @return {number} the perimeter of rectangle
   */
  perimeter() {
    return 2 * (this.length + this.breadth);
  }

  /**
   * Returns the diagonal of rectangle object
   * @return {number} the diagonal of rectangle
  */
  diagonal() {
    return Math.sqrt(this.length**2 + this.breadth**2);
  }
}

export default Rectangle;
