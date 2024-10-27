function fibonacci(n1, n2, n, i) {
  if (i === n) {
    return n1;
  } else {
    return fibonacci(n2, n1 + n2, n, i + 1);
  }
}

console.log(fibonacci(0, 1, 12, 0));
