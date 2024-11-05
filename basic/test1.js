async function testIt(num) {
  const a = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 5000);
  });
}

(async () => {
  const res = await testIt(5);
  console.log(res);
})();
