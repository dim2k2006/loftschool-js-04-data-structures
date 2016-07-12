'use strict';

let getArrayMethods = function() {
    return {
        forEach: function(source, callback) {
            var sourceLength = source.length,
                i = 0;

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' не является функцией');
            }

            for (i; i < sourceLength; i++) {

                if (source[i] !== undefined) {
                    callback(source[i], i, source);
                }

            }
        },
        filter: function(source, callback) {
            var sourceLength = source.length,
                i = 0,
                newArray = [];

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' не является функцией');
            }

            for (i; i < sourceLength; i++) {

                if (source[i] !== undefined) {

                    if (callback(source[i], i, source)) {
                        newArray.push(source[i]);
                    }

                }

            }

            return newArray;
        },
        map: function(source, callback) {
            var sourceLength = source.length,
                i = 0,
                newArray = [];

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' не является функцией');
            }

            for (i; i < sourceLength; i++) {

                if (source[i] !== undefined) {

                    newArray.push(callback(source[i], i, source));

                }

            }

            return newArray;
        },
        reduce: function(/*source, callback, initialValue*/) {
            var source = arguments[0],
                callback = arguments[1],
                sourceLength = source.length,
                i = 0,
                previousValue = '',
                result = '';

            if (sourceLength === 0 && !arguments[2]) {
                throw new TypeError('Для пустого массива необходимо указать начальное значение.');
            }

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' не является функцией');
            }

            previousValue = arguments[2] ? arguments[2] : 0;

            if (sourceLength > 1) {

                for (i; i < sourceLength; i++) {

                    if (source[i] !== undefined) {

                        if (i === 0) {

                            result = callback(previousValue, source[i], i, source)

                        } else {

                            result = callback(result, source[i], i, source)

                        }

                    }

                }

            }

            if (sourceLength === 1 && !arguments[2]) {

                result = source[0];

            }

            if (sourceLength === 0 && arguments[2]) {

                result = arguments[2];

            }


            return result;
        }
    };
};

module.exports = getArrayMethods();