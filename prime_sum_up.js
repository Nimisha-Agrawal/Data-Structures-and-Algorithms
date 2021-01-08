function runProgram(input){
    var sum = 0
    for(var j = 2; j <= input; j++)
    {
        if(isPrime(j))
        {
            sum += j
        }
    }

    console.log(sum)

    function isPrime(num)
    {
        if(num == 0 || num == 1)
        {
            return true
        }
        else
        {
            for(var i = 2; i <= num**1/2; i++)
            {
                if(num%i == 0)
                {
                    return false
                }
            }
            return true
        }
    }
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

runProgram(`13`)

