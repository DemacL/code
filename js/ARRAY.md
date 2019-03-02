



### 方法

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
