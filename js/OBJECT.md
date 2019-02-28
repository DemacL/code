## [Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

### 概览
  - 方法定义 在属性为传统函数的情况下省略 ```: function```
  - 属性缩写
  - 计算属性 ```Symbol```



### ```Object.prototype```
- [hasOwnProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
  - 用途:用于判断自有属性  也可用于通过对象实现映射 object to map
  - 通过方法调用可能存在异常情况
    - 没有继承Object
      ``` javascript
      obj = Object.create(null)
      obj.hasOwnProperty('propName') // obj.hasOwnProperty is not a function
      ```
    - hasOwnProperty属性被重写
      ``` javascript
      obj={hasOwnProperty:()=>'自定义hasOwnProperty'} 
      obj.hasOwnProperty('propName') // "自定义hasOwnProperty"
      ```
  - 解决方案  
    ```  javascript
      Object.prototype.hasOwnProperty.call(obj) 
     {}.hasOwnProperty.call(obj) //  缩写
    ```
