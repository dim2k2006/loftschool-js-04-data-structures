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
                n = 0,
                newArray = [];

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
            var sourceLength = source.length,
                i = 0,
                n = 0,
                newArray = [];

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
        },
        slice: function() {
            var source = '',
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

            // Если передано 3 параметра копирует участок массива от begin до end, не включая end
            if (paramsLength === 3) {

                i = arguments[1];
                length = arguments[2];

                if (sourceLength - i - length < 0) {
                    length = sourceLength;
                }

                if (i < 0) {
                    i = (i*(-1) > sourceLength) ? 0 : sourceLength + i;
                    length = sourceLength - i + 1;
                }

                for (i; i < length; i++) {

                    result[n] = source[i];
                    n++

                }

            }

            return result;
        },
        splice: function() {
            var __this = this,
                method = {
                params: arguments,
                source: '',
                sourceLength: '',
                result: '',

                setUpValues: function() {
                    var paramsLength = this.params.length;

                    // Проверим является ли первый параметр массивом
                    if (Array.isArray(this.params[0])) {

                        this.source = this.params[0];
                        this.sourceLength = this.source.length;

                    } else {

                        throw new Error('Первый параметр должен быть массивом');

                    }

                    // Если три параметра - удаляем значения из массива
                    if (paramsLength === 3) {

                        this.deleteValues();

                    }

                    // Если больше трех параметров и третий параметр не равен нулю, то удаляем значения с заменой
                    if (paramsLength > 3 && this.params[2] > 0) {

                        this.deleteValues();
                        this.deleteWithReplace();

                    }



                },
                deleteWithReplace: function() {
                    // cначала вставить элементы после последнего указанного индекса а потом удалить переданные индексы

                    var startIndex = this.params[1],
                        i = 0,
                        n = 3,
                        k = 0,
                        paramsLength = this.params.length - 3,
                        paramsArray = [],
                        tmp = [],
                        tmpLength = 0;

                    paramsArray.length = paramsLength;

                    for (i; i < paramsLength; i++) {

                        paramsArray[i] = this.params[n];
                        n++

                    }

                    tmpLength = this.source.length + paramsLength;

                    if (startIndex !== 0) {

                        for (k; k < tmpLength; k++) {



                        }

                    } else {



                    }



                    console.log(startIndex);
                    console.log(paramsLength);
                    console.log(paramsArray);
                    console.log(tmpLength);
                    console.log(this.source);
                },
                deleteValues: function() {
                    var startIndex = this.params[1],
                        endIndex = startIndex + this.params[2],
                        i = startIndex,
                        n = 0,
                        k = 0,
                        tmp = [],
                        tmpLength = 0,
                        newArray = [];

                    for (i; i < endIndex; i++) {

                        newArray[n] = this.source[i];
                        delete this.source[i];

                        n++;

                    }

                    tmp = __this.filter(this.source, function(value) {
                        return value !== undefined
                    });

                    tmpLength = tmp.length;

                    this.source.length = tmpLength;

                    for (k; k < tmpLength; k++) {
                        this.source[k] = tmp[k];
                    }

                    this.result = newArray;
                },
                init: function() {
                    this.setUpValues();

                    return this.result;
                }
            };

            return method.init();
        }
    };
};

module.exports = getArrayMethods();