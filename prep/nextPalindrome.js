function isPalindrome(n) {
  let reversedNumber = parseInt(n.toString().split("").reverse().join(""));
  if (reversedNumber === n) {
    return true;
  } else {
    return false;
  }
}
function findNextPalindrome(startingPoint) {
  let num = startingPoint;
  while (true) {
    num++;
    if (isPalindrome(num)) {
      return num;
    }
  }
}

console.log(findNextPalindrome(101));
