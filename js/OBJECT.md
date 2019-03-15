## [Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

### 概览
  - 方法定义 *在属性为传统函数的情况下省略 ```: function```*
  - 属性缩写
  - 计算属性 ```Symbol```



### ```Object.prototype```
- [hasOwnProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
  - 功能:用于判断自有属性  也可用于通过对象实现映射 object to map
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
    
### 静态方法
  - [Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
    - 功能:用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
    - 类似于jquery [extend](http://api.jquery.com/jquery.extend/)
    - 普通字符串属性和Symbol属性都能复制
    - 只能复制自有属性，不能复制继承属性
      ``` js
        parentObj = {parentProp:'父类属性的值'}
        childObj = Object.create(parentObj)
        childObj.childProp = '子类属性的值'
        copyObj = Object.assign({},childObj); // 只复制了childProp属性
      ```
    - 只能复制可枚举属性,不能复制不可枚举属性enumerable
      ``` js
        obj = {prop1:'enumerable', prop2:'not enumerable'}
        Object.defineProperty(obj,'prop2',{enumerable:false})
        copyObj = Object.assign({},obj) // 只复制了prop1属性
      ```
     - 不会拷贝源对象的getter setter,会在拷贝的过程执行源对象的getter和目标对象的setter
       ``` js
        obj = {
          get prop() {
            console.log('get prop func');
            return 'v from get';
          },
          set prop(v){
                console.log('set prop func');
            return v;
          }
        }
       ```
     - 使用场景
       - 默认值处理
  - [Object.is](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 
    - 基本与 ```===```强制等于一致,更加严格的等于比较
    - 在处理NaN 和+0、-0上有差别 
      ``` js
        NaN === NaN // false
        Object.is(NaN,NaN)// true
        +0 === -0 // true
        Object.is(+0,-0) // false
        
        [NaN].findIndex(y => Object.is(NaN, y))//0 
        [NaN].findIndex(y => y===NaN)//-1 
        [NaN].indexOf(NaN) //-1
      ```
 - [Object.setPrototypeOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) 
   - 设置对象的原型对象
    ``` js
      parentObj = {parentProp:'parentValue'}
      childObj = {childProp:'childValue'}
      Object.setPrototypeOf(childObj,parentObj)
      childObj.parentProp //  parentValue
    ```
 
 - [Object.getPrototypeOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) 
   - 获取对象的原型对象
    ``` js
       Object.getPrototypeOf({}) === Object.prototype // true
    ```
