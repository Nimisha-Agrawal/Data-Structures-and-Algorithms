function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()
    var k = 0

    for(let i = 0; i < no_tc; i++){
        var no_rows = Number(input_arr[k])
        var matrix = []
        var matrix2 = []
        for(let j = k+1; j <= k+no_rows; j++){
            matrix.push(input_arr[j])
            matrix2.push(input_arr[j].trim().split(""))
        }
        if(rowSymmetry(matrix) && colSymmetry(matrix2))
        {
            console.log("YES")
        }
        else
        {
            console.log("NO")
        }
        k = k+no_rows+1
    }


    function rowSymmetry(mat){
        for(let m = 0, n = mat.length-1; m < n; m++, n--){
            if(mat[m] == mat[n]){
                continue
            }
            else{
                return false
            }
        }
        return true
    }

    function colSymmetry(mat){
        var new_mat = []
        for(let m = 0; m < mat[0].length; m++){
            var col_string = ""
            for(let n = 0; n < mat.length; n++){
                col_string += `${mat[n][m]}`
            }
            new_mat.push(col_string)
        }
        return rowSymmetry(new_mat)
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

runProgram(`5
2
11
11
4
0101
0110
0110
0101
4
1001
0000
0000
1001
5
01110
01010
10001
01010
01110
5
00100
01010
10001
01010
01110`)




