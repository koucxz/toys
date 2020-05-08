const Queue = require('./array-based')

// 1. 几个朋友一起玩一个游戏，围成一圈，开始数数，数到某个数字的人自动淘汰。
//    最后剩下的人会获得胜利，请问最后剩下的是原来在哪个位置的人？

/**
 * @param nameList 玩家列表
 * @param k 淘汰的报数
 */
function gotIndexOfWinner (nameList, k) {
  if (k <= 0) return -1
  const queue = new Queue()
  // 将所有人放入队列
  nameList.forEach(el => queue.enqueue(el))

  // 数数，未数到k将其放入队尾，否则移出队列
  let i = 0
  while (queue.size() > 1) {
    const cur = queue.dequeue()
    if (i !== k - 1) {
      queue.enqueue(cur)
      i++
    } else {
      i = 0
    }
  }

  const remain = queue.front()
  console.log('最终留下的人是：', remian)
  return nameList.indexOf(remain)
}
