function runProgram(input){
    var input_arr = input.split(" ")
    var distance = Number(input_arr[0])
    var time = Number(input_arr[1])
    if(distance/time <= 40)
    {
        console.log("Keep Going")
    }
    else
    {
        console.log("Apply Brake")
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

