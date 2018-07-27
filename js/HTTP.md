*  ```<script>```元素有规避同源限制的能力
* 对象名XMLHttpRequest是为了兼容web

* Content-Type POST下指定请求主题额MIME类型

* Content-Length、Date、Referer、User-Agent不能手动指定，XTMLHttpRequest自动添加这些头而防止伪造

* http 进度事件
1. loadstart
2. progress
3. load

请求无法完成的情况
1. timeout
2. abort
3. error

* 任何请求只会触发 load timeout abort 

### 借助```<script>```发送http请求：JSONP
* 不受同源策略的影响

