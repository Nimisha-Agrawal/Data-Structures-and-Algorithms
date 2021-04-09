function combinations(){
    let combination = []
    return function subsets_C(array, start_index, sub_array, C){
        if(start_index == array.length){
            if(sub_array.length == C){
                combination.push([...sub_array])
            }
        } 
        else{
            sub_array.push(array[start_index])
            subsets_C(array, start_index+1, sub_array, C)
            sub_array.pop()
            subsets_C(array, start_index +1, sub_array, C)
            return combination
        }
    }
}


console.log(combinations()([1,2,3,4,5], 0, [], 3, []))