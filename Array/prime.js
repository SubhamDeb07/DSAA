function findPrimes(n) {
  let primes = [];

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}

// Example usage:
const n = 50;
const primes = findPrimes(n);
console.log(`Prime numbers up to ${n}:`, primes);
