import assert from 'assert';
import Triangle from '../../src/shape/triangle';

// General triangle measurements
const a = 7;
const b = 5.99;
const c = 8;
const A = 1.0107;
const B = 0.8127;
const C = 1.318;

const perimeter = a + b + c;
const semiPerimeter = perimeter/2;
const area = Math.sqrt(semiPerimeter*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c));


const testTriangle = () => {
  describe('Triangle', () => {
    describe('Constructor', () => {
      it(`Parameters remained unchanged if insuffecient parameters are provided`, () => {
        const temp = new Triangle();
        temp.define(0, 0, 0, A, B, 0);
        assert.equal(Math.round(temp.sideA), 0);
        assert.equal(Math.round(temp.sideB), 0);
        assert.equal(Math.round(temp.sideC), 0);
        assert.equal(Math.round(temp.angleA), 0);
        assert.equal(Math.round(temp.angleB), 0);
        assert.equal(Math.round(temp.angleC), 0);
      });
      it(`Parameters remained unchanged if no sides are provided`, () => {
        const temp = new Triangle();
        temp.define(0, 0, 0, A, B, C);
        assert.equal(Math.round(temp.sideA), 0);
        assert.equal(Math.round(temp.sideB), 0);
        assert.equal(Math.round(temp.sideC), 0);
        assert.equal(Math.round(temp.angleA), 0);
        assert.equal(Math.round(temp.angleB), 0);
        assert.equal(Math.round(temp.angleC), 0);
      });
      it(`Define triangle based only all the of sides - SSS`, () => {
        const temp = new Triangle();
        temp.define(a, b, c);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on sides and one angle - SSA`, () => {
        const temp = new Triangle();
        temp.define(0, b, c, 0, B, 0);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on sides and one angle - SSA`, () => {
        const temp = new Triangle();
        temp.define(0, b, c, 0, 0, C);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on sides and one angle - SSA`, () => {
        const temp = new Triangle();
        temp.define(a, 0, c, 0, 0, C);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on sides and one angle - SSA`, () => {
        const temp = new Triangle();
        temp.define(a, b, 0, A, 0, 0);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on sides and one angle - SAS`, () => {
        const temp = new Triangle();
        temp.define(a, 0, c, 0, B, 0);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on sides and one angle - SAS`, () => {
        const temp = new Triangle();
        temp.define(0, b, c, A, 0, 0);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on sides and one angle - SAS new`, () => {
        const temp = new Triangle();
        temp.define(a, b, 0, 0, 0, C);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on angles and one side - ASA`, () => {
        const temp = new Triangle();
        temp.define(0, 0, c, A, B, 0);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on angles and one side - AAS`, () => {
        const temp = new Triangle();
        temp.define(0, 0, c, A, 0, C);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on angles and one side - AAS`, () => {
        const temp = new Triangle();
        temp.define(a, 0, 0, A, 0, C);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
      it(`Define triangle based on angles and one side - AAS`, () => {
        const temp = new Triangle();
        temp.define(0, b, 0, 0, B, C);
        assert.equal(Math.round(temp.sideA), Math.round(a));
        assert.equal(Math.round(temp.sideB), Math.round(b));
        assert.equal(Math.round(temp.sideC), Math.round(c));
        assert.equal(Math.round(temp.angleA), Math.round(A));
        assert.equal(Math.round(temp.angleB), Math.round(B));
        assert.equal(Math.round(temp.angleC), Math.round(C));
      });
    });
    describe('Methods', () => {
      it(`Should calculate perimeter for triangle with sides ${a}, ${b} and ${c}`, () => {
        const temp = new Triangle();
        temp.define(a, b, c);
        assert.equal(Math.round(temp.perimeter()), Math.round(perimeter));
      });
      it(`Should calculate semi-perimeter for triangle with sides ${a}, ${b} and ${c}`, () => {
        const temp = new Triangle();
        temp.define(a, b, c);
        assert.equal(Math.round(temp.semiPerimeter()), Math.round(semiPerimeter));
      });
      it(`Should calculate area for triangle with sides ${a}, ${b} and ${c}`, () => {
        const temp = new Triangle();
        temp.define(a, b, c);
        assert.equal(Math.round(temp.area()), Math.round(area));
      });
      it(`Should determine if triangle isEquilateral for triangle with sides ${a}, ${a} and ${a}`, () => {
        const temp = new Triangle();
        temp.define(a, a, a);
        assert.equal(temp.isEquilateral(), true);
      });
      it(`Should determine if triangle isIsosceles for triangle with sides ${a}, ${a} and ${a}`, () => {
        const temp = new Triangle();
        temp.define(a, a, a);
        assert.equal(temp.isIsosceles(), true);
      });
      it(`Should determine if triangle isScalene for triangle with sides ${a}, ${a} and ${a}`, () => {
        const temp = new Triangle();
        temp.define(a, a, a);
        assert.equal(temp.isScalene(), false);
      });
      it(`Should determine if triangle isEquilateral for triangle with sides ${a}, ${b} and ${a}`, () => {
        const temp = new Triangle();
        temp.define(a, b, a);
        assert.equal(temp.isEquilateral(), false);
      });
      it(`Should determine if triangle isIsosceles for triangle with sides ${a}, ${b} and ${a}`, () => {
        const temp = new Triangle();
        temp.define(a, b, a);
        assert.equal(temp.isIsosceles(), true);
      });
      it(`Should determine if triangle isScalene for triangle with sides ${a}, ${b} and ${a}`, () => {
        const temp = new Triangle();
        temp.define(a, b, a);
        assert.equal(temp.isScalene(), false);
      });
      it(`Should determine if triangle isEquilateral for triangle with sides ${a}, ${b} and ${c}`, () => {
        const temp = new Triangle();
        temp.define(a, b, c);
        assert.equal(temp.isEquilateral(), false);
      });
      it(`Should determine if triangle isIsosceles for triangle with sides ${a}, ${b} and ${c}`, () => {
        const temp = new Triangle();
        temp.define(a, b, c);
        assert.equal(temp.isIsosceles(), false);
      });
      it(`Should determine if triangle isScalene for triangle with sides ${a}, ${b} and ${c}`, () => {
        const temp = new Triangle();
        temp.define(a, b, c);
        assert.equal(temp.isScalene(), true);
      });
      it(`Should determine if triangle isAcute for triangle with sides ${a}, ${a} and ${a}`, () => {
        const temp = new Triangle();
        temp.define(a, a, a);
        assert.equal(temp.isAcute(), true);
      });
      it(`Should determine if triangle isRightAngled for triangle with sides ${a}, ${a} and ${a}`, () => {
        const temp = new Triangle();
        temp.define(a, a, a);
        assert.equal(temp.isRightAngled(), false);
      });
      it(`Should determine if triangle isObtuse for triangle with sides ${a}, ${a} and ${a}`, () => {
        const temp = new Triangle();
        temp.define(a, a, a);
        assert.equal(temp.isObtuse(), false);
      });
      it(`Should determine if triangle isAcute for triangle with sides 3, 4 and 5`, () => {
        const temp = new Triangle();
        temp.define(3, 4, 5);
        assert.equal(temp.isAcute(), false);
      });
      it(`Should determine if triangle isRightAngled for triangle with sides 3, 4 and 5`, () => {
        const temp = new Triangle();
        temp.define(3, 4, 5);
        assert.equal(temp.isRightAngled(), true);
      });
      it(`Should determine if triangle isObtuse for triangle with sides 3, 4 and 5`, () => {
        const temp = new Triangle();
        temp.define(3, 4, 5);
        assert.equal(temp.isObtuse(), false);
      });
      it(`Should determine if triangle isAcute for triangle with sides 4, 3 and 6`, () => {
        const temp = new Triangle();
        temp.define(4, 3, 6);
        assert.equal(temp.isAcute(), false);
      });
      it(`Should determine if triangle isRightAngled for triangle with sides4, 3 and 6`, () => {
        const temp = new Triangle();
        temp.define(4, 3, 6);
        assert.equal(temp.isRightAngled(), false);
      });
      it(`Should determine if triangle isObtuse for triangle with sides 4, 3 and 6`, () => {
        const temp = new Triangle();
        temp.define(4, 3, 6);
        assert.equal(temp.isObtuse(), true);
      });
    });
  });
};

export default testTriangle;
