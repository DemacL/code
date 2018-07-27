# NgHeroDemo
angular官网tutorial  hero demo.

1.{{}}插值语法  interpolation binding 

2.The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.

3.自定义类属性初始化    属性为对象,插值绑定改为 instance.property
hero: Hero = {
    id: 1,
    name: 'Windstorm'
 };

4.Pipe 管道操作符过滤器,用于过滤或格式化数据等

5.[(ngModel)] is Angular's two-way data binding syntax.双向绑定

6.Every component must be declared in exactly one NgModule.

7.样式控制： [class.some-css-class]="some-condition" ;[class.selected]="selectedHero === hero"

8.```<li>``` 就是 *ngFor 的【宿主元素】

9.(click)="onSelect(hero)" click 外面的圆括号会让 Angular 监听这个 ```<li>``` 元素的 click 事件。 当用户点击 ```<li>``` 时，Angular 就会执行表达式 onSelect(hero)。The parentheses around click tell Angular to listen for the ```<li>``` element's click event. When the user clicks in the ```<li>```, Angular executes the onSelect(hero) expression.

10.子组件必须用 @Input()声明此属性是输入属性，语法上Input后必须有括号，父组件在使用子组件的地方将用父组件的值p_value套用属性语法[property]="p_value"传入到子组件中.语法上使用子组件的地方的输入属性必须用中括号 ```<app-hero-detail [hero]="selectedHero"></app-hero-detail>```

11.@Injectable() 装饰器。给服务Service类标注该类是一个服务类

12.Observable.subscribe() 是关键的差异点。新的版本等待 Observable 发出这个英雄数组，这可能立即发生，也可能会在几分钟之后。 然后，subscribe 函数把这个英雄数组传给这个回调函数，该函数把英雄数组赋值给组件的 heroes 属性。 

13.Angular 只会绑定到组件的公共属性。

14.--flat 把这个文件放入当前目录中，而不是单独的文件目录中。

15.参数化路由

16.[{name:'zhangsan',sex:2},{name:'lisi',sex:1}].find(x => x.name === 'lisi')
