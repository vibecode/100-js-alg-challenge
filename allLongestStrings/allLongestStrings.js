function allLongestStrings(inputArray) {
    let longestLength = 0;
    inputArray.forEach(str => {
        const length = str.length;
        if (length > longestLength) {
            longestLength = length;
        }
    });
    return inputArray.filter(str => str.length === longestLength);
}
console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
//# sourceMappingURL=allLongestStrings.js.map