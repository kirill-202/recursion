function all(array, callback) {
    if (array.length === 0) {
        return true;
    }
    if (callback(array[0])) {
        array.shift();
        return all(array, callback);
    } else {
        return false;
    }

}

var allAreLessThanSeven = all([1,2,3], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false