const unsorted = [3, 2, 1, 13, 8, 5, 0, 1];

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
    return merge(left, right);


}
function merge(left, right){
    let sortedArray  = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if( left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(unsorted));