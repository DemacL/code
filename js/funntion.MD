### 3.3 函数调用
+ *函数*： 函数直接调用  `functionName()`
+ *方法*： 作为对象的方法调用 `obj.functionName()`
+ *构造器*： 作为构造器调用 返回一个对象  `new FunctionName()`
+ *apply call*：  `functionName.call(newThis,,,,,)   functionName.call(newThis, [])`
 
 
 
 
 1. Java中的this依赖于函数的声明,JavaScript中的this依赖于函数的调用方式
 2. js中的this=>**调用上下文**
 3. 不需要创建单独的函数副本,就可以在不同的对象山完成完全相同的处理过程 
    ``` function f(){console.log(this.val)} 
       o1 = {fuc:f,val:'o1'};
       o2 = {fuc:f,val:'o2'};
       console.log(o1.fuc(),o2.fuc()) ```
