
/**
 * Error constructor factory
 */

module.exports = function (name, parent, opts) {
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
