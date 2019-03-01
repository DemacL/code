
## [Class](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)

### 基本形式
  ``` js
  class Animal{
    constructor(name){
      this.name = name; 
    }
    info(){
      console.log(this.name)
    } 
  }

  class Dog extends Animal{
    constructor(name, type){
      super(name);
      this.type = type;
    } 
    info(){
      console.log(`Dog:${this.type},${this.name}`)
    }
  }
  animal = new Animal('xtq')
  animal.info() // xtq
  dog = new Dog('xtq','teddy')
  dog.info() //  Dog:teddy,xtq
  animal instanceof Animal// true
  animal instanceof Dog // false
  dog instanceof Animal // true
  dog instanceof Dog // true
  typeof Animal // "function"
  typeof Dog // "function"
  
  Object.getPrototypeOf(Dog) === Animal // true
  ```
  
### Class与构造函数比较
  - Class需要与new搭配使用,不能通过函数调用
    ``` js
    Animal('xtq') //  Uncaught TypeError: Class constructor Animal cannot be invoked without 'new'
    ```
  - 函数提升hoist,Class不提升
