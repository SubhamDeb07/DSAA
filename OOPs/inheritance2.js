class Shape {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(`This is a ${this.name}`);
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name); // Call the constructor of the parent class (Shape)
    this.width = width;
    this.height = height;
  }

  printDimensions() {
    console.log(`Width: ${this.width}, Height: ${this.height}`);
  }
}

const myRectangle = new Rectangle("Rectangle", 20, 10);
myRectangle.printName(); // Output: This is a Rectangle
myRectangle.printDimensions(); // Output: Width: 20, Height: 10
