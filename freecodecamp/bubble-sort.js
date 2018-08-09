a = [];
for (let i = 0; i < 10; i++) { a.push(Math.ceil(Math.random() * 100 + 1)) };
for (let i = 0; i < a.length - 1; i++) {
	for (let j = i + 1; j < a.length; j++) {
		if (a[i] > a[j]) {
			[a[i], a[j]] = [a[j], a[i]]
		}
	} 
}
console.log(a)
