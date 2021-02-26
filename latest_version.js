function runProgram(input){
    const input_arr = input.trim().split("\n")
    const ver1 = input_arr[0].split(".").map(Number)
    const ver2 = input_arr[1].split(".").map(Number)

    if(ver1.length > ver2.length)
    {
       var diff = ver1.length - ver2.length
       for(var i = 0; i < diff; i++)
       {
            ver2.push(0)
       }
    }
    else if(ver2.length > ver1.length)
    {
        var diff = ver2.length - ver1.length
        for(var i = 0; i < diff; i++)
        {
             ver2.push(0)
        }
    }

    for(let i = 0; i < ver1.length; i++)
    {
        if(ver1[i] < ver2[i])
        {
            console.log("Version 1 is the latest.")
            break;
        }
        else if(ver1[i] > ver2[i])
        {
            console.log("Version 2 is the latest.")
            break;
        }
        else
        {
            if(i == ver1.length-1)
            {
                console.log("Both Versions are equal.")
                break
            }
            else
            {
                continue
            }
            
        }
    }    
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

runProgram(`4.3.2
4.3.2`)





// trim().split(/[\r\n]+/)