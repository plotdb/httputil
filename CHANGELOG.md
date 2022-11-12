# Change Logs

## v0.0.5

 - path encoding should use `encodeURI` instead of `encodeURIComponent` 


## v0.0.4

 - (breaking change) let cookie by default set to `/`, while can be overwritten with option.
 - proper encode cookie options and values
 - upgrade modules to fix vulnerabilities


## v0.0.3

 - extend cookie api to accept an object for cookie options
 - upgrade modules to fix vulnerabilities


## v0.0.2

 - speed up building by replacing `npx` with `./node_modules/.bin/`
 - rename `httputil.js`, `httputil.min.js` to `index.js` and `index.min.js`
 - add `main` and `browser` field in `package.json`.
 - further minimize generated js file with mangling and compression
 - upgrade modules
 - patch test code to make it work with upgraded modules
 - release with compact directory structure
