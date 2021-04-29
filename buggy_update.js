// Time Complexity => O(1)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i = i + 2){
        let current = input_arr[i].trim().split(".").map(Number)
        let rolled = input_arr[i+1].trim().split(".").map(Number)

        if(rolled[0] > current[0]){
            console.log("True")
        }
        else if(rolled[0] == current[0]){
            if(rolled[1] > current[1]){
                console.log("True")
            }
            else if(rolled[1] == current[1]){
                if(rolled[2] > current[2]){
                    console.log("True")
                }
                else if(rolled[2] == current[2]){
                    console.log("True")
                }
                else{
                    console.log("False")
                }
            }
            else{
                console.log("False")
            }
        }
        else{
            console.log("False")
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

runProgram(`3
2.0.1
1.9.8
12.0.1
12.10.0
1.1.10
1.1.12`)



