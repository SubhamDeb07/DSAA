function rotatedMatrix(arr) {
  const newArr = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = newArr[i].map((val) => (val = 0));
  }
  let innerLength = 0;
  for (let i = newArr.length - 1; i >= 0; i--) {
    let length = 0;
    for (let j = 0; j < newArr[i].length; j++) {
      newArr[length][innerLength] = arr[i][j];
      length++;
    }
    innerLength++;
  }

  return newArr[1];
}
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotatedMatrix(arr));

// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
//   ]
