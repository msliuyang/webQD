[toc]
### css高级运用
#### 去掉最后一个元素的边框
```css
.list .item:not(:last-child) {
  border-right: 1px solid #666;
}
// ps: 开动小脑筋，可灵活运用哦！
```


#### 选择前几个元素
```css
// 只显示前3个元素
li{
  display: none;
}
li:nth-child(-n+3) {
  display: block;
}
// ps: 开动小脑筋，可灵活运用哦！
```

#### 利用选择器来给元素添加默认值
```css
div[contenteditable]:empty:not(:focus):before {
  content: attr(placeholder);
  color: #ccc ;
  font-size: 16px;
}

a[href^="http"]:empty::before {
  content: attr(href);
}

// 开动小脑筋，还可以扩展哦！
```


#### 隐藏没有静音、自动播放的影片
```css
video[autoplay]:not([muted]) {
  display: none;
}

// 非全屏播放
<video src="test.mp4" webkit-playsinline="true"></video>
```

#### 补充
使用CSS transforms 或者 animations时可能会有页面闪烁的bug
-webkit-backface-visibility: hidden;

禁止长按链接与图片弹出菜单
-webkit-touch-callout: none;
### 常用页面模板,可应用pc/移动端（ie9及以上）
#### [常见列表：点我查看源码](./html/list.html)
#### [元素始终在底部不随滚动条内容滚动：点我查看源码](./html/footer.html)
#### [元素固定在底部会随滚动条内容滚动：点我查看源码](./html/footer.html)

// ps：常用页面模板文件在html文件夹中,可运行查看页面效果
