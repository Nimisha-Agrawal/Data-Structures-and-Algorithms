function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var check = input_arr[0].split(" ").map(Number)[1]
    var array = input_arr[1].split(" ").map(Number)
    for(var i = 0; i < array.length-1; i++)
    {
        for(var j = 0; j < array.length-1-i; j++)
        {
            if(array[j]%check > array[j+1]%check)
            {
                var swap = array[j]
                array[j] = array[j+1]
                array[j+1] = swap
            }
        }
    }
    var string = array.join(" ")
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






