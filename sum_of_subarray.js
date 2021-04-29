// Time Complexity => O(n)
// Space Complexity => O(n)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number)

    let sum_upto = []
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
        sum_upto.push(sum)
    }

    // console.log(sum_upto)

    for(let i = 3; i < input_arr.length; i++){
        let [start, end] = input_arr[i].trim().split(" ").map(Number)
        let start_no = sum_upto[start - 2] == undefined ? 0 : sum_upto[start - 2]
        console.log(sum_upto[end - 1] - start_no)
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

runProgram(`4
3 2 1 5
4
1 3
2 4
1 4
3 3`)



