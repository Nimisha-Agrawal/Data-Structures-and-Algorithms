// Time Complexity => O()
// Space Complexity => O()
function runProgram(input){
    let input_arr = input.trim().split("\n")
    
    for(let i = 1; i < input_arr.length; i += 2){
        var n = Number(input_arr[i])
        var array = input_arr[i+1].trim().split(" ")
        
        var mid = Math.ceil(n/2)
        var left = array.slice(0, mid)
        var right = array.slice(mid)

        // console.log(left)
        // console.log(right)

        var decrypt = ""
        for(var j = 0, k = right.length - 1; j < left.length; j++, k--){
            if(left.length == right.length){
                decrypt += left[j] + " "
                decrypt += right[k] + " "
            }
            else{
                if(j == left.length -1){
                    decrypt += left[j] + " "
                }
                else{
                    decrypt += left[j] + " "
                    decrypt += right[k] + " "
                }
            }
        }

        console.log(decrypt.trim())
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
5
1 3 5 4 2
6
1 3 5 6 4 2`)




