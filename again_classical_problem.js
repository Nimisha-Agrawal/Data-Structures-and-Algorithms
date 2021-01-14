function runProgram(input){
    var input_arr = input.trim().split("\n")
    var no_tc = Number(input_arr[0])
    input_arr.shift()

    for(var i = 0; i < no_tc; i++)
    {
        var givenStack = input_arr[i].trim().split("")
        var supportStack = []
        var flag = false
        if(givenStack.length%2 == 0){
           for(var j = 0; j < givenStack.length; j++)
           {
               if(givenStack[j] == "(" || givenStack[j] == "{" || givenStack[j] == "["){
                    supportStack.push(givenStack[j])
                    flag = true
               }
               else{
                    if( (supportStack[supportStack.length -1] == "{" && givenStack[j] == "}")
                    || (supportStack[supportStack.length -1] == "[" && givenStack[j] == "]")
                    ||(supportStack[supportStack.length -1] == "(" && givenStack[j] == ")")){
                        supportStack.pop()
                    }
               }
           }
           if(flag &&supportStack.length == 0){
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

runProgram(`3
{([])}
()
([]`)



