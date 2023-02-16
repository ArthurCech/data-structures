// concat
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];

let numbers = negativeNumbers.concat(zero, positiveNumbers);

// iteração
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const isEven = x => x % 2 === 0;

// every -> verifica se todos os elementos do array satisfazem a uma condição
let bool = numbers.every(isEven); // false

// some -> verifica se algum elemento do array satisfaz a condição
bool = numbers.some(isEven); // true

// forEach
numbers.forEach(x => console.log(x % 2 === 0));

// map
numbersMapped = numbers.map(isEven);

// filter
numbersFiltered = numbers.filter(isEven);

// reduce
const sum = numbers.reduce((previous, current) => previous + current);

// join
console.log(numbers.join());

// indexOf
console.log(numbers.indexOf(15));

// reverse
console.log(numbers.reverse());

// slice
console.log(numbers.reverse().slice(5, 8));

// sort
console.log(numbers.sort((x, y) => {
    // if (x < y) return 1;
    // if (x > y) return -1;
    // return 0;

    return x + y; // sempre retorna positivo
}));

/*
    Positivo -> Y assume posição de X
    Negativo -> X assume posição de Y
    0 -> posições mantidas
*/

// toString
const toString = numbers.toString();
console.log(toString);

// valueOf
const valueOf = numbers.valueOf();
console.log(valueOf);