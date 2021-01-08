function runProgram(input){
    var obj = {}

    for(var i = 0; i < input.length; i++)
    {
        if(obj[input[i]] == undefined)
        {
            obj[input[i]] = 1
        }
        else
        {
            obj[input[i]] += 1
        }
    }

    var flag = false
    for(key in obj)
    {
        if(obj[key] == 1)
        {
            console.log(key)
            flag = true
            break;
        }
    }
    if(!flag)
    {
        console.log("Not Found")
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

runProgram(`racecars`)




