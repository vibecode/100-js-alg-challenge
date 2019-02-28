function addBorder(picture: string[]): string[] {
  const wall = '*'.repeat(picture[0].length + 2)

  const bordered = picture.map(item => {
    return '*' + item + '*'
  })

  bordered.push(wall)
  bordered.unshift(wall)

  return bordered
}

console.log(addBorder(['abc', 'ded']))
