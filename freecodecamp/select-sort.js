  sortArr =[]; // 选择排序每扫描一遍数组，只需要一次真正的交换，而冒泡可能需要很多次。比较的次数是一样的。
for(let i=0;i<100;i++){
	
	sortArr.push(Math.floor(Math.random() * 100 + 1))
}
for(let i=0;i<sortArr.length-1; i++){ 
	let max = Math.max(...sortArr.slice(i));
	let index =sortArr.indexOf(max,i);
	[sortArr[i],sortArr[index]] =[sortArr[index],sortArr[i]]; 

}
