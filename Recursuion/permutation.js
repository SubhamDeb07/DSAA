function findPermutations(str) {
  let result = [];

  // Base case: if the string is empty, return an empty array
  if (str.length === 0) {
    result.push("");
    return result;
  }

  // Iterate through each character of the string
  for (let i = 0; i < str.length; i++) {
    // Extract the current character
    let char = str[i];

    // Exclude the current character and find permutations of the remaining characters
    console.log("i=", i);
    console.log(str.substring(0, i), "sda");
    console.log(str.substring(i + 1), "s");
    let remainingChars = str.substring(0, i) + str.substring(i + 1);
    let permutationsOfRemaining = findPermutations(remainingChars);

    // Append the current character to each permutation of the remaining characters
    for (let perm of permutationsOfRemaining) {
      result.push(char + perm);
    }
  }

  return result;
}

// Example usage:
let input = "abc";
let permutations = findPermutations(input);
console.log(permutations); // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
