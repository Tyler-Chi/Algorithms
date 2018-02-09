//given a number, determine if you can square two integers
//and add up to that number

function squareRoot(number) {

    let bound = Math.sqrt(number);

    for (var i = 1; i < bound; i++) {

        if (i * i > number) {
            return false;
        }

        for (var j = 1; j < bound; j++) {

            if (i * i + j * j === number) {
                return [i, j]
            }

            if (i * i + j * j > number) {
                break;
            }

        }

    }
    return false;
}

squareRoot(5)