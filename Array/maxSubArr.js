let accounts = [
  [2, 9],
  [7, 3],
  [3, 5],
];
let maxSum = 0;
for (let i = 0; i < accounts.length; i++) {
  let sum = accounts[i].reduce((acc, curr) => acc + curr, 0);
  if (sum > maxSum) {
    maxSum = sum;
  }
}
console.log(maxSum);
