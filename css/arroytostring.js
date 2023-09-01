'use strict'
//из массива сделать строку

const friends = ['Serg', 'Alex', 'Igor', 'Olga'];

const string = friends.join(', '); // возьми массив и сшей мне его с таким разделителм
// join('разделитель')

console.log(string)




// 1 вариант
//let string = '';

//for (const friend of friends) {
  //  string += friend + ',';
//}
//string = string.slice(0, string.length-1);

//console.log(string)