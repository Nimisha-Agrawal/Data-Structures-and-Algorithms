function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr[0].split(" ").map(Number)

    function product(){
        var to_multiply = array[array.length -1]
        array.pop()
        if(array.length > 0){
            return to_multiply * product()
        }
        else{
            return to_multiply
        }
    }

    console.log(product())
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

runProgram(`5
3 5 2 9 4`)




