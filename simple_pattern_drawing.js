function runProgram(input){
    var input_arr = input.split(" ")
    var row = Number(input_arr[0])
    var col = Number(input_arr[1])

    var limit = Math.floor(row/2)

    for(var i = 0; i < limit; i++)
    {
        var string1 = ""
        var string2 = ""
        for(var j = 0; j < col; j ++)
        {
            string1 += "#"
            if(i % 2 == 0)
            {
                if(j == col-1)
                {
                    string2 += "#"
                }
                else
                {
                    string2 += "."
                }
            }
            else
            {
                if(j == 0)
                {
                    string2 += "#"
                }
                else
                {
                    string2 += "."
                }
            }
        }
        console.log(string1)
        console.log(string2)
    }
    console.log(string1)
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





