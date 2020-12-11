function runProgram(input){
    input_arr = input.trim().split(/[\r\n]+/)
    var nz = input_arr[0].split(" ") 
    var eng = input_arr[1].split(" ")
    for(var i = 0; i < nz.length; i++ )
    {
        nz[i] = Number(nz[i])
        eng[i] = Number(eng[i]) 
    }
    if(nz[0] > eng[0])
    {
        console.log("New Zealand")
    }
    else if(eng[0] > nz[0])
    {
        console.log("England")
    }
    else
    {
        if(nz[1] > eng[1])
        {
            console.log("New Zealand")
        }
        else if(eng[1] > nz[1])
        {
            console.log("England")
        }
        else
        {
            if(nz[2] > eng[2])
            {
                console.log("New Zealand")
            }
            else if(eng[2] > nz[2])
            {
                console.log("England")
            }
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
