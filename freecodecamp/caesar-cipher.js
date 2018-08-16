function rot13(str) { // LBH QVQ VG!
  
  return str.replace(/[A-Z]/g,x=>{return String.fromCharCode(((x.charCodeAt()-65  + 13) % 26) + 65)});
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
