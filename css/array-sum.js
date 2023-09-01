'use strict'
 // скрипт, который считает сумму элементов двух массивов

 const array1 = [5, 10, 15, 20]
 const array2 = [10, 20, 30]

 let total = 0;

 //  1 вариант самый плохой
 // for (let i=0; i < array1.length; i +=1 ){
 // total += array1[i];
// }

// for (let i=0; i < array2.length; i +=1 ){
 //   total += array2[i];
  //  }

  //  console.log(total);


   // 2 вариант concat
   // сами массивы при нем не меняются, создается новый

   const numbers = array1.concat(array2); // в concat через , можно передать сколько угодно массивов

   for (const number of numbers) {
    total += number
   }
   console.log(total);
