// Time Complexity => O(logn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i++){
        let [A, B, C, K] = input_arr[i].trim().split(" ").map(Number)

        let low = 0
        let high = K
        let X_value = -1
        while(low <= high){
            let mid = Math.floor(low + ((high - low) / 2))
            if(possibility_check(A, B, C, K, mid)){
                high = mid - 1
                X_value = mid
            }
            else{
                low = mid + 1
            }
        }
        if(X_value == 0){
            console.log(-1)
        }
        else{
            console.log(X_value)
        }

        function possibility_check(A, B, C, K, X){
            let sum = (A * (X**2)) + (B * X) + C
            if(sum >= K){
                return true
            }
            else{
                return false
            }
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
2 7 6 3`)




