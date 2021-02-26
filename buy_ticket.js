function runProgram(input){
    var input_arr = input.trim().split("\n")
    var length = Number(input_arr[0])
    input_arr.shift()
    var queue = []

    for(var i = 0; i < length; i++){
        var element = input_arr[i].split(" ")
        if(element[0] == "E"){
            queue.push(element[1])
            console.log(queue.length)
        }
        else{
            if(queue.length == 0){
                console.log(`-1 ${queue.length}`)
            }
            else{
                var left = queue.shift()
                console.log(`${left} ${queue.length}`)
            }
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

runProgram(`10
D
D
E 51
E 64
E 44
D
E 54
E 74
D
E 47`)




