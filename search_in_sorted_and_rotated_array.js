// Time Complexity => O(logn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, to_find] = input_arr[0].trim().split(" ").map(Number)
    let array = input_arr[1].trim().split(" ").map(Number)

    let low = 0
    let high = array.length - 1
    let first_no_index = 0
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(array[mid] < array[first_no_index]){
            first_no_index = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    
    low = 0
    high = first_no_index - 1
    let to_find_index = -1
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(array[mid] == to_find){
            to_find_index = mid
            break
        }
        else if(to_find < array[mid]){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }

    if(to_find_index == -1){
        low = first_no_index
        high = array.length - 1
        while(low <= high){
            let mid = Math.floor(low + ((high - low) / 2))
            if(array[mid] == to_find){
                to_find_index = mid
                break
            }
            else if(to_find < array[mid]){
                high = mid - 1
            }
            else{
                low = mid + 1
            }
        }
    }

    console.log(to_find_index)
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

runProgram(`30 -9
3 6 7 8 9 10 11 13 14 15 16 17 20 22 23 24 25 26 27 28 -9 -8 -7 -6 -5 -4 -3 -1 1 2`)




