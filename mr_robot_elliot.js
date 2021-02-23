function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()

    for(var i = 1; i < input_arr.length; i = i+2){
        var string = input_arr[i]
        var encrypted_string = ""
        function encrypt(string){
            if(string.length > 2){
                var mid_index = Math.floor((string.length-1)/2)
                encrypted_string += string[mid_index]
                var left = string.slice(0, mid_index)
                var right = string.slice(mid_index+1)
                // console.log(left)
                // console.log(right)
                encrypt(left)
                encrypt(right)
            }
            else{
                encrypted_string += string
            }
        }

        encrypt(string)
        console.log(encrypted_string)
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
abc
4
abcd`)




