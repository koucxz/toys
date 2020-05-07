import { checkArray, swap } from "../utils/index.mjs"

export function bubbleSort (arr) {
  checkArray(arr)
  if (arr.length < 2) return arr
  console.time("bubbleSort耗时")
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  console.timeEnd("bubbleSort耗时")
  return arr
}

export function bubbleSort2 (arr) {
  checkArray(arr)
  if (arr.length < 2) return arr
  console.time("bubbleSort改进后耗时")
  const len = arr.length
  let i = len - 1
  while (i > 0) {
    let pos = 0 // 本次循环最终交换位置记录变量
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        pos = j // 记录交换位置
      }
    }
    i = pos // 下次从这个位置开始交换
  }
  console.timeEnd("bubbleSort改进后耗时")
  return arr
}
