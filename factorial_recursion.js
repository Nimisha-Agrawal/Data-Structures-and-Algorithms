function runProgram(input){
    var N = Number(input)

    function factorial(n){
        if(n > 1){
            return n * factorial(n-1)
        }
        else{
            return 1
        }
    }

    console.log(factorial(N))
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

runProgram(`5`)




