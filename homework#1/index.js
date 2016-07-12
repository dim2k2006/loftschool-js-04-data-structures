'use strict';

let getArrayMethods = function() {
    return {
        forEach: function(source, callback) {
            var sourceLength = source.length,
                i = 0;

            for (i; i < sourceLength; i++) {

                if (source[i] !== undefined) {
                    callback(source[i], i, source);
                }

            }
        }
    };
};

module.exports = getArrayMethods();