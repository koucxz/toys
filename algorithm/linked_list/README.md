# 链表

- 链表中的元素在内存中不必是连续的空间。
- 链表的每个元素由一个存储元素本身的节点和指向下一个元素的引用组成

优点：
1. 内存动态管理灵活；
2. 大小无需在创建时确定，不受限；
3. 插入和删除时，时间复杂度可达到O(1)

缺点：
1. 链接访问元素时，需要从头开始访问。（无法跳过第一个元素访问任何元素）
2. 无下标，需要从头逐一访问

## 双向链表
双向遍历，解决单向链表无法向前查找的问题

缺点：
1. 实现困难一些
2. 占内存比单向链表大一点


## 代码

#### index.js
单向链表基本实现

#### doubly.js
双向链表实现

#### test.js

在目录linked_list执行：
```
node test 测试单向链表
node test doubly 测试双向链表
```
