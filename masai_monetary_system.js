// Time Complexity => O(1)
// Space Complexity => O(1)
function runProgram(input){
    let array = input.trim().split("\n").map(Number)

    for(let i = 0; i < array.length; i++){
        high_exchange(array[i])
    }

    function high_exchange(number){

        let exchange1 = Math.round(number/2 + number/3 + number/4)
        if(exchange1 < number){
            console.log(number)
        }
        else{
            console.log(exchange1)
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

runProgram(`12
2`)



