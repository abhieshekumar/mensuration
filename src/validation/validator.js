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

  static isAngle(param) {
    const rules = ['isNumber', 'isGreaterThanZero', 'isAngle'];
    return rules.every((rule) => Validate[rule](param));
  }

  static isTriangle(a, b, c, A, B, C) {
    const sides = !!a + !!b + !!c;
    const angles = !!A + !!B + !!C;
    if (sides + angles != 3) {
      return false;
    } else if (sides == 0) {
      return false;
    } else if (sides == 3) {
      return 'SSS';
    } else if (angles == 2) {
      return 'AAS|ASA';
    } else if (!!A && !!a || !!B && !!b || !!C && !!c) {
      return 'SAS';
    } else {
      return 'SSA';
    }
  }
}

export default Validator;
