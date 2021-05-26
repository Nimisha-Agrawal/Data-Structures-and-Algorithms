// Time Complexity => O(2^n)
// Space Complexity => O()
function no_ways(n){
    if(n < 0){
        return 0
    }
    else if(n == 0){
        return 1
    }
    return no_ways(n - 4) + no_ways(n - 8)
}

function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i++){
        let to_carry = Number(input_arr[i])
        console.log(no_ways(to_carry))
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

runProgram(`1
12`)




