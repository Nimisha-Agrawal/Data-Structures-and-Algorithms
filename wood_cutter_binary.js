// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, required_wood] = input_arr[0].trim().split(" ").map(Number) 
    let array = input_arr[1].trim().split(" ").map(Number).sort((a, b) => a - b)

    let low = array[0]
    let high = array[array.length - 1]
    let height;
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(possibility_check(mid, required_wood, array)){
            height = mid
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
    console.log(height)

    function possibility_check(height, required_wood, array){
        let wood_acquired = 0
        for(let i = 0; i < array.length; i++){
            if(array[i] > height){
                wood_acquired += (array[i] - height)
            }
        }
        if(wood_acquired >= required_wood){
            return true
        }
        else{
            return false
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

runProgram(`10 153687
278419 804383 967969 592187 439110 503348 571848 334458 283028 911484`)




