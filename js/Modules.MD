
## [Module](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

### CommonJS 
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

### AMD(Asynchronous Module Definition)
- RequireJS

### ES6
- Imports and exports must be at the top level
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
  
