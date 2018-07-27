

* 使用canvas来绘制图形是通过调用它提供的方法而使用SVG绘制图形是通过构建一颗XML元素树来实现的

* 画布元素和它的上下文对象是两个完全不同的对象

* ```getContext('2d')：CanvasRenderingContext2D```

* 画矩形 
1. 获取画布元素引用 ```let mycanvas = document.getElementById('mycanvas');```
2. 获取上下文对象 ```let context = mycanvas.getContext('2d');```
3. 画笔填充颜色 ```context.fillStyle = '#f00';```
4. 填充一个矩形 ```context.fillRect(0, 0, 10, 10);```

* 画圆形
1. 获取画布元素引用 ```let mycanvas = document.getElementById('mycanvas');```
2. 获取上下文对象 ```let context = mycanvas.getContext('2d');```
3. 开始一个新的路径 ```beginPath```
4. 画一个圆形路径 ```context1.arc(5, 5, 5, 0, 2 * Math.PI, true);```
5. 画笔填充颜色 ```context1.fillStyle = '#f00';```
6. 填充路劲 ```fill```

* 画路径-不填充
1. ```context2.beginPath();```
2. ```context2.moveTo(0, 0);```
3. ```context2.lineTo(100, 0);``` 
4. ```context2.strokeStyle = 'blue';```
5. ```context2.stroke();```

* closePath 将子路径的起点和终点真正连接起来，使路径围成一个闭合图形
* 使用closePath闭合路径比自己调用lineTo闭合效果更好

* 非零绕数原则

