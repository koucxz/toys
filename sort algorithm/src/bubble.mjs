export function bubbleSort (arr) {
  if (!arr || arr.length === 0) return
  console.time("bubbleSort耗时")
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  console.timeEnd("bubbleSort耗时")
  return arr
}

export function bubbleSort2 (arr) {
  if (!arr || arr.length === 0) return
  console.time("bubbleSort改进后耗时")
  const len = arr.length
  let i = len - 1
  while (i > 0) {
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        pos = j
      }
    }
    i = pos
  }
  console.timeEnd("bubbleSort改进后耗时")
  return arr
}
