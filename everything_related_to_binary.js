// Time Complexity => O(logn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let array = input_arr[1].trim().split(" ").map(Number)
    let key = Number(input_arr[2].trim())

    let low = 0
    let high = array.length - 1
    let low_index = -1
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(array[mid] == key){
            low_index = mid
            high = mid - 1
        }
        else if(key < array[mid]){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }


    low = 0
    high = array.length - 1
    let high_index = -1
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(key == array[mid]){
            high_index = mid
            low = mid + 1
        }
        else if(key < array[mid]){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }

    if(low_index == -1){
        console.log("-1 -1 0")
    }
    else{
        let count = high_index - low_index + 1
        console.log(`${low_index} ${high_index} ${count}`)
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

runProgram(`6
1 1 1 2 2 2	
1`)




