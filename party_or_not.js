function runProgram(input){
    var input_arr = input.trim().split("\n")
    var [N, C, R] = input_arr[0].trim().split(" ").map(Number)
    var array = input_arr[1].trim().split(" ").map(Number)
    var output = [[]]

    for(var i = 0; i < array.length; i++){
        output.forEach(item => {
            output.push([...item,  array[i]])
        })
    }

    for(var i = 0; i < output.length; i++){
        if(output[i].length == C){
            var total = output[i].reduce((acc, i) => acc + i, 0)
            if(total <= R){
                console.log("Party")
                return
            }
        }
    }
    console.log("Sad")

    // console.log(output)
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




