class LinkedList {
  head = null
  length = 0

  static Node = class Node {
    next = null
    data = null

    constructor (data, next = null) {
      this.data = data
      this.next = next
    }
  }

  append (data) {
    const newNode = new LinkedList.Node(data)

    if (this.isEmpty()) {
      // 第一个节点
      this.head = newNode
    } else {
      // 找到最后一个节点
      let curr = this.head
      while (curr.next) {
        curr = curr.next
      }
      // 最后节点的next指向新的节点
      curr.next = newNode
    }
    this.length++
  }

  insert (pos, data) {
    if (pos > this.length || pos < 0) throw new Error(`无法插入到位置${pos}, 当前链表长度为${this.length}`)

    const newNode = new LinkedList.Node(data)

    if (pos === 0) {
      // 插入到第一个
      newNode.next = this.head
      this.head = newNode
    } else {
      // 插入到中间
      let index = 0
      let prev = null
      let curr = this.head
      while (index++ < pos) {
        prev = curr
        curr = curr.next
      }
      newNode.next = curr
      prev.next = newNode
    }
    this.length++
  }

  get (pos) {
    if (pos >= this.length || pos < 0) throw new Error(`位置${pos}没有可获取元素, 当前链表长度为${this.length}`)

    let index = 0
    let curr = this.head
    while (index++ < pos) {
      curr = curr.next
    }
    return curr.data
  }

  indexOf (data) {
    let curr = this.head
    let index = 0
    while (curr) {
      if (curr.data === data) {
        return index
      }
      curr = curr.next
      index++
    }
    return -1    
  }

  update (pos, data) {
    if (pos >= this.length || pos < 0) throw new Error(`位置${pos}没有可获取元素, 当前链表长度为${this.length}`)

    let index = 0
    let curr = this.head
    while (index++ < pos) {
      curr = curr.next
    }
    return curr.data = data
  }

  removeAt (pos) {
    if (pos >= this.length || pos < 0) throw new Error(`位置${pos}没有可删除元素, 当前链表长度为${this.length}`)

    let curr = this.head
    if (pos === 0) {
      this.head = this.head.next
    } else {
      let index = 0
      let prev = null
      while (index++ < pos) {
        prev = curr
        curr = curr.next
      }
      prev.next = curr.next
    }

    this.length--
    return curr.data
  }

  remove (data) {
    const idx = this.indexOf(data)
    if (idx === -1) throw new Error(`元素${data}不存在`)
    return this.removeAt(idx)
  }

  isEmpty () {
    return this.length === 0
  }

  size () {
    return this.length
  }

  toString () {
    let curr = this.head
    let retStr = ''
    while (curr) {
      retStr += curr.data + ' '
      curr = curr.next
    }
    return retStr
  }
}

module.exports = LinkedList
