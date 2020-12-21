function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var matrix = input_arr.map((e) =>{
        return e.split(" ").map(Number)
    })

    var sum = 0
    for(var i = 0; i < matrix.length; i++)
    {
        for(var j = 0; j < matrix[0].length; j++)
        {
            if(matrix[i][j]%3 == 0)
            {
                sum += matrix[i][j]
            }
        }
    }
    console.log(sum)
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






