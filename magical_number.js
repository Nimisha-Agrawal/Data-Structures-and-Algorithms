function runProgram(input){
    var num = Number(input)
    if (num%7 == 0 || num%4 == 0)
    {
        console.log("YES")
    }
    else
    {
        var flag = true
        for(var i = 0; i < input.length; i++)
        {
            if(input[i] == "7" || input[i] == "4")
            {
                continue;
            }
            else
            {
                console.log("NO")
                flag = false
                break;
            }
        }
        if(flag)
        {
            console.log("YES")
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







