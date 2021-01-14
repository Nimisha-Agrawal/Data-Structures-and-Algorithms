function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()
    var stack = []

    for(var i = 0; i < no_tc; i++)
    {
        var tc = input_arr[i].trim().split(" ").map(Number)
        if(tc.length > 1)
        {
            if(tc[0] == 1)
            {
                stack.push(tc[1])
            }
        }
        else
        {
            if(tc[0] == 2)
            {
                if(stack.length > 0)
                {
                    stack.pop()
                }
            }
            if(tc[0] == 3)
            {
                if(stack.length > 0)
                {
                    console.log(stack[stack.length-1])
                }
                else
                {
                    console.log("Empty!")
                }
            }
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

runProgram(`6
1 15
1 20
2
3
2
3`)




