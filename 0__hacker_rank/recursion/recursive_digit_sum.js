function digitSum(n, k) {
    n = Number(n)
    if(n < 10){
        return n
    }
    
    var x = 0
    for(var i = 0; i < k; i++){
        x += n
    }

    function get_superdigit(x){
        if(x < 10){
            return x
        }
        var superdigit = 0
        while (x > 0){
            superdigit += x%10
            x = Math.floor(x/10)
        }
        get_superdigit(superdigit)
    }

    return get_superdigit(x)
}

console.log(digitSum(3, 1))