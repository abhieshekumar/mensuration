import assert from 'assert';
import Square from '../../src/shape/square';

const validSide = 10;
const invalidSide1 = 'side';
const invalidSide2 = -10;
const area = validSide * validSide;
const perimeter = validSide * 4;
const diagonal = validSide * Math.sqrt(2);
const squareObject = {side: validSide};

const testSquare = () => {
  describe('Square', () => {
    describe('Constructor', () => {
      const temp = new Square();
      it(`Side remains 0/unchanged when typeof is not number.`, () => {
        temp.define(invalidSide1);
        assert.equal(temp.side, 0);
      });
      it(`Side remains 0/unchanged when setting a negative value.`, () => {
        temp.define(invalidSide2);
        assert.equal(temp.side, 0);
      });
      it(`Should set the class parameter side to ${validSide}.`, () => {
        temp.define(validSide);
        assert.equal(temp.side, validSide);
      });
    });
    describe('Methods', () => {
      const temp = new Square();
      temp.define(validSide);
      it(`Should create a valid object representing square`, () => {
        assert.deepEqual(temp.get(), squareObject);
      });
      it(`Should calculate perimeter for side = ${validSide}.`, () => {
        assert.equal(temp.perimeter(), perimeter);
      });
      it(`Should calculate area for side = ${validSide}.`, () => {
        assert.equal(temp.area(), area);
      });
      it(`Should calculate diagonal for side = ${validSide}.`, () => {
        assert.equal(temp.diagonal(), diagonal);
      });
    });
  });
};

export default testSquare;
