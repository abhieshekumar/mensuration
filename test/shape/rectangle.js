import assert from 'assert';
import Rectangle from '../../src/shape/rectangle';

const validLength = 10;
const validBreadth = 5;
const invalidLength1 = -8;
const invalidBreadth1 = 'breadth';

const area = validLength * validBreadth;
const perimeter = 2 * (validBreadth + validLength);
const diagonal = Math.sqrt(validLength**2 + validBreadth**2);
const rectangleObject = {length: validLength, breadth: validBreadth};

const testRectangle = () => {
  describe('Rectangle', () => {
    describe('Constructor', () => {
      const temp = new Rectangle();
      it(`Length/Breadth remains 0/unchanged when typeof is not number.`, () => {
        temp.define(invalidLength1, invalidBreadth1);
        assert.equal(temp.length, 0);
        assert.equal(temp.breadth, 0);
      });
      it(`Should set the class parameter length and breadth to ${validLength} and ${validBreadth} respectively.`, () => {
        temp.define(validLength, validBreadth);
        assert.equal(temp.length, validLength);
        assert.equal(temp.breadth, validBreadth);
      });
    });
    describe('Methods', () => {
      const temp = new Rectangle();
      temp.define(validLength, validBreadth);
      it(`Should create a valid object representing rectangle`, () => {
        assert.deepEqual(temp.get(), rectangleObject);
      });
      it(`Should calculate perimeter for length = ${validLength} and breadth = ${validBreadth}.`, () => {
        assert.equal(temp.perimeter(), perimeter);
      });
      it(`Should calculate area for for length = ${validLength} and breadth = ${validBreadth}.`, () => {
        assert.equal(temp.area(), area);
      });
      it(`Should calculate diagonal for length = ${validLength} and breadth = ${validBreadth}.`, () => {
        assert.equal(temp.diagonal(), diagonal);
      });
    });
  });
};

export default testRectangle;
