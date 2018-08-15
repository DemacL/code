function chunkArrayInGroups(arr, size) {
  // Break it up.


let result = [];
 for(let i=0; i*size<arr.length;i ++){ 
  result.push(arr.slice(size*i ,(i+1)*size));
}
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
