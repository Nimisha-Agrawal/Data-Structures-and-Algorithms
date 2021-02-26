function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr = input_arr.map(function(e)
    {
        return e.split(" ").map(Number)
    })
    var row_num = Number(input_arr[0][0])
    var col_num = Number(input_arr[0][1])
    input_arr.shift()

    var row_limit = Math.ceil(row_num/2)
    var col_limit = Math.ceil(col_num/2)

    var sum1 = 0
    var sum2 = 0
    
    for(var i = 0; i < input_arr.length; i++)
    {
        for(var j = 0; j < input_arr[0].length; j++)
        {
            if(j >= col_limit && i == 0)
            {
                sum1 += input_arr[i][j]
            }
            if( j < col_limit-1 && i == input_arr.length-1)
            {
                sum1 += input_arr[i][j] 
            }
        }
    }
    var j = col_limit -1
    for(var k = 0; k < input_arr.length; k++)
    {
        sum1 += input_arr[k][j]
    }


    for(var i = 0 ; i < input_arr[0].length; i++)
    {
        for(var j = 0; j < input_arr.length; j++)
        {
            if(j >= row_limit &&  i == input_arr[0].length-1)
            {
                sum2 += input_arr[j][i]
            }
            if( j < row_limit -1 && i == 0)
            {
                sum2 += input_arr[j][i]
            }
        }
    }
    var i = row_limit -1
    for(var k = 0; k < input_arr[0].length; k++)
    {
        sum2 += input_arr[i][k]
    }
    
    var diff = sum1 - sum2
    if(diff < 0)
    {
        diff = - diff
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






