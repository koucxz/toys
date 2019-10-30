export default function splice (start, deleteCount, ...insertedItems) {
  if (typeof this === "undefined" || this === null) {
    throw new Error("Cannot convert undefined or null to object")
  }
  const arr = this
  const len = arr.length
  const tailStart = start + deleteCount
  const newArr = [...arr.slice(0, start), ...insertedItems, ...arr.slice(tailStart, len)]
  arr.length = newArr.length
  newArr.forEach((el, idx) => arr[idx] = el)
  return arr.slice(start, tailStart)
}
