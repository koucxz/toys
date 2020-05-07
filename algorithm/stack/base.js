class Stack {
  value = []
  constructor () {
    this.value = [...arguments]
  }

  push (el) {
    return this.value.push(el)
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

  toString () {
    return this.value.toString()
  }
}

module.exports = Stack
