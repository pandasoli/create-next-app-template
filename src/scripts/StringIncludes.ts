
const StringIncludes = (str: string, chars: string) => {
  for (let x of chars.split(''))
    if (str.includes(x)) return true

  return false
}


export default StringIncludes