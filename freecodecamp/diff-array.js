function diffArray(arr1, arr2) {
   
  // Same, same; but different.
  return [...new Set([...arr1, ...arr2])].filter(x=>!(arr1.indexOf(x) >=0  && arr2.indexOf(x) >=0) );
}
