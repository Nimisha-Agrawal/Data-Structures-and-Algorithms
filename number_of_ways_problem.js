function runProgram(input){
    input = Number(input)

    function count(n){
        if(n == 1 || n == 0){
            return 1
        }
        else if (n == 2){
            return 2
        }
        else{
            return count(n-3) + count(n -2) + count(n - 1)
        }
    }

    console.log(count(input))

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




