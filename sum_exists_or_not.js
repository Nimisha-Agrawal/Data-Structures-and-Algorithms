function runProgram(input){
    var input_arr = input.trim().split("\n")
    var [length, array, sum] = input_arr
    length = Number(length)
    sum = Number(sum)
    array = array.trim().split(" ").map(Number)
    var answer = [0]

    for(var i = 0; i < array.length; i++){
        answer.forEach((item) => {
            answer.push(item + array[i])
        }) 
    }

    // console.log(answer)
    console.log(answer.includes(sum) == true ? "yes" : "no")

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

runProgram(`6
3 34 4 12 5 2
9`)




