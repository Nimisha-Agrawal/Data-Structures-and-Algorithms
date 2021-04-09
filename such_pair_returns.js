// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i = i + 2){
        let [_, K] = input_arr[i].trim().split(" ").map(Number)
        let array = input_arr[i+1].trim().split(" ").map(Number).sort((a,b) => a - b)
        let flag = false
        for(let j = 0; j < array.length; j++){
            let to_find = K - array[j]
            if(includes(array, to_find, j)){
                flag = true
                console.log(1)
                break
            }
        }
        if(!flag){
            console.log(-1)
        }
    }

    function includes(array, to_find, j){
        let low = 0
        let high = array.length - 1
        while(low <= high){
            let mid = Math.floor(low + ((high - low) / 2))
            if(mid !== j && array[mid] == to_find){
                return true
            }
            else if(array[mid] > to_find){
                high = mid - 1
            }
            else{
                low = mid + 1
            }
        }
        return false
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

runProgram(`1
6 0
5 -6 5 5 3 0`)




