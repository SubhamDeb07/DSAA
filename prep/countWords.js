const countWords = (str) => {
  let sum = 0;
  for (let i of str) {
    sum += 1;
  }
  return sum;
};
let str = "My name is Subham";
console.log(countWords(str));
