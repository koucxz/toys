import { checkArray } from "../utils/index.mjs"

export function insertSort (arr) {
  checkArray(arr)
  if (arr.length < 2) return arr
  console.time("insertSort耗时")
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let j = i
    let iToInsert = arr[i]
    while (j > 0 && arr[j - 1] > iToInsert) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = iToInsert
  }
  console.timeEnd("insertSort耗时")
  return arr
}
