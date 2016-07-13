'use strict';

let getArrayMethods = function() {
    return {
        forEach: function(source, callback) {
            let sourceLength = '',
                i = 0;

            // Проверим является ли первый параметр массивом
            if (Array.isArray(source)) {

                sourceLength = source.length;

            } else {

                throw new Error('Первый параметр должен быть массивом');

            }

            // Проверим является ли второй параметр функцией
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
            let sourceLength = '',
                i = 0,
                n = 0,
                newArray = [];

            // Проверим является ли первый параметр массивом
            if (Array.isArray(source)) {

                sourceLength = source.length;

            } else {

                throw new Error('Первый параметр должен быть массивом');

            }

            // Проверим является ли второй параметр функцией
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' не является функцией');
            }

            for (i; i < sourceLength; i++) {

                if (source[i] !== undefined) {

                    if (callback(source[i], i, source)) {

                        newArray[n] = source[i];
                        n++;
                        
                    }

                }

            }

            return newArray;
        },
        map: function(source, callback) {
            let sourceLength = '',
                i = 0,
                n = 0,
                newArray = [];

            // Проверим является ли первый параметр массивом
            if (Array.isArray(source)) {

                sourceLength = source.length;

            } else {

                throw new Error('Первый параметр должен быть массивом');

            }

            // Проверим является ли второй параметр функцией
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' не является функцией');
            }

            for (i; i < sourceLength; i++) {

                if (source[i] !== undefined) {

                    newArray[n] = callback(source[i], i, source);
                    n++;

                }

            }

            return newArray;
        },
        reduce: function() {
            let source = '',
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
        },
        slice: function() {
            let source = '',
                sourceLength = 0,
                paramsLength = 0,
                i = 0,
                n = 0,
                length = 0,
                result = [];

            // Проверим является ли первый параметр массивом
            if (Array.isArray(arguments[0])) {

                source = arguments[0];
                sourceLength = source.length;

            } else {

                throw new Error('Первый параметр должен быть массивом');

            }

            paramsLength = arguments.length;

            // Если вообще не указать аргументов – скопируется весь массив
            if (paramsLength === 1) {

                result = source;

            }

            // Если не указать end – копирование будет до конца массива (можно использовать отрицательные индексы, они отсчитываются с конца)
            if (paramsLength === 2) {

                i = arguments[1];

                if (i < 0) {
                    i = (i*(-1) > sourceLength) ? 0 : sourceLength + i;
                }

                for (i; i < sourceLength; i++) {

                    result[n] = source[i];
                    n++

                }

            }

            // Если передано 3 параметра и end положительный, копирует участок массива от begin до end, не включая end
            if (paramsLength === 3 && arguments[1] >= 0) {

                i = arguments[1];
                length = arguments[2];

                for (i; i < length; i++) {

                    result[n] = source[i];
                    n++

                }

            }

            // Если передано 3 параметра и end отрицательный, копирует участок массива от begin до end, не включая end
            if (paramsLength === 3 && arguments[1] < 0) {

                i = arguments[1];

                i = (i*(-1) > sourceLength) ? 0 : sourceLength + i;
                length = (arguments[2] > sourceLength) ? sourceLength : arguments[2];

                for (i; i < length; i++) {

                    result[n] = source[i];
                    n++

                }

            }

            return result;
        }
    };
};

module.exports = getArrayMethods();