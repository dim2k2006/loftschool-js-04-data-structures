var deepEqual = function(sourceA, sourceB) {
    var equal = {
        result: true,

        find: function(sourceA, sourceB) {
            this.findDirect(sourceA, sourceB);
            this.findReverse(sourceB, sourceA);

            return this.result;
        },
        findDirect: function(sourceA, sourceB) {
            for (key in sourceA) {

                if (sourceA.hasOwnProperty(key) && sourceB.hasOwnProperty(key)) {

                    // Проверим являются ли значения ключей объектами
                    if (sourceA[key] instanceof Object && !(sourceA[key] instanceof Array)) {

                        this.findDirect(sourceA[key],  sourceB[key]);

                    }

                    // Проверим являются ли значения ключей массивами
                    if (Array.isArray(sourceA[key]) && Array.isArray(sourceB[key])) {

                        this.findDirect(sourceA[key],  sourceB[key]);

                    }

                    // Проверим являются ли значения ключей датами
                    if (sourceA[key] instanceof Date && sourceB[key] instanceof Date) {

                        if (sourceA[key].getTime() !== sourceB[key].getTime()) {

                            this.result = false;

                        }

                    }

                    // Проверим равны ли значение ключей между собой
                    if (sourceA[key] !== sourceB[key]) {

                        if (!(sourceA[key] instanceof Date) && !(sourceB[key] instanceof Date)) {

                            console.log('direct not equal');
                            console.log(sourceA[key]);
                            console.log(sourceB[key]);
                            this.result = false;

                        }

                    }

                } else {

                    this.result = false;

                }

            }
        },
        findReverse: function(sourceA, sourceB) {
            for (key in sourceA) {

                if (sourceA.hasOwnProperty(key) && sourceB.hasOwnProperty(key)) {

                    // Проверим являются ли значения ключей объектами
                    if (sourceA[key] instanceof Object && !(sourceA[key] instanceof Array)) {

                        this.findDirect(sourceA[key],  sourceB[key]);

                    }

                    // Проверим являются ли значения ключей массивами
                    if (Array.isArray(sourceA[key]) && Array.isArray(sourceB[key])) {

                        this.findDirect(sourceA[key],  sourceB[key]);

                    }

                    // Проверим являются ли значения ключей датами
                    if (sourceA[key] instanceof Date && sourceB[key] instanceof Date) {

                        if (sourceA[key].getTime() !== sourceB[key].getTime()) {

                            this.result = false;

                        }

                    }

                    // Проверим равны ли значение ключей между собой
                    if (sourceA[key] !== sourceB[key]) {

                        if (!(sourceA[key] instanceof Date) && !(sourceB[key] instanceof Date)) {

                            console.log('reverse not equal');
                            console.log(sourceA[key]);
                            console.log(sourceB[key]);
                            this.result = false;

                        }

                    }

                } else {

                    this.result = false;

                }

            }
        }
    };

    return equal.find(sourceA, sourceB);
};

var objA = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: {
        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
    },
    prop5: 1000,
    prop6: new Date(2016, 2, 10)
};

var objB = {
    prop5: 1000,
    prop3: 'value3',
    prop1: 'value1',
    prop2: 'value2',
    prop6: new Date('2016/03/10'),
    prop4: {
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        },
        subProp1: 'sub value1'
    }
};

console.log(deepEqual(objA, objB));