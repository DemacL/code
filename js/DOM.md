### 查询元素几何尺寸 getBoundingClientRect()
* 返回元素的尺寸
* 左上角(left,top) 右下角(right,bottom)
* 静态快照
* 获取到的是视口坐标/窗口坐标，可以通过滚动偏移量  pageXOffset和pageYOffset转化为文档坐标
* 包括border和padding部门 不包括margin部分


### 元素位置溢出
``` 
#div1 { 
    margin: 10px;
    border: 10px solid #333;
    padding: 10px;
    background: #666;
    width: 100px;
    height: 100px; 
    display: inline-block;
} 
```
* clientHeight(120) clientWidth(120)  content+padding
* offsetHeight(140) offsetWidth(140)  content+padding+border


### Tips
* 当onclick事件所触发的动作可以概念化为“跟随此链接”则用a，否则用button


