function runProgram(input){
    var ip_num = Number(input)
    var result = Math.floor(32/input)
    if(result == 0)
    {
        console.log("Too Low")
    }
    else if(result == "NaN" || result == Infinity)
    {
        console.log("-1")
    }
    else
    {
        console.log(result)
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

