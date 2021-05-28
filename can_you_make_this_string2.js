// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i+=2){
        let str1 = input_arr[i].trim()
        let str2 = input_arr[i+1].trim()

        if(str2.length % str1.length == 0){
            let no_times = str2.length/str1.length
            for(let j = 0; j < no_times; j++){
                str2 = str2.split(str1).join("").trim()
            }
            if(str2.length == 0){
                console.log("Yes")
            }
            else{
                console.log("No")
            }
        }
        else{
            console.log("No")
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
aac
aaabab
abcdef
abcdef
abcxyz
abcxyababcxyzcxyzzabcxyz`)




