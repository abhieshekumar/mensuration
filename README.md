# mensurationJS

* The motive behind this library is to perform mensuration operations on different geometric shapes.
* The currently supported shapes are -
  * Circle
  * Rectangle
  * Rhombus
  * Square
  * Triangle
* A detailed documentation for each of the shapes has been discussed in the [docs](https://github.com/abhieshekumar/mensuration/tree/master/docs) folder.

## Usage

* Install the package via npm as -

```bash
npm i mensuration-js
```

* Once installed you can use the library as -

```javascript
// Importing the library
const Shape = require('mensuration-js');
// Creating the circle object
const myCircle = new Shape.Circle();
// Defining the circle by specifying radius
myCircle.define(1);
// Displaying the result
console.log(myCircle.perimeter());
```

## Contributing

* Community contributions are always appreciated. To help develop the library please fork the repository and submit a pull request.

### The general flow of steps is as follows -

* Fork the repository.
* Clone your forked copy.
* Once cloned install the relevant packages by -

```bash
npm install
```

* Now you can create a new branch and start working on it using -

```bash
git checkout -b relevant-name
```

* Linter will help you to maintain consistency in code.
* To see if all the test cases pass. Run -

```bash
npm run test
```

* Once you are done feel free to submit your pull request.
