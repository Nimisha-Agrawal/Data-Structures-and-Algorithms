function activityNotifications(expenditure, d) {
    var notification_count = 0
    for(var i = d; i < expenditure.length; i++){
        var start_index = i - d
        var trailing_days_exp = expenditure.slice(start_index, i)
        trailing_days_exp = divide(trailing_days_exp)
        if((d-1)%2 == 0){
            var upper = Math.ceil((d-1)/2)
            var lower = Math.floor((d-1)/2)
            var median = (trailing_days_exp[upper] + trailing_days_exp[lower])/2
        }
        else{
            var mid = (d-1)/2
            var median = (trailing_days_exp[mid])
        }
        if(expenditure[d] >= (2*median)){
            notification_count++
        }
    }
    return notification_count

    function divide(array){
        if(array.length == 1){
            return array
        }
        var mid = Math.floor((array.length -1)/2)
        var left = divide(array.slice(0, mid + 1))
        var right = divide(array.slice(mid + 1, array.length))
        return merger(left, right)
    }

    function merger(left, right){
        var sorted = []
        var i = 0
        var j = 0
        while(i < left.length && j < right.length){
            if(left[i] <= right[j]){
                sorted.push(left[i])
                i++
            }
            else{
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
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))