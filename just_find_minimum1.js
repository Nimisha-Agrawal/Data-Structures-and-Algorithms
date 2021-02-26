function runProgram(input){
    var input_array = input.trim().split("\n")
    input_array.shift()
    var array = input_array.map((item) => item.split(" "))
    var stack = []
    var min_stack = []

    for(var i = 0; i < array.length; i++){
        if(array[i][0] == "PUSH"){
            stack.push(Number(array[i][1]))
            if(min_stack.length == 0){
                min_stack.push(Number(array[i][1]))
            }
            else if(min_stack[min_stack.length -1] > Number(array[i][1])){
                min_stack.push(Number(array[i][1]))
            }
            else{
                min_stack.push(min_stack[min_stack.length-1])
            }
        }
        else if(array[i][0] == "POP"){
            if(stack.length > 0){
                stack.pop()
                min_stack.pop()
            }
            else{
                console.log("EMPTY")
            }
            
        }
        else{
            if(min_stack.length > 0){
                console.log(min_stack[min_stack.length - 1])
            }
            else{
                console.log("EMPTY")
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

runProgram(`11
PUSH 5
PUSH 7
PUSH 3
PUSH 8
PUSH 10
MIN
POP
POP
MIN
POP
MIN`)
