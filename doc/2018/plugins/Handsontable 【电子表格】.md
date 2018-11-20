### Handsontable简介

>Handsontable是一个用JavaScript编写的电子表格组件，兼容所有现代浏览器和IE9+。
>官网 <https://docs.handsontable.com>

#### Vue中使用
###### 1.安装模块包
>npm install handsontable --save
 npm install @handsontable/vue --save

###### 2.引入
>import Vue from "vue"
 import HotTable from "@handsontable/vue"
###### 3.汉化
>import 'handsontable/languages/zh-CN';
language: 'zh-CN'

###### 4.基本用法
```javascript
<template>
  <div id="hot-preview" >
    <HotTable :settings="settings" ref="testHot"></HotTable>
  </div>
</template>

<script>
  import HotTable from '@handsontable/vue';
  import Vue from 'vue';
  import 'handsontable/languages/zh-CN';

  export default {
    data: {
      settings: {
        data: [
          ["", "Ford", "Volvo", "Toyota", "Honda"],
          ["2016", 10, 11, 12, 13],
          ["2017", 20, 11, 14, 13],
          ["2018", 30, 15, 12, 13]
        ],
        language: 'zh-CN',
        colHeaders: true,
        rowHeaders: true,
      }
    },
    components: {
      'hottable': Handsontable.vue.HotTable
    }，
    methods: {
         saveData (){
           var examData = this.$refs.testHot.table.getData(); //这里要注意，如果使用this.settings.data 保存表格数据，拖拽完以后数据的顺序将不会更新，因此使用 this.$refs.testHot.table.getData(); 来获取数据，获取的数据格式为二维数组。
            console.log(examData);
         }
  }
</script>

<style src="../node_modules/handsontable-pro/dist/handsontable.full.css"></style>
<style>
  #hot-preview {
    width: 600px;
    height: 400px;
    overflow: hidden;
  }
</style>
```


#### 常用配置
```javascript
data: {
  settings: {
    data:[[],[],[]],              //表格数据
    height:400,                   //表格高度
    width:300,                    //表格宽度
    rowHeaders: true,             //显示行号
    colHeaders:[] / true,         //表头自定义文字/显示字母
    columns:[{
      type:'dropdown',
      source: ['文本', '数字', '金额', '日期', '时间', '单文件', '多文件']
    },{}],                       //每列配置设置
    colWidths：100 / [],          //每列宽度设置/用数组单独设置每列宽度
    rowHeights: 23,               //每行高度设置
    fixedRowsTop：2,              //固定前两行
    fixedColumnsLeft：3,          //固定前三列
    contextMenu：true,            //启用右键菜单
    manualColumnFreeze：true,     //在右键菜单中选择固定某列
    manualRowResize:true,         //手动调整行高
    manualColumnResize:true,      //手动调整列宽
    manualColumnMove: true,       //手动调整列的位置  
    manualRowMove: true,          //手动调整行的位置
    stretchH："all" /last /none,  //自动拉伸列宽填满表格的宽度
    fillHandle:true, false, "horizontal", "vertical" , 
    fillHandle: {
      direction: 'vertical',
      autoInsertRow: true                                
    },                           //点击加号可自动填充，自动添加行
    mergeCells：true/[{row: 1, col: 1, rowspan: 2, colspan: 2}] //合并单元格，可在右键菜单选项中合并
    minSpareRows：1,             //最少空行数,填完行会自动增加一行
    className：'htLeft',         //水平：htLeft，htCenter，htRight，htJustify，垂直：htTop，htMiddle，htBottom
    cell: [
      {row: 0, col: 0, className: "htRight"},
      {row: 1, col: 1, className: "htLeft htMiddle"},
      {row: 3, col: 4, className: "htLeft htBottom"}
    ],                           //具体单元格设置   
    readOnly: true,              //只读
    editor:false,                //禁止编辑修改值（其他可以修改），但是可以通过fillHandle操作修改值
    columnSorting: true,         //列排序    
    currentRowClassName: 'currentRow', //突出选择行
    currentColClassName: 'currentCol', //突出选择列      
  }
}
```

#### 插件方法
1. **afterChange** (changes: Array, source: String)：1个或多个单元格的值被改变后调用
    changes：是一个2维数组包含row，prop，oldVal，newVal4个属性。
    source：其值为一个字符串，值可以为：alter，empty，populateFromArray，loadData，autofill，paste
1. **beforeChange** (changes: Array, source: String)：开始改变单元格前被调用
    changes：是一个2维数组，包括[row，prop，oldVal，newVal]这4个公共属性列
    source是被改变的资源的名称
1. **afterCellMetaReset** ()：重置单元格后调用
1. **afterColumnMove** (oldIndex: Number, newIndex: Number)：列顺序被移动后触发
1. **afterRowMove** (oldIndex: Number, newIndex: Number)：行被移动后调用
1. **afterRowResize** (col: Number, size: Number)：行高改变后调用
1. **afterRemoveCol** (index: Number, amount: Number)：当一列或多列被移动后调用
    其中，index为开始移动的列的索引，amount为移动的列的总数量
