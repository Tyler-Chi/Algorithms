function capLetter(string) {

    if (string.length === 0) {
        return [""];
    }

    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    let output = [];

    let possibles = capLetter(string.slice(1));

    let first = string[0];

    for (var i = 0; i < possibles.length; i++) {

        if (numbers.includes(first)) {
            output.push(first + possibles[i])
        } else {

            output.push(first.toUpperCase() + possibles[i]);
            output.push(first.toLowerCase() + possibles[i]);

        }


    }


    return output;

}

capLetter('3Z4aa')