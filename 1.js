function sumRange(numbers, total = 0) {

    if (numbers === 0) {
        return total;
    }
    total += numbers;
    return sumRange(numbers-1, total);
}

console.log(sumRange(4));