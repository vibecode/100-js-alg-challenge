function addTwoDigits(n: any): number {
  const arr = n.toString().split('')

  return arr.reduce(
    (acc: string, digit: string) => parseInt(acc) + parseInt(digit)
  )
}

console.log(addTwoDigits(29))
