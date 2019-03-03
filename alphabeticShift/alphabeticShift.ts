function alphabeticShift(inputString: string): string {
  //'a' charCode = 97
  //'z' charcode = 122

  return inputString
    .split('')
    .map(str => {
      if (str.charCodeAt(0) === 122) {
        return String.fromCharCode(97)
      }

      return String.fromCharCode(str.codePointAt(0) + 1)
    })
    .join('')
}

console.log(alphabeticShift('crazy'))
