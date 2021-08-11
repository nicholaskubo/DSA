const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const midIndex = Math.floor(arr.length / 2 )

    const leftArr = arr.slice(0, midIndex)
    const rightArr = arr.slice(midIndex, arr.length )

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge (leftArr, rightArr) {
    let resultArray = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
        resultArray.push(leftArr[leftIndex]);
        leftIndex += 1;
    } else {
        resultArray.push(rightArr[rightIndex]);
        rightIndex += 1;
    }
    console.log(leftArr)
    console.log(rightArr)
    return resultArray.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
 }
}   

let arr = [12, 3, 16, 6, 5, 1];

console.log(mergeSort(arr))