// Time Complexity => O(V)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n").map(Number)
    let denominations = [1, 2, 5, 10, 20, 50, 100, 500, 1000]

    for(let i = 1; i < input_arr.length; i++){
        let amount = input_arr[i]

        let limit = denominations.length -1
        for(let j = 0; j < denominations.length; j++){
            if(amount < denominations[j]){
                limit = j - 1
                break 
            }
        }

        let count = 0
        while(amount > 0 || amount < 0){
            if(amount - denominations[limit] < 0){
                limit--
            }
            else{
                amount = amount - denominations[limit]
                count++
            }
        }
        console.log(count)
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

runProgram(`3
45
93
29`)




