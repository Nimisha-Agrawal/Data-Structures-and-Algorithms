// Time Complexity => O(logn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [n, k] = input_arr[0].trim().split(" ").map(Number)
    let array = input_arr[1].trim().split(" ").map(Number)

    let start_index = 0
    let end_index = 0
    let low = 0
    let high = array.length -1
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(array[mid] < k){
            low = mid + 1
        }
        else if(array[mid] > k){
            high = mid -1
        }
        else{
            start_index = mid
            high = mid - 1
        }
    }

    low = 0
    high = array.length -1
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(array[mid] < k){
            low = mid + 1
        }
        else if(array[mid] > k){
            high = mid -1
        }
        else{
            end_index = mid
            low = mid + 1
        }
    }

    console.log(end_index - start_index + 1)
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

runProgram(`6 3
2 3 3 3 6 9`)




