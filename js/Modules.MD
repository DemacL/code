
## [Module](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

### CommonJS 
- 可动态条件导入
- Node.js
``` js
//------ lib.js ------
var sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
function diag(x, y) {
    return sqrt(square(x) + square(y));
}
module.exports = {
    sqrt: sqrt,
    square: square,
    diag: diag,
};
//------ main.js ------
var square = require('lib').square;
var diag = require('lib').diag;
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```
- In CommonJS, imports are copies of exported values 
- The imported value is a (disconnected) copy of a copy 对内容导出一次,失去联系

### AMD(Asynchronous Module Definition)
- RequireJS

### ES6
- In ES6, imports are live read-only views on exported values  对导出内容的只读视图 保持连接
- Imports and exports must be at the top level
- Support for cyclic dependencies between modules 支持循环依赖
- You can only import and export at the top level (never nested inside a conditional statement). 顶层导入不能嵌入条件语句
- exports导出
  - named exports 命名导出: 一个文件可以导出多个
  ``` js
  //------ lib.js ------
  export const sqrt = Math.sqrt;
  export function square(x) {
    return x * x;
  }
  export function diag(x, y) {
    return sqrt(square(x) + square(y));
  }
  ```
  - default exports 默认导出: 一个文件最多只能导出一个
  ``` js
    //------ myFunc.js ------
    export default function () {} // no semicolon!  可以省略函数名  唯一可以匿名函数声明的地方
    // export default (function () {}); 这行理解为函数表达式 上一行理解为函数声明
    //------ main1.js ------
    import myFunc from 'myFunc';
    myFunc();
  ```
  - 默认导出是一种名称为default的命名导出 如下两种方式等效
  ``` js
    import { default as foo } from 'lib';
    import foo from 'lib';  
    
    //------ module1.js ------
    export default function foo() {} // function declaration!
    //------ module2.js ------
    function foo() {}
    export { foo as default };
  ```
  - 两种导出方式可以同时使用，建议分开使用。
- imports 导入
  - 命名导入
  ``` js
    //------ main.js ------
    import { square, diag } from 'lib';
    console.log(square(11)); // 121
    console.log(diag(4, 3)); // 5
  ```
  - 命名空间导入:将模块作为对象导入(每个命名导出具有一个属性)。
  ``` js
    //------ main.js ------
    import * as lib from 'lib';
    console.log(lib.square(11)); // 121
    console.log(lib.diag(4, 3)); // 5
  ```
  
