'use strict'
/* Напиши функцию поиска логин
если логина нет, то вывести "Пользователь [логин] не найден
если логин есть, то вывести "Пользователь [логин] найден*/

const logins = ['gfdgd', 'tre543', 'fgd453y', 'fdgdf4'];

/*const loginToFind = 'fdgdf4';

const message = logins.includes(loginToFind)
? `Пользователь ${loginToFind} найден.`
: `Пользователь ${loginToFind} не найден.`;

console.log(message);*/

// 1 вараинт
//const findLogin = function(allLogins,loginToFind)  // в параментр записівается значение аргумента allLogins = logins
// 1 аргумент равен 1 параметру, 2 аргумент = 2 параметру
//{
// console.log(logins);
/*for (const login of allLogins) {
    if (login === loginToFind) {
        return`Пользователь ${loginToFind} найден.`
    }
}
return `Пользователь ${loginToFind} не найден.`;
};

console.log(findLogin(logins, 'hjkh657'));
console.log(findLogin(logins, 'fgd453y'));
console.log(findLogin(logins, 'hjkg78'));
console.log(findLogin(logins, 'fdgdf4'));*/


// 2 вариант
const findLogin = function(allLogins,loginToFind) 
{
return allLogins.includes(loginToFind) // возвращает true или false
/*  false ? 1 : 2 // 2 
    true ? 1: 2 // 1    */
? `Пользователь ${loginToFind} найден.`
: `Пользователь ${loginToFind} не найден.`;
};
console.log(findLogin(logins, 'hjkh657'));
console.log(findLogin(logins, 'fgd453y'));
console.log(findLogin(logins, 'hjkg78'));
console.log(findLogin(logins, 'fdgdf4'));