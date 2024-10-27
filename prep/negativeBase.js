function toNegativeBase(n, negBase) {
  // If n is zero then in any base
  // it will be 0 only
  if (n == 0) return "0";

  let converted = "01";
  while (n != 0) {
    // Get remainder by negative base,
    // it can be negative also
    let remainder = -1 * (Math.abs(n) % Math.abs(negBase));

    n = parseInt(n / negBase);

    // if remainder is negative,
    // add Math.abs(base) to it
    // and add 1 to n
    if (remainder < 0) {
      remainder += -1 * negBase;
      n += 1;
    }

    // convert remainder to String add into the result
    converted = remainder.toString() + converted;
  }
  return converted;
}

// Driver Code

let n = 0;
let negBase = -2;
console.log(toNegativeBase(n, negBase));
