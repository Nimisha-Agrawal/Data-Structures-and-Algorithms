function runProgram(input){
    const input_arr = input.trim().split("\n")
    input_arr.shift()
    const array = input_arr[0].split(" ").map(Number)
    const stack = []
    let ansewr = ""

    for(let i = 0; i < array.length; i++)
    {
        while(stack.length > 0 && array[i] <= stack[stack.length -1])
        {
            stack.pop()
        }
        if(stack.length == 0)
        {
            ansewr += "-1 "
        }
        else
        {
            ansewr += `${stack[stack.length -1]} `
        }
        stack.push(array[i])
    }
    console.log(ansewr.trim())
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

runProgram(`8
39 27 11 4 24 32 32 1`)

