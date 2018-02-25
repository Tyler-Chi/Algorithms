function replaceWords(string, dictionary) {

    let words = string.split(' ');

    let swapped = true;

    while (swapped) {

        swapped = false;

        for (var i = 0; i < words.length; i++) {
            let word = words[i];

            for (var j = 0; j < dictionary.length; j++) {

                let dictWord = dictionary[j];

                if (word.slice(0, dictWord.length) === dictWord) {

                    if (word !== dictWord) {
                        words[i] = dictWord;
                        swapped = true;
                    }




                }

            }

        }

    }

    return words.join(' ');

}

replaceWords('the cattle was rattled by the battle', ['cat', 'bat', 'rat'])