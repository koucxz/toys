const type = process.argv[2] || 'single'

const run = () => {
  if (type === 'doubly' || type === '-D') {
    testDoublyLList()
  } else {
    testLList()
  }
}
run()

function testLList () {
  const LinkedList = require('./index')

  const list = new LinkedList()

  // 测试append
  list.append('a')
  list.append('b')
  list.append('c')
  console.log('添加a b c结果:', list)

  // 测试insert
  list.insert(0, 'x')
  list.insert(3, 'y')
  list.insert(5, 'z')
  console.log('插入0: x, 3: y结果', list)

  // 测试toString
  console.log('链表当前内容：', list.toString())

  // 测试get
  console.log('位置2的元素为:', list.get(2))

  // 测试indexOf
  console.log('元素y的位置为：', list.indexOf('y'))

  // 测试update
  list.update(4, 'm')
  console.log('位置4的元素已修改为m:', list.toString())

  // 测试removeAt
  const removedEl = list.get(4)
  list.removeAt(4)
  console.log(`位置4的元素${removedEl}已删除:`, list.toString())

  // 测试remove
  const elToRemove = 'y'
  list.remove(elToRemove)
  console.log(`元素${elToRemove}已删除:`, list.toString())

  console.log(`链表长度为${list.size()}, 是否为空: ${list.isEmpty() ? '是' : '否'}`)
}

function testDoublyLList () {
  const DoublyLinkedList = require('./doubly')

  const list = new DoublyLinkedList()

  // 测试append
  list.append('a')
  list.append('b')
  list.append('c')
  console.log('添加a b c结果:', list)

  // 测试insert
  list.insert(0, 'x')
  list.insert(3, 'y')
  list.insert(5, 'z')
  console.log('插入0: x, 3: y结果', list)

  // 测试toString
  console.log('链表当前内容：', list.toString())
  console.log('倒序：', list.toReversedString())

  // 测试get
  console.log('位置1的元素为:', list.get(1))
  console.log('位置4的元素为:', list.get(4))

  // 测试indexOf
  console.log('元素y的位置为：', list.indexOf('y'))

  // 测试update
  list.update(4, 'm')
  console.log('位置4的元素已修改为m:', list.toString())

  // 测试removeAt
  const removedEl = list.get(4)
  list.removeAt(4)
  console.log(`位置4的元素${removedEl}已删除:`, list.toString())

  // 测试remove
  const elToRemove = 'y'
  list.remove(elToRemove)
  console.log(`元素${elToRemove}已删除:`, list.toString())

  console.log(`链表长度为${list.size()}, 是否为空: ${list.isEmpty() ? '是' : '否'}`)

}
