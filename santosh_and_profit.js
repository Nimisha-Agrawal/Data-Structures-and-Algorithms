function runProgram(input){
    let input_arr = input.trim().split("\n").map(Number)
    input_arr.shift()

    for(let i = 0; i < input_arr.length ; i++){
        console.log(no_of_ways(input_arr[i]))
    }

    function no_of_ways(N){
        if( N == 0){
            return 1
        }
        else if ( N < 0){
            return 0
        }
        else{
            return no_of_ways(N - 4) + no_of_ways(N - 8)
        }
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
12`)




