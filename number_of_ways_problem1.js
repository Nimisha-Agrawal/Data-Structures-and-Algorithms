// Time Complexity => O(3^n)
// Space Complexity => O(n)
function runProgram(input){
    input = Number(input)
    console.log(no_ways(input, {}))

    function no_ways(number, memo){
        if(memo[number] !== undefined){
            console.log(memo)
            return memo[number]
        }
        if(number == 0){
            return 1
        }
        else if(number < 0){
            return 0
        }
        else{
            let possible = no_ways(number - 1, memo) + no_ways(number - 2, memo) + no_ways(number - 3, memo)
            memo[number] = possible
            return possible
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

runProgram(`4`)




