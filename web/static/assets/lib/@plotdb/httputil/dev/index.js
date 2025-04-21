(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.httputil = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function(){
  module.exports = function(k, v, o){
    var r, _k, _v, hash;
    if (v) {
      r = "";
      o = typeof o === 'string'
        ? o = {
          expires: o
        }
        : o || {};
      if (!o.path) {
        o.path = '/';
      }
      o.path = encodeURI(o.path);
      for (_k in o) {
        _v = o[_k];
        r += ";" + _k + "=" + _v;
      }
      return document.cookie = (encodeURIComponent(k) + "=" + encodeURIComponent(v)) + r;
    }
    hash = {};
    (document.cookie || '').split(';').map(function(it){
      return it.split('=').map(function(it){
        return it.trim();
      });
    }).map(function(it){
      return hash[decodeURIComponent(it[0])] = decodeURIComponent(it[1]);
    });
    return k ? hash[k] : hash;
  };
}).call(this);

},{}],2:[function(require,module,exports){
/*
new Date()
  .toLocaleString("zh-TW", {timeZoneName: "short", hour12: false})
  .replace(/[\[\]]/g,'')
*/
(function(){
  module.exports = function(d, o){
    var ret;
    o == null && (o = {});
    d = d instanceof Date
      ? d
      : d
        ? new Date(d)
        : arguments.length && (d == null || isNaN(d))
          ? undefined
          : new Date();
    if (d == null || isNaN(d.getTime())) {
      return o.invalid || undefined;
    }
    ret = [d.getYear() + 1900, d.getMonth() + 1, d.getDate()].map(function(it){
      return (it + "").padStart(2, '0');
    }).join('/');
    if (o.time == null || o.time) {
      ret += " " + [d.getHours(), d.getMinutes(), d.getSeconds()].map(function(it){
        return (it + "").padStart(2, '0');
      }).join(':');
    }
    return ret;
  };
}).call(this);

},{}],3:[function(require,module,exports){
(function(){
  var cookie, qs, datefmt;
  cookie = require('./cookie');
  qs = require('./qs');
  datefmt = require('./datefmt');
  module.exports = {
    cookie: cookie,
    qs: qs,
    datefmt: datefmt
  };
}).call(this);

},{"./cookie":1,"./datefmt":2,"./qs":4}],4:[function(require,module,exports){
(function(){
  var local;
  local = {};
  module.exports = function(key){
    var k, v, hash;
    if (typeof key === 'object') {
      return "?" + (function(){
        var ref$, results$ = [];
        for (k in ref$ = key) {
          v = ref$[k];
          results$.push([k, v]);
        }
        return results$;
      }()).map(function(it){
        return encodeURIComponent(it[0]) + "=" + encodeURIComponent(it[1]);
      }).join('&');
    }
    if (!(hash = local.querystring)) {
      local.querystring = hash = {};
      (window.location.search || "").replace(/^\?/, '').split('&').map(function(it){
        return decodeURIComponent(it).split('=');
      }).map(function(it){
        return hash[it[0]] = it[1];
      });
    }
    return key ? hash[key] : hash;
  };
}).call(this);

},{}]},{},[3])(3)
});
