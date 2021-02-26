function runProgram(input){
    input = Number(input)
    
    function fibonaci(N){
        if(N-2 >= 0){
            return fibonaci(N-1) + fibonaci(N-2)
        }
        if(N == 1){
            return 1
        }
        else if(N == 0){
            return 0
        }
    }

    console.log(fibonaci(input))
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

runProgram(`4`)




