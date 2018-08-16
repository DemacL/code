function convertToRoman(num) {
        let lookupdic = [
                ['I', 1],
                ['IV', 4],
                ['V', 5],
                ['IX', 9],
                ['X', 10],
                ['XL', 40],
                ['L', 50],
                ['XC', 90],
                ['C', 100],
                ['CD', 400],
                ['D', 500],
                ['CM', 900],
                ['M', 1000]
            ];

        

            let result = '';
            lookupdic.map(x => x[1]).reverse().forEach(x => {
                let times = Math.floor(num / x);
                if (times >= 1) {
                    result += lookupdic.filter(item=>item[1]===x)[0][0].repeat(times);
                    num -= x * times;
                }
            })
            console.log(result);
            return result;
}

convertToRoman(36);
