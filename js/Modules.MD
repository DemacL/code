
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
    export default function () {} // no semicolon!  可以省略函数名
    //------ main1.js ------
    import myFunc from 'myFunc';
    myFunc();
  ```
- imports 导入
  - 命名导入
  ``` js
    //------ main.js ------
    import { square, diag } from 'lib';
    console.log(square(11)); // 121
    console.log(diag(4, 3)); // 5
  ```
  - 全部导入:通过变量名引用整个导出内容
  ``` js
    //------ main.js ------
    import * as lib from 'lib';
    console.log(lib.square(11)); // 121
    console.log(lib.diag(4, 3)); // 5
  ```
  
