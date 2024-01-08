const binarySearch = (arr,target) => {
    let s = 0
    let e = arr.length - 1
    while(s<e){
        let mid = Math.floor((s+e)/2);
        if(arr[mid] === target ){
            return mid;
        }
        if(arr[mid] > target){
            e = mid - 1
        }
        else [
            s = mid + 1
        ]
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5], 4))