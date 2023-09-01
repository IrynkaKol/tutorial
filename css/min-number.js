'use strict'
// Example 7 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код має працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

//const numbers = [101, 78, 12, 76, 5, 11, 9];

//2 варіант
//const min = Math.min(...numbers); // опретор розпилення із масива робе список, бо Math.min не працює з масивами
//console.log(min);

//1 варіант
//let min = numbers[0];
//for (const number of numbers) {
  //  if (number < min) {
    //    min=number;
    //}
//}
//console.log(min);


// напиши функцию поиска наименьшего елемента
const findSmallNumber = function(numbers) {
let smallersNumber = numbers[0];
for (const number of numbers) {
  if (number < smallersNumber) {
    smallersNumber = number;
  }
}
return smallersNumber;
}
console.log(findSmallNumber([3, 8, 12, -2, 5])) //
console.log(findSmallNumber([100, 54, 20, 47, 15])) 
console.log(findSmallNumber([7, 21, 12, 84, 4])) 
 