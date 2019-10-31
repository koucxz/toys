import { bubbleSort, bubbleSort2 } from "./src/bubble.mjs"

let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

const result = 
bubbleSort(arr.slice())
bubbleSort2(arr.slice())

console.log("排序结果:", result.join(","))
