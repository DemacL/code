const dUtil = (() => {
    const util = {}
   /** 分解因子*/
    util.getDivisors = function (n) {
        const reuslt = []
        let num = 2;
        while (n !== 1) {
            if (n % num == 0) {
                n = n / num;
                reuslt.push(num);
                num = 2;
            } else {
                num++
            }
        }
        return reuslt;
    }

    return util
})();
