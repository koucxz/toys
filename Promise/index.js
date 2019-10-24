import { isFunction, isThenable, isPromise } from "./util"

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const transition = (promise, state, result) => {
  if (promise.state !== PENDING) return
  promise.state = state
  promise.result = result
}

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

const resolvePromise = (promise, result, resolve, reject) => {
  if (result === promise) {
    const reason = new TypeError('Can not fulfill promise with itself')
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
}

function Promise (f) {
  this.result = null
  this.state = PENDING
  this.callbacks = []

  const onFulfilled = (value) => transition(this, FULFILLED, value)
  const onRejected = (reason) => transition(this, REJECTED, reason)

  let ignore = false
  const resolve = (value)  => {
    if (ignore) return
    ignore = true
    resolvePromise(this, value, onFulfilled, onRejected)
  }
  const reject = (reason) => {
    if (ignore) return
    ig = true
    onRejected(reason)
  }

  try {
    f(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

Promise.prototype.then = (onFulfilled, onRejected) => {
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
Promise.reject = reason => newPromise((_, reject) => reject(reason))

window.Promise = Promise
