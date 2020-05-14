// creating a validator class
import Validate from './validate';

/** Used for performing validation of physical quatities. */
class Validator {
  /**
   * Checks if param qualifies to length
   * @param {number} param
   * @return {boolean} whether param is a valid length
   */
  static isLength(param) {
    const rules = ['isNumber', 'isGreaterThanZero'];
    return rules.every((rule) => Validate[rule](param));
  }
}

export default Validator;
