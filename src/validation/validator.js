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

  /**
   * Checks if param qualifies to be angle
   * @param {number} param
   * @return {boolean} whether param is a valid angle
   */
  static isAngle(param) {
    const rules = ['isNumber', 'isGreaterThanZero', 'isAngle'];
    return rules.every((rule) => Validate[rule](param));
  }

  /**
   * Checks for the type of triangle
   * @param {number} a side
   * @param {number} b side
   * @param {number} c side
   * @param {number} A angle
   * @param {number} B angle
   * @param {number} C angle
   * @return {string} the type of triangle
   */
  static isTriangle(a, b, c, A, B, C) {
    // eslint-disable-next-line max-len
    const sides = Validator.isLength(a) + Validator.isLength(b) + Validator.isLength(c);
    // eslint-disable-next-line max-len
    const angles = Validator.isAngle(A) + Validator.isAngle(B) + Validator.isAngle(C);
    if ((sides + angles) != 3) {
      return false;
    } else if (sides == 0) {
      return false;
    } else if (sides == 3) {
      return 'SSS';
    } else if (angles == 2) {
      return 'AAS|ASA';
    // eslint-disable-next-line max-len
    } else if (Validator.isAngle(A) && Validator.isLength(b) && Validator.isLength(c) || Validator.isAngle(B) && Validator.isLength(a) && Validator.isLength(c) || Validator.isAngle(C) && Validator.isLength(a) && Validator.isLength(b)) {
      return 'SAS';
    } else {
      return 'SSA';
    }
  }

  /**
   * @param {number} s The length of the side of rhombus
   * @param {number} A First angle of rhombus
   * @param {number} B Second angle of rhombus
   * @param {number} p Diagonal one of rhombus
   * @param {number} q Second diagonal of rhombus
   * @return {boolean}
   */
  static isRhombus(s, A, B, p, q) {
    // eslint-disable-next-line max-len
    const sides = Validator.isLength(s) + Validator.isLength(p) + Validator.isLength(q);
    const angles = Validator.isAngle(A) + Validator.isAngle(B);
    if ((sides + angles) < 2) {
      // At least two piece of information
      return false;
    } else if (angles == 2) {
      // At least one side
      return false;
    } else if (Validator.isLength(p) && Validator.isLength(q)) {
      // Length of both diagonals
      return 'DD';
    // eslint-disable-next-line max-len
    } else if (Validator.isLength(s) && (Validator.isLength(p) || Validator.isLength(q))) {
      // eslint-disable-next-line max-len
      // Length of side and one diagonal. If you have both diagonals it will go up
      return 'DS';
    // eslint-disable-next-line max-len
    } else if ((Validator.isAngle(A) || Validator.isAngle(B)) && Validator.isLength(s)) {
      // One angle and the side
      return 'SA';
    }
  }
}

export default Validator;
