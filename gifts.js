// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")
    // console.log(input_arr)

    for(let i = 1; i < input_arr.length; i+=2){
        let n = Number(input_arr[i])
        let array = input_arr[i+1].trim().split(" ").map(Number)

        let longest_length = 0
        for(let j = 0; j < array.length; j++){
            let sub_arr = {}
            for(let k = j; k < array.length; k++){
                if(sub_arr[array[k]] == undefined){
                    sub_arr[array[k]] = 1
                }
                else{
                    break
                }
            }
            if(longest_length < Object.keys(sub_arr).length){
                longest_length = Object.keys(sub_arr).length
            }
            if(longest_length >= array.length - j + 1){
                break
            }
        }

        console.log(longest_length)
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
8
1 2 1 3 2 7 4 2
5
1 2 1 3 4
4
1 2 2 1`)




