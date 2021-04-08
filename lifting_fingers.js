// Time Complexity => O(n)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr =  input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i++){
        let string = input_arr[i].trim()
        let lift_count = 0

        for(let i = 0; i < string.length; i++){
            lift_count++
            while(string[i] == string[i+1]){
                i++
            } 
        }

        console.log(lift_count)
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
aaaaa
abbbaaz`)