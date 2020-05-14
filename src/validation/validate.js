/** Defines the unit functions for validating parameters.
 * It is used by validator class*/
class Validate {
  /**
   * Checks if param is a valid number
   * @param {number} param
   * @return {boolean} whether param is a number or not
   */
  static isNumber(param) {
    if (typeof param === 'number') {
      return true;
    }
    return false;
  }

  /**
   * Checks if param is a positive number
   * @param {number} param
   * @return {boolean} whether param is positive or not
   */
  static isGreaterThanZero(param) {
    if (param > 0) {
      return true;
    }
    return false;
  }
}

export default Validate;
