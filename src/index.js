/**
 * Handles the circle class.
 * @public
 */
class Circle {
  /**
   * The radius of the circle.
   * @private
   */
  #radius = 0;

  /**
   * @description Sets the value for class parameter radius.
   * @param {number} value
   */
  set radius(value) {
    this.#radius = value;
  }

  /**
   * @description Returns the value of radius.
   * @return {number} The value of radius.
   */
  get radius() {
    return this.#radius;
  }
}

export default Circle;
