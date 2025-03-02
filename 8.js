function sumSquares(array) {
    if(array.length === 0) return 0;

    let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += sumSquares(first); 
	} else if (Number.isInteger(first)) {
		total += first**2;
	}

	return total + sumSquares(array);
}

l = [10,[[10],10],[10]] 
console.log(sumSquares(l));