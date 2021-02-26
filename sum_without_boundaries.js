function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()
    var k = 0

    for(var i = 0; i < no_tc; i++)
    {
        var no_rows = Number(input_arr[k][0])
        var matrix = []
        for(var j = k+1; j <= k+no_rows; j++ )
        {
            matrix.push(input_arr[j].trim().split(" ").map(Number))
        }
        console.log(matrix)
        withoutBoundaries(matrix)
        k = k + no_rows + 1
    }

    function withoutBoundaries(mat){
        var sum = 0
        for(var l = 1; l < mat.length-1; l++)
        {
            for(var m = 1; m < mat[0].length-1; m++)
            {
                sum += mat[l][m]
            }
        }
        console.log(sum)
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

runProgram(`1
3 3 
1 2 3
4 5 6
7 8 9`)


