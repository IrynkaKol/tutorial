'use strict'

//найти самый большой элемент в массиве

const numbers = [5, 7, 65, 5, 68, 99];
let lagersNumber = numbers[0];
for (const number of numbers) {
    if (number > lagersNumber) {
        lagersNumber = number;
    }
}
 
console.log('lagersNumber :', lagersNumber);


