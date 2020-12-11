function runProgram(input){
    var num = Number(input)
    if(num <= 100)
    {    
        if(num == 100)
        {
            console.log("A")
        }
        else if(num >= 90)
        {
            console.log("B")
        }
        else if(num >= 80)
        {
            console.log("C")
        }
        else
        {
            console.log("F")
        }
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
