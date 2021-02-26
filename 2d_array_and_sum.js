function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var check_sum = Number(input_arr[0].split(" ")[2])
    input_arr.shift()
    var matrix = input_arr.map(function(e)
    {
        return e.split(" ")
    })
    for(var i = 0; i < matrix.length; i++)
    {
        for(var j = 0; j < matrix.length; j++)
        {
            matrix[i][j] = Number(matrix[i][j])
        }
    }

    var count = 0

    for(var i = 0; i < matrix.length; i++)
    {
        for(var j = 0; j < matrix[0].length; j++)
        {
            if(matrix.length - i >= 3 )
            {
                var sum = 0
                var l = i+3
                for(var k = i; k < l; k++ )
                {
                    sum += matrix[k][j]
                }
                if(sum == check_sum)
                {
                    count += 1
                }
            }
            if(matrix.length - i  >= 3 )
            {
                var sum = 0
                var l = i+3
                for(var k = i,m = j; k < l; k++,m++ )
                {
                    sum += matrix[k][m]
                }
                if(sum == check_sum)
                {
                    count += 1
                }
            }
            if(matrix.length - i  >= 3 )
            {
                var sum = 0
                var l = i+3
                for(var k = i, m = j; k < l; k++,m-- )
                {
                    sum += matrix[k][m]
                }
                if(sum == check_sum)
                {
                    count += 1
                }
            }
            if(matrix[0].length -j >= 3)
            {
                var sum = 0
                var l = j+3
                for(var k = j; k < l; k++ )
                {
                    sum += matrix[i][k]
                }
                if(sum == check_sum)
                {
                    count += 1
                }
            }
        }
    }
    console.log(count)
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






