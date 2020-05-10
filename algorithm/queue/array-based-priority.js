const Queue = require('./array-based')

// 优先级元素

class PriorityQueue extends Queue {
  constructor () {
    super()
  }

  static PriorityEl = class PriorityEl {
    el = ''
    priority = 10 // 优先级，值最小的优先出队
    constructor (el, priority = 10) {
      this.el = el
      this.priority = priority
    }
  }

  enqueue (el, priority) {
    const queueEl = new PriorityQueue.PriorityEl(el, priority)
    if (this.isEmpty()) {
      this.value.push(queueEl)
    } else { // 将当前元素插入到比它优先级低(优先级数值大)的元素前
      let added = false
      for (let i = 0, len = this.size(); i < len; i++) {
        if (queueEl.priority < this.value[i].priority) {
          this.value.splice(i, 0, queueEl) 
          added = true
          break
        }
      }
      if (!added) {
        this.value.push(queueEl)
      }
    }
  }

  toString () {
    let result = ''
    for (let i = 0, len = this.size(); i < len; i++) {
      result += this.value[i].el + " priority: " + this.value[i].priority + "\n";
    }
    return result
  }
}

module.exports = PriorityQueue
