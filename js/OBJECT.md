### ```Object.prototype```
- [hasOwnProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
  - 用途:用于判断自有属性
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
    ```
