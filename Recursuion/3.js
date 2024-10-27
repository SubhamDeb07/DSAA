//natural numbers addition

function add(i, sum, n) {
  if (i > n) {
    return sum;
  } else {
    sum += i;
    return add(i + 1, sum, n);
  }
}

console.log(add(0, 0, 5));
