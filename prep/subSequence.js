function subSeq(input, current, index) {
  if (index === input.length) {
    if (current !== "") {
      console.log(current);
    }
    return;
  }

  subSeq(input, current + input[index], index + 1);

  subSeq(input, current, index + 1);
}
let inputStr = "abc";

subSeq(inputStr, "", 0);
