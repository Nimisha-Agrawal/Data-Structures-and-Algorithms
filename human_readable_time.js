function runProgram(input){
    var minutes = Number(input)

    var remaining_min = minutes%60
    var hour = Math.floor(minutes/60)

    if(remaining_min == 0)
    {
        remaining_min = "00"
    }
    if(hour == 1)
    {
        console.log(hour + "hr " + remaining_min + "mins")
    }
    else
    {
        console.log(hour + "hrs " + remaining_min + "mins")
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





