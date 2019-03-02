function adjacentElementsProduct(inputArray: number[]): number {
  const products = inputArray.reduce((acc, number, i) => {
    const next = inputArray[i + 1]
    return next ? [...acc, number * next] : acc
  }, [])

  products.sort((a, b) => b - a)

  return products[0]
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
