import { checkArray } from "../utils"

export function shellSort (arr) {
  checkArray(arr)
  if (arr.length < 2) return arr
  
  console.time("shellSort耗时")
  let d = Math.floor(arr.length / 2)
  while (d >= 1) {
    for (let i = d; i < arr.length; i++) {
      let j = i - d
      const iToInsert = arr[i]
      while (j >= 0 && arr[j] > iToInsert) {
        arr[j + d] = arr [j]
        j -= d
      }
      if (j !== i - d) {
        arr[j + d] = iToInsert
      }
    }

    d = Math.floor(d/2)
  }
  console.timeEnd("shellSort耗时")

  return arr
}
