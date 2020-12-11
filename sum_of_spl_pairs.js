function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var array = input_arr[1].split(" ").map( function(e){ return Number(e) } )
    var sum = 0

    function check_prime(number)
    {
        for(var i = 2; i <= number; i++)
        {
            if(i != number && number%i == 0)
            {
                return false
            }
        } 
        if(number == 0 || number == 1)
        {
            return false
        }
        return true
    } 


    for(var i = 0; i < array.length; i++)
    {
        for(var j = i+1; j < array.length; j++)
        {
            var check = j-i;
            var flag = check_prime(check)
            if(flag)
            {
                var ab_diff = array[i]-array[j]
                if(ab_diff < 0)
                {
                    ab_diff = -(ab_diff)
                }
                sum += ab_diff
            }
        }
    }

    console.log(sum)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});






