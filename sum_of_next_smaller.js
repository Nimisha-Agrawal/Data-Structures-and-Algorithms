function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr[0].trim().split(" ").map(Number)
    var stack = []
    var next_smaller = []

    for(var i = array.length-1 ; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length-1] >= array[i]){
            stack.pop()
        }
        if(stack.length == 0){
            next_smaller.push(0)
        }
        else{
            next_smaller.push(stack[stack.length-1])
        }
        stack.push(array[i])
    }

    var sum = next_smaller.reduce((a, i) => {
        return a + i
    }, 0)

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

runProgram(`4
4 3 1 2`)




