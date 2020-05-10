class DoublyLList {
  head = null
  tail = null
  length = 0

  static Node = class Node {
    data = null
    prev = null
    next = null

    constructor ( data) {
      this.data = data
      this.prev = null
      this.next = null
    }
  }

  append (data) {
    const newNode = new DoublyLList.Node(data)

    if (this.isEmpty()) {
      // 第一个节点
      this.head = newNode
      this.tail = newNode
    } else {
      // 最后节点的处理
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  insert (pos, data) {
    if (pos > this.length || pos < 0) throw new Error(`无法插入到位置${pos}, 当前链表长度为${this.length}`)

    const newNode = new DoublyLList.Node(data)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else if (pos === 0) {
      // 插入到第一个
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    } else if (pos === this.length) {
      // 插入到最后一个
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    } else {
      // 插入到中间
      const curr = this._getCurrEl(pos)
      newNode.next = curr
      newNode.prev = curr.prev
      curr.prev.next = newNode
      curr.prev = newNode
    }
    this.length++
  }

  get (pos) {
    if (pos >= this.length || pos < 0) throw new Error(`位置${pos}没有可获取元素, 当前链表长度为${this.length}`)
    const curr = this._getCurrEl(pos)
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

    const curr = this._getCurrEl(pos)
    return curr.data = data
  }

  removeAt (pos) {
    if (pos >= this.length || pos < 0) throw new Error(`位置${pos}没有可删除元素, 当前链表长度为${this.length}`)

    let curr = null
    if (this.length === 1) {
      curr = this.head
      this.head = null
      this.tail = null
    } if (pos === 0) {
      curr = this.head
      this.head.next.prev = null
      this.head = this.head.next
    } else if (pos === this.length - 1) {
      curr = this.tail
      this.tail.prev.next = null
      this.tail = this.tail.prev
    } else {
      curr = this._getCurrEl(pos)
      curr.prev.next = curr.next
      curr.next.prev = curr.prev
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

  toReversedString () {
    let curr = this.tail
    let retStr = ''

    while (curr) {
      retStr += curr.data + ' '
      curr = curr.prev
    }

    return retStr
  }

   // 获取位置pos的链表Node
  _getCurrEl (pos) {
    let index = 0, curr = null
    if (index < this.length / 2) {
      index = 0
      curr = this.head
      while (index++ < pos) {
        curr = curr.next
      }
    } else {
      index = this.length -1
      curr = this.tail
      while (index-- > pos) {
        curr = curr.prev
      }
    }
    return curr
  }
}

module.exports = DoublyLList
