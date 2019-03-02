### 3.3 函数调用
+ *函数*： 函数直接调用  `functionName()`
+ *方法*： 作为对象的方法调用 `obj.functionName()`
+ *构造器*： 作为构造器调用 返回一个对象  `new FunctionName()`
+ *apply call*：  `functionName.call(newThis,,,,,)   functionName.call(newThis, [])`
 
 
 
 
 1. Java中的this依赖于函数的声明,JavaScript中的this依赖于函数的调用方式
 2. js中的this=>**调用上下文**
 3. 不需要创建单独的函数副本,就可以在不同的对象上完成完全相同的处理过程 
      ``` javascript
      function getName(){return this.name} 
      dog = {getName,name:'dog'}; 
      cat = {getName,name:'cat'}; 
      console.log(dog.getName(),cat.getName()) // dog cat
       ```


## 箭头函数
- 与传统函数比较
   - 语法更简洁
   ``` js
    arr = [1, 2, 3];
    arr.map(x=>x*x) //  [1, 4, 9]
    arr.map(function(x){return x*x}) //  [1, 4, 9]
   ```
   - this 绑定词法作用域/静态this/ 与周围的作用域this保持一致
   - 箭头函数不能作为构造函数给new调用
   
