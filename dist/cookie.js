(function(){
  module.exports = function(k, v, o){
    var r, _k, yet$, _v, hash;
    if (v) {
      r = "";
      if (typeof o === 'object') {
        for (_k in yet$ = true, o) {
          _v = o[_k];
          yet$ = false;
          r += ";" + _k + "=" + _v;
        } if (yet$) {
          if (typeof o === 'string') {
            r = ";expires=" + o;
          }
        }
      }
      return document.cookie = (k + "=" + v) + r;
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
