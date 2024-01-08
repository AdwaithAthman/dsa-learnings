function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(left, right) {
    let sortedArr = []
    while(left.length > 0 && right.length > 0){
        if(left[0] <= right[0]){
            sortedArr.push(left.shift())
        }
        else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

console.log(mergeSort([-6, -2, 20, 8, 4]));
