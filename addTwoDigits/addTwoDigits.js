function addTwoDigits(n) {
    const arr = n.toString().split('');
    return arr.reduce((acc, digit) => parseInt(acc) + parseInt(digit));
}
console.log(addTwoDigits(29));
//# sourceMappingURL=addTwoDigits.js.map