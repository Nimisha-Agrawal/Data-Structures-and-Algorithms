// Time Complexity => O(max(n, q))
// Space Complexity => O(n)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number)
    let queries = input_arr[3].trim().split(" ").map(Number)

    let memo = {}
    for(let i = 0; i < array.length; i++){
        if(memo[array[i]] == undefined){
            memo[array[i]] = true
        }
    }

    for(let i = 0; i < queries.length; i++){
        if(memo[queries[i]] == undefined){
            console.log("NO")
        }
        else{
            console.log("YES")
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

runProgram(`5
1 2 3 4 5
3
3 5 7`)



