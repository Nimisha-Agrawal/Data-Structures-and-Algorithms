function runProgram(input){
    var cons = "bcdfghjklmnpqrstvwxyz"
    var count = 0
    for(var i =0; i < input.length; i++)
    {
        for(var j = 0; j < cons.length; j++)
        {
            if(input[i] == cons[j])
            {
                count += 1;
                break;
            }
        }
    }
    console.log(count)
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





