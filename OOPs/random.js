class Person {
  gender = "male";

  printPerson = () => {
    console.log(this.gender);
  };
}

class Name extends Person {
  constructor() {
    super();
    this.name = "max";
  }

  printName() {
    console.log(this.name);
  }
}

const p1 = new Name();
p1.printName();
p1.printPerson();
