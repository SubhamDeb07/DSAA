const arr1 = [1, 2, 6, 0, 11];
const arr2 = [6, 19, 2, 9];
const arr3 = arr1.concat(arr2);
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
    if (arr3[j + 1] < arr3[j]) {
      [arr3[j], arr3[j + 1]] = [arr3[j + 1], arr3[j]];
    }
  }
}
console.log(arr3);
