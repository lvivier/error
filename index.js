
module.exports = factory

/**
 * Error constructor factory
 *
 * - constructors returned from this factory are instances of Error or `parent`
 * - the returned constructor will have a name
 * - members of the `opts` object will become properties of the error instance
 * - if `opts.stack` is `false`, errors won't have stack traces
 */
function factory (name, parent, opts) {
  if ('undefined' == typeof opts && 'function' !== typeof parent) {
    opts = parent
    parent = undefined
  }

  parent = parent || Error
  opts = opts || {}

  function fn (message) {
    parent.apply(this, arguments)

    if (false !== opts.stack)
      Error.captureStackTrace(this, this.constructor)
    for (var opt in opts)
      if (opts.hasOwnProperty(opt)) this[opt] = opts[opt]
    this.message = message
  }

  var body = 'return function '+name+'(){fn.apply(this,arguments)}'
  var err = new Function('fn', body)(fn)

  err.prototype = Object.create(parent.prototype)
  err.prototype.constructor = err
  err.prototype.name = name

  return err
}
