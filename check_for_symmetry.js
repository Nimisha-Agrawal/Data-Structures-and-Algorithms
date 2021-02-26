function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var check = input_arr.map(Number)
    for(var i = 0; i < check.length; i++)
    {
        if(check[i] != NaN)
        {
            var mat = input_arr.slice(i+1,i+1+check[i])
            if(horizontal(mat) && vertical(mat))
            {
                console.log("BOTH")
            }
            else if(horizontal(mat))
            {
                console.log("HORIZONTAL")
            }
            else if(vertical(mat))
            {
                console.log("VERTICAL")
            }
            else
            {
                console.log("NO")
            }
            i = i+check[i]
        }
    }
    function vertical(array)
    {
        var matrix = array.map(function(e)
        {
            return e.split("")
        })
        var new_matrix = []
        for(var i = 0; i < matrix[0].length; i++)
        {
            var row = ""
            for(var j = 0; j < matrix.length; j++)
            {
                row += matrix[j][i]
            }
            new_matrix.push(row)
        }
        return horizontal(new_matrix)
    }
    function horizontal(array)
    {
        var limit = Math.floor(array.length/2)
        for(var i = 0; i < limit; i++)
        {
            if(array[i] == array[(array.length-1)-i])
            {
                continue
            }
            else
            {
                return false
            }
        }
        return true
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
