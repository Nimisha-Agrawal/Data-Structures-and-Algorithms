function runProgram(input){
    var input_arr = input.trim().split(/[\r\n]+/)
    var array = input_arr[1].split(" ")
    var product = 1;
    for(var i =0; i < array.length; i++)
    {
        array[i] = Number(array[i])
        product = product * array[i]
    }
    console.log(product)
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






