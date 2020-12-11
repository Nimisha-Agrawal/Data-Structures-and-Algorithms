function runProgram(input){
    var input_arr = input.split(" ")
    var aus = Number(input_arr[0])
    var eng = Number(input_arr[1])
    if(aus > eng)
    {
        console.log("Australia")
    }
    else if(eng > aus)
    {
        console.log("England")
    }
    else
    {
        console.log("Tie")
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

