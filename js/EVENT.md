 
 * 事件类型 event type(event name) ：mouseover、keydown、load

 * 事件目标 event target

 * event target +  event type

 * 事件处理程序 event handler(event listener)=>可从注册方式区分？

 * 触发/派发事件 fire trigger dispatch

 * 事件对象 event object =>{type;target}


 * 事件传播 event propagation
  * 1.冒泡 bubble
  * 2.捕获 capturing

  ## 注册事件处理程序

  ### 设置属性作为事件处理程序
  * 属性名区分大小写,所有都是小写 onclick onload readystatechange. 
  * angular事件绑定(click) ```(click)="onSelect(hero)"```
  *  ```window.onload = function(){}```

  ### 设置HTML标签属性为事件处理程序
  * js程序属性```property``` <=> HTML标签属性 ```attribute```
  * 属性值为js代码字符串，函数主体，执行内容而非函数声明
  * window对象上的关联到```<body>```标签上
  * **混合了JS和HTML，禁止使用**

  ### addEventListener()
  * 事件目标对象都有定义这个方法
  * 三个参数(事件类型,响应函数,事件传播方式) 事件属性名去掉前缀on
  * 参数[事件传播方式]=>false：冒泡；true：捕获 默认false可不传
  * 同一个事件类型可注册多个处理程序函数，不过相应函数需要不同

### 调用顺序
* 事件冒泡为在大量单独文档元素上注册处理程序提供了替代方案，即在共同的祖先元素上注册一个处理程序来处理所有的事件

* 事件捕获只能用于以```addventListener()```注册且第三个参数是true的事件处理程序中

* 取消事件的默认操作 ```preventDefault()```

* 取消事件传播 ```stopPropagation()```

* 1. 捕获阶段
* 2. 事件目标阶段
* 3. 冒泡阶段