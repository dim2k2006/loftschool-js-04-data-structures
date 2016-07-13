var arrayMethods = require('./index');

var log = function(element) {
    console.log(element);
};

var biggerThan = function(value) {
    return value > 4;
};

var square = function(value) {
    return value*value;
};

var sum = function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
};

var array = [1, 2, 3, 4, 5, 6];
// var array = ["Я", "сейчас", "изучаю", "JavaScript"];

// console.log(arrayMethods.forEach(array, log));
// console.log(arrayMethods.filter(array, biggerThan));
// console.log(arrayMethods.map(array, square));
console.log(arrayMethods.reduce(array, sum));
// console.log(arrayMethods.slice(array, -2, 3));