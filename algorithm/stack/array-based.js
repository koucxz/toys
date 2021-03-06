class Stack {
  value = []
  constructor () {
    this.value = [...arguments]
  }

  push (el) {
    this.value.push(el)
  }

  pop () {
    return this.value.pop()
  }

  // 获取栈顶元素, 不修改栈
  peek () {
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

module.exports = Stack
