import { bubbleSort, bubbleSort2 } from "./src/bubble.mjs"
import { quickSort } from "./src/quick.mjs"
import { insertSort } from "./src/insert.mjs"
import { shellSort } from "./src/shell.mjs"
import { selectSort } from "./src/select.mjs"
import { heapSort } from "./src/heap.mjs"
import { mergeSort } from "./src/merge.mjs"
import { countSort } from "./src/count.mjs"

const len = 1e4
let arr = Array.from({length: len}, () => parseInt(Math.random() * len))

const result = 
bubbleSort(arr.slice())
bubbleSort2(arr.slice())
quickSort(arr.slice())
insertSort(arr.slice())
shellSort(arr.slice())
selectSort(arr.slice())
heapSort(arr.slice())
mergeSort(arr.slice())
countSort(arr.slice())

// console.log("排序结果:", result.join(","))
