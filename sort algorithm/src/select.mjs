import { checkArray, swap } from "../utils"

export function selectSort (arr) {
  checkArray(arr)
  if (arr.length < 2) return arr
  console.time("selectSort耗时")

  let minIndex = 0
  const len = arr.length
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      swap(arr, i , minIndex)
    }
  }
  console.timeEnd("selectSort耗时")
  
  return arr
}
