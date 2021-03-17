function runProgram(input){
    var input_arr = input.trim().split("\n")
    var [to_move, _] = input_arr[0].trim().split(" ").map(Number)
    var truck_capacity = input_arr[1].trim().split(" ").map(Number)

    function no_ways(N){
        if(N == 0){
            return 1
        }
        else if(N < 0){
            return 0
        }
        else{
            var output = 0
            truck_capacity.forEach((item) => {
                output += no_ways(N - item)
            })
            return output
        }
    }

    console.log(no_ways(to_move))
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

runProgram(`3 3
1 2 3`)




