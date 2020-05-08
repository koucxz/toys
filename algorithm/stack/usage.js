const Stack = require('./array-based')

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

/**
 * 算术表达式中缀转后缀
 * @example 16 + ((2 + 3) * 4) - 5 -> 16 2 3 + 4 * + 5 -
*/
function infixToSuffix (exp) {
  const s1 = new Stack() // 运算符栈
  const s2 = new Stack() // 中间结果栈
  const expArr = exp.replace(/ /g, '').match(/\d+|\D/g) // 拆分数字与操作符
  // 从左至右遍历字符串
  for (let i = 0, len = expArr.length; i < len; i++) {
    // console.log('s1:', s1.value, '\ns2:', s2.value)
    const ch = expArr[i]
    if (/\d+/g.test(ch)) {
      // 遇到操作数时
      s2.push(ch)
    } else if (ch !== '(' && ch !== ')')  {
      // 遇到操作符时

      // s1 为空或栈顶为 ( , 直接压入s1
      // 否则, 优先级比s1栈顶运算符高, 直接压入s1
      // 否则, 弹出s1栈顶压入s2, 继续判断前两步
      while (!s1.isEmpty() && s1.peek() !== '(' && _gotOpPriority(ch) <= _gotOpPriority(s1.peek())) {
        s2.push(s1.pop())
      }
      s1.push(ch)
    } else {
      // 遇到括号
      if (ch === '(') {
        // 左括号直接入s1
        s1.push(ch)
      } else {
        // 遇到右括号, 弹出s1栈顶压入s2, 直至遇到左括号一起丢弃
        while (s1.peek() !== '(') {
          s2.push(s1.pop())
        }
        // 弹出左括号, 忽视右括号(ch)
        s1.pop()
      }
    }
  }
  while (!s1.isEmpty()) {
    s2.push(s1.pop())
  }
  return s2.toString()
}

function _gotOpPriority (op) {
  switch (op) {
    case '*':
    case '/':
      return 2
    case '+':
    case '_':
      return 1
    default: 
      return 0
  }
}

module.exports = {
  decToBin,
  factorial,
  infixToSuffix,
}
