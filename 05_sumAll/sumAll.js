const sumAll = function (x, y) {
    if (x < 0 || y < 0) return Error;
    if (typeof (x) != typeof (1) ||
        typeof (y) != typeof (1))
        return Error;

    let sum = 0;
    if (x > y) return sum;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
