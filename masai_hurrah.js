function runProgram(input){
    var num = Number(input)
    if(num%35 == 0)
    {
        console.log("Masai School")
    }
    else if(num%7 == 0)
    {
        console.log("Masai")
    }
    else if(num%5 == 0)
    {
        console.log("School")
    }
    else
    {
        console.log("Hurray!")
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
