function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()
    var stack = []
    
    for(var i = 0; i < no_tc; i++)
    {
        var tc = input_arr[i].trim().split(" ").map(Number)
        if(tc.length > 1 && tc[0] == 2)
        {
            push(stack, tc[1])
        }
        else{
            if(tc[0] == 1)
            {
                top(stack)
                pop(stack)
            }
        }

    }
    

    function push(array, input)
    {
        array[array.length] = input
    }

    function pop(array)
    {
        if(array.length > 0)
        {
            array.length = array.length-1
        }
    }


    function top(array)
    {
        if(array.length > 0)
        {
            console.log(array[array.length-1])
        }
        else{
            console.log("No Food")
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
1
2 5
2 7
2 9
1
1`)









