// Time Complexity => O(n)
// Space Complexity => O(1)
function runProgram(input){
    let input_arr = input.trim().split("\n")

    for(let i = 1; i < input_arr.length; i++){
        let string = input_arr[i].trim()

        let string_head = ""
        let string_tail = ""
        for(let j = 0 ; j < string.length; j++){
            if(string[j] == "a" 
            || string[j] == "e"
            || string[j] == "i"
            || string[j] == "o"
            || string[j] == "u"){
                string_head += string[j]
            }
            else{
                string_tail += string[j]
            }
        }

        console.log(string_head + string_tail)
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

runProgram(`4
eio
masaischool
ubcdefghioel
rhythm`)



