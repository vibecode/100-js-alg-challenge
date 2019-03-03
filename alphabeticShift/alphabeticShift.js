function alphabeticShift(inputString) {
  //'a' char code = 97
  //'z' char code = 122
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
//# sourceMappingURL=alphabeticShift.js.map
