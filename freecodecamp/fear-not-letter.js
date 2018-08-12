     function fearNotLetter(str) {
            let a = 'abcdefghijklmnopqrstuvwxyz';
            a = a.slice(a.indexOf(str[0]), a.indexOf(str[0]) + str.length)
            for (let i = 0; i < a.length; i++) {
                if (str[i] !== a[i]) {
                    return a[i];
                }
            }
        }
        fearNotLetter('abce');
        // https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
