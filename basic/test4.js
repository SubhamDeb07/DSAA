async function sample() {
  console.log(1);

  const a = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2));
  });

  const result1 = await a;

  console.log(result1);

  console.log(4);
}

sample();
