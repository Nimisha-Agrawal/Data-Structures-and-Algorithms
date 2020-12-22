function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var check = Number(input_arr[0].split(" ")[1])
    input_arr.shift()
    var array = input_arr[0].split(" ").map(Number)

    for(var i = 0; i < array.length-1; i++)
    {
        for(var j = 0; j < array.length-i-1; j++)
        {
            if(array[j]%check > array[j+1]%check)
            {
                var swap = array[j]
                array[j] = array[j+1]
                array[j+1] = swap
            }
        }
    }
    var sorted_string = array.join(" ")
    console.log(sorted_string)
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






