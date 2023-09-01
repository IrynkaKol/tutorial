'use strict'
//Example 5 - Масиви та рядки
// Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього. Результуючий рядок не повинен починатися або закінчуватися пробілом. Скрипт повинен працювати для будь-якого рядка.
// методи splice pop shift
const string = 'Welcome to the future';
const words = string.split(' ') // перетворюємо строку на масив


//варіант 1
//words.shift();   // видаляємо перший елемент у масиві (повертає рядок що саме вирізав)
//console.log(words);
//words.pop();   // видаляємо останній елемент у масиві
//console.log(words);
//const str = words.join(' ');  // робимо із масиву строку, сшиваємо слова по пробілу в даному випадку
//console.log(str);

//варіант 2
//console.log(words);
//console.log(words.slice(1,3).join(' ')); // але тут ми привязані до індексів

// варіант 3
console.log(words);
words.splice(0,1);  //,беремо перший індекс 0, та видаляємо 1 елемент
console.log(words);
words.splice(-1,1); // беремо останній інлекс та видаляємо 1 елемент
console.log(words);
const str = words.join(' ');
console.log(str);