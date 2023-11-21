# httputil

utility functions for commonly used http and browser context related functions, including:

 - `cookie(key,value,opt)` - getter / setter of cookie.
   - if `value` is omitted, return the cookie corresponding to `key`.
   - return undefined if `key` is not found in cookie.
   - option: either a string for expiration date, or an object with cookie options such as:
     - `expires`
     - `max-afge`
     - `path`
 - `qs(key)` - get value for `key` in querystring
   - return key-value pair hash if key is omitted.
   - return composed query string if `key` is a hash for key-value pairs.
   - return undefined if `key` is not found in query string.
 - `datefmt(date, opt)` - date object formatter.
   - return a date string in `YY/MM/DD hh:mm:ss` format.
   - parameters:
     - `date`: either a number (epoch) or a Date object. Use `new Date()` if omitted.
     - `opt`: an option object with following fields:
       - `time`: show time if true. Default true if omitted.
       - `invalid`: placeholder text when the given date is invalid. `undefined` will be used if omitted.


# License

MIT
