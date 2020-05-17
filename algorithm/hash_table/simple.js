class HashTable {
  table = new Array(137)

  constructor () {
  }

  get (data) {
    return this.table[this.betterHash(data)]
  }

  put (data) {
    let pos = this.betterHash(data);
    this.table[pos] = data;
  }

  remove (data) {
    let pos = this.betterHash(data);
    thia.table[pos] = undefined
  }

  simpleHash (string) {
    let total = 0;
    for (let i = 0; i < string.length; i++) {
      total += string.charCodeAt(i);
    }
    return total % this.table.length;
  }

  betterHash (string) {
    const H = 31;
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

  showDistro () {
    let n = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] != undefined) {
        console.log(i + ": " + this.table[i]);
      }
    }
  }
}
