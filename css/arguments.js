'use strict'
// псевдомассив arguments  
// когда нужно написать функцию, в которй не знаешь сколько будет аргументов заранее
// есть встроенная локальная перемненая

/*1 вариант
const fn = function() {
console.log(arguments)
const args = Array.from(arguments)  /// щоб із псевдомасива зробити масив

for (const arg of arguments) {
    console.log(arg); // перебирать псевдомассив можна, більшість методів до псевдомасиву не застосовується

}


}*/

// 2 вариант більш сучасний
const fn = function(a, b, c, ...args) { /// ... робе масив, з a, b, c якщо потрібно не все у масив
    console.log(`${a} ${b} ${c}`)
    console.log(args)
}

fn(1, 2, 3)
fn(1, 2, 3, 4, 5)
fn(1, 2, 3, 4, 5, 6, 7)


// 1 занятие репети по функциям 1:56 про rest еще задачи