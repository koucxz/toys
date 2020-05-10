// 1. 使用单向链表写一段程序，记录用户输入的一组测验成绩。
class SchoolClass extends LinkedList {
  grade = 7 // 年级
  className = '' //  普通班

  static Person = class Person {
    name = ''
    score = 0
    constructor (name, score) {
      this.name = name
      this.score = score
    }
  }

  add (name, score) {
    this.append(new SchoolClass.Person(name, score))
  }

  getScoreByName (name) {
    let curr = this.head
    while (curr) {
      if (curr.data.name === name) {
        return curr.data.score
      }
      curr = curr.next
    }
  }

  updateScoreByName (name, score) {
    let curr = this.head
    while (curr) {
      if (curr.data.name === name) {
        return curr.data.score = score
      }
      curr = curr.next
    }
  }
  
  toString () {
    let curr = this.head
    let retStr = ''
    while (curr) {
      retStr += `${curr.data.name}的分数：${curr.data.score}\n`
      curr = curr.next
    }
  }
}