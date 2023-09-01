'use strict'
// Example 6 - Масиви та рядки
// Напиши скрипт, який «розвертає» рядок (зворотній порядок літер) і виводить його в консоль.
// Методи split reverse join

const string = 'Welcome to the future';
//const arr = string.split(''); // розбиваємо струку на масив по літерам, так как у завданні потрібно зворотний порядок не слів, а літер
//console.log(arr);
//const rev = arr.reverse();
//console.log(arr);
//const result = rev.join('');
//console.log(result);

// скорочений варіант
const result = string.split('').reverse().join(''); //(приклад ченінгу - ланцюжскового виразу) викликаєм на стрінг split, на отриманий результат робемо revers, на отриманий результат робемо сшивання join
console.log(result);

