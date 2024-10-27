//factorial

function factorial(i, count, n) {
  if (i > n) {
    return count;
  } else {
    count *= i;
    return factorial(i + 1, count, n);
  }
}

console.log(factorial(1, 1, 5));
