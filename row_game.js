function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var matrix_num = Number(input_arr[0])
    input_arr.shift()
    var k = 0
    for(var i = 0; i < matrix_num; i++)
    {
        var row_col = input_arr[k].trim().split(" ").map(Number)
        var row = row_col[0]
        var matrix = []
        for(var j = k+1; j <= k+row; j++)
        {
            var array = input_arr[j].trim().split(" ").map(Number)
            matrix.push(array)
        }
        check_distinct(matrix)
        k = (k + row + 1)
    }

    function check_distinct(matrix)
    {
        var obj = {}
        var distinct_array = []

        for(var i = 0; i < matrix[0].length; i++)
        {
            if(obj[matrix[0][i]] == undefined)
            {
                obj[matrix[0][i]] = 1
                distinct_array.push(matrix[0][i])
            }
        }

        for(var i = 0; i < distinct_array.length; i++)
        {
            for(var j = 1; j < matrix.length; j++)
            {
                if(matrix[j].includes(distinct_array[i]))
                {
                    obj[distinct_array[i]] += 1
                    continue
                }
            }
        }

        var count = 0
       for(key in obj)
       {
           if(obj[key] == matrix.length)
           {
               count++
           }
       }

       console.log(count)
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






