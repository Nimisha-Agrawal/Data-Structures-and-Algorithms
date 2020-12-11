function runProgram(input){
    var input_arr = input.split(" ")
    var count = 0
    for(var i =0; i < input_arr.length; i++)
    {
        input_arr[i] = Number(input_arr[i])
    }
    for(var j = input_arr[0] ; j <= input_arr[1] ; j++)
    {
        if(j%input_arr[2] == 0)
        {
            count += 1
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






