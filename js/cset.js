
// import isArrayLike from 'commonutil';

function isArrayLike(o) {
    const isLikeArray =
        typeof o === 'object' &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) && // length是整数
        o.length < 4294967296; // Math.pow(2,32)
    if (isLikeArray) { 
        return true;
    } else {
        return false;
    }
}


function CSet() {
    this.values = {};
    this.n = 0; 
    if (arguments.length === 1 && isArrayLike(arguments[0])) { 
        this.add.apply(this, arguments[0])
    } else {
        this.add.apply(this, arguments);
    }

    // this.add.apply(this, arguments);
}

// 将每个参数都添加到集合中
CSet.prototype.add = function () {
    for (let i = 0; i < arguments.length; i++) { // 遍历每个参数
        let val = arguments[i];
        let str = CSet._v2s(val); // 转化为字符串
        if (!this.values.hasOwnProperty(str)) {
            this.values[str] = val;
            this.n++;
        }
    }
    return this; // 支持链式方法调用
}

// 从集合中删除参数元素
CSet.prototype.remove = function () {
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        let str = CSet._v2s(element);
        if (this.values.hasOwnProperty(str)) {// 如果在集合中
            delete this.values[str];
            this.n--;
        }
    }
    return this; //支持链式方法调用
}

// 集合中是否包含这个值
CSet.prototype.contains = function (value) {
    return this.values.hasOwnProperty(CSet._v2s(value));
}

// 返回集合的大小
CSet.prototype.size = function () {
    return this.n;
}

// 遍历集合中的所有元素，在指定的上下文中调用f
CSet.prototype.foreach = function (f, context) {
    for (let key in this.values) {
        if (this.values.hasOwnProperty(key)) {
            f.call(context, key);
        }
    }
}

CSet.prototype.toString = function () {

    let keys = [];
    for (const key in this.values) {
        if (this.values.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    return keys.join('|');

}




// 将任意js值和唯一的字符串对应起来
CSet._v2s = function (val) {
    switch (val) {
        case undefined: return 'u';
        case null: return 'n';
        case true: return 't';
        case false: return 'f';
        default: switch (typeof val) {
            case 'number': return '#' + val;
            case 'string': return '"' + val;
            default: return '@' + objectId(val);
        }
    }


    function objectId(o) {
        // let prop = "|**ojectid*|";
        let prop = "ojectid"; 
        if (!o.hasOwnProperty(prop)) {
            o[prop] = CSet._v2s.next++;
        }
        return o[prop];
    }
}

CSet._v2s.next = 100;

let a = [12, 3];

let myset = new CSet(a);
let myset1 = new CSet(a,3);
// myset.add([12, 3]);
console.log(myset.toString());
console.log(myset1.toString());

console.log(a);
for(x in a){
    console.log(x);
}

// a = { a: 35 };
// b = { b: 35 };
// myset.add(5, 'dasd', b, true, false, a, a, null, undefined);


// console.log(myset.toString());

// console.log(b);console.log(a);
// // console.log(myset.size());
// // console.log(myset.remove(5).size());
// console.log(myset.contains(a));

// myset.foreach(function (x) { console.log(x) })