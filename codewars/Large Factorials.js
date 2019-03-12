function factorial(n) {

    let add = (a, b) => {
        let arr1 = a.replace(/^0+/, '').split('').reverse();
        let arr2 = b.replace(/^0+/, '').split('').reverse();
        let jw = 0;
        const r = [];
        let i = 0;
        while (i < arr1.length || i < arr2.length || jw) {
            num1 = arr1[i] ? Number(arr1[i]) : 0;
            num2 = arr2[i] ? Number(arr2[i]) : 0;
            r.push((num1 + num2 + jw) % 10)
            jw = Math.floor((num1 + num2 + jw) / 10);
            i++;
        }
        return r.reverse().join('');
    }

    let results = ['1'];// 总阶乘结果的结果
    for (let i = 2; i <= n; i++) {
        let muns = i.toString().split(''); //122=>1,2,2  // 当前乘数拆分为个位数
        const arrs = [];
        for (let j = muns.length - 1; j >= 0; j--) {
            const multiplier = muns[j];// 1==>0-1 乘数
            let jw = 0;
            const item = [];
            for (let time = 0; time < muns.length - j - 1; time++) {
                item.unshift(0);
            }
            for (let k = results.length - 1; k >= 0; k--) {// 结果中的每个位数 
                const product = (results[k] * multiplier + jw); // 当前数和积中某个位数的乘积
                item.unshift(product % 10);
                jw = Math.floor(product / 10);
            }
            if (jw) {
                item.unshift(jw);
            }
            arrs.push(item.join(''));
            // console.log(item, arrs); 
        }
        results = arrs.reduce((x, sum) => add(x, sum)).split('');
    }
    return results.join('');
}
console.log(factorial(25));