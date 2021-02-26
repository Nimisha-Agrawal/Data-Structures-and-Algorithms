function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var matrix = input_arr.map((e) => e.split(" "))
    for(var i = matrix[0].length -1 ; i >= 0 ; i--)
    {
        var row = []
        for(var j = 0; j < matrix.length; j++)
        {
            row.push(matrix[j][i])
        }
        var row_string = row.join(" ")
        console.log(row_string)
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






