class Shape {
  printShape() {
    console.log("This is shape");
  }
}
class Rectangle extends Shape {
  printRectangle() {
    console.log("This is Rectangle");
  }
}

class Circle extends Shape {
  printCircle() {
    console.log("This is Circle");
  }
}

class Square extends Rectangle {
  printSquare() {
    console.log("Square is Rectangle");
  }
}

const shape = new Square();
shape.printSquare();
shape.printRectangle();
shape.printShape();
