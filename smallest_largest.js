function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var array = input_arr[1].split(" ")
    var small = Number(array[0])
    var large = Number(array[0])
    for(var i = 0; i < array.length; i++)
    {
        array[i] = Number(array[i])
        if(array[i] < small)
        {
            small = array[i]
        }
        if(array[i] > large)
        {
            large = array[i]
        }
    }
    console.log(small + "\n" + large)
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






