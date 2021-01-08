function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_testcase = Number(input_arr[0])
    input_arr.shift()
    var k = 0

    for(var i = 0 ; i < no_testcase; i++)
    {
        var row = Number(input_arr[k].split(" "))
        var matrix = []
        for(var j = k+1; j <= k+row; j++)
        {
            matrix.push(input_arr[j].trim().split(" "))
        }
        diagonal_transfer(matrix)
        k = k + row + 1 
    }

    function diagonal_transfer(array)
    {
        for(var i = 0; i < array[0].length; i++)
        {
            var new_row = []
            for(var j = 0; j < array.length; j++)
            {
                new_row.push(array[j][i])
            }
            console.log(new_row.join(" "))
        }
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

runProgram(`2
3
1 2 3
4 5 6
7 8 9
4
2 3 5 6
4 5 7 9
8 6 4 9
1 3 5 6`)




