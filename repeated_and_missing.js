// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i += 2){
        let n = Number(input_arr[i])
        let array = input_arr[i+1].trim().split(" ").map(Number).sort((a,b) => a - b)

        let total_sum = 1
        let current_sum = array[0]
        let prev = array[0]
        let repeating_ele;
        for(let j = 1; j < array.length; j++){
            if(prev == array[j]){
                repeating_ele = prev
            }
            current_sum += array[j]
            total_sum += j+1
            prev = array[j]
        }
        let missing_num = total_sum - (current_sum  - repeating_ele)
        console.log(missing_num, repeating_ele)
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

runProgram(`3
5
1 2 3 3 4
2
1 1
3
1 2 2`)




