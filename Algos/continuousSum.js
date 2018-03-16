function continuous(array, target) {

    for (var i = 0; i < array.length - 1; i++) {

        let currentArray = [];
        let possible = 0;

        for (var j = i; j < array.length; j++) {

            currentArray.push(array[j]);
            possible += array[j];

            if (possible % target === 0 && currentArray.length > 1) {

                return currentArray;

            }

        }

    }

    return false;

}

continuous([1, 2, 3, 4, 5], 3)