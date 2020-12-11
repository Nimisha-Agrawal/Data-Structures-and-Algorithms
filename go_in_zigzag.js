function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var matrix = input_arr.map(function(e)
    {
        return e.split(" ").map(Number)
    })
    var res_matrix = []

    for(var i = 0; i < matrix.length; i++)
    {
        if( (i+1)%2 != 0)
        {
            for(var j = matrix[0].length-1; j >= 0; j--)
            {
                res_matrix.push(matrix[i][j])
            }
        }
        else
        {
            for(var j = 0; j < matrix[0].length; j++)
            {
                res_matrix.push(matrix[i][j])
            }
        }
    }
    var res_matrix_string = res_matrix.join(" ")
    console.log(res_matrix_string)
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






