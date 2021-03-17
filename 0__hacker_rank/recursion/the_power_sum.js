function powerSum(X, N) {
    var limit = Math.ceil(X **(1/N))
    var output = [0]
    var count = 0
    for(var i = 1; i <= limit; i++){
        output.forEach((item, index) => {
            if(item + (i**N) <= X){
                output.push(item + (i**N))
            }
            if((item + (i**N)) == X){
                count++
            }
        })
    }
    return count
}

console.log(powerSum(100, 2))