// Time Complexity => O(n)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [n, cost] = input_arr
    n = Number(n)
    cost = cost.trim().split(" ").map(Number)

    let cost_incured = 0
    let low_cost = Infinity
    for(let i = 0; i < cost.length; i++){
        if(low_cost > cost[i]){
            low_cost = cost[i]
        }
        cost_incured += low_cost
    }

    console.log(cost_incured)
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

runProgram(`5
4 7 8 3 4`)




