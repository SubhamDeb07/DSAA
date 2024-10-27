function add(arr1, arr2) {
  const finalArr = arr1.slice();
  for (let i = 0; i < finalArr.length; i++) {
    for (let j = 0; j < finalArr[i].length; j++) {
      finalArr[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return finalArr[1];
}

const MT1 = [
  [1, 2, 5],

  [3, 5, 5],
];

const MT2 = [
  [1, 5, 7],

  [2, 1, 3],
];

console.log(add(MT1, MT2));
