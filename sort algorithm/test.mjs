import { bubbleSort, bubbleSort2 } from "./src/bubble"
import { quickSort } from "./src/quick"
import { insertSort } from "./src/insert"
import { shellSort } from "./src/shell"
import { selectSort } from "./src/select"
import { heapSort } from "./src/heap"

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

// console.log("排序结果:", result.join(","))
