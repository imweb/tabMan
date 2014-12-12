tabMan
======

基本用法
--------

* html写法
```
<div class="mod-tab" id="tab-container">
    <ul class="mod-tab__ul">
        <li class="mod-tab__li mod-tab__li_current"><a href="#mytab0">tab0</a></li>
        <li class="mod-tab__li"><a href="#mytab1">tab1</a></li>
    </ul>
    <div class="mod-tab__content" id="mytab0">
    </div>
    <div class="mod-tab__content hide" id="mytab1">
    </div>
</div>

```

* javascript调用

```
tabMan('#tab-container')
	.on('changeTab', function (e, tabId) {
		// 例如点击tab0, 则会打印#mytab0
		console.log(tabId)
	});
```

API
----
```
/**
 * tabMan
 * 对该Tab组件进行初始化
 * @param {Selector | DOM} container 容器
 */
tabMan('#tab');
```

/**
 * .on
 * 绑定事件，事件目前可以是changeTab、forecast
 * @param {String} event 事件
 * @param {Function} cb 回调
 */
tabMan('#tab')
	// forecast实际上是鼠标hover到tab按钮上时会触发，用于预渲染，避免页面抖动
	.on('forecast', function (e, tabId) {
		// render
	});
```
/**
 * all
 * 对容器中所有.mod-tab进行初始化
 * @param {Selector | DOM} selector 容器
 */
tabMan.all(document.body);
```