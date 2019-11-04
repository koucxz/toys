import { checkArray } from "../utils"

export function countSort (arr) {
  checkArray(arr)
  if (arr.length < 2) return arr
  console.time("countSort耗时")
  const len = arr.length
  let result = []
  let C = []
  let min, max
  min = max = arr[0]
  for (let i = 0; i < len; i++) {
    min = min <= arr[i] ? min : arr[i]
    max = max >= arr[i] ? max : arr[i]
    C[arr[i]] = C[arr[i]] ? C[arr[i]] + 1 : 1
  }
  
  for (let i = min; i < max; i++) {
    C[i + 1] = (C[i + 1] || 0) + (C[i] || 0)
  }

  for (let i = len - 1; i >= 0; i--) {
    result[C[arr[i]] - 1] = arr[i]
    C[arr[i]]--
  }
  console.timeEnd("countSort耗时")
  return result
}
