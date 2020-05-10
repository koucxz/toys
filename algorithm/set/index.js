class CSet extends Set {
  show () {
    return [...this]
  }
  /** 求并集
   * @param { Set } set 传入set
   * @returns { Set } 传入set与当前set并集
   */ 
  union (set) {
    return new CSet([...set, ...this])
  }

  // 求交集
  intersect (set) {
    let tempSet = new Set()
    set.forEach(el => {
      if (this.has(el)) {
        tempSet.add(el)
      }
    })
    return tempSet
  }

  // 判断当前set是否为传入set的子集
  subset (set) {
    if (this.size > set.size)  {
      return false
    }
    for (let el in this) {
      if (!set.has(el)) {
        return false
      }
    }
    return true
  }

  // 求补集，属于当前set不属于传入set
  diffrence (set) {
    let tempSet = new Set()
    this.forEach(el => {
      if (!set.has(el)) {
        tempSet.add(el)
      }
    })
    return tempSet
  }
}
