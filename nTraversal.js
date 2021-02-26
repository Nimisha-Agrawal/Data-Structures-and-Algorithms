function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()
    var k = 0

    for(var i = 0; i < no_tc; i++)
    {
        var no_rows = Number(input_arr[k])
        var matrix = []
        for(var j = k+1; j <= k+no_rows; j++ )
        {
            matrix.push(input_arr[j].split(" ").map(Number))
        }
        if(matrix.length == 1 & matrix[0].length == 1)
        {
            console.log(matrix[0][0])
        }
        else{
            nTraversal(matrix)
        }
        k = k + no_rows + 1
    }

    function nTraversal(mat){
        var start = 0
        var end = mat.length -1
        var string1 = ""
        var string2 = ""
        var string3 = ""
        for(var l = mat.length-1; l >= 0; l-- )
        {
            string1 += `${mat[l][start]} `
            string2 += `${mat[l][end]} `
        }
        for(var l = 0; l < mat.length; l++)
        {
             if(l > 0 && l < mat.length-1)
            {
                string3 += `${mat[l][l]} `
            }
        }
        console.log((string1 + string3 + string2).trim())
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
3
1 2 3
4 5 6
7 8 9`)




