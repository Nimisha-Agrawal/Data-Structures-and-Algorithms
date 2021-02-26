function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    input_arr.shift()
    var matrix = input_arr.map(function(e)
    {
        return e.split(" ").map(Number)
    })
    var sum = 0
    for(var i = 0; i < matrix.length; i++)
    {
        for(var j = 0; j < matrix[0].length; j++)
        {
            if(i == 0)
            {
                sum += matrix[i][j]
            }
            if(i == matrix.length-1)
            {
                sum += matrix[i][j]
            }
            if(i == j )
            {
                sum += matrix[i][j]
            }
        }
    }
    for( var i = 0 ; i < matrix[0].length; i ++)
    {
        for(var j = 0; j < matrix.length; j++)
        {
            if(i == 0)
            {
                sum += matrix[j][i]
            }
            if(i == matrix[0].length -1)
            {
                sum+= matrix[j][i]
            }
        }
    }
   for(var i =  matrix.length-1,j = 0; i >= 0 ; i--,j++)
   {
        sum += matrix[i][j]
   }
   sum = sum - ( (2*matrix[0][0]) + 2*matrix[0][matrix[0].length-1] + 2*matrix[matrix.length - 1][matrix[0].length-1] + 2*matrix[matrix.length - 1][0] )
   if(matrix.length%2 != 0)
   {
       var mid = Math.ceil(matrix.length/2) -1
       sum = sum - matrix[mid][mid]
   }
  
   console.log(sum)
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






