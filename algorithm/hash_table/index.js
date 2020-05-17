// TODO 扩容

class HashTable {
  table = []
  count = 0

  constructor (length = 137) {
    _getPrime(length)
    this.table = new Array(length)
  }

  /** 插入/修改
   * @param {String} key
   * @param {any} value
   */
  put (key, value) {
    const pos = this.hashing(key);
    let bucket = this.table[pos]
    
    if (!bucket) {
      bucket = []
    }

    for (let i = 0; i < bucket.length; i++) {
      let item = bucket[i]
      if (item[0] === key) {
        item[1] = value
        return
      }
    }

    bucket.push([key, value])
    this.count++
  }
  // 别名
  set = this.put

  get (key) {
    const pos = this.hashing(key);
    const bucket = this.table[pos]

    if (!bucket) {
      return
    }

    for (let i = 0; i < bucket.length; i++) {
      let item = bucket[i]
      if (item[0] === key) {
        return item[1]
      }
    }

    return
  }

  remove (key) {
    const pos = this.hashing(key);
    let bucket = this.table[pos]

    if (!bucket) {
      return
    }

    for (let i = 0; i < bucket.length; i++) {
      let item = bucket[i]
      if (item[0] === key) {
        bucket.splice(i,1)
        this.count--
        return item[1]
      }
    }

    return
  }

  isEmpty () {
    return this.count === 0
  }

  size () {
    return this.count
  }

  showDistro () {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] != undefined) {
        const bucket = this.table[i]
        bucket.forEach(item => {
          console.log(`${item[0]}:`, item[1])
        })
      }
    }
  }

  hashing (string) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return Math.round(total);
  }
}

// 判断是否质数
function _isPrime (num) {
  if (num <= 1) {
    return false
  }
  for(var i = 2; i<= Math.sqrt(num); i++ ){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}


function _getPrime (num) {
  while (!_isPrime(num)) {
    num++
  }
  return num
}
