// creating a validator class
import Validate from './validate';
import * as Constants from '../constants';

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

  static isTriangle(sideA, sideB, sideC, angleA, angleB, angleC) {
    if (sideA && sideB && sideC) {
      // Based on SSS
      if ( (sideA + sideB) > sideC &&
           (sideB + sideC) > sideA &&
           (sideC + sideA) > sideB) {
        // The triangle is valid based on sides only
        return 'SSS';
      }
    } else if (((angleA && angleB) && (sideA || sideB)) ||
               ((angleB && angleC) && (sideB || sideC)) ||
               ((angleC && angleA) && (sideC || sideA))) {
      // Based on AAS
      if ((angleA + angleB + angleC) < Constants.PI) {
        // The triangle is valid based on AAS
        return 'AAS';
        // Also SAA
      }
    } else if (((angleA && angleB) && (sideC)) ||
               ((angleB && angleC) && (sideA)) ||
               ((angleC && angleA) && (sideB))) {
      // Based on ASA
      if ((angleA + angleB + angleC) < Constants.PI) {
        // The triangle is valid based on ASA
        return 'ASA';
      }
    } else if ((sideA && sideB ) && (angleA || angleB) ||
               (sideB && sideC ) && (angleB || angleC) ||
               (sideC && sideA ) && (angleC || angleA)) {
      // Based on SSA
      if ((angleA + angleB + angleC) < Constants.PI) {
        // The triangle is valid based on SSA
        return 'SSA';
        // Also ASS
      }
    } else if ((sideA && sideB ) && (angleC) ||
               (sideB && sideC ) && (angleA) ||
               (sideC && sideA ) && (angleB)) {
      // Based on SAS
      if ((angleA + angleB + angleC) < Constants.PI) {
        // The triangle is valid based on SAS
        return 'SAS';
      }
    } else {
      return false;
    }
  }
}

export default Validator;
