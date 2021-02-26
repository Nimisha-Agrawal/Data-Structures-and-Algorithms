function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var array = input_arr[1].split(" ")
    var check = 42
    var flag = false
    for(var i = 0; i < array.length; i++)
    {
        array[i] = Number(array[i])
        if(array[i] == 42)
        {
            console.log("Yes")
            flag = true;
            break;
        }
    }
    if(flag == false)
    {
        console.log("No")
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

