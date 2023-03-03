//------------------------divisible by 3,4,5 in the array---------

let x = [4,7,10,20,70,60,43,120,80];
let y = [];
let z = 0;
for(i=0;i<x.length;i++){
	if((x[i]%3==0) && (x[i]%4==0) && (x[i]%5==0)){
		y[z]=x[i];
		z++
	}
}
console.log(y);