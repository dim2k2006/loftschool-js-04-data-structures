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
        splice: function() {
            var __that = this,
                method = {
                params: arguments,
                source: '',
                sourceLength: '',

                setUpValues: function() {
                    var paramsLength = this.params.length;

                    // Проверим является ли первый параметр массивом
                    if (Array.isArray(this.params[0])) {

                        this.source = this.params[0];
                        this.sourceLength = this.source.length;

                    } else {

                        throw new Error('Первый параметр должен быть массивом');

                    }

                    // Если 3 параметра - удаляем значения из массива
                    if (paramsLength === 3) {

                        this.deleteValues();

                    }




                },
                deleteValues: function() {
                    console.log('удаление');
                    var startIndex = this.params[1],
                        endIndex = this.params[2],
                        i = startIndex;

                    // Удаляем элементы
                    for (i; i < endIndex; i++) {

                        delete this.source[i];

                    }

                    // Удаляем пустые элементы передвигая остальные элементы влево на величину пустых элементов
                    this.deleteEmptyValues(0);
                    // this.source.length = this.source.length - 1
                },
                deleteEmptyValues: function(index) {
                    var current = '',
                        next = '';

                    if (index < this.source.length) {

                        current = this.source[index];
                        next = this.source[index + 1];

                        if (current === undefined) {

                            this.source[index] = next;
                            this.source.length = this.source.length - 1;

                        }

                        this.deleteEmptyValues(++index);

                    }
                },
                init: function() {
                    this.setUpValues();
                }
            };

            method.init();
        }
    };
};

module.exports = getArrayMethods();