function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var array = input_arr[1].split(" ")
    for( var i = 0; i < array.length; i++)
    {
        array[i] = Number(array[i])
    }
    for(var j = 0; j < array.length; j++)
    {
        if(array[j] < 85)
        {
            console.log("Enter")
        }
        else 
        {
            console.log("Beep")
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
