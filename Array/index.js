import arrayFrom from "./from"
import splice from "./splice"
import forEach from "./forEach"
import reduce from "./reduce"

Array._from = arrayFrom

Array.prototype._splice = splice
Array.prototype._forEach = forEach
Array.prototype._reduce = reduce
