// Time Complexity => O(1)
// Space Complexity => O(1)
function square_root(number){
    let root = number ** (1/2)
    let decimal_split = root.toString().split(".")

    return decimal_split[0]
}

function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i++){
        let tc = Number(input_arr[i])
        let root = square_root(tc)
        console.log(root)
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

runProgram(`2
4
8`)




