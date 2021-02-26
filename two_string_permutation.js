function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var string1 = input_arr[0]
    var string2 = input_arr[1]
    var string1_arr = input_arr[0].split("")
    var string2_arr = input_arr[1].split("")
    if(string1.length == string2.length)
    {
        string1 = string1_arr.sort().join("")
        string2 = string2_arr.sort().join("")
        if(string1 == string2)
        {
            console.log("Yes")
        }
        else
        {
            console.log("No")
        }
    }
    else
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






