function runProgram(input){
    var stack = input.trim().split("")
    var newStack = []
    for(var i = 0 ; i < stack.length; i++)
    {
        if(newStack.length == 0){
            push(newStack, input[i])
        }
        else{
            if(newStack[newStack.length-1] == input[i]){
                pop(newStack)
            }
            else{
                push(newStack, input[i])
            }

        }
    }

    if(newStack.length == 0)
    {
        console.log("Empty String")
    }
    else{
        console.log(newStack.join(""))
    }
    

    function pop(stack)
    {
        if(stack.length > 0)
        {
            stack.length = stack.length-1
        }
    }

    function push(stack, input)
    {
        stack[stack.length] = input
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

runProgram(`aaabccddd`)




