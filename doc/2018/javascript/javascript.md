### 页面重定向
```js
// 模拟HTTP重定向
window.location.replace("http://stackoverflow.com")

// 模拟某人点击链接
window.location.href = 'newPage.html';
```

### 查找字符串中是否包含某个字符
```js
// es6
'abcd'.includes('ac')   // 不包含：false
'abcd'.includes('bc')   // 包含：true

// es5
'abcd'.indexOf('ac') === -1   // 找不到 等于-1：true
'abcd'.indexOf('bc') !== -1  // 找得到 不等于-1：true

```


### 数组删除元素
```js
// 删除并保留位置
delete array[index]

// 删除后返回新的数组 
array.splice( index, 1 )

// 返回新数组
let array=['1','2','3','4','5','6']
let newArray = array.filter((value) => value != '3' )   // ["1", "2", "4", "5", "6"]

```

### Underscore.js
```js
// 删除元素
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1) // => [2, 3, 4]

```


### chrom F12
```js
console.table(arr)   打印数组
ctrl+p 查找当前网站已加载的资源文件
ctrl+shift+p 显示所有命令
ctrl+l 清空console面板数据
ctrl+R/ f5 正常重新加载
ctrl+shift+R/shift f5 硬性重新加载


```
```js
// 获取元素大小及其相对于视口的位置
document.querySelector(domSelector).getBoundingClientRect()


// 表格列拖动
https://github.com/Darkerxi/ElementUI-Table-column_render-header


http://chimee.org/  H5播放器插件


this.$nextTick( async () => {
   const res = await this.api(...);
   console.log(res);  
})

```