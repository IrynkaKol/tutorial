'use strict'
// Делаем slug в URL из названия строки (например на dev.to)
// заголовок статьи состоит только из букв и пробелов
// нормализуем строку
// разбиваем по словам
// сшиваем в строку с разделителями

// должно получится top-10-benefits-of-react-framework



// 1 вариант
// const title = 'Top 10 benefits of React framework';

// привели к нижнему регистру
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);


// разбили с пробелом
// const words = normalizedTitle.split(' ')
// console.log(words);

// сшили массив с тире
// const slug = words.join('-');

//console.log(slug);


// вариант 2 с цепочками вызова в одну строку
/*const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);


const words = normalizedTitle.split(' ')
console.log(words);

const slug = words.join('-');

const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);
*/

//  а теперь нужно написать функцию slug

const slugify = function (string) {
    
    /*const normalizedTitle = string.toLowerCase();
    const words = normalizedTitle.split(' ')
        const slug = words.join('-'); */

    return string.toLowerCase().split(' ').join('-');  // c цепочкой вызова, бекченджем
}

console.log(slugify('Top 10 benefits of React framework'))
