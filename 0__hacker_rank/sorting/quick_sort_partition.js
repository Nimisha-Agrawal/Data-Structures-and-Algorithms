function quickSort(arr) {
    var pivot = arr[0]
    var i = 0
    var j = arr.length -1

    while(i < j){
        while(arr[j] > pivot){
            j--
        }
        while(arr[i] <= pivot){
            i++
        }
        if(i < j){
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[0], arr[j]] = [arr[j], arr[0]]
    return arr
}

console.log(quickSort([3, 2, 4, 5, 7]))