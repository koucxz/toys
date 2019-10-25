const { isFunction, isThenable } = require('./util')

function isPromise (obj) {
  return obj instanceof Promise
}

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const handleCallback = (callback, state, result) => {
  const { onFulfilled, onRejected, resolve, reject } = callback
  try {
    if (state === FULFILLED) {
      isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result)
    } else if (state === REJECTED) {
      isFunction(onRejected) ? resolve(onRejected(result)) : reject(result)
    }
  } catch (err) {
    reject(err)
  }
}

const handleCallbacks = (callbacks, state, result) => {
  while (callbacks.length) handleCallback(callbacks.shift(), state, result)
}

const transition = (promise, state, result) => {
  if (promise.state !== PENDING) return
  promise.state = state
  promise.result = result
  setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0)
}

const resolvePromise = (promise, result, resolve, reject) => {
  if (result === promise) {
    const reason = new TypeError('Can not fufill promise with itself')
    return reject(reason)
  }

  if (isPromise(result)) {
    return result.then(resolve, reject)
  }

  if (isThenable(result)) {
    try {
      const then = result.then
      if (isFunction(then)) {
        return new Promise(then.bind(result)).then(resolve, reject)
      }
    } catch (err) {
      return reject(err)
    }
  }

  resolve(result)
}

function Promise (f) {
  this.result = null
  this.state = PENDING
  this.callbacks = []

  const onFulfilled = (value) => transition(this, FULFILLED, value)
  const onRejected = (reason) => transition(this, REJECTED, reason)

  let ignore = false
  const resolve = (value) => {
    if (ignore) return
    ignore = true
    resolvePromise(this, value, onFulfilled, onRejected)
  }
  const reject = (reason) => {
    if (ignore) return
    ignore = true
    onRejected(reason)
  }

  try {
    f(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  return new Promise((resolve, reject) => {
    const callback = { onFulfilled, onRejected, resolve, reject }

    if (this.state === PENDING) {
      this.callbacks.push(callback)
    } else {
      setTimeout(() => handleCallback(callback, this.state, this.result), 0)
    }
  })
}

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

Promise.resolve = (value) => new Promise(resolve => resolve(value))
Promise.reject = (reason) => new Promise((_, reject) => reject(reason))

Promise.all = (promises) => new Promise((resolve, reject) => {
  let settledCount = 0
  const num = promises.length
  let results = Array.from({length: num})
  promises.forEach((promise, index) => {
    Promise.resolve(promise).then(result => {
      settledCount++
      results[index] = result
      if (settledCount === num) {
        return resolve(results)
      }
    }, reason => reject(reason))
  })
})
Promise.race = (promises) => new Promise((resolve) => {
  promises.forEach(resolve)
})

Promise.try = (fn) => new Promise(() => fn)

Promise.prototype.finally = function (callback) {
  return this.then(
    value  => Promise.resolve(callback()).then(() => value),
    reason => Promise.resolve(callback()).then(() => { throw reason })
  )
}

// if (window) {
//   window.Promise = Promise
// }

if ('exports' in module) {
  module.exports = Promise
}
