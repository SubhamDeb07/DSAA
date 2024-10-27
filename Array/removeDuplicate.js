function removeDuplicate(arr) {
  const remove = [...new Set(arr)];
  return remove;
}
const arr = [1, 1, 2, 3, 3, 1];
console.log(removeDuplicate(arr));
