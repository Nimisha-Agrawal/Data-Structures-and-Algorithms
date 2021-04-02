// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")

    // console.log(input_arr)

    for(let i = 1; i < input_arr.length; i++){
        let n = Number(input_arr[i])
        let x = Number(input_arr[i+1])
        let y = Number(input_arr[i+2])
        let current = []
        let required = []
        for(let j = i+3; j <= i+2+n; j++){
            let array = input_arr[j].trim().split(" ").map(Number)
            current.push(array[0])
            required.push(array[1])
        }
        // console.log(current)
        current = current.sort((a,b) => a - b)
        required = required.sort((a,b) => a - b)

        let effort = 0
        for(let j = 0; j < current.length; j++){
            if(current[j] < required[j]){
                effort += (required[j] - current[j]) * x
            }
            else{
                effort += (current[j] - required[j]) * y
            }
        }
        
        console.log(effort)
        
        i = i + 2 + Number(input_arr[i])
        // console.log(i)
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

runProgram(`50
5
13
17
1740 9488
2455 1711
5276 1423
2216 8576
1892 7954
5
13
17
3123 3411
3874 2779
3198 6502
8602 4865
9006 1389`)




