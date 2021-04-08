// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, to_find] = input_arr[0].trim().split(" ").map(Number)
    let array = input_arr[1].trim().split(" ").map(Number)

    let high = array.length -1
    let low = 0
    while(low <= high){
        let mid = Math.floor(low + (high - low)/2)
        if(array[mid] == to_find){
            console.log(1)
            return
        }
        else if(to_find > array[mid]){
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
    console.log(-1)
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

runProgram(`5 1
2 -2 0 3 4`)




