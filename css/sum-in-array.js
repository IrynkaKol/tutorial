'use strict'

//посчитать сумму элементов в масисиве

const calculateTotalPrice = function (items) {
console.log('items внутри функции: ', items);

let total = 0;

for (const item of items) {
    total += item;
}

return total;
}

console.log(calculateTotalPrice([1, 2, 3]));
console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([100, 200, 300]));



