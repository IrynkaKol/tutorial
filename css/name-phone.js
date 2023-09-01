'use strict'
const names = 'Jacob,William,Solomon,Kate';
const phones = '38001234567,38001112233,380055566377,38099912233';
const arrNames = names.split(',');
 const arrPhones = phones.split(',')
console.log(arrNames);
for (let i = 0; i < arrNames.length; i += 1) {
    console.log(`Імя: ${arrNames[i]}, номер телефону: ${arrPhones[i]}`);
}