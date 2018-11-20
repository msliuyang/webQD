#### Vue.js中使用事件监听
- `watch`监听
```js{.line-numbers}
    // 对象中的某个属性
    watch： {
      'object.key':function(newVal,oldVal){
        // do something...
      }
    }
    // 对象
    watch： {
      object: {
        handle(newVal,oldVal){
          // do something...
        },
        immediate: true,  // 立即执行,可解决首次默认值也触发问题
        deep: true    // 深度检测
      }
    }
```

- `addEventListener`事件监听

```js{.line-numbers}
    mounted() {
      window.addEventListener('resize', () => {
        this.methods()
      }, false)
    },
    beforeDestroy () {
    	window.removeEventListener('resize',() => this.methods(), false)
    }
```

> vue中事件能进行自行销毁，但是原生的vue当然检测不到，无法移除监听，需自行销毁`scroll,keydown,keyup,setInterval,setTimeOut`等


#### keep-alive(缓存组件)
> `<keep-alive>`是`Vue`的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染`DOM`。
> `<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 `DOM` 元素，也不会出现在父组件链中。
> `include`: 字符串或正则表达式，只有匹配的组件会被缓存。
> `exclude`: 字符串或正则表达式，任何匹配的组件都不会被缓存。
> 
> **使用场景：适合`tab`切换，解决`create`方法只执行一次**
> `exclude`：将不缓存name为test-keep-alive的组件
```js{.line-numbers}
    <keep-alive exclude="test-keep-alive">
      <component :is="currentTabComponent"></component>
    </keep-alive>

    // 对应的有activated,deactivated方法

    // currentTabComponent.vue
    activated: {
      // do something...
    }
    deactivated: {
      // 当时用keep-alive缓存的组件有监听时,使用该事件进行销毁
    }
```

#### 子组件修改父组件中传递的props值
```js
  // parent.vue
  <children :params.sync="params"></children>


  // children.vue
  this.$emit('update:params', val)
```

### 优化if-else/switch

```js
function showGrace(grace) {
    let _level='';
    if(grace>=700){
        _level='信用极好'
    }
    else if(grace>=650){
        _level='信用优秀'
    }
    else if(grace>=600){
        _level='信用良好'
    }
    else if(grace>=550){
        _level='信用中等'
    }
    else{
        _level='信用较差'
    }
    return _level;
}

// 优化
function showGrace(grace) {
    let graceForLevel=[700,650,600,550];
    let levelText=['信用极好','信用优秀','信用良好','信用中等','信用较差'];
    for(let i=0;i<graceForLevel.length;i++){
        if(grace>=graceForLevel[i]){
            return levelText[i];
        }
    }
    return levelText[levelText.length-1];
}

// 再进一步
function showGrace(grace,level,levelForGrace) {
    for(let i=0;i<level.length;i++){
        if(grace>=level[i]){
            return levelForGrace[i];
        }
    }
    return levelForGrace[levelForGrace.length-1];
}
let graceForLevel=[700,650,600,550];
let levelText=['信用极好','信用优秀','信用良好','信用中等','信用较差'];
```


```js
<span v-if="cashType==='cash'">现金</span>
<span v-else-if="cashType==='check'">支票</span>
<span v-else-if="cashType==='draft'">汇票</span>
<span v-else-if="cashType==='zfb'">支付宝</span>
<span v-else-if="cashType==='wx_pay'">微信支付</span>
<span v-else-if="cashType==='bank_trans'">银行转账</span>
<span v-else-if="cashType==='pre_pay'">预付款</span>

//优化
<span>{{getPayChanne(cashType)}}</span>

function getPayChanne(tag){
    let payChanneForChinese = {
        'cash': '现金',
        'check': '支票',
        'draft': '汇票',
        'zfb': '支付宝',
        'wx_pay': '微信支付',
    };
    return payChanneForChinese[tag];
}
```

