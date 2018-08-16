  sortArr =[];
for(let i=0;i<100;i++){
	
	sortArr.push(Math.floor(Math.random() * 100 + 1))
}
for(let i=0;i<sortArr.length-1; i++){ 
	let max = Math.max(...sortArr.slice(i));
	let index =sortArr.indexOf(max,i);
	[sortArr[i],sortArr[index]] =[sortArr[index],sortArr[i]]; 

}
