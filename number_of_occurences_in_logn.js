// Time Complexity => O(logn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, K] = input_arr[0].trim().split(" ").map(Number)
    let array = input_arr[1].trim().split(" ").map(Number)

    let low = 0;
    let high = array.length - 1
    let upper;
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(array[mid] == K){
            upper = mid
            low = mid + 1
        }
        else if(K < array[mid]){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }

    low = 0
    high = array.length - 1
    let lower;
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(array[mid] == K){
            lower = mid
            high = mid - 1
        }
        else if(K < array[mid]){
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }

    if(upper !== undefined && lower !== undefined){
        let no_times = upper - lower + 1
        console.log(no_times)
    }
    else{
        console.log(no_times)
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

runProgram(`6 3
2 3 3 3 6 9`)




