function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var curr_order = input_arr[0].trim().split(" ").reverse()
    var ideal_order = input_arr[1].trim().split(" ")
    var answer = 0

    for(var i = curr_order.length -1; i >= 0; i--){
        if(curr_order[i] == ideal_order[0]){
            answer += 1
            ideal_order.shift()
            curr_order.pop()
        }
        else{
            while(curr_order[i] != ideal_order[0]){
                curr_order.unshift(curr_order[curr_order.length -1])
                curr_order.pop()
                answer += 1
            }
            if(curr_order[i] == ideal_order[0]){
                answer += 1
                ideal_order.shift()
                curr_order.pop()
            }
        }
    }
    
    console.log(answer)
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
3 2 1
1 3 2`)




