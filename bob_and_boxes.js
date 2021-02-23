function runProgram(input){
    input = Number(input)

    function ways(n){
        if(n == 1 || n ==0){
            return 1
        }
        else if (n < 0){
            return 0
        }
        else{
            return ways(n-1) + ways(n-3) + ways(n-5)
        }
    }

    console.log(ways(input))
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

runProgram(`7`)




