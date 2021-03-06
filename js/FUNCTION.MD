## 函数声明
- 函数声明
  - 定义会提升 hoist
  ``` js
    function f1(){}
  ````
- 函数表达式
   - 定义不会提升
    ``` js
      const f2 = function (){}
  ````
## 函数参数
- 隐式参数
  - this
    - 隐式关联的一个对象
    - Java中的this依赖于函数的声明,JavaScript中的this依赖于函数的调用方式
    - js中的this=>**调用上下文**
    - 函数上下文 function context
    - 面向对象语言中this指的调用方法所在类的一个实例
     - 不需要创建单独的函数副本,就可以在不同的对象上完成完全相同的处理过程 
      ``` javascript
      function getName(){return this.name} 
      dog = {getName,name:'dog'}; 
      cat = {getName,name:'cat'}; 
      console.log(dog.getName(),cat.getName()) // dog cat
       ```
     - 函数是一个单独的存在,作为对象的属性时候相当于关联到这个对象属性上了,并不是说这个方法只属于这个对象
  - arguments
    - 所有实际参数组成的 __类数组__

## 函数调用四种方式
- *函数*： 函数直接调用  `functionName()` window充当了方法调用的obj 严格模式下没有this
  - 小写动词
- *方法*： 作为对象的方法调用 `obj.functionName()`
  - 小写动词
- *构造器*： 作为构造器调用 返回一个对象  `new FunctionName()`
  - 大写名字
- *apply call*：  `functionName.call(newThis,,,,,)   functionName.call(newThis, [])`
## 函数相关
- new.target 可用于区分函数是通过new调用还是函数调用
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
   
   
   
   

