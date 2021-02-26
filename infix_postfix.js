function runProgram(input){
    function precendence_value(operator){
        if (operator == "^"){
            return 3
        }
        else if(operator == "*" || operator == "/"){
            return 2
        }
        else if(operator == "+" || operator == "-"){
            return 1
        }
        else{
            return -1
        }
    }

    var operators = ["+", "-", "*", "/", "^", "(", ")"]
    var postfix = ""
    var stack = []
    var stack1 = []
    for(var i = 0; i < input.length ; i++){
        if( operators.includes(input[i]) ){
            if(input[i] == ")"){
                while(stack1.length > 0 && precendence_value(stack1[stack1.length -1]) >= precendence_value(input[i])){
                    if(stack1[stack1.length -1] != "("){
                        postfix += stack1[stack1.length -1]
                    }
                    stack1.pop()
                }
            }
            else if(input[i] == "("){
                stack1.push(input[i])
            }
            else if(stack1.includes("(")){
                while(stack1.length > 0 && precendence_value(stack1[stack1.length -1]) >= precendence_value(input[i])){
                    postfix += stack1[stack1.length -1]
                    stack1.pop()
                }
                stack1.push(input[i])
            }
            else if(input[i] != "(" || input[i] != ")"){
                while(stack.length > 0 && precendence_value(stack[stack.length -1]) >= precendence_value(input[i])){
                        postfix += stack[stack.length -1]
                        stack.pop()
                }
                stack.push(input[i])
            }
        }
        else{
            postfix += input[i]
        }
    }
    while(stack.length > 0){
        postfix += stack[stack.length -1]
        stack.pop()
    }

    console.log(postfix)
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

runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`)




