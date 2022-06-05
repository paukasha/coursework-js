export function dateFormat  (date)  {
  let dateFormat = date.split('T')[0].split('-')
  return `${dateFormat[2]}.${dateFormat[1]}.${dateFormat[0]}`
}