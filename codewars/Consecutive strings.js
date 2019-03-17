

function longestConsec(strarr, k) {
    console.log(strarr, k);
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return ''
    }

    return strarr
        .map((x, index) => strarr.slice(index, index + 2))
        .map(x => x.join(''))
        .sort((x, y) => y.length - x.length)[0]
}
