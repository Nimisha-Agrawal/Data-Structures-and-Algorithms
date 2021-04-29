// Time Complexity => O(n)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i = i + 2){
        let [_, max] = input_arr[i].trim().split(" ").map(Number)
        let array = input_arr[i+1].trim().split(" ").map(Number)

        let max_value = array.reduce((acc, i) => acc + i, 0)
        if(max_value > max){
            console.log(max)
        }
        else{
            console.log(max_value)
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

runProgram(`2
4 10
1 2 3 4
4 5
1 2 3 4`)



