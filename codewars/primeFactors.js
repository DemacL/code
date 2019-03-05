``` js
function primeFactors(n) {
    // 判断素数的工具方法
    let isPrime = (num) => {
        console.log(num);
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let num = 1;
    const m = [];
    while (n !== 0 && n !== 1) {// 分解未结束
        num++;
        if (isPrime(num)) {// 如果这个数是素数
            let times = 0;
            while ((n !== 0) && (n % num === 0)) {// 如果可以分解当前素数
                n = n / num;
                times++;
            }
            if (times !== 0) {
                m.push([num, times])
            }
        }
    }
    return m.map(item => {
        if (item[1] === 1) {
            return `(${item[0]})`
        } else {
            return `(${item[0]}**${item[1]})`
        }
    }
    ).join('');
}


console.log(primeFactors(8));// (2**3)
console.log(primeFactors(123456)); // (2**6)(3)(643)

```
