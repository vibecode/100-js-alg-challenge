function alphabetSubsequence(s: string): boolean {
  //'a' charCode = 97
  //'z' charcode = 122

  for (let i = 0; i < s.length; i++) {
    if (
      s.charCodeAt(i) < 97 ||
      s.charCodeAt(i) > 122 ||
      s.charCodeAt(i) >= s.charCodeAt(i + 1)
    )
      return false
  }

  return true
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
