



### 方法

- 不改变原数组
   -  slice (start,end) 从已有的数组中返回选定的元素。 [ start, end )
       ``` javascript
       a = [1,2,3];
       b = a.slice(); // [1,2,3]
       a === b; // false;
       a.slice(1); // [2,3]
       a.slice(1,2); // [2]
       ```
- 改变原数组
  




#### 类数组
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
   - 扩展运算符 ... // [...domLinks]
   - Array.from //  Array.from(domLinks)
