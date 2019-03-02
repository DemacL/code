* 背景会延伸到边框所在区域下层

* background-clip: padding-box; css属性在Chrome控制台修改无法实时更新？ -版本 68.0.3440.84（正式版本） （32 位）

* 默认情况下，background-position是以padding box为准

* box-shadow L跟着元素的圆角走,盒阴影  
* outline:描边 不会跟着元素圆角走，保持直角。

 * linear-gradient([ [ <angle> | to <side-or-corner> ] ,]? <color-stop>[, <color-stop>]+)
 * radial-gradient([ [ <shape> || <size> ] [ at <position> ]? , | at <position>, ]?<color-stop>[ , <color-stop> ]+)

 ### box-shadow: h-shadow v-shadow blur spread color inset;
* h-shadow	必需。水平阴影的位置。允许负值。	 
* v-shadow	必需。垂直阴影的位置。允许负值。	 
* blur	可选。模糊距离 模糊半径。	 
* spread	可选。阴影的尺寸 扩张半径。	 
* color	可选。阴影的颜色。  
* inset	可选。将外部阴影 (outset) 改为内部阴影。


### 居中
- 水平居中
  - 行内元素:在父元素应用 
  ``` css
    text-align:center;
  ```
  - 块级元素: 在自身应用
  ``` css
    margin: auto;
  ```
- 垂直居中
    - 已经宽高情况下可以绝对定位然后用margin负外边距向左上方向偏移自身宽高的一半
    - 宽高不固定的情况下可用绝对定位结合基于自身元素尺寸的变形偏移自身宽高的一半
    - 基于视口的垂直居中可用margin结合视口单位vh垂直居中
    - flexbox   align-items


