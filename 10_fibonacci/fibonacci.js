const fibonacci = function (n) {
    let number = n;

    if (typeof n == 'string') {
        number = Number(n);
    }

    if (number == 0) return 0;
    if (number < 0) return "OOPS";

    let num1 = 1;
    let num2 = 1;
    for (let i = 2; i < number; i++) {
        let tmp = num1;
        num1 = num2;
        num2 += tmp;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
