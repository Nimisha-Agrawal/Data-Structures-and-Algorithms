function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()

    for(var i = 1; i < input_arr.length; i=i+2){
        var test_case = input_arr[i].trim().split(" ").map(Number)
        var next_greater = []
        var stack1 = []
        var next_smaler = []
        var stack2 = []

        for(var j = test_case.length -1; j >= 0 ; j--){
            while(stack1.length > 0 && test_case[stack1[stack1.length -1]] <= test_case[j]){
                stack1.pop()
            }
            if(stack1.length == 0){
                next_greater.push(-1)
            }
            else{
                next_greater.push(stack1[stack1.length -1])
            }
            stack1.push(j)

            while(stack2.length > 0 && stack2[stack2.length -1] >= test_case[j]){
                stack2.pop()
            }
            if(stack2.length == 0){
                next_smaler.push(-1)
            }
            else{
                next_smaler.push(stack2[stack2.length -1])
            }
            stack2.push(test_case[j])
        }
        next_smaler = next_smaler.reverse()
        next_greater = next_greater.reverse()

        var answer = 0
        for(var k = 0; k < next_smaler.length; k++){
            if(next_greater[k] == -1){
                answer += -1
            }
            else{
                answer += next_smaler[next_greater[k]]
            }
        }
        console.log(answer)

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
6
5 1 6 2 5 1`)




