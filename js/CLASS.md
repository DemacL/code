
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
  dog = new Animal('xtq')
  dog.info() // xtq
  mdog = new Dog('xtq','teddy')
  mdog.info() //  Dog:teddy,xtq
  ```
