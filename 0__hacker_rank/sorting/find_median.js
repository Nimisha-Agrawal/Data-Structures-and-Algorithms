function findMedian(arr) {
    function merger(left, right){
        var sorted = []
        var i = 0
        var j = 0
        while(i < left.length && j < right.length){
            if(left[i] <= right[j]){
                sorted.push(left[i])
                i++
            }
            else
            {
                sorted.push(right[j])
                j++
            }
        }
        while(i < left.length){
            sorted.push(left[i])
            i++
        }
        while(j < right.length){
            sorted.push(right[j])
            j++
        }
        return sorted
    }

    function divider(array){
        if(array.length == 1){
            return array
        }
        var mid = Math.floor((array.length - 1)/2)
        var left = divider(array.slice(0, mid + 1))
        var right = divider(array.slice(mid + 1))
        return merger(left, right)
    }

    arr = divider(arr)

    var mid_index = Math.floor(arr.length/2)
    return arr[mid_index]
}