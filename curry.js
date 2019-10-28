function curry (fn, ...args) {
  return function (...innerArgs) {
    const finalArgs = args.concat(innerArgs)
    return fn.apply(null, finalArgs)
  }
}
