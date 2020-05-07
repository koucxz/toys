const Stack = require('./base')

/** 十进制转二进制
 * @param {number} int
 * @returns binaryString 二进制数
 */
function decToBin (int) {
  const stack = new Stack()
  while (int > 0) {
    // 获取余数，放入栈中
    stack.push(int % 2)
    // 获取整除后结果，继续循环
    int = Math.floor(int / 2)
  }

  // 从栈中取出0、1，拼出结果
  let binaryString = ''
  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }
  return binaryString
}

// 计算阶乘结果
function factorial(n) {
  const stack = new Stack();
  while (n > 1) {
    stack.push(n--);
  }
  let product = 1;
  while (stack.size() > 0) {
    product *= stack.pop();
  }
  return product;
}


module.exports = {
  decToBin,
  factorial,
}
