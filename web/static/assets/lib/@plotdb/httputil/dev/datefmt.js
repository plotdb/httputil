(function(){
  module.exports = function(d, o){
    var ret;
    o == null && (o = {});
    d = d instanceof Date
      ? d
      : d
        ? new Date(d)
        : new Date();
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
