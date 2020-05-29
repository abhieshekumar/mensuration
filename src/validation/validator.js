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
    if ((sides + angles) != 3) {
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

  /**
   * @param {number} a The length of the side of rhombus
   * @param {number} p Diagonal one of rhombus
   * @param {number} q Second diagonal of rhombus
   * @param {number} h Height of rhombus
   * @param {number} A First angle of rhombus
   * @param {number} B Second angle of rhombus
   * @return {boolean}
   */
  static isRhombus(s, p, q, h, A, B) {
    const sides = !!s + !!p + !!q + !!h;
    const angles = !!A + !!B;
    if ((sides + angles) <= 2) {
      // At least two piece of information
      return false;
    } else if (angles == 2) {
      // At least one side
      return false;
    } else if (!!p && !!q) {
      // Length of both diagonals
      return 'DD';
    } else if (!!s && (!!p || !!q)) {
      // Length of side and one diagonal. If you have both diagonals it will go up
      return 'DS';
    } else if ((!!A || !!B) && !!s) {
      // One angle and the side
      return 'SA';
    }
  }
}

export default Validator;
