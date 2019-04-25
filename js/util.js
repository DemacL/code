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
    
     /** 统计一个数组数据项出现的频次*/
    util.getFrequent = function (array){
        return  array.reduce((map, item) => { map.set(item,(map.get(item) || 0) + 1); return map }, new Map())
    }
    
        /** 获取大写字母组成的字符串*/
    util.getUpperCase = function (){
        return   Array.from({length:26}).map((x,index)=>String.fromCharCode(65+index)).join('')
    }
    
 
    
   

    return util
})();
