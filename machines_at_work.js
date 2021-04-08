// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, to_produce] = input_arr[0].trim().split(" ").map(Number)
    let mc_days_per_unit = input_arr[1].trim().split(" ").map(Number).sort((a, b) => a - b)

    let low = 0
    let high = mc_days_per_unit[mc_days_per_unit.length - 1] * to_produce
    let days_required;
    while(low <= high){
        let mid = Math.floor(low + ((high - low) / 2))
        if(possibility_check(mc_days_per_unit, mid, to_produce)){
            days_required = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }
    console.log(days_required)
    

    function possibility_check(array, days, to_produce){
        let produced = 0
        for(let i = 0; i < array.length; i++){
            if(days >= array[i]){
                produced += Math.floor(days/array[i])
            }
        }
        if(produced >= to_produce){
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

runProgram(`2 10
2 3 2`)



