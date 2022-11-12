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
      o.path = escape(o.path);
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
