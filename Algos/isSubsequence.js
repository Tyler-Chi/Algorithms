function isSubsequence(string1, string2) {

    if (string1.length === 0) {
        return true;
    }

    let currentLetter = string1[0];

    if (string2.indexOf(currentLetter) === -1) {
        return false;
    } else {
        return isSubsequence(string1.slice(1), string2.slice(string2.indexOf(currentLetter) + 1))
    }

}

