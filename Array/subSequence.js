function subs(arr, idx, res) {
  if (idx === arr.length) {
    if (res.length !== 0) {
      console.log(res);
    }
  } else {
    subs(arr, idx + 1, res);
    subs(arr, idx + 1, res.concat(arr[idx]));
  }
}

const arr = [1, 2, 3];
subs(arr, 0, []);
