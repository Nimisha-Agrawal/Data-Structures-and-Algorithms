function runProgram(input){
    var input = input.trim().split(/[\r\n]+/)
    var check_product = Number(input[0].split(" ")[2])
    input.shift()
    var matrix = input.map(function(e)
    {
        return e.split(" ").map(Number)
    })
    var count = 0

    for(var i = 0; i < matrix.length; i++)
    {
        for(var j = 0; j < matrix[0].length; j++)
        {
            if(matrix.length - i >= 3)
            {
                var l = i+3
                var product = 1
                for(var k = i; k < l; k++)
                {
                    product *= matrix[k][j]
                }
                if(product == check_product)
                {
                    count += 1
                }
            }
            if(matrix.length - i >= 3)
            {
                var l = i+3
                var product = 1
                for(var k = i, m = j; k < l; k++, m++)
                {
                    product *= matrix[k][m]
                }
                if(product == check_product)
                {
                    count += 1
                }
            }
            if(matrix.length - i >= 3)
            {
                var l = i+3
                var product = 1
                for(var k = i,m = j; k < l; k++,m--)
                {
                    product *= matrix[k][m]
                }
                if(product == check_product)
                {
                    count += 1
                }
            }
            if(matrix[0].length - j >= 3)
            {
                var l = j+3
                var product = 1
                for(var k = j; k < l; k++)
                {
                    product *= matrix[i][k]
                }
                if(product == check_product)
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









