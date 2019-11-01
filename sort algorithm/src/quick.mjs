import { checkArray, swap } from "../utils"

function _partition (arr, left, right) {
  let pivot = arr[left]
  let pivotIdx = left
  while (left < right) {
    // 从右侧找到比基准小的数
    while (left < right && arr[right] >= pivot) {
      right--
    }
    // 从左侧找到比基准大的数
    while (left < right && arr[left] <= pivot) {
      left++
    }
    swap(arr, left, right) // 右侧大数与左侧小数交换
  }
  swap(arr, pivotIdx, left) // 把 pivot 交换到中间
  return left
}

function _quickSort (arr, left, right) {
  if (left >= right) return
  let pivotPos = _partition(arr, left, right)
  _quickSort(arr, left, pivotPos - 1)
  _quickSort(arr, pivotPos + 1, right)
  return arr
}

export function quickSort (arr) {
  checkArray(arr)
  if (arr.length < 2) return arr
  console.time("quickSort耗时")
  const result = _quickSort(arr, 0, arr.length - 1)
  console.timeEnd("quickSort耗时")
  return result
}
