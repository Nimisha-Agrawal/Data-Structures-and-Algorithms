function lilysHomework(arr) {
    var swap = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                swap += 1
            }
        }
    }
    console.log(swap)
}

lilysHomework([3, 4, 2, 5, 1])