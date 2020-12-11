function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var matrix = []
    input_arr.forEach(function(e)
    {
        var row = e.split(" ")
        matrix.push(row)
    })
    function result_check(symbol)
    {
        for(var i = 0; i < matrix.length; i ++)
        {
            var flag = true;
            for(var j = 0; j < matrix[0].length; j++ )
            {
                if(matrix[i][j] == symbol)
                {
                    continue;
                }
                else
                {
                    flag = false;
                    break;
                }
            }
            if(flag)
            {
                return true;
                break;
            }
        }

        for(var i = 0; i < matrix.length; i ++)
        {
            var flag = true;
            for(var j = 0; j < matrix[0].length; j++ )
            {
                if(matrix[j][i] == symbol)
                {
                    continue;
                }
                else
                {
                    flag = false;
                    break;
                }
            }
            if(flag)
            {
                return true;
                break;
            }
        }

        var flag = true;
        for(var i = 0; i < matrix.length; i++)
        {
            if(matrix[i][i] == symbol)
            {
                continue;
            }
            else
            {
                flag = false;
            }
        }
        if(flag)
        {
            return true;
        }

        var flag = true;
        for(var i = 0, j = matrix.length-1; i < matrix.length; i++, j--)
        {
            if(matrix[i][j] == symbol)
            {
                continue;
            }
            else
            {
                flag = false;
            }
        }
        if(flag)
        {
            return true;
        }
    }
    if(result_check("x"))
    {
        console.log("x")
    }
    else if(result_check("o"))
    {
        console.log("o")
    }
   else
   {
       console.log("Tie")
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






