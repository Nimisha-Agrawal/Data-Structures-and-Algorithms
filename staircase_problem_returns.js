function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()

    for(var i = 1; i < input_arr.length; i = i+2){
        var no_steps = Number(input_arr[i-1])
        var array = input_arr[i].trim().split(" ").map(Number)
        var min = no_steps
        // console.log(min)

        function least_steps(current_position, no_moves){
            // console.log(current_position + " " + no_moves)
            if(current_position > no_steps){
                return 
            }
            else if(current_position < no_moves ){
                return
            }
            else if(current_position == no_steps){
                // console.log(min)
                if(no_moves < min){
                    min = no_moves 
                }
                return
            }
            return least_steps(current_position + 1, no_moves + 1) + least_steps(current_position + array[current_position], no_moves + 1)
        }

        least_steps(0, 0)
        console.log(min)
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

// runProgram(`1
// 5
// 1 -4 -2 5 -2`)

// runProgram(`1
// 6
// -1 2 1 3 -3 3`)

runProgram(`3
10
-9 8 -10 -5 3 -3 -5 3 4 1
5
1 -4 -2 5 -2
10
-3 -5 -8 5 10 -10 6 7 10 -6`)




