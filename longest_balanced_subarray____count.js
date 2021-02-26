function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()
    var array = input_arr[0].trim().split(" ").map(Number)

    // console.log(array)
    var openBracket = []
    var count = 0
    for(var i = 0; i < array.length; i++){
        if(array[i] > 0){
            openBracket.push(array[i])
        }
        else if(openBracket.length > 0 && array[i] < 0){
            if(array[i] == -openBracket[openBracket.length -1]){
                openBracket.pop()
                count += 2
            }
            else{
                break
            }
        }
        else{
            continue
        }
    }
    console.log(count)
    
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

runProgram(`5
1 -1 2 3 -3 -2 2 -3`)




