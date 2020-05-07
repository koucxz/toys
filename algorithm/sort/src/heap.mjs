import { checkArray, swap } from "../utils/index.mjs"

export function heapSort (arr) {
  checkArray(arr)
  if (arr.length < 2) return arr
  console.time("heapSort耗时")
  
  const len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    _heapify(arr, i, arr.length - 1)
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0 ,i)
    _heapify(arr, 0, i-1)
  }

  console.timeEnd("heapSort耗时")
  return arr
}

/** 递归建立大顶堆 */
function _heapify (arr, start, end) {
  let temp = arr[start]

  for (let i = 2 * start + 1; i <= end; i *= 2) {
    // leftChild: 2 * i + 1, rightChild: 2 * i + 2
    if (i < end && arr[i] < arr[i+1]) {
      i++;
    }
    if (temp >= arr[i]) { // 已经为大顶堆, = 保持稳定性
      break
    }
    arr[start] = arr[i] // 子节点上移
    start = i
  }

  arr[start] = temp
}
