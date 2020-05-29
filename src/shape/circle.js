import * as Constants from '../constants';
import Validator from '../validation/validator';

/** This class realises the Circle object */
class Circle {
  #radius = 0;

  /**
   * Return the radius property
   * @return {number} the circle of radius
   */
  get radius() {
    return this.#radius;
  }

  /**
   * Defines the parameters for the circle
   * @param {number} radius
   */
  define(radius) {
    if (Validator.isLength(radius)) {
      this.#radius = value;
    }
  }

  /**
   * Returns an object representing the circle.
   * @return {Object} an object defining the parameters of circle.
   */
  get() {
    return {radius: this.radius};
  }

  /**
   * Return the area of the circle object
   * @return {number} the area of radius
   */
  area() {
    return Constants.PI * this.radius * this.radius;
  }

  /**
   * Calculates the area of a sector, given angle in radians
   * @param {number} angle
   * @return {number} area of sector
   */
  areaOfSector(angle) {
    return (1/2) * this.radius * this.radius * angle;
  }

  /**
   * Calculates the arc length, given the angle in radians
   * @param {number} angle
   * @return {number} arc length
   */
  arcLength(angle) {
    return this.radius * angle;
  }

  /**
   * Return the diameter of the circle object
   * @return {number} the diameter of radius
   */
  diameter() {
    return 2 * this.radius;
  }

  /**
   * Return the perimeter of circle object
   * @return {number} the perimeter of radius
   */
  perimeter() {
    return Constants.TWO_PI * this.radius;
  }
}

export default Circle;
