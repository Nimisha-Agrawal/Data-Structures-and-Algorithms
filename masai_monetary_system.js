// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let array = input.trim().split("\n").map(Number)

    for(let i = 0; i < array.length; i++){
        console.log(high_exchange(array[i], {}))
    }

    function high_exchange(number, memo){
        if(memo[number] !== undefined){
            return memo[number]
        }
        if(number <= 2){
            return number
        }
        let exchange1 = high_exchange(Math.floor(number/2), memo) + high_exchange(Math.floor(number/3), memo) + high_exchange(Math.floor(number/4), memo)
        if(exchange1 < number){
            memo[number] = number
            return number
        }
        else{
            memo[number] = exchange1
            return exchange1
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

runProgram(`145`)



