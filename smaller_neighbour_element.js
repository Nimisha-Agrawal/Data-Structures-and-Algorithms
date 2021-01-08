function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr[0].split(" ").map(Number)
    var result_array = []
    var small = 0

    for(var i = array.length-1; i >= 0; i--)
    {
        var flag = false
        for(var j = i-1; j >= 0; j--)
        {
            if(array[j] < array[i])
            {
                result_array.unshift(array[j])
                flag = true
                break
            }
        }
        if(!flag)
        {
            result_array.unshift("-1")
        }
    }
    var result = result_array.join(" ")
    console.log(result)
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

runProgram(`8
39 27 11 4 24 32 32 1`)



