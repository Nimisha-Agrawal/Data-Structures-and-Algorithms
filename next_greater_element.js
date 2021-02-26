function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()

    for(let j = 1; j < 2*no_tc; j=j+2)
    {
        var array = input_arr[j].trim().split(" ").map(Number)
        var stack = []
        var string = ""
        for(let i = array.length-1; i >= 0; i--)
        {
            while(stack.length > 0 && stack[stack.length-1] <= array[i]) 
            {
                stack.pop()
            }
            if(stack.length == 0){
                string += "-1 "
            }
            else{
                string += `${stack[stack.length -1]} `
            }
            stack.push(array[i])
        }
        var final_string = string.trim().split(" ").reverse().join(" ")
        console.log(final_string)
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

runProgram(`1
4
1 3 2 4`)


