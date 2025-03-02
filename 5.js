function productOfArray(array, total = 1) {
    if (array.length === 0) {
        return 0;
    }
    total = total * array[0];
    if (array.length === 1) {
        return total;
    }

    array.shift();
    return productOfArray(array, total);
}

console.log(productOfArray([2,3,4]));