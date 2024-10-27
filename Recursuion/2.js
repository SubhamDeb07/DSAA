//divisible by 5

function count(i, n) {
  if (i > n) {
    return;
  }
  if (i % 5 === 0) {
    console.log(i);
  }
  return count(i + 1, n);
}

count(0, 20);
