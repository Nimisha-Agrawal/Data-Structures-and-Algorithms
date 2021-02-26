function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
 
    for(var i = 1; i < input_arr.length; i=i+2){
        var array = input_arr[i].trim().split(" ").map(Number)
        function sum(){
            var to_sum = array[array.length -1]
            array.pop()
            if(array.length > 0){
                return to_sum + sum() 
            }
            else{
                return to_sum 
            }
        }

        console.log(sum())
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

runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`)




