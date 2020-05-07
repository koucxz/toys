# drag and drop
今天特地翻了《JavaScript高级程序设计》，写了一个仿 transfer 的拖放 demo。

### preventDefault
1. dragenter，dragover 有一些元素默认不允许放置, 无法触发drop事件, 阻止默认行为后可以让它有效。
2. drop Firefox3.5+放置事件默认行为是打开URL, 因此需要阻止默认行为

### effectAllowed & dropEffect
[点击这里看效果](https://jsfiddle.net/leechikit/o6r3wtpq/)

这两个属性比较鸡肋，我们实现功能使用不到

- [effectAllowed](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/effectAllowed) 指定拖放允许的操作, 默认值是 all, 设为 none 时无法触发 drop 事件。
- [dropEffect](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/dropEffect) 控制在拖放操作中给用户的反馈（通常是视觉上的）。它会影响在拖拽过程中光标的手势。

#### 感谢
[HTML5 drag & drop 拖拽与拖放](https://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%E6%8B%96%E6%8B%BD%E4%B8%8E%E6%8B%96%E6%94%BE%E7%AE%80%E4%BB%8B/)
[MDN DataTransfer](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/DataTransfer)
