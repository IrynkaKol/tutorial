'use strict'

// работмаем с коллекцией карточек в  trello
// -* метод splice
// удалить
// добавить
// обновить

const cards = [
    'Карточка-1', 
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
    
];
console.table(cards);
// удаление єлемента по индексу, метод indexOf позволяет найти индекс єлемента в массиве
//  если елемента нету оно вернет -1
//например хотим удалить 3 карточку
//найдем какой индекс у нее

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);

// console.log(index);
// cards.splice(index, 1);  // 1 - количество элементов, которые нужно удалить.  console.log(cards.splice(index, 1)); он возвращает масcив удаленных эдементов

// console.table(cards);



// добавление по индексу
// например хотим вставить карточку-6

// const cardToInsert = 'Карточка-6';
// const index = 3

// cards.splice(index, 0, cardToInsert); // (номер индекса, 0 (ничего не удаляй), что добавить)
// console.table(cards);



// обновдение по индексу, если хотим заменить

const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, 'обновленная карточка-4'); // на этом index замени то что есть на строку ''
console.table(cards);
