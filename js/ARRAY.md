
### 静态(static)方法
-  [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
   - 将类数组或者可迭代对象转化为数组
   - Array.from()’s basic functionality is to convert two kinds of values to Arrays:  
   Array-like values, which have a property length and indexed elements. Examples include the results of DOM operations such as document.getElementsByClassName().  
   Iterable values, whose contents can be retrieved one element at a time. Strings and Arrays are iterable, as are ECMAScript’s new data structures Map and Set.
-  [Array.of()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
   - 根据参数串构造一个数组



### 原型(prototype)方法

- 不改变原数组
   -  [slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) (start,end) 从已有的数组中返回选定的元素。 [ start, end )
       ``` javascript
       a = [1,2,3];
       b = a.slice(); // [1,2,3]
       a === b; // false;
       a.slice(1); // [2,3]
       a.slice(1,2); // [2]
       ```
   - [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。       
      - 可以动态传入this
- 改变原数组
  




### 类数组
- 和数组比较: 
   - 相同点
      - 都可通过索引访问元素
      - 都有length属性, 
   - 不同点
      - 没有```Array.prototype```上的方法
- 例子:
   - DOM NodeList
   - arguments
- 转数组: 
   - slice // ```Array.prototype.slice.call(domLinks)```
   - 扩展运算符 ... // ```[...domLinks]```
   - Array.from //  ```Array.from(domLinks)```

### 集合遍历
- [forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [for...in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)
- [for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
   - 用于遍历可迭代iterable 对象Arrays, strings, Maps, Sets...
   - break continue 可用于控制迭代
   - 可用解构解析项
      ``` js
      const arr = ['a', 'b'];
      for (const [index, element] of arr.entries()) {
         console.log(`${index}. ${element}`);
      }
      ```
   - 只能用于可迭代对象，类数组需要转化为数组后才能使用for...of
   - const let 声明的迭代变量互不干扰,var 共用
