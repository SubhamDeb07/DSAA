class Student {
  constructor(name, roll) {
    (this.name = name), (this.roll = roll);
  }
  introduction() {
    console.log(`My name is ${this.name} and my roll number is ${this.roll}`);
  }
}
Student.prototype.greet = function () {
  console.log(`Hello Myself ${this.name}`);
};

const student1 = new Student("Subham", 27);
student1.introduction();
student1.greet();
