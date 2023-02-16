let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// percorrendo
for (let i = 0; i < days.length; i++) {
    // console.log(days[i]);
}

// sequência de fibonacci
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// operações
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// inserção
numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12, 13);

Array.prototype.insertFirstPosition = function(value) {
    for (let i = numbers.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};

numbers.insertFirstPosition(-1);

numbers.unshift(-2);
numbers.unshift(-4, -3);

// remoção
numbers.pop();

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}

Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
};

Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
};

numbers = numbers.removeFirstPosition();

numbers.shift();

// inserção e remoção em posição específica
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.splice(5, 3);

numbers.splice(5, 0, 5, 6, 7);

numbers.splice(5, 3, 10, 11, 12);

console.log(numbers);