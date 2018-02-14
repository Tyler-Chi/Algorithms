function wordBreak(string, list) {

    console.log(string)

    if (string.length === 0) {

        return true;
    }

    for (var i = 0; i < list.length; i++) {
        let word = list[i];

        if (string.slice(0, word.length) === word) {

            if (wordBreak(string.slice(word.length), list)) {
                return true;
            }

        }


    }

    return false

}

wordBreak('leetcode123', ['leet', 'code'])