function dropElements(arr, func) {
  let beginIndex = -1;
  arr.filter((x) => {

      if (func(x)) {
          if (beginIndex === -1) {
              beginIndex = arr.indexOf(x);
          }
      }
  })
  beginIndex = beginIndex === -1 ? arr.length : beginIndex;
  return arr.slice(beginIndex);
}

dropElements([1, 2, 3], function(n) {return n < 3; });
