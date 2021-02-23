function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()

    for(var i = 1; i < input_arr.length; i = i+2){
        var string = input_arr[i]
        var encrypted_string = ""

        function encryption(string){
            if(string.length > 2){
                var mid_index = string.length%2 == 0 ? Math.floor((string.length-1)/2) : Math.floor(string.length/2)
                encrypted_string += string[mid_index]

                var left_string = string.slice(0, mid_index)
                var right_string = string.slice(mid_index+1)
                encryption(left_string)
                encryption(right_string)
            }
            else{
                encrypted_string += string
                return
            }
        }
        
        encryption(string)
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




