function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var matrix = input_arr.map(function(e)
    {
        return e.split("")
    })
    var check = "saba"
    var count = 0

    for(var i = 0; i < matrix.length; i++ )
    {
        for(var j = 0; j < matrix[0].length; j++)
        {
            if(matrix[i][j] == "s")
            {
                if(j+3 < matrix[0].length)
                {
                    var string = ""
                    for(var k = j; k < j+4; k++)
                    {
                        string += matrix[i][k]
                    }
                    if(string == check)
                    {
                        count++
                    }
                }

                if(i+3 < matrix.length)
                {
                    var string = ""
                    for(var k = i; k < i+4; k++)
                    {
                        string += matrix[k][j]
                    }
                    if(string == check)
                    {
                        count++
                    }
                }

                if(i+3 < matrix.length && j+3 < matrix[0].length)
                {
                    var string = ""
                    for(var k = i,l = j;k < i+4; k++, l++)
                    {
                        string += matrix[k][l]
                    }
                    if(string == check)
                    {
                        count++
                    }
                }

                if(i-3 >= 0 && j+3 < matrix[0].length)
                {
                    var string = ""
                    for(var k = i,l = j;k > i-4; k--, l++)
                    {
                        string += matrix[k][l]
                    }
                    if(string == check)
                    {
                        count++
                    }
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






