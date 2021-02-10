function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr[0].trim().split(" ").map(Number)
    var answer = []
    var stack = []

    for(let i = array.length-1; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length -1] <= array[i] ){
            stack.pop()
        }
        if(stack.length == 0){
            answer.push(array[i])
        }
        stack.push(array[i])
        
    }
    console.log(answer.reverse().join(" "))
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
16 17 4 3 5 2`)




