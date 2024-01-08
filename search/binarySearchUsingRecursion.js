const binarySearch = (arr, target, s, e) => {
    if(s > e ){
        return -1
    }
    const mid = Math.floor((s+e)/2);
    if(arr[mid] === target){
        return mid
    }
    else if (arr[mid] > target){
        return binarySearch(arr, target, s, mid-1)
    }
    else {
        return binarySearch(arr, target, mid+1, e)
    }
}

const arr = [1,2,3,4,5]
console.log(binarySearch(arr, 4, 0, arr.length - 1))
