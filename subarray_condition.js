function runProgram(input){
    var array = input.trim().split(" ").map(Number)

    for(var i = 0; i < array.length; i++)
    {
        var substring = []
        for(var j = i; j < array.length; j++)
        {
            substring.push(array[j])
            substring_check(substring, i, j)
        }
    }

    function  substring_check (string, startIndex, endIndex) {
        var substring_sum = string.reduce((a,e) => {
            return a+e
        },0)

        if(substring_sum == 0)
        {
            console.log(startIndex, endIndex)
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

runProgram(`8 -9 3 5 -10 -4 -1 8 7 -1`)




