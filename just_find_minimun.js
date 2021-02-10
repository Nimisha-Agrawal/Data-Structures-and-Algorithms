function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_ele = Number(input_arr[0])
    input_arr.shift()
    var array = input_arr.map((item) => item.trim().split(" "))
    var stack = []
    
    for(let i = 0; i < no_ele; i++){
        if(array[i][0] == "PUSH"){
            stack.push(Number(array[i][1]))
        }
        else if (array[i][0] == "POP"){
            if(stack.length > 0){
                stack.pop()
            }
            else{
                console.log("EMPTY")
            }
        }
        else{
            if(stack.length > 0){
                var min = stack[0]
                for(let j = 0; j < stack.length; j++){
                        if(min > stack[j] ){
                            min = stack[j]
                        }
                }
                console.log(min)
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



