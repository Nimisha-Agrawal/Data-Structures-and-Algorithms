function runProgram(input){
    var ip_num = Number(input)
    if(ip_num < 1000)
    {
        if(ip_num > 0 && ip_num%3 == 0)
        {
            console.log("Yes")
        }
        else
        {
            console.log("No")
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
