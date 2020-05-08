class Queue {
  value = []
  constructor () {
    this.value = [...arguments]
  }

  enqueue (el) {
    this.value.push(el)
  }

  dequeue () {
    return this.value.shift()
  }

  // 获取队列首个元素
  front () {
    return this.value[0]
  }
  // 获取队列最后一个元素
  back () {
    return this.value[this.value.length - 1]
  }

  isEmpty () {
    return !this.value.length
  }

  size () {
    return this.value.length
  }
  length () {
    return this.size()
  }

  toString () {
    return this.value.join(' ')
  }
}

module.exports = Queue
