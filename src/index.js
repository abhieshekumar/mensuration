// code for npm package here
import Circle from './shape/circle';
import Rectangle from './shape/rectangle';
import Rhombus from './shape/rhombus';
import Square from './shape/square';
import Triangle from './shape/triangle';

const Shape = {
  Circle,
  Rectangle,
  Rhombus,
  Square,
  Triangle,
};

/*
const obj = new Shape.Triangle();
// SAS - obj.define(0, 0, 8, 1.011, 0, 1.318);
// ASA - obj.define(0, 0, 8, 1.011, 0.8127, 0);
// SAS - obj.define(7, 0, 8, 0, 0.8127, 0);
// SSA - obj.define(0, 6, 8, 0, 0.8127, 0);
// SSS - obj.define(3, 4, 5);
console.log(obj.get());
console.log('Perimeter '+obj.perimeter());
console.log('SPeri ' + obj.semiPerimeter());
console.log('Area ' + obj.area());
console.log('EQ ' +obj.isEquilateral());
console.log('ISos '+obj.isIsosceles());
console.log('Scal '+obj.isScalene());
console.log('Acu '+obj.isAcute());
console.log('Obt '+obj.isObtuse());
console.log('Right '+obj.isRightAngled());
*/


/*const obj = new Shape.Rhombus();
// DD - obj.define(0, 0, 0, 4, 5);
// SA - obj.define(3.201, 1.34, 0, 0, 0);
// DS - obj.define(3.20, 0, 0, 5);
console.log(obj.get());
console.log(obj.perimeter());
console.log(obj.area());*/
export default Shape;

