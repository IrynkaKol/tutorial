'use strict'

//напиши скрипт, который заменяет регистр каждого элемента в строке на противоположный
// было  JavaScript должно стать jACAsCRIOT

/*const string = 'JavaScript';
const letters = string.split('');
let invertedSrting = '';

console.log(letters);

for (const letter of letters) { //перебрали элементы

    console.log(letter); */


  //  if (letter === letter.toLowerCase()) {
  //      console.log('Єта буква в нижнем регистре - ', letter)
//
  //      invertedSrting +=  letter.toUpperCase();

    //} else {
      //  console.log('эта буква в верхнем регистре - ', letter)
        //invertedSrting += letter.toLowerCase();
     //}
//}





//  с помощью тернарного оператора
// invertedSrting += 
// letter === letter.toLowerCase()
// ? letter.toUpperCase() 
// : letter.toLowerCase();
// }

 // console.log(invertedSrting);



//перенесем в переменную
/*const isEqual = letter === letter.toLowerCase();
invertedSrting += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}

console.log(invertedSrting);*/


// написать функцию смены регистра
const changeCase = function(string) {
  const letters = string.split('');
  let invertedSrting = '';
  
  for (const letter of letters) {
    const isInLowCase = letter === letter.toLowerCase()
    
    invertedSrting += isInLowCase
    ? letter.toUpperCase()
    : letter.toLowerCase();
  }
  
  return invertedSrting
}

console.log(changeCase(`qweRTY`));
console.log(changeCase(`maNGo`));
console.log(changeCase(`AjakS`));