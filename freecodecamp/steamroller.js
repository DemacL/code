
function steamrollArray(arr) {
    let x = [];
    for (let i = 0; i < arr.length; i++) {
        if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
            x.push(...steamrollArray(arr[i]));
        } else {
            x.push(arr[i]);
        }
    } 
    return x;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
