const removeFromArray = function (arr, ...items) {
    if (arr.length <= 0) return;

    let reducedArray = [];

    arr.forEach(element => {
        if (!items.includes(element)) {
            reducedArray.push(element);
        }
    });

    return reducedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
