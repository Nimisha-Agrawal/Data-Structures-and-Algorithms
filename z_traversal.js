function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()
    var k = 0
    for(var i = 0; i < no_tc ; i++)
    {
        var no_rows = Number(input_arr[k]) 
        var matrix = []
        for(var j = k+1; j <= k+no_rows; j++)
        {
            matrix.push(input_arr[j].trim().split(" ").map(Number))
        }
        zTraversal(matrix)
        k = k + no_rows + 1
    }
    function zTraversal(mat)
    {
        var string1 = ""
        var string2 = ""
        var string3 = ""
        for(var i = 0,j = mat.length-1; i < mat.length; i++, j--)
        {
            if(i < mat.length-1)
            {
                string1 += `${mat[0][i]} `
            }
            if(i > 0)
            {
                string3 += `${mat[mat.length-1][i]} `
            }
            string2 += `${mat[i][j]} `
        }

        console.log((string1+string2+string3).trim()) 
      
    }
}
process.stdin.resume()
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
7 8 9
`)




