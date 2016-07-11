var getArrayMethods = function() {
    return arrayMethods = {
        forEach: function(source, callback) {
            var sourceLength = source.length,
                i = 0;

            for (i; i < sourceLength; i++) {
                callback(source[i], i, source);
            }
        }
    }
};

var array = [1, 2, 3];

var arrayMethods = getArrayMethods();

console.log(arrayMethods.forEach(array, log));

function log(element, index, array) {
    console.log(element);
}