module.exports = (d,o = {}) ->
  d = if d instanceof Date => d
  else if d => new Date(d)
  else if arguments.length and (!d? or isNaN(d)) => undefined
  else new Date!
  if !d? or isNaN(d.getTime!) => return o.invalid or undefined
  ret = [d.getYear! + 1900, d.getMonth! + 1, d.getDate!].map(->"#it".padStart(2,\0)).join(\/)
  if !o.time? or o.time =>
    ret += " " + [d.getHours!, d.getMinutes!, d.getSeconds!].map(->"#it".padStart(2,\0)).join(\:)
  return ret
