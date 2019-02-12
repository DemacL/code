function MySet() {
    let items = {};


    this.add = function (value) {
        items[value] = '';
    }

    this.remove = function (value) {
        delete items[value];
    }

    this.has = function (value) {
        return items.hasOwnProperty(value);
    }

    this.clear = function () {
        items = {};
    }

    this.size = function () {
        return Object.keys(items).length;
    }

    this.values = function () {
        const keyArr = Object.keys(items);
        console.log(keyArr);
        return keyArr;
    }

    /** 并集  在A中或者B中  */
    this.union = function (newset) {

        let result = new MySet();
        const currentArr = this.values();
        const newArr = newset.values();
        currentArr.forEach(ele => {
            result.add(ele);
        })

        newArr.forEach(element => {

            if (!this.has(element)) { // 这里可以不用做判断处理  添加不进去相同的值
                result.add(element);
            }
        });
        return result;
    }

    /** 差集  在A中不在B中 */
    this.difference = function (newset) {
        let result = new MySet();
        const currentArr = this.values();
        const newArr = newset.values();

        currentArr.forEach(ele => {
            if (!newArr.includes(ele)) {
                result.add(ele);
            }
        })

        return result;
    }

    /** 交集判断 即在A中也在B中 */
    this.same = function (newset) {
        let result = new MySet();
        const currentArr = this.values();
        const newArr = newset.values();
        currentArr.forEach(ele => { // 遍历第一个集合
            if (newArr.includes(ele)) { // 如果这个元素也在第二个集合中 则属于交集元素
                result.add(ele);
            }

        })

        return result;
    }

    /** 子集判断 */
    this.child = function (newset) {
        const currentArr = this.values();
        const newArr = newset.values();


        let isChild = true;
        for (let i = 0; i < newArr.length; i++) {
            const element = newArr[i];
            if (!currentArr.includes(element)) {// 如果不包含当前元素 则不是子集
                isChild = false;
                break;
            }
        }

        return isChild;
    }

}

const data1 = CommonUtils.randomStr();
const data2 = CommonUtils.randomStr();
const data3 = CommonUtils.randomStr();

const data4 = CommonUtils.randomStr();
const data5 = CommonUtils.randomStr();
const data6 = CommonUtils.randomStr();

const myset = new MySet();
myset.add(data1);
myset.add(data2);
myset.add(data3);
// myset.values();

// console.log(myset.values());
const myset1 = new MySet();
// myset1.values();
myset1.add(data2);
myset1.add(data3);
// myset1.add(data6);
// myset1.values();

// console.log(myset1.values());
const unionSet = myset.union(myset1);
unionSet.values()

const difference = myset.difference(myset1);
difference.values();

const same = myset.same(myset1);
same.values();

const isChild = myset.child(myset1);
console.log(isChild);

// console.log(myset.values());
// console.log(myset.size());

// myset.remove(data2);
// console.log(myset.values());
// console.log(myset.size());

// myset.clear();
// console.log(myset.size());
