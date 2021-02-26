function runProgram(input){
    var input_arr = input.trim().split("\n").map(Number)
    var array = []

    for(var i = 0 ; i < input_arr.length; i++){
        if(input_arr[i] == -1){
            break
        }
        else{
            array.push(input_arr[i])
        }
    }

    function reverse(length){
        if(length >= 0){
            console.log(array[length])
            reverse(length - 1)
        }
        else{
            return
        }
    }

    reverse(array.length -1)
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

runProgram(`1
2
3
4
-1`)




