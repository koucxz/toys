const defaultLength = 7

class HashTable {
  table = []
  count = 0

  constructor (length = defaultLength) {
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
      this.table[pos] = bucket
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

    // 扩容
    if (this.size() > this.table.length * 0.75){
      let newSize = this.table.length * 2
      this.resize(newSize)
    }
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

        // 缩容
        if (this.table.length > defaultLength && this.size() < this.table.length * 0.25) {
          let newSize = Math.floor(this.table.length / 2)
          this.resize(newSize)
        }

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

  // 扩容操作
  resize (size) {
    size = _getPrime(size)
    let oldTable = this.table

    this.table = new Array(size)
    this.count = 0

    for (let i = 0; i < oldTable.length; i++) {
      const bucket = oldTable[i];

      if (!bucket) {
        continue
      }      

      for (let j = 0; j < bucket.length; j++) {
        const item = bucket[j];
        this.put(item[0], item[1])//插入数据的key和value
      }
    }
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
