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
            var source = '',
                sourceLength = 0,
                callback = '',
                initialValue = false,
                i = 0,
                result = '';

            // Проверим является ли первый параметр массивом
            if (Array.isArray(arguments[0])) {

                source = arguments[0];
                sourceLength = source.length;

            } else {

                throw new Error('Первый параметр должен быть массивом');

            }

            // Проверим является ли второй параметр функцией
            if (typeof arguments[1] === 'function') {

                callback = arguments[1];

            } else {

                throw new TypeError(callback + ' не является функцией');

            }

            // Проверим установлено ли начальное значение
            if (arguments[2]) {

                initialValue = arguments[2];

            }

            // Проверим установлено ли начальное значение если массив пустой
            if (sourceLength === 0 && !initialValue) {

                throw new TypeError('Для пустого массива необходимо указать начальное значение.');

            }

            // Если начальное значение не установлено, то начальное значение - первый элемент массива
            if (initialValue) {

                result = initialValue;

            } else {

                result = source[0];
                i = i + 1;

            }


            for (i; i < sourceLength; i++) {

                result = callback(result, source[i], i, source);

            }

            return result;
        }
    };
};

module.exports = getArrayMethods();