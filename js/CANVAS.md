

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


* 每个canvas元素只有一个上下文对象

###  CSS像素、设备独立像素、设备像素之间关系
* CSS像素（CSS Pixel）：适用于web编程，指的是我们在样式代码中使用到的逻辑像素，是一个抽象概念，实际并不存在

* 设备独立像素（Device Independent Pixel）：与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了CSS像素

* 设备像素（Device Pixel）：物理像素，设备能控制显示的最小单位，我们常说的1920×1080像素分辨率就是用的设备像素单位

* ppi （pixel per inch）：表示每英寸所包含的像素点数目，数值越高，说明屏幕能以更高密度显示图像


