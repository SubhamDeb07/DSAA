function validParan(str) {
  const obj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const arr = [];

  for (const i of str) {
    if (obj[i]) {
      if (!arr.length || arr[arr.length - 1] !== obj[i]) {
        return false;
      }
      arr.pop();
    } else {
      arr.push(i);
    }
  }

  return arr.length === 0;
}

console.log(validParan("([])"));
