// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")
    let [_, to_find] = input_arr[0].trim().split(" ").map(Number)
    let array = input_arr[1].trim().split(" ").map(Number).sort((a,b) => a - b)
    search(to_find, array, 0, array.length - 1)

    function search(to_find, array, low, high){
        if(low <= high){
            let mid = Math.floor(low + ((high - low) / 2))
            if(to_find == array[mid]){
                console.log(1)
                return
            }
            else if(to_find < array[mid]){
                return search(to_find, array, low, mid - 1)            
            }
            else{
                return search(to_find, array, mid + 1, high)
            }
        }
        else{
            console.log(-1)
            return
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

runProgram(`5 1
2 -2 0 3 4`)




