function minDel(str) {
  const arr = [];
  for (let i of str) {
    if (arr[arr.length - 1] !== i) {
      arr.push(i);
    }
  }
  return arr.join("");
}

console.log(minDel("aabccc"));
