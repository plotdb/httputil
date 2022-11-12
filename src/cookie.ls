module.exports = (k,v,o) ->
  if v =>
    r = ""
    o = if typeof(o) == \string => o = {expires: o} # backward compatibility
    else o or {}
    if !o.path => o.path = \/ 
    # cookie value may not be expected if use with different paths.
    # avoid using path option to prevent confusion
    o.path = encodeURIComponent(o.path)
    for _k,_v of o => r += ";#_k=#_v"
    return document.cookie = "#{encodeURIComponent k}=#{encodeURIComponent v}" + r
  hash = {}
  (document.cookie or '')
    .split(\;)
    .map -> it.split(\=).map(->it.trim!)
    .map -> hash[decodeURIComponent(it.0)] = decodeURIComponent(it.1)
  return if k => hash[k] else hash
