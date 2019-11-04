import { checkArray } from "../utils"

export function mergeSort (arr) {
  checkArray(arr)
  if (arr.length < 2) return arr
  console.time("mergeSort耗时")
  const result = _sort(arr)
  console.timeEnd("mergeSort耗时")
  return result
}

export function _sort (arr) {
  if (arr.length < 2) return arr
  const len = arr.length
  const middleIdx = Math.floor(len / 2)
  const left = arr.slice(0, middleIdx)
  const right = arr.slice(middleIdx)
  return _merge(_sort(left), _sort(right))
}

function _merge (left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }
  return result
}
