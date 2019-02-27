



### 方法

* 不改变原数组
  * slice (start,end) 从已有的数组中返回选定的元素。 [ start, end )
    ``` javascript
    a = [1,2,3];
    b = a.slice(); // [1,2,3]
    a === b; // false;
    a.slice(1); // [2,3]
    a.slice(1,2); // [2]
    ```
* 改变原数组
  




#### 类数组
1. 和数组比较: 可索引访问元素并且有length属性, 没有```Array.prototype```上的方法
2. 例子: ```DOM NodeList / arguments```
3. 转数组: ```Array.prototype.slice.call(domLinks)``` 或者扩展运算符 ...
