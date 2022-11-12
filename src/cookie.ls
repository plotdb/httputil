module.exports = (k,v,o) ->
  if v =>
    r = ""
    if typeof(o) == \object => for _k,_v of o => r += ";#_k=#_v"
    else if typeof(o) == \string => r = ";expires=#o" # backward compatibility
    return document.cookie = "#k=#v" + r
  hash = {}
  (document.cookie or '')
    .split(\;)
    .map -> it.split(\=).map(->it.trim!)
    .map -> hash[decodeURIComponent(it.0)] = decodeURIComponent(it.1)
  return if k => hash[k] else hash
