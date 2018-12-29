``` javascript
function hw2(s){
	return s === s.split('').reverse().join('')
}
function hw(s){
	console.log(s);
	if(s.length<=1) return true;

	if(s[0] === s[s.length-1]){
		return hw(s.substring(1,s.length-1));
	}else{
		return false;	
	}

} 
```
