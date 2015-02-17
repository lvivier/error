# error

Custom error constructors (without all the fuss).

Our errors have all the bells and whistles:

```js
var error = require('error')
var NotFoundError = error('NotFoundError', {status:404})
var err = new NotFoundError('ohnoes')

err
//-> NotFoundError {}
err instanceof NotFoundError
//-> true
err instanceof Error
//-> true
err.name === 'NotFoundError'
//-> true
err.message
//-> 'ohnoes'
err.status
//-> 404
```

## Install

With [component][1] or [npm][2]:

```
$ component install lvivier/error

$ npm install lvivier/error
```

## Usage

### error(name, [parent], [opts])

- returns a Function
- **parent** is the prototype, or `Error` if omitted
- **opts** is an object whose members will become properties of the error instance
- **opts.stack** if set to `false`, errors won't have stack traces

[1]:http://github.com/componentjs/component
[2]:http://npmjs.org/
