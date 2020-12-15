local = {}
module.exports = (key) ->
  if typeof(key) == \object =>
    return "?" + ([[k,v] for k,v of key]
      .map -> "#{encodeURIComponent(it.0)}=#{encodeURIComponent(it.1)}"
      .join(\\&)
    )
  if !(hash = local.querystring) =>
    local.querystring = hash = {}
    (window.location.search or "")
      .replace(/^\?/,'')
      .split(\&)
      .map -> decodeURIComponent(it).split('=')
      .map -> hash[it.0] = it.1
  return if key => hash[key] else hash


