# Rhombus

## Class property

* side {numbers} the side of rhombus
* angleA, angleB {numbers} the angles of rhombus in radians. A rhombus has four angles out of which two are unique.
* diagonalA, diagonalB {numbers} the two diagonals of the rhombus.
* The smaller angle is opposite to the smaller diagonal if diagonalA is smaller than the angle which is smaller is on either side of diagonalA.

## Methods

### define(side=0, angleA=0, angleB=0, dA=0, dB=0)

* Used to create the rhombus.
* The angles are in radian.
* Expects atleast two parameters provided all the two parameters are not angles.
* The accepted combination of parameters include rhombus in -
  * DD - diagonal, diagonal form,
  * DS - one diagonal, side form, and;
  * SA - side, one angle form.

```javascript
// myRhombus is an object of rhombus class.

myRhombus.define(0, 0, 0, 4, 5) // DD

myRhombus.define(3.2, 0, 0, 4, 0) // DS
```

### get()

* Returns an object representing the rhombus.
* The object is of the form.

```javascript
{
  side: 3.20,
  angleA: 1.3494,
  angleB: 1.7921,
  diagonalA: 4.0,
  diagonalB: 5.0
}
```

### area()

* Returns the area of the rhombus.

### perimeter()

* Returns the perimeter of the rhombus.

### height()

* Returns the height of the rhombus.
