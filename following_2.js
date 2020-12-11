function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var numbers = input_arr[1].split(" ")
    var num_string = numbers.join("")
    var flag = true
    for(var i = 0; i < num_string.length; i++)
    {
        if(num_string[i] == "2" && i != (num_string.length-1) )
        {
            console.log(num_string[i+1])
            flag = false
            break;
        }
    }
    if(flag)
    {
        console.log("-1")
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





