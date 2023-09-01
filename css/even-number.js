'use strict'
function getEvenNumbers(start, end) {
    // Change code below this line
    const evenArray = [];

    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            evenArray.push(i);
        }
    }
 
 
 return evenArray
     // Change code above this line
   }

   console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));

  
