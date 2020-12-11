function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var num = Number(input_arr[0])
    for(var i = 0; i < input_arr[1].length; i++)
    {
        switch (input_arr[1][i])
        {
            case "@":
                num = num * 10
                break;
            case "!":
                num = num + 2
                break;
            case "%":
                num = num - 5
                break;
            case "^":
                num = num**2
                break;
            case "$":
                num = num + 37
                break;
        }
    }
    console.log(num)
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






