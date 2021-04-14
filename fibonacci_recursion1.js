// Time Complexity => O(2^n)
// Space Complexity => O(n)
function runProgram(input){ 
    input = Number(input)
    console.log(fibonacci(input, {}))

    function fibonacci(number, memo){
        if(memo[number] !== undefined){
            return memo[number]
        }
        else{
            if(number == 0){
                return 0
            }
            else if(number == 1){
                return 1
            }
            let n_fib = fibonacci(number - 1, memo)  + fibonacci(number - 2, memo)
            memo[number] = n_fib
            return n_fib 
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

runProgram(`10`)




