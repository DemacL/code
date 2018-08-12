function uniteUnique(...a) {

  let b = a.reduce((x, y) => {
                y.forEach(item => {
                    if (x.indexOf(item) < 0)
                        x.push(item)
                })
                return x;
            })
            return b;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
