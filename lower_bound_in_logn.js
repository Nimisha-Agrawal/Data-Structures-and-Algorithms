// Time Complexity => O(logn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, k] = input_arr[0].trim().split(" ").map(Number)
    let array = input_arr[1].trim().split(" ").map(Number)

    let low = 0
    let high = array.length - 1
    let first_occ = -1
    
    while(low <= high){
        let mid = Math.floor(low + ((high - low)/2))
        if(array[mid] == k){
            first_occ = mid
            high = mid - 1
        }
        else if(k < array[mid]){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }

    console.log(first_occ)
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

runProgram(`5 3
1 1 2 2 5`)




