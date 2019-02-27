
 #### 去除首尾空格
 ```/^\s*(\S.*\S)\s*$/```;  
 
 #### 获取n个随机数
``` javascript
a=[];
for(let i=0;i<18;i++){
 a.push(Math.ceil(Math.random()*100));
}
```

#### 生产随机和随机字符串
``` javascript
const randomStr = ()=>Math.random().toString(32).substring(2);
const randomNum = ()=>Math.floor(Math.random() * 100);
```

#### 获取当前页面所有链接
``` javascript
var domLinks = document.querySelectorAll('a[href]');
var links = Array.prototype.slice.call(domLinks);
links.map(function (link) {
    return link.href;
});
```
