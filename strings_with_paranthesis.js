// Time Complexity => O(n)
// Space Complexity => O(n)
function runProgram(input){
    let string = input.trim()

    let stack = []
    let is_balanced = true
    for(let i = 0; i < string.length; i++){
        if(string[i] == "(" || string[i] == "[" || string[i] == "{"){
            stack.push(string[i])
        }
        else if(string[i] == ")" || string[i] == "}" || string[i] == "]"){
            if(string[i] == ")" &&   stack[stack.length - 1] == "("){
              stack.pop()
            } 
            else if (string[i] == "]" && stack[stack.length - 1] == "["){
                stack.pop()
            } 
            else if (string[i] == "}" && stack[stack.length - 1] == "{"){
                stack.pop()
            }
            else{
                is_balanced = false
                break 
            }
        }
    }

    if(stack.length == 0 && is_balanced){
        console.log("balanced")
    }
    else{
        console.log("unbalanced")
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

runProgram(`[()]{}{[()()]()}`)




