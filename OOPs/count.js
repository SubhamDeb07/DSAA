class Count {
  static count = 0;

  constructor() {
    Count.count += 1;
  }
}

let obj1 = new Count();
let obj2 = new Count();
let obj3 = new Count();

console.log(Count.count);
