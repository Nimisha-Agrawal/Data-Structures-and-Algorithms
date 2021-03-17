function runProgram(input){
    var input_arr = input.trim().split("\n")
    var array = input_arr[1].trim().split(" ").map(Number)
    var count = 0
    
    function odd_total_sub_sequence(array, start_index, answer){
        if(start_index == array.length){
            var sum = answer.reduce((acc, item) => acc + item, 0)
            if(sum%2 != 0){
                count ++
            }
            return
        }
        
        answer.push(array[start_index]) 
        odd_total_sub_sequence(array, start_index + 1, answer)
        answer.pop()
        odd_total_sub_sequence(array, start_index + 1, answer )
    }

    odd_total_sub_sequence(array, 0, [])
    console.log(count)
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
1 2 3`)




