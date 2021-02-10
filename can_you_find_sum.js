function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr[0].trim().split(" ").map(Number)
    var stack1 = []
    var nextGreater = []
    var stack2 = []
    var prevGreater = []

    for(let i = 0; i < array.length; i++){
        while(stack1.length > 0 && array[stack1[stack1.length -1]] <= array[i]){
            stack1.pop()
        }
        if(stack1.length == 0){
            prevGreater.push(-1)
        }
        else{
            prevGreater.push(stack1[stack1.length -1] + 1)
        }
        stack1.push(i)
    }

    for(let i = array.length -1 ; i >= 0; i--){
        while(stack2.length > 0 && array[stack2[stack2.length -1]] <= array[i]){
            stack2.pop()
        }
        if(stack2.length == 0){
            nextGreater.push(-1)
        }
        else{
            nextGreater.push(stack2[stack2.length -1] + 1)
        }
        stack2.push(i)
    }

    nextGreater = nextGreater.reverse()

    var answer = []
    for(let i = 0; i < prevGreater.length; i++){
        answer.push(prevGreater[i] + nextGreater[i])
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

runProgram(`10
1 2 3 4 5 6 2 9 7 8`)


