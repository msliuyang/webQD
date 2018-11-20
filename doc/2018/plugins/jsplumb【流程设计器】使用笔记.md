## jsplumb简介
> 流程设计器
> [中文文档](https://wdd.js.org/jsplumb-chinese-tutorial/#/)  [demo](https://wangyu142857.github.io/jsplumb-example/dist/#/chart) [demo-github](https://github.com/wangyu142857/jsplumb-example) [官网Api](https://jsplumbtoolkit.com/community/doc/connections.html#programmatic)



## jsplumb使用
###### 1. 安装

```javascript
npm install jsplumb -S
```

###### 2. 导入
```javascript
import 'jsplumb/dist/js/jsplumb.min.js'
import 'jsplumb/css/jsplumbtoolkit-defaults.css'
```

###### 3. 初始化
```javascript
jsPlumb.ready(() => {
  // 创建实例
  // do something
})
```

###### 4. 实例（可以有多个，尽可能的使用单个实例）
```javascript
let firstInstance = jsPlumb.getInstance()
let secondInstance = jsPlumb.getInstance()
...
```

###### 5. 给实例设置默认参数
```javascript
jsPlumb.getInstance({
  PaintStyle: {           // 连线css
    gradient: {     //渐变色
      stops: [[0, "#0d78bc"], [1, "#558822"]]
    },
    stroke: "#558822",
    strokeWidth: 10,
    outlineStroke:"black", 
    outlineWidth:1 
  },
  Connector:[ "Bezier", { curviness: 30 } ],    // 连线类型：Bezier(贝塞尔) 、Straight(直线) 、Flowchart(流程图) 、StateMachine(状态机)  
  Endpoint:[ "Dot", { radius:5 } ],   // 端点类型: Dot(圆) 、Rectangle(长方形) 、 Image(图片) 、Blank(空白) 
  EndpointStyle : { fill: "#567567"  },   // 端点css
  Anchor : ['TopCenter'],    // 锚点
  overlays:[
    [ "Label", { label:"foo", id:"label", location:[-0.5, -0.5] } ]
  ],
  connectorOverlays:[ 
    [ "Arrow", { width:10, length:30, location:1, id:"arrow" } ],
    [ "Label", { label:"foo", id:"label" } ]
  ],
  Container: "domIdName"   // 容器
})
```
## jsPlumb重点属性详解

###### Anchor：锚点
  > * Static：静态，会固定到元素上的某个点，不会移动
      <font color=#D2691E>Top(TopCenter),TopRight,TopLeft
        Right(RightMiddle)
        Bottom(BottomCenter),BottomRight,BottomLeft
        Left(LeftMiddle)
        center
      </font>

  > * Dynamic：动态，是静态锚的集合，就是jsPlumb每次连接时选择最合适的锚

  > * Perimeter anchors：周边锚，动态锚的应用

###### Connector：连接器
  > * <font color=#D2691E>Bezier：</font>它有一个配置项，curviness（弯曲度），默认为150.这定义了Bezier的控制点与锚点的距离

  > * <font color=#D2691E>Straight：</font>在两个端点之间绘制一条直线，支持两个配置参数：stub，默认为0。gap，默认为0

  > * <font color=#D2691E>Flowchart：</font>由一系列垂直或水平段组成的连接。支持四个参数，stub，默认为30；* > * alwaysRespectStubs，默认为false；gap，默认为0；midpoint，默认为0.5；* * * cornerRadius，默认为0；

  > * <font color=#D2691E>StateMachine：</font>状态器，支持在同一元素上开始和结束的连接，支持的参数有：margin，默认为5；curviness，默认为10；proximityLimit，默认为80；


###### Endpoint：端点
  > * <font color=#D2691E>Dot：</font>支持三个参数：
  radius，默认为10px，定义圆点的半径
  cssClass，附加到Endpoint创建的元素的CSS类
  hoverClass，一个CSS类，当鼠标悬停在元素或连接的线上时附加到EndPoint创建的元素

  > * <font color=#D2691E>Rectangle：</font>支持的参数：
  width，默认为20，定义矩形的宽度
  height，默认为20，定义矩形的高度
  cssClass，附加到Endpoint创建的元素的CSS类
  hoverClass，当鼠标悬停在元素或连接的线上时附加到EndPoint创建的元素

  > * <font color=#D2691E>image：</font>从给定的URL中绘制图像，支持三个参数：
  src，必选，指定要使用的图像的URL，
  cssClass，附加到Endpoint创建的元素的CSS类
  hoverClass，当鼠标悬停在元素或连接的线上时附加到EndPoint创建的元素
  > * <font color=#D2691E>Blank：</font>空白

###### overlays：箭头
  > * <font color=#D2691E>Arrow：</font>箭头，在连接器的某个点绘制的可配置箭头，可以控制箭头的长度和宽度,参数有：
  width，箭头尾部的宽度
  length，从箭头的尾部到头部的距离
  location，位置，建议使用0～1之间，当作百分比，便于理解
  direction，方向，默认值为1（表示向前），可选-1（表示向后）
  foldback，折回，也就是尾翼的角度，默认0.623，当为1时，为正三角
  paintStyle，样式对象

  > * <font color=#D2691E>Label：</font>在连接点的可配置标签，参数有
  label，要显示的文本
  cssClass，Label的可选css
  labelStyle，标签外观的可选参数：font，适应canvas的字体大小参数；color，标签文本的颜色；padding，标签的可选填充，比例而不是px；borderWidth，标签边框的可选参数，默认为0；borderStyle，颜色等边框参数
  location，位置，默认0.5
  也可以使用getLabel，和setLabel，来获取和设置label的文本,可传函数

  > * <font color=#D2691E>PlainArrow：</font>箭头形状为三角形
  只是Arrow的foldback为1时的例子，参数与Arrow相同

  > * <font color=#D2691E>Diamond：</font>棱形
  同样是Arrow的foldback为2时的例子，参数与Arrow相同

  > * <font color=#D2691E>Custom：</font>自定义
  允许创建自定义的叠加层，需要使用create(),来返回DOM元素或者有效的选择器（ID）


<table><tr><td bgcolor=	#FFFF00>demo 练习见 jsplumb.vue</td></tr></table>

[中文文档](https://wdd.js.org/jsplumb-chinese-tutorial/#/)  [demo](https://wangyu142857.github.io/jsplumb-example/dist/#/chart) [demo-github](https://github.com/wangyu142857/jsplumb-example) [官网Api](https://jsplumbtoolkit.com/community/doc/connections.html#programmatic)
