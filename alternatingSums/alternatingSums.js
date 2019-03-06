function alternatingSums(a) {
    return a.reduce((acc, weight, i) => {
        if (i % 2 === 0) {
            acc[0] !== undefined ? (acc[0] = acc[0] + weight) : (acc[0] = weight);
            return acc;
        }
        acc[1] !== undefined ? (acc[1] = acc[1] + weight) : (acc[1] = weight);
        return acc;
    }, []);
}
console.log(alternatingSums([50, 60, 60, 45, 70]));
//# sourceMappingURL=alternatingSums.js.map