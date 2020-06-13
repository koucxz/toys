import LinkedList from '../linked_list'

class Queue {
  value = null
  constructor () {
    this.value = new LinkedList()
  }

  enqueue (el) {
    this.value.append(el)
  }

  dequeue () {
    return this.value.removeAt(0)
  }

  // 获取队列首个元素
  front () {
    return this.value.get(0)
  }
  // 获取队列最后一个元素
  back () {
    return this.value.get(this.value.size() - 1)
  }

  isEmpty () {
    return !this.value.size()
  }

  size () {
    return this.value.size()
  }
  length () {
    return this.value.size()
  }

  toString () {
    return this.value.toString()
  }
}

module.exports = Queue
