function runProgram(input){
    var i = 0
    function length(){
        if(input[i] !== undefined){
            i++
            length()
        }
        else{
            console.log(i)
            return 
        }
    }

    length()
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

runProgram(`masaischool`)




