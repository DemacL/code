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

// --------
function quickSort(arr) {
  if(arr.length > 0){
	let anchor = arr[0];
	let smaller = [];
	let bigger = [];

	for(let i=1;i<arr.length;i++){
		if(arr[i] < anchor){
			smaller.push(arr[i]);	
        }else{
        	bigger.push(arr[i]);	
		}

	}
	return [...quickSort(smaller), anchor,...quickSort(bigger)]
}else{
	return [];
}

}

//
ts = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))
function qs(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let item = arr[0];
        let left = [];
        let right = [];
        for (let i = 1; i < arr.length; i++) {
            const num = arr[i];
            if (num > item) {
                right.push(num);
            } else {
                left.push(num);
            }
        }
        return [...qs(left), item, ...qs(right)]
    }

}

console.log(ts);
console.log(qs(ts));
