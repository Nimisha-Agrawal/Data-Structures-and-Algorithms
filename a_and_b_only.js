// Time Complexity => O(n)
// Space Complexity => O(1)
function runProgram(input){
    input = input.trim().split("")

    for(let i = 0; i < input.length; i++){
        if(input[i] == "?"){
            if((input[i-1] == "b" || input[i - 1] == undefined) 
            && (input[i + 1] == "b" || input[i + 1] == undefined || input[i + 1] == "?")){
                input[i] = "a"
            }
            else{
                input[i] = "b" 
            }
        }
    }

    console.log(input.join(""))
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

runProgram(`?b??b`)




