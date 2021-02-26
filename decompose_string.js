function runProgram(input){
    var string = ""

    for(var i = 0; i < input.length; i++)
    {
        var num_conversion = Number(input[i])
        if(num_conversion != NaN)
        {
            for(var j = 0; j < num_conversion; j++)
            {
                string += input[i-1]
            }
        }
    }
    console.log(string)
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

runProgram(`a3b2`)

