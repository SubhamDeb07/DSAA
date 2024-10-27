function twoDArr(arr) {
  const newArr = arr.slice();
  newArr[0] = newArr[0].map((val) => (val = 1));
  newArr[0][0] = 0;
  for (let i = 1; i < arr.length; i++) {
    newArr[i][0] = 1;
    for (let j = 1; j < newArr[i].length; j++) {
      newArr[i][j] = 0;
    }
  }

  for (let i = 1; i < newArr.length; i++) {
    for (let j = 1; j < newArr[i].length; j++) {
      newArr[i][j] = newArr[i - 1][j] + newArr[i][j - 1];
    }
  }
  return newArr[3][2];
}

console.log(
  twoDArr([
    [1, 2, 3],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
  ])
);

// [
//     [0, 1, 1],
//     [1, 0, 0],
//     [1, 0, 0],
//   ]
