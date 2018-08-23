 nums = [];
        for (let i = 0; i < 20; i++) {
            nums.push(Math.ceil(Math.random() * 100));
        }
        console.log(nums);
        function qsort(x) {
            if (x.length < 2) {
                return x;
            } else {
                const base = x[0];
                let smaller = [];
                let bigger = [];
                for (let i = 1; i < x.length; i++) {
                    if (x[i] <= base) {
                        smaller.push(x[i]);
                    } else {
                        bigger.push(x[i]);
                    }
                }
                return [...qsort(smaller), base, ...qsort(bigger)]

            }
        }
        console.log(qsort(nums));
