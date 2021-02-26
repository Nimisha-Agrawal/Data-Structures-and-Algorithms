function runProgram(input){
    var string = input.trim()
    var open_bracket = ["(", "[", "{"]
    var close_bracket = [")", "]", "}"]
    var stack = []

    for(var i = 0; i < string.length; i++){
        if(open_bracket.includes(string[i])){
            stack.push(string[i])
        }
        else if(close_bracket.includes(string[i])){
            var index = close_bracket.indexOf(string[i])
            if(stack.length > 0 && stack[stack.length -1] == open_bracket[index]){
                stack.pop()
            }
            else{
                break
            }
        }
    }
    if(stack.length == 0){
        console.log("balanced")
    }
    else{
        console.log("unbalanced")
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

runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`)




