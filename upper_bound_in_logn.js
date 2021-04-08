// Time Complexity => O(logn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, k] = input_arr[0].trim().split(" ").map(Number)
    let array = input_arr[1].trim().split(" ").map(Number)

    let low = 0
    let high = array.length - 1
    let last_occ;
    while(low <= high){
        let mid = Math.floor(low + ((high - low)/2))
        // console.log(mid)
        if(array[mid] == k){
            last_occ = mid + 1
            low = mid + 1
        }
        else if(k < array[mid]){
            high = mid - 1
            last_occ = mid
        }
        else{
            low = mid + 1
        }
    }

    console.log(last_occ)
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

runProgram(`10 3
0 2 4 4 5 5 7 7 9 10`)

// runProgram(`10 4
// 0 2 4 4 5 5 7 7 9 10`)




