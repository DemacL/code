     function pairElement(str) {
            let b = str.split('');
            let result = b.map(x => {
                let second;
                switch (x) {
                    case 'A':
                        second = 'T'; break;
                    case 'T':
                        second = 'A'; break;
                    case 'C':
                        second = 'G'; break;
                    case 'G':
                        second = 'C'; break;
                }
                return [x, second];
            })
            return result;
        }
        pairElement("GCG");
        // https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
