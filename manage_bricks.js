// Time Complexity => O(n)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number)
    
    let no_bricks = array.length
    let i = 1
    let count = 0
    while(no_bricks > 0){
        if((no_bricks - i) > 0){
            no_bricks = no_bricks - i
            i++
            count++
        }
        else{
            break
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

runProgram(`4
40 100 20 30`)




