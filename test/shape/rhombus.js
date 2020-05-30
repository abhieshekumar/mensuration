import assert from 'assert';
import Rhombus from '../../src/shape/rhombus';

const s = 3.20;
const h = 3.12;
const d1 = 4.0;
const d2 = 5.0;
const a1 = 1.3494;
const a2 = 1.7921;

const area = 10.00;
const perimeter = 12.81;

const testRhombus = () => {
  describe('Rhombus', () => {
    describe('Constructor', () => {
      it(`Parameters remained unchanged if insuffecient parameters are provided.`, () => {
        const temp = new Rhombus();
        temp.define(0, 0, 0, d1, 0);
        assert.equal(Math.round(temp.side), 0);
        assert.equal(Math.round(temp.angleA), 0);
        assert.equal(Math.round(temp.angleB), 0);
        assert.equal(Math.round(temp.diagonalA), 0);
        assert.equal(Math.round(temp.diagonalB), 0);
        assert.equal(Math.round(temp.height), 0);
      });
      it(`Parameters remained unchanged if no side/diagonal is provided.`, () => {
        const temp = new Rhombus();
        temp.define(0, a1, a2, 0, 0);
        assert.equal(Math.round(temp.side), 0);
        assert.equal(Math.round(temp.angleA), 0);
        assert.equal(Math.round(temp.angleB), 0);
        assert.equal(Math.round(temp.diagonalA), 0);
        assert.equal(Math.round(temp.diagonalB), 0);
        assert.equal(Math.round(temp.height), 0);
      });
      it(`Define rhombus based on the two diagonals - DD.`, () => {
        const temp = new Rhombus();
        temp.define(0, 0, 0, d1, d2);
        assert.equal(Math.round(temp.side), Math.round(s));
        assert.equal(Math.round(temp.angleA), Math.round(a1));
        assert.equal(Math.round(temp.angleB), Math.round(a2));
        assert.equal(Math.round(temp.diagonalA), Math.round(d1));
        assert.equal(Math.round(temp.diagonalB), Math.round(d2));
        assert.equal(Math.round(temp.height), Math.round(h));
      });
      it(`Define rhombus based on the two diagonals - DD.`, () => {
        const temp = new Rhombus();
        temp.define(0, 0, 0, d2, d1);
        assert.equal(Math.round(temp.side), Math.round(s));
        assert.equal(Math.round(temp.angleA), Math.round(a2));
        assert.equal(Math.round(temp.angleB), Math.round(a1));
        assert.equal(Math.round(temp.diagonalA), Math.round(d2));
        assert.equal(Math.round(temp.diagonalB), Math.round(d1));
        assert.equal(Math.round(temp.height), Math.round(h));
      });
      it(`Define rhombus based on diagonal and a side - DS.`, () => {
        const temp = new Rhombus();
        temp.define(s, 0, 0, d1, 0);
        assert.equal(Math.round(temp.side), Math.round(s));
        assert.equal(Math.round(temp.angleA), Math.round(a1));
        assert.equal(Math.round(temp.angleB), Math.round(a2));
        assert.equal(Math.round(temp.diagonalA), Math.round(d1));
        assert.equal(Math.round(temp.diagonalB), Math.round(d2));
        assert.equal(Math.round(temp.height), Math.round(h));
      });
      it(`Define rhombus based on diagonal and a side - DS.`, () => {
        const temp = new Rhombus();
        temp.define(s, 0, 0, 0, d2);
        assert.equal(Math.round(temp.side), Math.round(s));
        assert.equal(Math.round(temp.angleA), Math.round(a1));
        assert.equal(Math.round(temp.angleB), Math.round(a2));
        assert.equal(Math.round(temp.diagonalA), Math.round(d1));
        assert.equal(Math.round(temp.diagonalB), Math.round(d2));
        assert.equal(Math.round(temp.height), Math.round(h));
      });
      it(`Define rhombus based on a side and one angle - SA.`, () => {
        const temp = new Rhombus();
        temp.define(s, a1, 0, 0, 0);
        assert.equal(Math.round(temp.side), Math.round(s));
        assert.equal(Math.round(temp.angleA), Math.round(a1));
        assert.equal(Math.round(temp.angleB), Math.round(a2));
        assert.equal(Math.round(temp.diagonalA), Math.round(d1));
        assert.equal(Math.round(temp.diagonalB), Math.round(d2));
        assert.equal(Math.round(temp.height), Math.round(h));
      });
      it(`Define rhombus based on a side and one angle - SA.`, () => {
        const temp = new Rhombus();
        temp.define(s, 0, a2, 0, 0);
        assert.equal(Math.round(temp.side), Math.round(s));
        assert.equal(Math.round(temp.angleA), Math.round(a1));
        assert.equal(Math.round(temp.angleB), Math.round(a2));
        assert.equal(Math.round(temp.diagonalA), Math.round(d1));
        assert.equal(Math.round(temp.diagonalB), Math.round(d2));
        assert.equal(Math.round(temp.height), Math.round(h));
      });
      it(`Define rhombus based on a side and one angle - SA.`, () => {
        const temp = new Rhombus();
        temp.define(s, a2, 0, 0, 0);
        assert.equal(Math.round(temp.side), Math.round(s));
        assert.equal(Math.round(temp.angleA), Math.round(a2));
        assert.equal(Math.round(temp.angleB), Math.round(a1));
        assert.equal(Math.round(temp.diagonalA), Math.round(d2));
        assert.equal(Math.round(temp.diagonalB), Math.round(d1));
        assert.equal(Math.round(temp.height), Math.round(h));
      });
    });
    describe('Methods', () => {
      const temp = new Rhombus();
      temp.define(0, 0, 0, d1, d2);
      it(`Should calculate perimeter for rhombus with diagonals ${d1} and ${d2}`, () => {
        assert.equal(Math.round(temp.perimeter()), Math.round(perimeter));
      });
      it(`Should calculate area for rhombus with diagonals ${d1} and ${d2}`, () => {
        assert.equal(Math.round(temp.area()), Math.round(area));
      });
    });
  });
};

export default testRhombus;
