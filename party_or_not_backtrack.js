function runProgram(input){
    var input_arr = input.trim().split("\n")
    var [N, C, R] = input_arr[0].trim().split(" ").map(Number)
    var array = input_arr[1].trim().split(" ").map(Number)
    var flag = false

    function subsequence(array, start, answer){
        if(start == array.length){
            if(answer.length == C && answer.reduce((acc, item) => acc + item, 0) <= R){
                console.log(answer)
                flag = true
            }
            return
        }
        if(flag == true){
            return
        }
        subsequence(array, start + 1, [...answer])
        answer.push(array[start])
        subsequence(array, start +1, [...answer])
    }

    
    subsequence(array, 0, [])
    
    if(flag){
        console.log("Party")
    }
    else{
        console.log("Sad")
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

runProgram(`5 3 24
6 4 21 20 13`)




