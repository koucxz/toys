import { bubbleSort, bubbleSort2 } from "./src/bubble"
import { quickSort } from "./src/quick"
import { insertSort } from "./src/insert"
import { shellSort } from "./src/shell"

const len = 3
let arr = Array.from({length: len}, () => parseInt(Math.random() * len))

const result = 
bubbleSort(arr.slice())
bubbleSort2(arr.slice())
quickSort(arr.slice())
insertSort(arr.slice())
console.log(shellSort(arr.slice()))

// console.log("排序结果:", result.join(","))
