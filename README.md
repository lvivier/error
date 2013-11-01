# error

Error constructor factory.

Constructors returned have all the bells and whistles:

```js
var NotFoundError = error('NotFoundError', {status:404})
var err = new NotFoundError('ohnoes')

err
//-> NotFoundError {}
err instanceof NotFoundError
//-> true
err instanceof Error
//-> true
'NotFoundError' === err.name
//-> true
```

## Install

With [component][1] or [npm][2]:

```
$ component install lvivier/error

$ npm install lvivier/err
```

## Usage

### error(name, [parent], [opts])

- returns a Function
- **parent** is the prototype, or `Error` if omitted
- **opts** is an object whose members will become properties of the error instance
- **opts.stack** if set to `false`, errors won't have stack traces


[1]:http://github.com/component/component
[2]:http://npmjs.org/
