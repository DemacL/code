// string reg method 
// search replace match split

let str = 'test string hello world';

// 1.search
console.log(str.search(/test/));// 0
console.log(str.search(/string/));// 5
console.log(str.search(/atest/));// -1

// 2.replace  replace不会修改原字符串 第二个参数可以是函数
let newstr1 = str.replace(/hello/, 'hi');
console.log(str); // test string hello world 
console.log(newstr1); // test string hi world

let newstr2 = str.replace(/l+/, 'hi');
console.log(str); // test string hello world 
console.log(newstr2); // test string hehio world


let newstr3 = str.replace(/l+/g, 'hi');
console.log(str); // test string hello world 
console.log(newstr3); // test string hehio worhid
 

let newstr4 = str.replace(/(hello)/g, '$1$1');
console.log(str); // test string hello world 
console.log(newstr4); // test string hellohello world

// 3.match 返回的是一个由匹配结果组成的数组  不论是否由全局g标记，都将返回匹配结果数组 否则返回null
// string.macth(regexp)  <=> regexp.exec(string)

let testStr = '1 plus 2 equals 3';
let result1 =testStr.match(/(\d+)/g);
console.log(result1);

let result2 =testStr.match(/\d+[a-z]/);
console.log(result2); // null

let result3 =testStr.match(/(\d+)/);
console.log(result3); // ["1", "1"]

// 4.split
let splitStr = '123,x456,x789';
let splitResuult1 = splitStr.split();
console.log(splitResuult1);// ["123,x456,x789"]
let splitResuult2 = splitStr.split(/x/);
console.log(splitResuult2); // ["123,", "456,", "789"]

