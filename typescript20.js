var num20 = [1, 2, 3, 4, 5, 6, 7];
var array = ["Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday", "Sunday"];
var anyName = array.reduce(function (accumulator, currentValue, index, array) {
    if (!accumulator[currentValue]) {
        accumulator[currentValue] = num20[index];
    }
    return accumulator;
}, {});
console.log(anyName);
console.log(typeof (anyName));
