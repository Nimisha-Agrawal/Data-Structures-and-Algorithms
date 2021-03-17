function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr[0].trim().split(" ").map(Number)
    var final_output = 0

    for(var i = 1; i < 2 ** array.length; i++){
        var subset_sum = 0
        for(var j = 0 ; j < array.length; j++){
            if(i & 1 << j){
                subset_sum += array[j]
            }
        }
        if(subset_sum % 2 !== 0){
            final_output += 1
        }
    }

    console.log(final_output)
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
1 2 3`)




