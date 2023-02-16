numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for...of
for (const n of numbers) {
    // console.log(n % 2 === 0 ? 'even' : 'odd');
}

// @@iterator
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

console.log('----------');

iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
    console.log(n);
}

console.log('----------');

// entries -> retorna um Array[index, value]
let aEntries = numbers.entries(); // iterador de chave/valor
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);

console.log('----------');

aEntries = numbers.entries();
for (const n of aEntries) {
    console.log(n);
}

console.log('----------');

// keys -> retorna as chaves do array como Object { value: index, done: boolean }
// quando não houver mais valores, retornará undefined e done como true
// done indica se acabou ou não
const aKeys = numbers.keys(); // iterador de chaves
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

console.log('----------');

// values -> retorna os valores do array como Object { value: value, done: boolean }
// quando não houver mais valores, retornará undefined e done como true
// done indica se acabou ou não
const aValues = numbers.values(); // iterador de valores
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());