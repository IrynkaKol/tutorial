'use strict'
function includes(array, value) {
    // Change code below this line
  let isIncludes = false;
    for (const element of array) {
      if (element === value) {
        return isIncludes === true;
      }
  }
    return isIncludes;
  }




  // Change code below this line
function findMatches(firstArgs, ...args) {
  const matches = []; // Don't change this line
for (const arg of args) {
  if (firstArgs === arg) {
    
matches.push(arg);
  }
}
  // Change code above this line
  return matches;
}
