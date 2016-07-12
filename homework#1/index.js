'use strict';

let getArrayMethods = function() {
    return {
        forEach: function(source, callback) {
            var sourceLength = source.length,
                i = 0;

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
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
                throw new TypeError(callback + ' is not a function');
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
                throw new TypeError(callback + ' is not a function');
            }

            for (i; i < sourceLength; i++) {

                if (source[i] !== undefined) {

                    newArray.push(callback(source[i], i, source));

                }

            }

            return newArray;
        },
        reduce: function() {
            
        }
    };
};

module.exports = getArrayMethods();