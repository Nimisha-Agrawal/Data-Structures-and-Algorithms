function runProgram(input){
    input = input.trim().split(/[\r\n]+/)
    input.shift()
    var array = input[0].split(" ").map(Number)
    for(var i = 0; i < array.length; i++)
    {
        var min = i
        for(var j = i+1; j < array.length; j++ )
        {
            if(array[min] > array[j])
            {
                min = j
            }
        }
        var swap = array[i]
        array[i] = array[min]
        array[min] = swap
    }
    array = array.join(" ")
    console.log(array)
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






