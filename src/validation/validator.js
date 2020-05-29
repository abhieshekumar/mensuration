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
    const sides = Validator.isLength(a) + Validator.isLength(b) + Validator.isLength(c);
    const angles = Validator.isAngle(A) + Validator.isAngle(B) + Validator.isAngle(C);
    if ((sides + angles) != 3) {
      return false;
    } else if (sides == 0) {
      return false;
    } else if (sides == 3) {
      return 'SSS';
    } else if (angles == 2) {
      return 'AAS|ASA';
    } else if (Validator.isAngle(A) && Validator.isLength(a) || Validator.isAngle(B) && Validator.isLength(b) || Validator.isAngle(C) && Validator.isLength(c)) {
      return 'SAS';
    } else {
      return 'SSA';
    }
  }

  /**
   * @param {number} s The length of the side of rhombus
   * @param {number} p Diagonal one of rhombus
   * @param {number} q Second diagonal of rhombus
   * @param {number} A First angle of rhombus
   * @param {number} B Second angle of rhombus
   * @return {boolean}
   */
  static isRhombus(s, p, q, A, B) {
    const sides = Validator.isLength(s) + Validator.isLength(p) + Validator.isLength(q);
    const angles = Validator.isAngle(A) + Validator.isAngle(B);
    if ((sides + angles) <= 2) {
      // At least two piece of information
      return false;
    } else if (angles == 2) {
      // At least one side
      return false;
    } else if (Validator.isLength(p) && Validator.isLength(q)) {
      // Length of both diagonals
      return 'DD';
    } else if (Validator.isLength(s) && (Validator.isLength(p) || Validator.isLength(q))) {
      // Length of side and one diagonal. If you have both diagonals it will go up
      return 'DS';
    } else if ((Validator.isAngle(A) || Validator.isAngle(B)) && Validator.isLength(s)) {
      // One angle and the side
      return 'SA';
    }
  }
}

export default Validator;
