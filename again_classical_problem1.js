function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()

    for(let i = 0; i < no_tc; i++){
        var string = input_arr[i]
        if(string.length%2 == 0){
            var stack = []
            var opening = ["{", "[" , "("]
            var closing = ["}", "]", ")"]
            var flag = false
            for(let j = 0; j < string.length; j++){
                if(opening.includes(string[j]) ){
                    stack.push(string[j])
                    flag = true
                }
                else{
                    var index = opening.indexOf(stack[stack.length - 1])
                    if(string[j] == closing[index]){
                        stack.pop()
                    }
                }
            }
            if(stack.length == 0 && flag){
                console.log("balanced")
            }
            else{
                console.log("not balanced")
            }
        }
        else{
            console.log("not balanced")
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
)))
`)


