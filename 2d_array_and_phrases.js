function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var matrix = input_arr.map(function(e)
    {
        return e.split("")
    })
    var check = "saba"
    var count = 0
    for(var i = 0; i < matrix.length; i++)
    {
        for(var j = 0; j < matrix[0].length; j++)
        {
            //column string
            if(matrix.length - i >= 4)
            {
                var column_string = ""
                for(var k = i; k < i+4 ; k++)
                {
                    column_string += matrix[k][j]
                }
                if(column_string == check)
                {
                    count++
                }
            }

            // main diagonal string
            if(matrix.length - i >= 4 && matrix[0].length - j >= 4)
            {
                var d1_string = ""
                for(var k = i,l = j; k < i+4 ;k++, l++ )
                {
                    d1_string += matrix[k][l]
                }
                if(d1_string == check)
                {
                    count++
                }
            }

            // second diagonal string
            if(i >= 3 && matrix[0].length - j >= 4)
            {
                var d2_string = ""
                for(var k = i,l = j; l < j+4  ;k--, l++ )
                {
                    d2_string += matrix[k][l]
                }
                if(d2_string == check)
                {
                    count++
                }
            }

            //row string
            if(matrix[0].length - j >= 4)
            {
                var row_string = ""
                for(var k = j; k < j+4 ; k++)
                {
                    row_string += matrix[i][k]
                }
                if(row_string == check)
                {
                    count++
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
