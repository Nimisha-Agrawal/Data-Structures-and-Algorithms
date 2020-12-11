function runProgram(input){
    input_arr = input.split(" ")
    input_arr = input_arr.map(Number)
    if(input_arr[0] > input_arr[1])
    {
        console.log("Not Yet")
    }
    else if(input_arr[0] < input_arr[1])
    {
        console.log("Broken")
    }
    else 
    {
        console.log("Wao")
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






