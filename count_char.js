function runProgram(input){
    var input = input.trim()
    var array = []
    for(var i =0; i < input.length; i++)
    {
        var count = 1
        var sub_array = []
        for(var j = i+1; j < Infinity; j++)
        {
            if(input[i] == input[j])
            {
                count += 1
                continue
            }
            else
            {
                break
            }
        }
        sub_array.push(input[i])
        sub_array.push(count)
        array.push(sub_array)
        i = j-1
    }
    var string = ""
    for(var i = 0; i < array.length; i ++)
    {
        string += array[i][0]
        string += array[i][1]
    }
    console.log(string)
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






