# Triangle

## Class property

* a, b, c {numbers} the lengths of triangle
* A, B, C {numbers} the angles of triangle in radians.
* Angle 'A' is opposite to side 'a', similarly angle 'B' is opposite to side 'c' and so on.

## Methods

### define(sideA=0, sideB=0, sideC=0, angleA=0, angleB=0, angleC=0)

* Used to create the triangle.
* The angles are in radian.
* Expects atleast three parameters provided all the three parameters are not angles.
* The accepted combination of parameters include triangle in -
  * SSS - side, side, side form,
  * AAS - angle, angle, side form,
  * ASA - angle, side, angle form,
  * SAS - side, angle, side form, and;
  * SSA - side, side, angle form.

```javascript
// myTriangle is an object of triangle class.

myTriangle.define(1, 1, 1, 0, 0, 0) // SSS

myTriangle.define(0, 0, 1, Math.PI/3, Math.PI/3, 0) // AAS
```

### get()

* Returns an object representing the triangle.
* The object is of the form.

```javascript
{
  sideA: 1,
  sideB: 1,
  sideC: 1,
  angleA: 1.0471975511965976,
  angleB: 1.0471975511965976,
  angleC: 1.0471975511965976
}
```

### area()

* Returns the area of the triangle.

### perimeter()

* Returns the perimeter of the triangle.

### semiPerimeter()

* Returns the semiPerimeter of the triangle.

### isEquilateral()

* Returns true if the triangle is equilateral.

### isIsosceles()

* Returns true if the triangle is isosceles.

### isScalene()

* Returns true if the triangle is scalene.

### isAcute()

* Returns true if the triangle is acute angled.

### isObtuse()

* Returns true if the triangle is obtuse angled.

### isRightAngled()

* Returns true if the triangle is right angled.
