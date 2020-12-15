module.exports = (k,v,expire) ->
  if v => return document.cookie = "#k=#v" + (if expire => ";expires=#expire" else "")
  hash = {}
  (document.cookie or '')
    .split(\;)
    .map -> it.split(\=).map(->it.trim!)
    .map -> hash[decodeURIComponent(it.0)] = decodeURIComponent(it.1)
  return if k => hash[k] else hash
