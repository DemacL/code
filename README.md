
 #### 平方数
 ``` javascript
Array.from({length:18},(_,index)=>index+12).map(x=>`【${x}=>${x*x}】`).join('|')
"【12=>144】|【13=>169】|【14=>196】|【15=>225】|【16=>256】|【17=>289】|【18=>324】|【19=>361】|【20=>400】|【21=>441】|【22=>484】|【23=>529】|【24=>576】|【25=>625】|【26=>676】|【27=>729】|【28=>784】|【29=>841】"
 ``` 

 #### 去除首尾空格
 ``` javascript
 /^\s*(\S.*\S)\s*$/
 ``` 
 
 #### 获取n个随机数
``` javascript
a=[];
for(let i=0;i<18;i++){
 a.push(Math.ceil(Math.random()*100));
}
```
``` javascript
ts = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))
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
