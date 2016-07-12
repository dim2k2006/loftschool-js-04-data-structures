var arrayMethods = require('./index');

var log = function(element, index, array) {
    console.log(element);
};

var biggerThan = function(value) {
    return value > 4;
};

var array = [1, 2, 3, 4, 5, 6];

console.log(arrayMethods.forEach(array, log));
console.log(arrayMethods.filter(array, biggerThan));