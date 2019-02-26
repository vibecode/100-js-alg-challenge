function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, num) { return acc + num; });
}
console.log(add(1, 2));
console.log(add(3, 2));
console.log(add(1, 2, 3, 4, 5));
console.log(add(2, 3));
//# sourceMappingURL=add.js.map