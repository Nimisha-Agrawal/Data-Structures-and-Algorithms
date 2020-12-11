function runProgram(input){
    input = input.trim().split(/[\r\n]+/)
    input = input.map(function(e)
    {
        return e.split(" ").map(Number)
    })
    var mat1_length = input[0][0]
    var mat1 = input.slice(1,1 + mat1_length)
    var mat2_length = input[1+mat1_length][0]
    var mat2 = input.slice(2+mat1_length, input.length)
    var mat1_sum = 0
    for(var i = 0; i < mat1.length; i++)
    {
        for(var j = 0; j < mat1[0].length; j++)
        {
            mat1_sum += mat1[i][j]
        }
    }
    var mat2_sum = 0
    for(var i = 0; i < mat2.length; i++)
    {
        for(var j = 0; j < mat2[0].length; j++)
        {
            mat2_sum += mat2[i][j]
        }
    }
    if(mat1_sum > mat2_sum)
    {
        console.log(mat1_sum)
    }
    else
    {
        console.log(mat2_sum)
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






