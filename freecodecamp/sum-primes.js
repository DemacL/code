function sumPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
      primes[i] = { num: i, isPrime: true };
  }

  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) { 
      if (primes[i].isPrime) { // 如果当前这个数是质数，则他的倍数皆不是质数
          for (let j = 2 * i; j <= num; j += i) {
              console.log('j', i, j)
              if (primes[j].isPrime) {
                  primes[j].isPrime = false;
              }
          } 
      } 
  }
  console.log(primes); 
  let result = primes.filter(x => x.isPrime).map(x => x.num).reduce((x, y) => x + y);
  console.log(result);
  return result;
}

sumPrimes(10);
