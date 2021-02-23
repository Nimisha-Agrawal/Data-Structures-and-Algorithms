function runProgram(input){
    let input_arr = input.trim().split(" ").map(Number)
    let [x , n] = input_arr

    function factorial(n){
        if(n <= 1){
            return 1
        }
        else{
            return n * factorial(n -1)
        }
    }
    

    function e_power_x(x, n, start){
        if(start > n){
            return 0
        }
        else{
            return ((1/factorial(start)) * (x**start)) + e_power_x(x, n, start + 1)
        }
    }
    
    let answer = e_power_x(x, n, 0).toFixed(4)
    console.log(answer)
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

runProgram(`4 2`)




