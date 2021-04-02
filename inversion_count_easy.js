function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()

    for(var i = 1; i < input_arr.length; i= i+2){
        var array = input_arr[i].trim().split(" ").map(Number)
        var inversion_count_array = []
        for(var j = 0; j < array.length; j++){
            count = 0
            for(var k = j+1; k < array.length; k++){
                if(array[k] < array[j]){
                    count ++
                }
            }
            inversion_count_array.push(count)
        }
        console.log(inversion_count_array.join(" "))
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

runProgram(`1
4
5 2 6 1`)




