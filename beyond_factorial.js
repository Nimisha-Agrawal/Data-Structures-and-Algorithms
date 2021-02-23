function runProgram(input){
    input = Number(input)

    function beyondFactorial(number){
        if(number > 1){
            return Math.log(number) + beyondFactorial(number -1)
        }
        else{
            return 0
        }
    }

    var answer = beyondFactorial(input).toFixed(4)
    console.log(answer)
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

runProgram(`3`)






