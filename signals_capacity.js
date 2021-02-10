function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()

    for(let i = 1; i < 2*no_tc; i=i+2){
        var array = input_arr[i].trim().split(" ").map(Number)
        var stack = []
        var stack_2 = []
        var answer = []
        for(let j = 0; j < array.length; j++){
            while(stack.length > 0 && stack[stack.length -1] <= array[j]){
                stack.pop()
                stack_2.pop()
            }
            if(stack.length == 0){
                answer.push(j+1)
            }
            else{
                answer.push(j - stack_2[stack_2.length -1])
            }
            stack.push(array[j])
            stack_2.push(j)
        }
        console.log(answer.join(" "))
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

runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`)




