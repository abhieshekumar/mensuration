import * as Constants from '../constants';
import Validator from '../validation/validator';

/** This class realises the Circle object */
class Circle {
  #radius = 0;

  /**
   * Sets the radius of the circle after validating using the Validator class.
   * @param {number} value
   */
  set radius(value) {
    if (Validator.isLength(value)) {
      this.#radius = value;
    }
  }

  /**
   * Return the radius property
   * @return {number} the circle of radius
   */
  get radius() {
    return this.#radius;
  }

  /**
   * Return the perimeter of circle object
   * @return {number} the perimeter of radius
   */
  perimeter() {
    return Constants.TWO_PI * this.radius;
  }

  /**
   * Return the area of the circle object
   * @return {number} the area of radius
   */
  area() {
    return Constants.PI * this.radius * this.radius;
  }

  /**
   * Return the diameter of the circle object
   * @return {number} the diameter of radius
   */
  diameter() {
    return 2 * this.radius;
  }
}

export default Circle;
