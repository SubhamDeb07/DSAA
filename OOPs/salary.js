class Employee {
  constructor(salary, workingHours) {
    (this.salary = salary), (this.workingHours = workingHours);
    this.addSal();
    this.addWork();
  }

  getInfo() {
    return { salary: this.salary, workingHours: this.workingHours };
  }
  addSal() {
    if (this.salary < 500) {
      this.salary = this.salary + 10;
    }
  }
  addWork() {
    if (this.workingHours > 6) {
      this.salary = this.salary + 5;
    }
  }
}

const E1 = new Employee(400, 7);
console.log(E1.getInfo());
