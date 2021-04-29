// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number)
    let min = Infinity
    possible_ways(array, 0, 0, 0)
    console.log(min)

    function possible_ways(array, pointer, sum, steps){
        if(pointer >= array.length){
            if(min > steps){
                min = steps
            }
            return
        }
        else{ 
            for(let i = 1; i <= array[pointer]; i++){
                possible_ways(array, pointer + i, sum + i, steps + 1)
            }
        }
    }
}
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/,"")
//    runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/,"")
//     runProgram(read);
//     process.exit(0);
// });

runProgram(`15
3 1 2 3 2 2 3 5 12 6 5 7 11 6 5`)