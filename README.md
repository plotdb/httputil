# httputil

utility functions for commonly used http related functions, including:

 - cookie(key,value,opt) - getter / setter of cookie.
   - if `value` is omitted, return the cookie corresponding to `key`.
   - return undefined if `key` is not found in cookie.
   - opt: either a string for expiration date, or an object with cookie options such as:
     - `expires`
     - `max-afge`
     - `path`
 - qs(key) - get value for `key` in querystring
   - return key-value pair hash if key is omitted.
   - return composed query string if `key` is a hash for key-value pairs.
   - return undefined if `key` is not found in query string.


# License

MIT
