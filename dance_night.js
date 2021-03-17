function runProgram(input){
    var input_arr = input.trim().split("\n")
    input_arr.shift()

    for(var i = 2; i < input_arr.length; i=i+3){
        var boys_height = input_arr[i-1].trim().split(" ").map(Number)
        var girls_height = input_arr[i].trim().split(" ").map(Number)
    
        boys_height.sort((a,b) => a-b)
        girls_height.sort((a,b) => a-b)
        // console.log(boys_height)
        // console.log(girls_height)

        while(boys_height.length && girls_height.length){
            if(boys_height[0] > girls_height[0]){
                boys_height.shift()
                girls_height.shift()
            }
            else{
                girls_height.shift()
            }
        }

        if(boys_height.length == 0){
            console.log("YES")
        }
        else{
            console.log("NO")
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

runProgram(`1
8 10
124 142 130 179 117 36 191 43
89 107 41 143 65 49 47 6 91 130`)




