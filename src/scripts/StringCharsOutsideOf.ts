
const StringCharsOutsideOf = (str: string, acceptedChars: string) => {
  for (let x of str.split(''))
    if (!acceptedChars.includes(x)) return true

  return false
}


export default StringCharsOutsideOf