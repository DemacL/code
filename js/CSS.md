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