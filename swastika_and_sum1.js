function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var matrix = input_arr.map((e) => {
        return e.split(" ").map(Number)
    })
    var row_mid = Math.floor(matrix.length/2)
    var col_mid = Math.floor(matrix[0].length/2)

    var sum1 = 0
    var sum2 = 0
    
    for(var i = 0; i < matrix.length; i++)
    {
        for(var j = 0; j < matrix[0].length; j++)
        {
            if(i == 0 && j > col_mid)
            {
                sum1 += matrix[i][j]
            }
            if( i == matrix.length-1 && j < col_mid)
            {
                sum1 += matrix[i][j]
            }
            if(i == row_mid)
            {
                sum2 += matrix[i][j]
            }
        }
    }

    for(var i = 0; i < matrix[0].length; i++)
    {
        for(var j = 0; j < matrix.length; j++)
        {
            if(i == 0 && j < row_mid)
            {
                sum2 += matrix[j][i]
            }
            if(i == col_mid)
            {
                sum1 += matrix[j][i]
            }
            if(i == matrix[0].length-1 && j > row_mid)
            {
                sum2 += matrix[j][i]
            }
        }
    }

    var diff = sum1 - sum2
    if(diff < 0)
    {
        diff = -diff
    }
    console.log(diff)
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

runProgram(`3 5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
`)




