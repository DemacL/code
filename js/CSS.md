* width和height只指定了元素内容区域的尺寸，不包含元素的内边距padding或边距border或外边距margin所需的任何额外空间 =>标准盒模型，内容盒模型（content-box）
反之 包含内边距和边框宽度的则为边框盒模型（border-box）


### 脚本化内联样式 
* 1. style 属性
* 2. 计算样式 ```getComputedStyle()```

### 脚本化css类 
* 1. ```classList:DOMTokenList```  实时的对象，不是快照 
* 2. ```className```与```classList```同步更新

### 脚本化样式表
* 1. ```styleSheets``` ```disabled```
* 2. ```cssRules:CSSRuleList```包含样式表的所有规则 
* 3. ```CSSStyleRule``` ```selectorText```


### color
* HSL 色调 饱和度 亮度
* 色调是颜色轮周围的度数： 0 红色 60 黄色 120 绿色 180 青色  240 蓝色 300 品红色 360 红色
* 饱和度 颜色的强度 饱和度为0=>暗灰色
* 亮度 颜色明亮和暗淡 凡是亮度为100%的都是纯白色，任何亮度为0的都是纯黑色
* HSLA 多了一个alpha透明度之 透明[0-1.0]不透明