 function pairwise(arr, arg){
    let usedIndex = [];// 跟踪所有已经使用的索引
    for(let i = 0; i < arr.length; i++) {
        if (usedIndex.indexOf(i) < 0) {
            let firstNum = arr[i];
            let secondNum = arg - firstNum;
            let secondIndex = arr.indexOf(secondNum);// 查找第二个数在数组的的索引 4
            let x = usedIndex.indexOf(secondIndex); //  查看这个索引是否使用过
            while (x >= 0) { // 已经存在查找下一个
                secondIndex = arr.indexOf(secondNum, usedIndex[x] + 1);// 5
                x = usedIndex.indexOf(secondIndex);
            }
            if (secondIndex >= 0 && usedIndex.indexOf(secondIndex) < 0 && secondIndex !== i) {
                usedIndex.push(i, secondIndex);
            }
        }
    }
    return usedIndex.reduce((x, y) => x + y, 0);
}
pairwise([0, 0, 0, 0, 1, 1, 1], 1);