1. **afterRemoveRow** (index: Number, amount: Number)：当一行或多行被移动后调用
   其中，index为被移动的行的索引，amount为被移动的行的总数量
1. **beforeRemoveCol** (index: Number, amount: Number)：一列或多列被移动前调用
1. **beforeRemoveRow** (index: Number, amount: Number)：一行或多行被移动前被调用
1. **afterColumnSort** (column: Number, order: Boolean)：列排序后调用
1. **beforeColumnSort** (column: Number, order: Boolean)：列排序前被调用
    order：值为true时为升序，false时为降序
1. **afterCreateCol** (index: Number, amount: Number)：添加行后被调用
    index：新列的索引
    amount：新列的数目
1. **afterCreateRow** (index: Number, amount: Number)：添加行后被调用
    index:新行的索引
    amount：新行的数目
1. **afterGetCellMeta** (row: Number, col: Number, cellProperties: Object)：获取单元格的配置信息后被调用
1. **beforeGetCellMeta** (row: Number, col: Number, cellProperties: Object)：获取单元格属性前被调用
1. **afterSetCellMeta**(row: Number, col: Number, key: String, value: *)：单元格样式被改变后调用
其中，cellProperties是一个单元格的渲染对象，key是改变样式的方式，例如合并单元格（merge），水平对齐（align）等。
1. **afterGetColHeader** (col: Number, TH: DOM Node)：获取列头信息后被调用，TH是行头节点
1. **afterGetColWidth** (col: Number, response: Object)：获取列宽后被调用
1. **afterColumnResize** (col: Number, size: Number)：列宽度被手动修改后调用
1. **afterCopyLimit** (s-electedRowsCount: Number, s-electedColsCount: Number,copyRowsLimit: Number, copyColsLimit: Number)
    当 copyRowsLimit 或者 copyColumnsLimit实现时被调用
1. **afterDestroy** ()：销毁Handsontable实例后被调用
1. **afterInit** ()：Handsontable实例被初始化后调用
1. **beforeInit** ()：Handsontable实例被初始化前调用
1. **beforeInitWalkontable**()：Walkontable实例被初始化前调用
1. **afterLoadData** ()：新的数据被加载到数据资源后被调用
1. **afterOnCellCornerMouseDown** (event)：鼠标点击单元格边角后被调用
1. **afterOnCellMouseDown** (event: Object, coords: Object, TD: Object)：点击单元格或行头/列头后被调用
   注意：点击行头或列头后索引的坐标为负数。例如点击列头单元格(0,0)，则调用后的坐标为(0,-1)。
1. **afterOnCellMouseOver** (event: Object, coords: Object, TD: Object)：鼠标停悬在单元格或行头/列头后调用
   注意：点击行头或列头后索引的坐标为负数。例如点击行头单元格(0,0)，则调用后的坐标为(0,-1)。
1. **afterRender** (isForced: Boolean)：渲染表格后被调用
     isForced：当其值为true表示是通过改变配置或数据引起的渲染，当值为false时表示通过滚动或移动、选中引起的渲染
1. **beforeRender** (isForced: Boolean)：渲染前被调用
1. **afterRendere**r (TD: Object, row: Number, col: Number, prop: String, value: String, cellProperties: Object)：手动渲染后调用
1. **beforeChangeRender** ()：渲染被改变前调用
1. **afterDes-elect** ()：当前单元格被取消选中时调用
1. **afterS-election** (r: Number, c: Number, r2: Number, c2: Number)：当一个或多个单元格被选中后调用
   其中，r：选中的单元格起始行，r2：选中单元格的终止行
             c：选中的单元格的起始列，c2：选中的单元格的终止列
1. **afterS-electionByProp** (r: Number, p: String, r2: Number, p2: String)：通过属性名选中单元格后调用afterS-electionEnd (r: Number, c: Number, r2: Number, c2: Number)：选中单元格鼠标抬起后调用

1. **afterS-electionEndByProp** (r: Number, p: String, r2: Number, p2: String)：通过属性选中单元格鼠标抬起后调用
1. **afterUpdateSettings** ()：配置参数配修改后调用
1. **afterValidate** (isValid: Boolean, value: Mixed, row: Number, prop: String,source: String)
   当有验证器的时候调用验证器时被调用，验证结果作为第一个参数。
1. **beforeValidate** (value: Mixed, row: Number, prop: String, source: String)：验证器被调用前调用该事件
1. **beforeAutofill** (start: Object, end: Object, data: Array)：开始自动填充前调动
   start：是一个第一个填充的单元格对象，例如:{row:4,col:3}
   end：是最后一个填充的单元格对象，例如：{row:7,col:5}
   data:是一个2维数组
1. **beforeKeyDown** (event: Object)：按键按下前被调用
1. **beforeSet** (var: Object)：单个配置值被设置前调用
1. **beforeSetRangeEnd**(coords: Array)：设置范围结束前被调用
   coords：是范围坐标
1. **modifyCol**(col: Number)：列被修改时调用
1. **modifyRow**( row: Number)：行被修改时调用
1. **modifyColWidth** (width: Number, col: Number)：列宽被修改时调用
1. **modifyRowHeight** (height: Number, row: Number)：行高被修改时调用



