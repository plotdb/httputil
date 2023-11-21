module.exports = (d,o = {}) ->
  d = if d instanceof Date => d else if d => new Date(d) else new Date!
  ret = [d.getYear! + 1900, d.getMonth! + 1, d.getDate!].map(->"#it".padStart(2,\0)).join(\/)
  if !o.time? or o.time =>
    ret += " " + [d.getHours!, d.getMinutes!, d.getSeconds!].map(->"#it".padStart(2,\0)).join(\:)
  return ret
