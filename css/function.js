

function calculateAvarege(...args) {
  console.log(args)

}

calculateAvarege(1, 2, 3)
/*
const obj = {
  name: "user",
  sayHello(){
    return'Hello';
  }
} 

const user = Object.create(obj);
user.age = 11;
//console.log(user);
//console.log(user.sayHello());
const admin = Object.create(user);
console.log(admin)
console.log(admin.sayHello())*/
/*class Storage {
  constructor (items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  
  addItem(newItem) {
    return this.items.push(newItem);
    }
    
    removeItem(itemToRemove) {
      return this.items = this.items.filter(item => item !== itemToRemove);
        }
}
  


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

/*
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


/*
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(this.pizza);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);
    
    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
  
};


console.log(pizzaPalace.order('Smoked'))
/*
const getNamesSortedByFriendCount = (users, gender) => {
  
  console.log(
        [...users]
        .filter((user) => user.gender === gender)
        .reduce((previousValue, user) => {
          return previousValue + user.balance
        }, 0)
        
      
        
        
  )
     };

     
     

getNamesSortedByFriendCount(
  [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ], 'female'
)
/*

const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const inAscendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name));

console.log(inAscendingScoreOrder)

console.log(inDescendingScoreOrder)
console.log(inAlphabeticalOrder)
//console.log(balance)
//console.log(allFriends)

// Change code above this line


/*function greet(name) {
  return `Добро пожаловать ${name}.`;
}

// Вызываем функцию greet и выводим результат в консоль
console.log(greet("Манго")); // Добро пожаловать Манго.

// Выводим функцию greet в консоль не вызывая её
console.log(greet); 
*/

/*function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
}
//console.log(greet("Манго"));


function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);
*/

// Change code below this line Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
/* const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
const total = players.map(player => player.playtime / player.gamesPlayed);

const totalAveragePlaytimePerGame = total.reduce((previousValue, player) => 
  { return previousValue + player
    
  }, 0);

  console.log(total)
  console.log(totalAveragePlaytimePerGame)*/

/*

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet) => {
  return planet.length;
});

console.log(planets);
console.log(planetsLengths)




/*
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    for (let i = 0; i < this.pizzas.lengtt; i += 1) {
      if (pizza[i] === this.order.pizzaName) {
        return onSuccess(pizzaName)
      }
    return onError(pizzaName)
    }
        
},
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

/*
function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";
    // Change code below this line
    return {
        category,
        priority, 
        ...data,
        completed,
      }
    // Change code above this line
    
  }

  makeTask()*/



/*
  const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    removePotion(potionName) {
      // Change code below this line
      const { potions } = this; // лежит ссылка на этот массив
  
      for (let i = 0; i < potions.length; i += 1) {
    const { name } = potions[i];
    
    if (name === potionName) {
      potions.splice(i, 1);
    }
  }
     // Change code above this line
    },
  };
  */