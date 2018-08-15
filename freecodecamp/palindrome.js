function palindrome(str) {
  // Good luck!
let s = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

  return s === s.split('').reverse().join('');
}



palindrome("eye");
