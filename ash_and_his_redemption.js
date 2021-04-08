// Time Complexity => O(nlogn)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i = i+3){
        let ash = input_arr[i+1].trim().split(" ").map(Number).sort((a,b) => a - b)
        let gary = input_arr[i+2].trim().split(" ").map(Number).sort((a,b) => a - b)

        // console.log(ash)
        // console.log(gary)
        let flag = true
        for(let j = 0; j < ash.length; j++){
            if(ash[j] > gary[j]){
                continue
            }
            else{
                flag = false
                break
            }
        }
        if(flag){
            console.log("Ash Finally Wins")
        }
        else{
            console.log("Train Hard Again")
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
3
12 3 4
5 4 1
2
1 5
1 4`)