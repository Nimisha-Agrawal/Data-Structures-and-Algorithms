// Time Complexity => O(logn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i++){
        let [N, K] = input_arr[i].trim().split(" ").map(Number)

        let low = 0
        let high = 100000
        let minimum_height;
        while(high >= low){
            let mid = Math.floor(low + ((high - low) / 2))
            if(possibility_check(mid, N, K)){
                high = mid - 1
                minimum_height = mid
            }
            else{
                low = mid + 1
            }
        }
        console.log(minimum_height)
    }

    function possibility_check(height_assum, N, K){
        let total = 0
        let i = 0
        while(Math.floor(height_assum / (K ** i)) !== 0){
            total += Math.floor(height_assum / (K ** i))
            i++
        }

        if(total >= N){
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

runProgram(`2
1 9
59 9`)




