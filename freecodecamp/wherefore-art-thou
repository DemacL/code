      function whatIsInAName(collection, source) { 
            var arr = []; 
            arr = collection.filter(x => {
                let bingo = true;
                for (let y in source) {
                    if (source.hasOwnProperty(y)) {
                        if (x.hasOwnProperty(y) && source[y] === x[y]) {
                            if (bingo) {
                                bingo = true; // bingo为false说明已经有些目标属性不在源对象中，不再更新命中为true
                            }
                        } else {
                            bingo = false;
                        }
                    }
                }
                return bingo;
            }); 
            return arr;
        }

        whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
   
