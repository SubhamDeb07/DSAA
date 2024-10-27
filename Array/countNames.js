// [{name: "john"}, {name: "john"}, {name: "rohit"}, {name: "sumit"}];
// output = [{name: "john", count: 2}, {name: "rohit", count: 1}, {name: "sumit", count: 1}]

function count(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].name]) {
      obj[arr[i].name]++;
    } else {
      obj[arr[i].name] = 1;
    }
  }
  const newArr = Object.keys(obj).map((name) => {
    return { name: name, count: obj[name] };
  });
  return newArr;
}

console.log(
  count([
    { name: "john" },
    { name: "john" },
    { name: "rohit" },
    { name: "sumit" },
  ])
);
