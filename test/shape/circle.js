import assert from 'assert';
import * as Constants from '../../src/constants';
import Circle from '../../src/shape/circle';

const validRadius = 10;
const invalidRadius1 = 'radius';
const invalidRadius2 = -10;
const area = Constants.PI * validRadius * validRadius;
const perimeter = Constants.PI * 2 * validRadius;
const diameter = 2 * validRadius;

const testCircle = () => {
  describe('Circle', () => {
    describe('Constructor', () => {
      const temp = new Circle();
      it(`Radius remains 0/unchanged when typeof is not number.`, () => {
        temp.radius = invalidRadius1;
        assert.equal(temp.radius, 0);
      });
      it(`Radius remains 0/unchanged when setting a negative value.`, () => {
        temp.radius = invalidRadius2;
        assert.equal(temp.radius, 0);
      });
      it(`Should set the class parameter radius to ${validRadius}.`, () => {
        temp.radius = validRadius;
        assert.equal(temp.radius, validRadius);
      });
    });
    describe('Methods', () => {
      const temp = new Circle();
      temp.radius = validRadius;
      it(`Should calculate diameter for radius = ${validRadius}.`, () => {
        assert.equal(temp.diameter(), diameter);
      });
      it(`Should calculate perimeter for radius = ${validRadius}.`, () => {
        assert.equal(temp.perimeter(), perimeter);
      });
      it(`Should calculate area for radius = ${validRadius}.`, () => {
        assert.equal(temp.area(), area);
      });
    });
  });
};

export default testCircle;
