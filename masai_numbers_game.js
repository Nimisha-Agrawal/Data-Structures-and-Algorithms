function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr.map(Number)

    var nextGreater = []
    var stack1 = []
    var nextSmaller = []
    var stack2 = []

    for(let i = array.length-1; i >= 0 ; i--){
        while(stack1.length > 0 && array[stack1[stack1.length-1]] <= array[i] ){
            stack1.pop()
        }
        if(stack1.length == 0){
            nextGreater.push(-1)
        }
        else{
            nextGreater.push(stack1[stack1.length -1])
        }
        stack1.push(i)

        while(stack2.length > 0 && stack2[stack2.length -1] >= array[i]){
            stack2.pop()
        }
        if(stack2.length == 0){
            nextSmaller.push(-1)
        }
        else{
            nextSmaller.push(stack2[stack2.length-1])
        }
        stack2.push(array[i])
    }
    nextGreater = nextGreater.reverse()
    nextSmaller = nextSmaller.reverse()

    var answer = []
    for(let i = 0; i < nextGreater.length ; i++){
        if(nextGreater[i] == -1){
            answer.push(-1)
        }
        else{
            answer.push(nextSmaller[nextGreater[i]])
        }
    }

    console.log(answer.join(" "))

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

runProgram(`8
3
7
1
7
8
4
5
2`)




