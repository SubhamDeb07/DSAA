const arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length; i++) {
  for (let j = i + 1; j <= arr.length; j++) {
    let substr = arr.slice(i, j);
    console.log(substr.join(""));
  }
}
