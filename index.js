function findMatching(array1, word1) {
    return array1.filter(function (name1) {
        return name1.toUpperCase() === word1.toUpperCase();
    });
}

function fuzzyMatch(array2, word2) {
    return array2.filter(function (name2){
        return word2 === name2.slice(0, word2.length);
    });
}

function matchName(array3, word3) {
    return array3.filter(function (name3) {
        return word3 === name3.name;
    });
}
