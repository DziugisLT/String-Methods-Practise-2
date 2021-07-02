'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const events = flights.split('+');
// console.log(events);

const getCountry = (str) => str.slice(0, 3).toUpperCase();

for (const event of events) {
  const eventData = event.slice(1).replaceAll('_', ' ').split(';');
  // console.log(eventData);
  const [eventName, from, to, time] = eventData;
  const announcement = `${
    eventName.includes('Delayed') ? '🔴 ' + eventName : eventName
  } from ${getCountry(from)} to ${getCountry(to)} (${time.replace(':', 'h')})`;
  console.log(announcement.padStart(44, ' '));
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (startingIndex, mainIndex) {
    return [this.starterMenu[startingIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    startingIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[startingIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const arr = text.split('\n');
  let i = 1;
  const emoji = '✅';
  for (const word of arr) {
    const wordA = word.trim().toLowerCase();
    const wordB =
      wordA.slice(0, [wordA.indexOf('_')]) +
      wordA
        .slice(wordA.indexOf('_') + 1, wordA.indexOf('_') + 2)
        .toUpperCase() +
      wordA.slice(wordA.indexOf('_') + 2);
    console.log(wordB.padEnd(20, ' ') + emoji.repeat(i));
    i++;
  }
}); */

/* const airline = 'TAP Air Portugal';

// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
   if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    console.log(`It's a middle seat`);
  } 

  seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
    ? console.log(`It's a middle seat`)
    : console.log(`It's not a middle seat`);
};

checkMiddleSeat('11B');
checkMiddleSeat('11E');
checkMiddleSeat('11F');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const fixPassenger = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};

fixPassenger('DžIUgaS');

const email = 'hello@jonas.io';
const loginEmail = '    Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const priceGB = '288,97p';
const priceUS = priceGB.replace(',', '.').replace('p', '$');

console.log(priceUS);

const announcement =
  'All passengers come to borading door 23. Boearding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('new');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('no');
  } else {
    console.log('have a nice flight');
  }
}; */

/* console.log('a+very+nice+string'.split('+'));
console.log(['Mr.', 'Džiugas', 'B.'].join(' '));

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas smenfuindsn');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4657948194764651));
console.log(maskCreditCard('41546696419198496')); */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// // console.log(...menu.entries());

// console.log('----FINITO----');

// console.log(3 || 'Jonas');

// restaurant.orderPizza('a', 'b', 'c');

// const ingredients = [
//   prompt('lets make pasta! Ingredient 1?'),
//   prompt('lets make pasta! Ingredient 2?'),
//   prompt('lets make pasta! Ingredient 3?'),
// ];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , rissoto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, rissoto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 3, 4, 5, 1, 2, 3, 5);

// const x = [23, 5, 7];
// add(...x);

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, founder: 'Guiseppe' };

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'Jonas';
// const letter = [...str, ' ', 'S.'];

// console.log(...str);

// console.log(``);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole, 21',
//   mainIndex: 2,
//   startingIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'via del sole, 21',
//   startingIndex: 1,
// });

// const { name, categories, openingHours } = restaurant;

// /* console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags); */

// const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // let a = 11;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };

// // ({ a, b } = obj);
// // console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/* const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];

// const [first, , arr] = nested;

// console.log(first, arr);

const [i, , [j, k]] = nested;

console.log(i, j, k); */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...number) {
    for (let i = 0; i < number.length; i++) {
      console.log(number[i]);
    }
    console.log(number.length);
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟡 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟡 Yellow card'],
]);

/* const events = [...new Set([...gameEvents.values()])];

console.log(events);

gameEvents.delete(64);

console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / [...gameEvents].length} minutes`
);

for (const [time, event] of gameEvents) {
  console.log(
    time <= 45
      ? `[FIRST HALF]${time}: ${event}`
      : `[SECOND HALF]${time}: ${event}`
  );
} */

/* const question = new Map([
  ['question', 'What is why?'],
  [1, 'Yes'],
  [2, 'No'],
  [3, 'Maybe'],
  ['correct', 3],
  [true, 'Yay!!'],
  [false, 'Nooo!'],
]);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('your answer'));
// console.log(answer);
//
// console.log(question.get(answer === question.get('correct')));

console.time();
console.log([...question]);
console.timeLog();
 */
// for (const [i, name] of Object.entries(game.scored)) {
//   console.log(`Goal ${Number(i) + 1}: ${name}`);
// }

// let sum = 0;

// for (const odd of Object.values(game.odds)) {
//   sum += odd;
// }

// // console.log(sum / 3);

// // console.log(Object.entries(game.odds));

// for (const [name, odd] of Object.entries(game.odds)) {
//   console.log(`Odd of ${'victory ' + (game[name] || 'draw')}: ${odd}`);
// }

// const scorers = {};

// for (const name of game.scored) {
//   scorers[name] ? scorers[name]++ : (scorers[name] = 1);
// }

// console.log(scorers);

/* const [players1, players2] = game.players;

// console.log(players1, players2);

const [gk, ...fieldPlayers] = [...players1];

// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];

// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);

const { team1, x: draw, team2 } = game.odds; */

// console.log(team1, draw, team2);

// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...game.scored);

// console.log(team1 < team2 && game.team1);
